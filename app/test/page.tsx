'use client';
import React, { ChangeEvent, useState } from 'react'
import Image from 'next/image';
const Register = () => {
  const [otp,setotp] = useState('');
  const [phone,setphone] = useState('');
  const [step,setstep] = useState(1);
  const [otpsent,setotpsent] = useState(false);
  const [otpverified,setotpverified] = useState(false);
  const [usertype, setusertype] = useState('');
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [pincode, setpincode] = useState('');
  const [address, setaddress] = useState('');
  const [district, setdistrict] = useState('');
  const [city, setcity] = useState('');
  const [state, setstate] = useState('');
  const [taluka, settaluka] = useState('');
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  console.log(usertype);
  const steps = [
    { title: "Mobile Verification", description: "Requires OTP" },
    { title: "Basic Details", description: "Name, Occupation etc" },
    { title: "Upload Documents", description: "KYC Documents, Cancelled Cheque" },
  ];
  const nextstep=()=>{
    setCurrentStep(2);
  }
  const fileupload=(event: ChangeEvent<HTMLInputElement>)=>{
    if (event.target.files) {
      setSelectedFile(event.target.files[0]);
    }
  }
  const sendotp=(event: React.FormEvent)=>{
    event.preventDefault();  
    setotpsent(true);
  }
  const verifyotp=()=>{
    setotpverified(true);
  }
  const reenterotp=()=>{
    setphone('');
    setotp('');
    setotpsent(false);
  }
  return (
    <>
      {!otpverified?(
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
          {!otpsent?(<form onSubmit={sendotp}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mobile-number">
                Please enter your mobile number
              </label>
              <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                <span className="bg-gray-100 px-4 py-2">+91</span>
                <input
                  onChange={(e)=>setphone(e.target.value)}
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
          </form>):
          (<form onSubmit={verifyotp}>
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="otp">
                Enter OTP
              </label>
              <input
                id="otp"
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e)=>setotp(e.target.value)}
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
                onClick={reenterotp}
                className="bg-gray-500 text-white w-full py-2 rounded-lg hover:bg-gray-600 transition duration-300"
              >
                Re-enter Phone Number
              </button>
            </div>
          </form>)}
          <div className="mt-4 text-center text-gray-500">
          Facing trouble? Call us on <a href="tel:+919515269727" className="text-blue-500">+91-9515269727</a>
          </div>
          <div className="mt-4 text-center text-gray-500 text-sm">
            By signing in I agree with FarmConnect <a href="#" className="text-blue-500">Terms of Use</a>
          </div>
      </div>

      </div>
      ):(
        <div className="py-10  bg-zinc-100 p-6">
          <div className="max-w-7xl border-t-[10px] min-h-[800px] border-black mx-auto bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-zinc-800 mb-2">Get registered in 3 easy steps</h2>
            <p className="text-zinc-600 mb-6">Thank you for showing your interest in joining us. If you are ready to get started, follow these 3 steps to sign up with us.</p>
            <div className="flex flex-col lg:flex-row">
              <div className="w-full lg:w-1/3 mb-6 lg:mb-0">
                {steps.map((step, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg shadow-md mb-4 cursor-pointer ${currentStep === index ? 'bg-blue-100 border-l-4 border-blue-500' : 'bg-zinc-50'} ${index === 0 ? 'pointer-events-none opacity-50' : ''}`}
                    onClick={() => index !== 0 && setCurrentStep(index)}
                  >
                    <div className="flex items-center mb-2">
                      <img src={`https://placehold.co/24x24?text=${index + 1}`} alt={step.title} className="mr-2" />
                      <h3 className="font-bold">{step.title}</h3>
                    </div>
                    <p className="text-zinc-500">{step.description}</p>
                  </div>
                ))}
              </div>
              <div className="w-full lg:w-2/3 lg:pl-6">
            {currentStep === 2 ? (
              <div className="bg-zinc-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Upload Documents</h3>
                <div className="border-dashed border-2 border-zinc-300 p-6 rounded-lg">
                  <div className="flex justify-center items-center mb-4">
                    <label className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-black cursor-pointer">
                      Select Documents
                      <input
                        type="file"
                        onChange={fileupload}
                        className="hidden"
                      />
                    </label>
                  </div>
                  <div className="text-center text-zinc-500 mb-4">
                    <p>Your privacy is our priority</p>
                    <p>Your documents are safe with us.</p>
                  </div>
                  <div className="flex justify-center">
                    <div className="flex flex-col items-center">
                      <img src="https://placehold.co/40x40" alt="Aadhaar Card/Voter ID" className="mb-2" />
                      <span className="font-bold">Aadhaar Card/Voter ID</span>
                    </div>
                  </div>
                  {selectedFile && (
                    <div className="mt-4">
                      <h4 className="font-bold text-center mb-2">Selected Document:</h4>
                      <div className="flex justify-center">
                        <p>{selectedFile.name}</p>
                      </div>
                    </div>
                  )}
                  <div className="flex justify-center mt-4">
                    <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-green-500">Continue</button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-zinc-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Tell us more about you</h3>
                <p className="text-zinc-600 mb-4">Select a Profile Type</p>
               
                <form onSubmit={nextstep}>
                  <div className="flex items-center mb-4">
                  <label className="flex items-center mr-4 cursor-pointer">
                  <Image src="/farmer.png" alt="Farmer" height={40} width={40} className="mr-2" />
                    <span className="font-bold">Farmer</span>
                    <input
                      type="radio"
                      name="userType"
                      value="Farmer"
                      onChange={(e) => setusertype(e.target.value)}
                      className="ml-2"
                    />
                  </label>
                  <label className="flex items-center cursor-pointer">
                  <Image src="/trader.png" alt="Farmer" height={40} width={40} className="mr-2" />
                    <span className="font-bold">Trader</span>
                    <input
                      type="radio"
                      name="userType"
                      value="Trader"
                      onChange={(e) => setusertype(e.target.value)}
                      className="ml-2"
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
                        onChange={(e) => setname(e.target.value)}
                        placeholder="Enter your name"
                        className="w-full p-2 border border-zinc-300 rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-zinc-700">Email ID</label>
                      <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setemail(e.target.value)}
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
                        onChange={(e) => setpincode(e.target.value)}
                        placeholder="Eg.: 110018"
                        className="w-full p-2 border border-zinc-300 rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-zinc-700">Your Address</label>
                      <input
                        type="text"
                        name="address"
                        value={address}
                        onChange={(e) => setaddress(e.target.value)}
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
                        onChange={(e) => setdistrict(e.target.value)}
                        placeholder="Your District"
                        className="w-full p-2 border border-zinc-300 rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-zinc-700">City/Town/Village*</label>
                      <input
                        type="text"
                        name="city"
                        value={city}
                        onChange={(e) => setcity(e.target.value)}
                        placeholder="Your City/Town/Village"
                        className="w-full p-2 border border-zinc-300 rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-zinc-700">State*</label>
                      <input
                        type="text"
                        name="state"
                        value={state}
                        onChange={(e) => setstate(e.target.value)}
                        placeholder="Your state"
                        className="w-full p-2 border border-zinc-300 rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-zinc-700">Taluka*</label>
                      <input
                        type="text"
                        name="taluka"
                        value={taluka}
                        onChange={(e) => settaluka(e.target.value)}
                        placeholder="Your Taluka"
                        className="w-full p-2 border border-zinc-300 rounded-lg"
                      />
                    </div>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="bg-black text-white px-4 py-2 rounded-lg hover:bg-green-500"
                    >
                      Continue
                    </button>
                  </div>
                </form>

              </div>
            )}
          </div>
            </div>    
          </div>
        </div>  
        )}
    </>
  )
}

export default Register