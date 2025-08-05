import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const dbUrl: string = process.env.MONGO_URI || 'mongodb://localhost:27017/clipUrl';

export const connectMongo = async (): Promise<void> => {
    try {
        if (!dbUrl) {
            throw new Error('❌ Missing MONGO_URI in .env file');
        }

        await mongoose.connect(dbUrl);
        console.log('🚀 MongoDB connected successfully');

        mongoose.connection.on('connected', () => console.log('🔗 Mongoose connection active'));
        mongoose.connection.on('disconnected', () => console.warn('⚠️ Mongoose connection lost'));
        mongoose.connection.on('error', (err: Error) => console.error(`❌ MongoDB error: ${err.message}`));

        process.on('SIGINT', async () => {
            await mongoose.connection.close();
            console.log('🛑 MongoDB connection closed');
            process.exit(0);
        });
    } catch (error) {
        console.error(`❌ MongoDB connection failed: ${(error as Error).message}`);
        process.exit(1);
    }
};

export const isMongoConnected = (): boolean => mongoose.connection.readyState === 1;