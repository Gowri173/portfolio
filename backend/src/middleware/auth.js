export const protectAdmin = (req, res, next) => {
  const adminKey = process.env.ADMIN_API_KEY;
  
  if (!adminKey) {
    console.warn('[SYS] WARNING: ADMIN_API_KEY environment variable is not configured. Admin endpoints are locked.');
    return res.status(500).json({ status: 'error', message: 'Admin authentication is misconfigured on the server.' });
  }

  const clientKey = req.headers['x-admin-key'];

  if (!clientKey || clientKey !== adminKey) {
    return res.status(401).json({ status: 'error', message: 'Unauthorized access. Invalid or missing administrator key.' });
  }

  next();
};
