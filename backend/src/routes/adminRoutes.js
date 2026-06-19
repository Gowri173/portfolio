import express from 'express';
import { protectAdmin } from '../middleware/auth.js';
import { getContacts, deleteContact } from '../controllers/contactController.js';
import { getAdminLedger, deleteLedgerEntry, updateLedgerEntry } from '../controllers/ledgerController.js';

const router = express.Router();

// Apply admin protection to all sub-routes
router.use(protectAdmin);

// Admin contacts routes
router.get('/contacts', getContacts);
router.delete('/contacts/:id', deleteContact);

// Admin ledger routes
router.get('/ledger', getAdminLedger);
router.patch('/ledger/:id', updateLedgerEntry);
router.delete('/ledger/:id', deleteLedgerEntry);

export default router;
