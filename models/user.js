import mongoose, { Document, Schema } from 'mongoose';
const userSchema = new Schema({
  userType: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  pinCode: { type: String, required: true },
  address: { type: String },
  district: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  taluka: { type: String, required: true },
  aadhaarNumber: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  
},{timestamps : true }
);
const user = models.user || mongoose.model('user',userSchema)
export default user;