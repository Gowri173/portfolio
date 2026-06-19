import express from 'express';
import { getStats } from '../controllers/statsController.js';
import { generalRateLimiter } from '../middleware/rateLimiter.js';

const router = express.Router();

router.get('/', generalRateLimiter, getStats);

export default router;
