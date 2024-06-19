import React, { useState } from 'react';

interface AlertProps {
  type: 'success' | 'error'; // Define types for different alerts
  message: string;
}

const Alert: React.FC<AlertProps> = ({ type, message }) => {
  const [visible, setVisible] = useState(true);

  const handleClose = () => {
    setVisible(false);
  };

  if (!visible) {
    return null; // Return null if alert is not visible
  }

  let bgColor = '';
  let borderColor = '';
  let textColor = '';

  // Adjust styles based on alert type
  switch (type) {
    case 'success':
      bgColor = 'bg-green-100';
      borderColor = 'border-green-400';
      textColor = 'text-green-700';
      break;
    case 'error':
      bgColor = 'bg-red-100';
      borderColor = 'border-red-400';
      textColor = 'text-red-700';
      break;
    default:
      break;
  }

  return (
    <div className={` inline-flex justify-between border ${borderColor} ${textColor} px-4 py-3 my-2 rounded ${bgColor}`} role="alert">
      <span className="block sm:inline pl-2">
        <strong className="font-bold">{type.charAt(0).toUpperCase() + type.slice(1)}</strong>
        {message}
      </span>
      <span className="inline" onClick={handleClose} role="button">
        <svg className="fill-current h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <title>Close</title>
          <path
            d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"
          />
        </svg>
      </span>
    </div>
  );
};

export default Alert;