import LedgerEntry from '../models/LedgerEntry.js';
import { generateExplorerId } from '../utils/generateExplorerId.js';

// @desc    Submit ledger entry (Public)
// @route   POST /api/ledger
export const submitLedger = async (req, res, next) => {
  try {
    const { name, role, company, country, experience, rating } = req.body;

    // Generate a unique explorer ID (check for collision)
    let explorerId = '';
    let idExists = true;
    let attempts = 0;
    
    while (idExists && attempts < 10) {
      explorerId = generateExplorerId();
      const existing = await LedgerEntry.findOne({ explorerId });
      if (!existing) {
        idExists = false;
      }
      attempts++;
    }

    if (idExists) {
      throw new Error('Failed to generate a unique Explorer ID. Please try again.');
    }

    const newEntry = await LedgerEntry.create({
      explorerId,
      name,
      role,
      company,
      country,
      experience,
      rating,
    });

    res.status(201).json({
      status: 'success',
      message: 'Impressions logged successfully in The Intelligence Ledger.',
      data: newEntry,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get all approved ledger entries (Public)
// @route   GET /api/ledger
export const getLedger = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 10;
    const skip = (page - 1) * limit;

    // Fetch pinned entries first, then unpinned entries sorted by newest
    // Since we want newest first and infinite scroll, we can query approved entries:
    const query = { isApproved: true };

    const total = await LedgerEntry.countDocuments(query);
    
    // Sort pinned items first, then by creation date (newest first)
    const entries = await LedgerEntry.find(query)
      .sort({ isPinned: -1, createdAt: -1 })
      .skip(skip)
      .limit(limit);

    res.status(200).json({
      status: 'success',
      page,
      limit,
      total,
      pages: Math.ceil(total / limit),
      results: entries.length,
      data: entries,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete ledger entry (Admin)
// @route   DELETE /api/admin/ledger/:id
export const deleteLedgerEntry = async (req, res, next) => {
  try {
    const entry = await LedgerEntry.findByIdAndDelete(req.params.id);
    if (!entry) {
      return res.status(404).json({ status: 'error', message: 'Ledger entry not found' });
    }
    res.status(200).json({
      status: 'success',
      message: 'Ledger entry deleted successfully',
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update ledger entry status (Admin pin/approve)
// @route   PATCH /api/admin/ledger/:id
export const updateLedgerEntry = async (req, res, next) => {
  try {
    const { isApproved, isPinned } = req.body;
    const updateData = {};
    
    if (typeof isApproved !== 'undefined') updateData.isApproved = isApproved;
    if (typeof isPinned !== 'undefined') updateData.isPinned = isPinned;

    const entry = await LedgerEntry.findByIdAndUpdate(req.params.id, updateData, {
      new: true,
      runValidators: true,
    });

    if (!entry) {
      return res.status(404).json({ status: 'error', message: 'Ledger entry not found' });
    }

    res.status(200).json({
      status: 'success',
      message: 'Ledger entry updated successfully',
      data: entry,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get all ledger entries including unapproved (Admin)
// @route   GET /api/admin/ledger
export const getAdminLedger = async (req, res, next) => {
  try {
    const entries = await LedgerEntry.find().sort({ createdAt: -1 });
    res.status(200).json({
      status: 'success',
      results: entries.length,
      data: entries,
    });
  } catch (error) {
    next(error);
  }
};
