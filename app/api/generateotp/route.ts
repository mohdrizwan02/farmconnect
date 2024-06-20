import { NextApiRequest, NextApiResponse } from 'next';
import mongoose from 'mongoose';
import Dbconnect from '@/connection/Dbconnect';
import User from '@/models/User'; // Make sure the path is correct based on your project structure

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    await Dbconnect();
    const { phone } = req.body;

    // Generate OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    // Save OTP to user record
    const user = await User.findOneAndUpdate({ phone }, { otp }, { new: true });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Send OTP to user's phone
    // Add your OTP sending logic here

    return res.status(200).json({ message: 'OTP generated successfully' });
  } catch (error) {
    console.error('Error generating OTP:', error);
    return res.status(500).json({ message: 'Internal Server Error', error });
  }
}
