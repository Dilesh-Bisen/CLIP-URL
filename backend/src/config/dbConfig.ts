import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const dbUrl: string = process.env.MONGO_URI || 'mongodb://localhost:27017/clipUrl';

export const connectMongo = async (retries = 3, delay = 3000): Promise<void> => {
  try {
    if (!dbUrl) {
      throw new Error('\n❌ Missing MONGO_URI in .env file');
    }

    console.log(`\n🔌 Attempting to connect to MongoDB: ${dbUrl}`);
    await mongoose.connect(dbUrl, { connectTimeoutMS: 10000 });
    console.log('\n🚀 MongoDB connected successfully');

    mongoose.connection.on('connected', () => console.log('\n🔗 Mongoose connection active'));
    mongoose.connection.on('disconnected', () => console.warn('\n⚠️ Mongoose connection lost'));
    mongoose.connection.on('error', (err: Error) => console.error(`\n❌ MongoDB error: ${err.message}`));

    process.on('SIGINT', async () => {
      await mongoose.connection.close();
      console.log('\n🛑 MongoDB connection closed');
      process.exit(0);
    });
  } catch (error) {
    console.error(`\n❌ MongoDB connection failed: ${(error as Error).message}`);
    if (retries > 0) {
      console.log(`\n🔄 Retrying connection (${retries} attempts left)...`);
      await new Promise(resolve => setTimeout(resolve, delay));
      return connectMongo(retries - 1, delay);
    }
    console.error('\n❌ All retry attempts failed. Exiting...');
    process.exit(1);
  }
};

export const isMongoConnected = (): boolean => mongoose.connection.readyState === 1;