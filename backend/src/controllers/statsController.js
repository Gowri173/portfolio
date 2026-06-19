import LedgerEntry from '../models/LedgerEntry.js';
import Contact from '../models/Contact.js';

// @desc    Get real-time statistics (Public)
// @route   GET /api/stats
export const getStats = async (req, res, next) => {
  try {
    // 1. Get total ledger entries
    const totalEntries = await LedgerEntry.countDocuments({ isApproved: true });

    // 2. Get unique countries count
    const uniqueCountries = await LedgerEntry.distinct('country', { isApproved: true });
    const countriesReached = uniqueCountries.length;

    // 3. Get average rating
    const ratingAggregation = await LedgerEntry.aggregate([
      { $match: { isApproved: true } },
      { $group: { _id: null, avgRating: { $avg: '$rating' } } },
    ]);

    const averageRating = ratingAggregation.length > 0 
      ? Math.round(ratingAggregation[0].avgRating * 10) / 10 
      : 5.0; // Default to 5.0 if no ratings yet

    // 4. Explorer Community Size (Total Ledger Entries + Contact submissions)
    const totalContacts = await Contact.countDocuments();
    const explorerCommunitySize = totalEntries + totalContacts;

    res.status(200).json({
      status: 'success',
      data: {
        totalEntries,
        countriesReached,
        averageRating,
        explorerCommunitySize,
      },
    });
  } catch (error) {
    next(error);
  }
};
