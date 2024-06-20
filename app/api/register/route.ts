import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import Dbconnect from '@/connection/Dbconnect';
import bcrypt from 'bcryptjs';


// Define your schema
const userSchema = new mongoose.Schema({
  userType: String,
  name: String,
  email: String,
  pinCode: Number,
  address: String,
  district: String,
  city: String,
  state: String,
  taluka: String,
  aadhaarNumber: Number,
  password:String,
  phone:String,
},{timestamps:true});

// Create a model
const User = mongoose.models.User || mongoose.model('User', userSchema);

export async function POST(request: Request) {
  try {
    await Dbconnect();
    const data = await request.json();
    const hashedPassword = await bcrypt.hash(data.password, 10);
    const userData = { ...data, password: hashedPassword };
    const users= new User(userData);
    await users.save(data)
    return NextResponse.json({ message: 'Form submitted successfully', data });
  }
   catch (error) 
   {
    console.error('Error processing form submission:', error);
    return NextResponse.json({ message: 'Error processing form submission', error }, { status: 500 });
  }
}
export default User;