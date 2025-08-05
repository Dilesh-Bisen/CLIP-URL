import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import linkRoutes from './routes/linkRoutes';
import { connectMongo } from './config/dbConfig';

dotenv.config();

const app = express();
const port = process.env.PORT || 8083;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));

app.use('/api', linkRoutes);

app.get('/', (req: Request, res: Response) => res.send('Hello World!'));

const startServer = async () => {
  try {
    await connectMongo();
    app.listen(port, () => {
      console.log(`🚀 Server running on port: ${port}`);
    });
  } catch (error) {
    console.error(`❌ Server failed to start: ${(error as Error).message}`);
    process.exit(1);
  }
};

startServer();

