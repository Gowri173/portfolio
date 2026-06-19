import express from 'express';
import { submitContact } from '../controllers/contactController.js';
import { contactRateLimiter } from '../middleware/rateLimiter.js';
import { validateContact } from '../middleware/validator.js';

const router = express.Router();

router.post('/', contactRateLimiter, validateContact, submitContact);

export default router;
