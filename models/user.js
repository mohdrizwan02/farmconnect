import mongoose, { Document, Schema } from 'mongoose';
const UserSchema = new mongoose.Schema({
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

 const user = mongoose.models.user || mongoose.model('user', UserSchema);
export default user;