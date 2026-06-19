import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import mongoSanitize from 'express-mongo-sanitize';

// Config imports
import connectDB from './config/db.js';

// Route imports
import contactRoutes from './routes/contactRoutes.js';
import ledgerRoutes from './routes/ledgerRoutes.js';
import statsRoutes from './routes/statsRoutes.js';
import adminRoutes from './routes/adminRoutes.js';

// Middleware imports
import errorHandler from './middleware/errorHandler.js';

// Connect to Database
connectDB();

const app = express();

// Security Middlewares
app.use(helmet());

// CORS Configuration
const allowedOrigins = [
  'https://portfolio-coi7hm6pw-gowri-rams-projects.vercel.app/',
  process.env.FRONTEND_URL, // Deployed frontend URL
].filter(Boolean);

app.use(cors({
  origin: (origin, callback) => {
    // Allow requests with no origin (like mobile apps, curl, or server-to-server)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) !== -1 || allowedOrigins.includes('*')) {
      callback(null, true);
    } else {
      callback(new Error('Blocked by CORS policy'));
    }
  },
  credentials: true,
}));

// Body parsing with size limitation
app.use(express.json({ limit: '10kb' }));

// Data sanitization against NoSQL query injection
app.use(mongoSanitize());

// Request logging in development
if (process.env.NODE_ENV !== 'production') {
  app.use((req, res, next) => {
    console.log(`[REQ] ${req.method} ${req.originalUrl}`);
    next();
  });
}

// Health Check API
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'success', message: 'SaaS Portfolio Core Service Online.' });
});

// Mounted Routes
app.use('/api/contact', contactRoutes);
app.use('/api/ledger', ledgerRoutes);
app.use('/api/stats', statsRoutes);
app.use('/api/admin', adminRoutes);

// Fallback for unhandled routes
app.use('*', (req, res) => {
  res.status(404).json({ status: 'error', message: `Route ${req.originalUrl} not found on this server.` });
});

// Global Error Handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(`[SYS] Portfolio Backend Service running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
  console.error(`[SYS] UNHANDLED REJECTION: ${err.message}`);
  // Close server & exit process
  server.close(() => process.exit(1));
});
