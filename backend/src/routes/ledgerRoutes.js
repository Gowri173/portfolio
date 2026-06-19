import express from 'express';
import { submitLedger, getLedger } from '../controllers/ledgerController.js';
import { ledgerRateLimiter, generalRateLimiter } from '../middleware/rateLimiter.js';
import { validateLedger } from '../middleware/validator.js';

const router = express.Router();

router.post('/', ledgerRateLimiter, validateLedger, submitLedger);
router.get('/', generalRateLimiter, getLedger);

export default router;
