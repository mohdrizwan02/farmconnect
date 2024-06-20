import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import Dbconnect from '@/connection/Dbconnect';
import User from '../register/route';


export async function POST(req: { json: () => PromiseLike<{ phone: any; password: any; }> | { phone: any; password: any; }; }){
  try {
    await Dbconnect();
    const {phone, password } = await req.json()
    //const { phone, password } = req.body;

    
    const user = await User.findOne({phone});

    if (!user) {
      return NextResponse.json({ message: 'Invalid phone number or password' });
    }

    // Password authentication
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return NextResponse.json({ message: 'Invalid phone number or password' });
    }

    return NextResponse.json({ message: 'Login successful' });
  } catch (error) {
    console.error('Error logging in:', error);
    return NextResponse.json({ message: 'Internal Server Error', error });
  }
}
