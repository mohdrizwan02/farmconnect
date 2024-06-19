import { NextResponse } from 'next/server';
import Dbconnect from '@/connection/dbconnect';
import mongoose from 'mongoose';

// Define your schema
const userSchema = new mongoose.Schema({
  userType: String,
  name: String,
  email: String,
  pinCode: String,
  address: String,
  district: String,
  city: String,
  state: String,
  taluka: String,
  aadhaarNumber: String,
  password:String,
},{ collection: 'users' });

// Create a model
const User = mongoose.models.User || mongoose.model('User', userSchema);

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Connect to the database
    await Dbconnect();

    // Save the form data
    const user = new User(data);
    await user.save();

    return NextResponse.json({ message: 'Form submitted successfully', data });
  } catch (error) {
    console.error('Error processing form submission:', error);
    return NextResponse.json({ message: 'Error processing form submission', error }, { status: 500 });
  }
}
