import React from "react";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        {/* Add your SVG illustration */}
        <img
          src="/notFound.svg"
          alt="404 Illustration"
          className="mb-4 w-[400px] h-[400px]"
        />
        <p className="text-xl text-gray-600 mb-4">Page non trouvée</p>
        <a href="/" className="text-blue-500 hover:underline">
          Retourner à l'accueil
        </a>
      </div>
    </div>
  );
};

export default NotFound;
