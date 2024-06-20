'use client';
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import React, { ChangeEvent, useState } from 'react'
import Image from 'next/image';
import { useRouter } from "next/navigation";
const Register = () => {
  const [otp, setOtp] = useState('');
  const [phone, setPhone] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [userType, setUserType] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pincode, setPincode] = useState('');
  const [address, setAddress] = useState('');
  const [district, setDistrict] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [taluka, setTaluka] = useState('');
  const [aadhaarnumber,setaadhaarnumber] = useState('');
  const [currentStep, setCurrentStep] = useState(1);
  const [password,setpassword] = useState('');
  const [cpassword,setcpassword] = useState('');
  const [derror,setderror] = useState('');
  const router = useRouter();
  const steps = [
    { title: "Mobile Verification", description: "Requires OTP",src:'/done.png' },
    { title: "Basic Details & Identity", description: "Name,address,aadhaar etc",src:'/pending.png' },
    
  ];
  const sendOtp = (event: React.FormEvent) => {
    event.preventDefault();
    setOtpSent(true);
  };

  const verifyOtp = (event: React.FormEvent) => {
    event.preventDefault();
    setOtpVerified(true);
    setCurrentStep(2);
  };

  const reenterOtp = () => {
    setPhone('');
    setOtp('');
    setOtpSent(false);
  };
  const reverifyMobile=()=> {
    setOtpVerified(false);
    setOtpSent(false);
    setderror('');
    setOtp('');
    setUserType('');
    setName('');
    setEmail('');
    setPincode('');
    setAddress('');
    setDistrict('');
    setCity('');
    setState('');
    setTaluka('');
    setaadhaarnumber('');
    
    setpassword('');
    setcpassword('');
  }
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = {
      userType,
      name,
      email,
      pincode,
      address,
      district,
      city,
      state,
      taluka,
      aadhaarnumber,
      password,
      phone,
      
    };
    
    try {
      const res= await fetch('/api/userexists',{
        method :'POST',
        headers: {
          'Content-Type':'application/json',
        },
        body:JSON.stringify({phone}),
    });
    const userfound = await res.json();
    
      if(userfound){
        setderror('user with this phone number already exists');
         console.log(derror);
         return;
      }
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      

      const result = await response.json();
      if(response.ok){
        router.push("./login");
        
      }
      console.log('Success:', result);
      
    } catch (error) {
      console.error('Error:', error);
      
    }
  
 
  };
 

return (
    <>
      {!otpVerified ? (
        <div className="py-32 bg-gray-100 flex flex-col items-center justify-center px-4">
          <div className="flex justify-center items-center mb-4 lg:mb-5 lg:mr-6">
            <Image
              className="w-auto h-16 sm:h-16"
              src="/logo.png"
              alt="Logo"
              width={100}
              height={30}
            />
            <div className="text-3xl mx-3">FARMCONNECT</div>
          </div>
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Get Started</h2>
            <p className="text-gray-600">
              Thank you for showing interest in Farmconnect. Please enter your mobile number to get started.
            </p>
          </div>
          <div className="max-w-2xl w-full bg-white p-6 rounded-lg shadow-md">
            {!otpSent ? (
              <form onSubmit={sendOtp}>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mobile-number">
                    Please enter your mobile number
                  </label>
                  <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                    <span className="bg-gray-100 px-4 py-2">+91</span>
                    <input
                      onChange={(e) => setPhone(e.target.value)}
                      id="mobile-number"
                      type="text"
                      placeholder="Enter your mobile no. here"
                      value={phone}
                      className="w-full px-4 py-2 outline-none"
                      required
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="bg-black text-white w-full py-2 rounded-lg hover:bg-green-500 transition duration-300"
                >
                  Send OTP
                </button>
              </form>
            ) : (
              <form onSubmit={verifyOtp}>
                <div className="mt-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="otp">
                    Enter OTP
                  </label>
                  <input
                    id="otp"
                    type="text"
                    placeholder="Enter OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none"
                    maxLength={4}
                    required
                  />
                </div>
                <div className="flex space-x-4 mt-4">
                  <button
                    type="submit"
                    className="bg-green-500 text-white w-full py-2 rounded-lg hover:bg-green-600 transition duration-300"
                  >
                    Submit OTP
                  </button>
                  <button
                    type="button"
                    onClick={reenterOtp}
                    className="bg-gray-500 text-white w-full py-2 rounded-lg hover:bg-gray-600 transition duration-300"
                  >
                    Re-enter Phone Number
                  </button>
                </div>
              </form>
            )}
            <div className="mt-4 text-center text-gray-500">
              Facing trouble? Call us on <a href="tel:+919515269727" className="text-blue-500">+91-9515269727</a>
            </div>
            <div className="mt-4 text-center text-gray-500 text-sm">
              By signing in I agree with FarmConnect <a href="#" className="text-blue-500">Terms of Use</a>
            </div>
          </div>
        </div>
      ) : (
        <div className="py-10 bg-zinc-100 p-6">
          <div className="max-w-7xl border-t-[10px] min-h-[800px] border-black mx-auto bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-zinc-800 mb-2">Get registered in 3 easy steps</h2>
            <p className="text-zinc-600 mb-6">Thank you for showing your interest in joining us. If you are ready to get started, follow these 3 steps to sign up with us.</p>
            <div className="flex flex-col lg:flex-row">
              <div className="w-full lg:w-1/3 mb-6 lg:mb-0">
                {steps.map((step, index) => (
                  
                  <div
                    key={index}
                    className={`p-4 rounded-lg shadow-md mb-4 cursor-pointer ${currentStep === index + 1 ? 'bg-blue-100 border-l-4 border-blue-500' : 'bg-zinc-50'} ${index === 0 ? 'pointer-events-none opacity-50' : ''}`}
                    onClick={() => index !== 0 && setCurrentStep(index + 1)}
                  >
                    <div className="flex items-center mb-2">
                    <Image src={step.src} alt={step.title} width={26} height={26} className="mr-2" />
                      <h3 className="font-bold">{step.title}</h3>
                    </div>
                    <p className="text-zinc-500">{step.description}</p>
                  </div>
                ))}
              </div>
              <div className="w-full lg:w-2/3 lg:pl-6">
                
                  <div className="bg-zinc-50 p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold mb-4">Tell us more about you</h3>
                    <p className="text-zinc-600 mb-4">Select a Profile Type</p>
                    <form onSubmit={handleSubmit}>
                      <div className="flex items-center mb-4">
                        <label className="flex items-center mr-4 cursor-pointer">
                          <Image src="/farmer.png" alt="Farmer" height={40} width={40} className="mr-2" />
                          <span className="font-bold">Farmer</span>
                          <input
                            type="radio"
                            name="userType"
                            value="Farmer"
                            onChange={(e) => setUserType(e.target.value)}
                            className="ml-2"
                            required
                          />
                        </label>
                        <label className="flex items-center cursor-pointer">
                          <Image src="/trader.png" alt="Farmer" height={40} width={40} className="mr-2" />
                          <span className="font-bold">Trader</span>
                          <input
                            type="radio"
                            name="userType"
                            value="Trader"
                            onChange={(e) => setUserType(e.target.value)}
                            className="ml-2"
                            required
                          />
                        </label>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <label className="block text-zinc-700">Your name*</label>
                          <input
                            type="text"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your name"
                            className="w-full p-2 border border-zinc-300 rounded-lg"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-zinc-700">Email ID</label>
                          <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="example@domain.com"
                            className="w-full p-2 border border-zinc-300 rounded-lg"
                          />
                        </div>
                        <div>
                          <label className="block text-zinc-700">PIN Code*</label>
                          <input
                            type="text"
                            name="pinCode"
                            value={pincode}
                            onChange={(e) => setPincode(e.target.value)}
                            placeholder="Eg.: 110018"
                            className="w-full p-2 border border-zinc-300 rounded-lg"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-zinc-700">Your Address</label>
                          <input
                            type="text"
                            name="address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            placeholder="Please enter address here"
                            className="w-full p-2 border border-zinc-300 rounded-lg"
                          />
                        </div>
                        <div>
                          <label className="block text-zinc-700">District*</label>
                          <input
                            type="text"
                            name="district"
                            value={district}
                            onChange={(e) => setDistrict(e.target.value)}
                            placeholder="Your District"
                            className="w-full p-2 border border-zinc-300 rounded-lg"
                            required
                          />
                        </div>
                        <div>
                          
                          <label className="block text-zinc-700">City/Town/Village*</label>
                          <input
                            type="text"
                            name="city"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            placeholder="Your City/Town/Village"
                            className="w-full p-2 border border-zinc-300 rounded-lg"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-zinc-700">State*</label>
                          <input
                            type="text"
                            name="state"
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                            placeholder="Your state"
                            className="w-full p-2 border border-zinc-300 rounded-lg"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-zinc-700">Taluka*</label>
                          <input
                            type="text"
                            name="taluka"
                            value={taluka}
                            onChange={(e) => setTaluka(e.target.value)}
                            placeholder="Your Taluka"
                            className="w-full p-2 border border-zinc-300 rounded-lg"
                            required
                          />
                        </div>
                        <div>
                        <label className="block text-zinc-700">Password*</label>
                        <input
                          type="password"
                          name="password"
                          value={password}
                          onChange={(e) => setpassword(e.target.value)}
                          placeholder="Password"
                          className="w-full p-2 border border-zinc-300 rounded-lg"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-zinc-700">Confirm Password*</label>
                        <input
                          type="cpassword"
                          name="cpassword"
                          value={cpassword}
                          onChange={(e) => setcpassword(e.target.value)}
                          placeholder="Confirm Password"
                          className="w-full p-2 border border-zinc-300 rounded-lg"
                          required
                        />
                      </div>

                      </div>
                      <div>
                        <label className="block text-zinc-700">Aadhaar Number*</label>
                        <input
                          type="text"
                          name="aadhaarNumber"
                          value={aadhaarnumber}
                          onChange={(e) => setaadhaarnumber(e.target.value)}
                          placeholder="Your Aadhaar Number"
                          className="w-full p-2 border border-zinc-300 rounded-lg"
                          required
                        />
                      </div>
                      
                      <div className='flex justify-around'>
                        <button
                          type="submit"
                          className="bg-black text-white  px-4 mt-5 py-2 rounded-lg hover:bg-green-500"
                        >
                          Continue
                        </button>
                        <button
                            onClick={reverifyMobile}
                            className="bg-red-600 text-white  px-4 mt-5 py-2 rounded-lg hover:bg-green-500"
                          >
                            Use Diferent Mobile No
                          </button>
                      </div>
                    </form>
                    
                  </div>
                  {derror && (
                      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 my-2 rounded" role="alert">
                        <strong className="font-bold">Error:</strong>
                        <span className="block sm:inline pl-2">{derror}</span>
                      </div>
                    )}
                
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Register;
