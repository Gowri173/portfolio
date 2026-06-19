import crypto from 'crypto';

export const generateExplorerId = () => {
  const hex = crypto.randomBytes(3).toString('hex').toUpperCase();
  return `EXP-${hex}`;
};
