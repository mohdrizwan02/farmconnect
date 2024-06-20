import { NextResponse } from 'next/server'; 
import mongoose from 'mongoose';
import Dbconnect from '@/connection/Dbconnect';
import User from '../register/route';

  
  
  
  
    
export async function POST(request: Request){
    try{
        await Dbconnect();
        const phone=await request.json();
        const userfound = await User.findOne(phone).select("_id");
        console.log("user : ",userfound);
        return NextResponse.json(userfound);

    }
    catch(error){
        
        console.log(error);
    }
}