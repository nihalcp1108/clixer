import mongoose from 'mongoose';
import Product from '../models/Product.js';
import { seedProducts } from '../data/seedProducts.js';

export const connectDB = async () => {
  const mongoUri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/clixer';

  try {
    const maskedUri = mongoUri.replace(/:([^:@]+)@/, ':****@');
    console.log(`Connecting to MongoDB at ${maskedUri}...`);
    await mongoose.connect(mongoUri);
    console.log('Connected to MongoDB successfully.');

    // Seed initial products if collection is completely empty
    const productCount = await Product.countDocuments();
    if (productCount === 0) {
      console.log('Seeding initial Clixer product catalogue into MongoDB...');
      await Product.insertMany(seedProducts);
      console.log(`Successfully seeded ${seedProducts.length} initial products.`);
    } else {
      console.log(`MongoDB connected with ${productCount} existing products in collection.`);
    }
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
    console.error('Check your MONGO_URI environment variable and ensure MongoDB Atlas IP Access List allows 0.0.0.0/0.');
    // Do not crash the entire process immediately on transient connection error;
    // retry connection in 5 seconds so server stays available for health checks.
    setTimeout(connectDB, 5000);
  }
};
