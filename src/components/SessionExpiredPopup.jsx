import React from "react";

const SessionExpiredPopup = ({ onClose }) => {
  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 border border-gray-300 shadow-lg z-50">
      <div className="text-center">
        <p>Votre session a expiré. Veuillez vous reconnecter.</p>
        <button
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded cursor-pointer"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default SessionExpiredPopup;
