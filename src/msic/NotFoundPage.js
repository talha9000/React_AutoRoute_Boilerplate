// NotFoundPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="max-w-lg p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Oops!</h2>
        <p className="text-xl text-gray-600 mb-8">It looks like you're lost...</p>
        <div className="flex items-center justify-center space-x-4">
          <img src="/path/to/404-image.png" alt="404" className="h-48" />
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
