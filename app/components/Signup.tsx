'use client';
import React, { useState, ChangeEvent } from 'react';
const steps = [
  { title: "Mobile Verification", description: "Requires OTP" },
  { title: "Basic Details", description: "Name, Occupation etc" },
  { title: "Upload Documents", description: "KYC Documents, Cancelled Cheque" },
];

export default function Signup() {
  // Set currentStep to 1 assuming OTP verification is already done
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [formDetails, setFormDetails] = useState({
    name: '',
    email: '',
    pinCode: '',
    address: '',
    district: '',
    city: '',
    state: '',
    taluka: '',
  });
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormDetails({ ...formDetails, [name]: value });
  };

  const validateForm = () => {
    let errors: { [key: string]: string } = {};
    if (!formDetails.name) errors.name = 'Name is required';
    if (!formDetails.pinCode) errors.pinCode = 'PIN Code is required';
    if (!formDetails.district) errors.district = 'District is required';
    if (!formDetails.city) errors.city = 'City/Town/Village is required';
    if (!formDetails.state) errors.state = 'State is required';
    if (!formDetails.taluka) errors.taluka = 'Taluka is required';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleContinueClick = () => {
    if (validateForm()) {
      setCurrentStep(2);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-100 p-6">
      <div className="max-w-7xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-zinc-800 mb-2">Get registered in 3 easy steps</h2>
        <p className="text-zinc-600 mb-6">Thank you for showing your interest in joining us. If you are ready to get started, follow these 4 steps to sign up with us.</p>
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
                        onChange={handleFileChange}
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
                <div className="flex items-center mb-4">
                  <div className="flex items-center mr-4">
                    <img src="https://placehold.co/40x40" alt="Farmer" className="mr-2" />
                    <span className="font-bold">Farmer</span>
                  </div>
                  <div className="flex items-center">
                    <img src="https://placehold.co/40x40" alt="Trader" className="mr-2" />
                    <span className="font-bold">Trader</span>
                  </div>
                </div>
                <form>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-zinc-700">Your name*</label>
                      <input
                        type="text"
                        name="name"
                        value={formDetails.name}
                        onChange={handleInputChange}
                        placeholder="Enter your name"
                        className="w-full p-2 border border-zinc-300 rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-zinc-700">Email ID</label>
                      <input
                        type="email"
                        name="email"
                        value={formDetails.email}
                        onChange={handleInputChange}
                        placeholder="example@domain.com"
                        className="w-full p-2 border border-zinc-300 rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-zinc-700">PIN Code*</label>
                      <input
                        type="text"
                        name="pinCode"
                        value={formDetails.pinCode}
                        onChange={handleInputChange}
                        placeholder="Eg.: 110018"
                        className="w-full p-2 border border-zinc-300 rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-zinc-700">Your Address</label>
                      <input
                        type="text"
                        name="address"
                        value={formDetails.address}
                        onChange={handleInputChange}
                        placeholder="Please enter address here"
                        className="w-full p-2 border border-zinc-300 rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-zinc-700">District*</label>
                      <input
                        type="text"
                        name="district"
                        value={formDetails.district}
                        onChange={handleInputChange}
                        placeholder="Your District"
                        className="w-full p-2 border border-zinc-300 rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-zinc-700">City/Town/Village*</label>
                      <input
                        type="text"
                        name="city"
                        value={formDetails.city}
                        onChange={handleInputChange}
                        placeholder="Your City/Town/Village"
                        className="w-full p-2 border border-zinc-300 rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-zinc-700">State*</label>
                      <input
                        type="text"
                        name="state"
                        value={formDetails.state}
                        onChange={handleInputChange}
                        placeholder="Your state"
                        className="w-full p-2 border border-zinc-300 rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-zinc-700">Taluka*</label>
                      <input
                        type="text"
                        name="taluka"
                        value={formDetails.taluka}
                        onChange={handleInputChange}
                        placeholder="Your Taluka"
                        className="w-full p-2 border border-zinc-300 rounded-lg"
                      />
                    </div>
                    </div>
                  <div>
                    <button
                      type="button"
                      onClick={handleContinueClick}
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
  );
}

