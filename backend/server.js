import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import routes from './routes/index.js'; // Import routes
import sequelize from './config/sequelize.js';

const app = express();

// Define allowed origins for CORS
const corsOptions = {
  origin: function (origin, callback) {
    const allowedOrigins = ['http://localhost:3000', 'http://localhost:5000']; // React frontend and backend allowed
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true, // Allows sending cookies
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions)); // Apply CORS middleware

// Other middlewares
app.use(express.json());
app.use(cookieParser());

// Use routes for API endpoints
app.use('/api', routes);

// Connect to the database and start the server
sequelize.sync().then(() => {
  app.listen(8081, () => {
    console.log('Server is running on port 8081');
  });
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});
