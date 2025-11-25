import React from "react";
import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-[linear-gradient(180deg,rgba(245,235,224,1)_0%,rgba(253,246,237,1)_100%)]">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-[#ef473a] mb-4" style={{ fontFamily: 'Space Grotesk, Helvetica' }}>
          404
        </h1>
        <h2 className="text-4xl font-bold text-[#2b2622] mb-4" style={{ fontFamily: 'Space Grotesk, Helvetica' }}>
          Page Not Found
        </h2>
        <p className="text-xl text-[#6b6661] mb-8" style={{ fontFamily: 'Inter, Helvetica' }}>
          Oops! The page you're looking for doesn't exist.
        </p>
        <button
          onClick={() => navigate('/dashboard')}
          className="px-8 py-4 bg-[#1e5f4d] text-white font-bold rounded-full border-4 border-[#2b2622] shadow-[5px_5px_0px_#2b2622d9] hover:shadow-[3px_3px_0px_#2b2622d9] transition-all cursor-pointer"
          style={{ fontFamily: 'Space Grotesk, Helvetica' }}
        >
          Back to Dashboard
        </button>
      </div>
    </div>
  );
};
