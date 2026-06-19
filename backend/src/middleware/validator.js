import Joi from 'joi';

const contactSchema = Joi.object({
  name: Joi.string().trim().min(2).max(100).required().messages({
    'string.empty': 'Name cannot be empty',
    'string.min': 'Name must be at least 2 characters',
    'any.required': 'Name is required',
  }),
  email: Joi.string().trim().email().required().messages({
    'string.email': 'Please provide a valid email address',
    'any.required': 'Email is required',
  }),
  company: Joi.string().trim().max(100).allow('').default(''),
  projectType: Joi.string().trim().required().messages({
    'any.required': 'Project type is required',
  }),
  message: Joi.string().trim().min(5).max(5000).required().messages({
    'string.min': 'Message must be at least 5 characters',
    'string.max': 'Message is too long (max 5000 characters)',
    'any.required': 'Message is required',
  }),
});

const ledgerSchema = Joi.object({
  name: Joi.string().trim().min(2).max(100).required().messages({
    'string.empty': 'Name cannot be empty',
    'any.required': 'Name is required',
  }),
  role: Joi.string().trim().max(100).allow('').default(''),
  company: Joi.string().trim().max(100).allow('').default(''),
  country: Joi.string().trim().max(100).allow('').default(''),
  experience: Joi.string().trim().min(5).max(1000).required().messages({
    'string.min': 'Experience details must be at least 5 characters',
    'string.max': 'Experience details cannot exceed 1000 characters',
    'any.required': 'Experience is required',
  }),
  rating: Joi.number().integer().min(1).max(5).required().messages({
    'number.base': 'Rating must be a number',
    'number.min': 'Rating must be at least 1 star',
    'number.max': 'Rating cannot exceed 5 stars',
    'any.required': 'Rating is required',
  }),
});

export const validateContact = (req, res, next) => {
  const { error, value } = contactSchema.validate(req.body, { abortEarly: false, stripUnknown: true });
  if (error) {
    const errorDetails = error.details.map(detail => ({
      field: detail.path[0],
      message: detail.message
    }));
    return res.status(400).json({ status: 'error', message: 'Validation failed', errors: errorDetails });
  }
  req.body = value;
  next();
};

export const validateLedger = (req, res, next) => {
  const { error, value } = ledgerSchema.validate(req.body, { abortEarly: false, stripUnknown: true });
  if (error) {
    const errorDetails = error.details.map(detail => ({
      field: detail.path[0],
      message: detail.message
    }));
    return res.status(400).json({ status: 'error', message: 'Validation failed', errors: errorDetails });
  }
  req.body = value;
  next();
};
