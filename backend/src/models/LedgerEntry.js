import mongoose from 'mongoose';

const ledgerEntrySchema = new mongoose.Schema({
  explorerId: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
  },
  role: {
    type: String,
    trim: true,
    default: '',
  },
  company: {
    type: String,
    trim: true,
    default: '',
  },
  country: {
    type: String,
    trim: true,
    default: '',
  },
  experience: {
    type: String,
    required: [true, 'Experience details are required'],
    trim: true,
  },
  rating: {
    type: Number,
    required: [true, 'Rating is required'],
    min: [1, 'Rating must be at least 1'],
    max: [5, 'Rating cannot exceed 5'],
  },
  isApproved: {
    type: Boolean,
    default: true, // Auto-approving by default, admin can delete/unapprove
  },
  isPinned: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const LedgerEntry = mongoose.model('LedgerEntry', ledgerEntrySchema);

export default LedgerEntry;
