import Contact from '../models/Contact.js';
import transporter from '../config/mail.js';
import { contactInquiryTemplate } from '../utils/mailTemplates.js';

// @desc    Submit contact form (Public)
// @route   POST /api/contact
export const submitContact = async (req, res, next) => {
  try {
    const { name, email, company, projectType, message } = req.body;

    // Save to database
    const newContact = await Contact.create({
      name,
      email,
      company,
      projectType,
      message,
    });

    // Send email using Nodemailer if transporter is configured
    if (transporter) {
      const { text, html } = contactInquiryTemplate({ name, email, company, projectType, message });
      
      const mailOptions = {
        from: `"Portfolio Core" <${process.env.EMAIL_USER}>`,
        to: 'gowrir559@gmail.com',
        subject: 'New Portfolio Inquiry',
        text,
        html,
      };

      try {
        await transporter.sendMail(mailOptions);
        console.log(`[SYS] Mail notification delivered successfully for contact ${newContact._id}`);
      } catch (mailError) {
        console.error(`[SYS] Nodemailer failed to send email: ${mailError.message}`);
        // We still return success to the user as their message is securely saved in DB
      }
    } else {
      console.log('[SYS] Email transporter not configured. Message logged locally in database.');
    }

    res.status(201).json({
      status: 'success',
      message: 'Message Delivered Successfully\n\nThank you for reaching out.\nI will respond as soon as possible.',
      data: {
        id: newContact._id,
        createdAt: newContact.createdAt
      }
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get all contact submissions (Admin)
// @route   GET /api/admin/contacts
export const getContacts = async (req, res, next) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json({
      status: 'success',
      results: contacts.length,
      data: contacts,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete contact submission (Admin)
// @route   DELETE /api/admin/contacts/:id
export const deleteContact = async (req, res, next) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    
    if (!contact) {
      return res.status(404).json({ status: 'error', message: 'Message not found' });
    }

    res.status(200).json({
      status: 'success',
      message: 'Message deleted successfully',
    });
  } catch (error) {
    next(error);
  }
};
