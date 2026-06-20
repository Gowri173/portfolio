import Contact from '../models/Contact.js';
import transporter from '../config/mail.js';
import { contactInquiryTemplate } from '../utils/mailTemplates.js';

// @desc    Submit Contact Form
// @route   POST /api/contact
// @access  Public
export const submitContact = async (req, res, next) => {
try {
const {
name,
email,
company,
projectType,
message,
} = req.body;

```
// Save inquiry to MongoDB
const newContact = await Contact.create({
  name,
  email,
  company,
  projectType,
  message,
});

console.log(
  `[CONTACT] New inquiry received from ${name} (${email})`
);

// Send Email Notification
if (transporter) {
  try {
    const { text, html } = contactInquiryTemplate({
      name,
      email,
      company,
      projectType,
      message,
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `🚀 New Portfolio Inquiry | ${name}`,
      text,
      html,
    });

    console.log(
      `[MAIL] Email notification delivered successfully for contact ${newContact._id}`
    );
  } catch (mailError) {
    console.error(
      '[MAIL ERROR]',
      mailError
    );

    console.error(
      `[MAIL] Failed to send notification for contact ${newContact._id}`
    );

    // Continue because data is already saved
  }
} else {
  console.warn(
    '[MAIL] Transporter unavailable. Inquiry stored in MongoDB only.'
  );
}

return res.status(201).json({
  status: 'success',
  message:
    'Message Delivered Successfully. Thank you for reaching out. I will get back to you as soon as possible.',
  data: {
    id: newContact._id,
    createdAt: newContact.createdAt,
  },
});
```

} catch (error) {
console.error('[CONTACT ERROR]', error);
next(error);
}
};

// @desc    Get All Contact Messages
// @route   GET /api/admin/contacts
// @access  Admin
export const getContacts = async (req, res, next) => {
try {
const contacts = await Contact.find()
.sort({ createdAt: -1 });

```
return res.status(200).json({
  status: 'success',
  results: contacts.length,
  data: contacts,
});
```

} catch (error) {
next(error);
}
};

// @desc    Delete Contact Message
// @route   DELETE /api/admin/contacts/:id
// @access  Admin
export const deleteContact = async (req, res, next) => {
try {
const contact = await Contact.findByIdAndDelete(
req.params.id
);

```
if (!contact) {
  return res.status(404).json({
    status: 'error',
    message: 'Message not found',
  });
}

return res.status(200).json({
  status: 'success',
  message: 'Message deleted successfully',
});
```

} catch (error) {
next(error);
}
};
