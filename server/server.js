import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import path from 'path';

import connectDB from './config/db.js';
import projectRoutes from './routes/projectRoutes.js';
import skillRoutes from './routes/skillRoutes.js';
import aboutRoutes from './routes/aboutRoutes.js';

dotenv.config();

// Resolve __dirname (for ES module)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

const corsOptions = {
  origin: process.env.FRONTEND_URL,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
};
app.use(cors(corsOptions));

app.use(express.json());

// API routes
app.use('/api/projects', projectRoutes);
app.use('/api/skills', skillRoutes);
app.use('/api/about', aboutRoutes);

// Serve Vite's built files
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/{*any}', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
}); // ✅ Fine for catch-all



app.listen(PORT, () => {
  connectDB();
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
