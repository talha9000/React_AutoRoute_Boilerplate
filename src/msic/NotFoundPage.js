// NotFoundPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = ({ onGoBack }) => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="max-w-lg p-8 bg-white shadow-lg rounded-lg">
        <button onClick={onGoBack} className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Oops!</h2>
        <p className="text-xl text-gray-600 mb-8">It looks like you're lost...</p>
        <div className="flex items-center justify-center space-x-4">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg8w7kN3XlI4KPoYIc3Aemqsxl418eW0N2sfJwu2cBZg&s" alt="404" className="h-48" />
          <div>
            <p className="text-xl text-gray-600 mb-2">The page you're looking for doesn't exist.</p>
            <p className="text-xl text-gray-600 mb-2">Let's get you back on track:</p>
            <Link to="/" className="inline-block px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
              Go Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
