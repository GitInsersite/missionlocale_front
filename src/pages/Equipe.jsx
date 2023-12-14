import React from "react";

function Equipe() {
  return (
    <div>
      <div
        className="bg-image bg-cover bg-center h-12 flex justify-center items-center text-white font-bold"
        style={{ backgroundImage: "url(/public/MicrosoftTeams-image11.png)" }}
      >
        <h1>NOTRE EQUIPE</h1>
      </div>
      <div className="flex flex-col items-center border-red-500 border-2">
        <div>
          <h2 className="font-bold text-black text-lg mb-4">
            <span className="border-b-2 border-pink-500 pb-[0.5px]">POLE</span>{" "}
            DIRECTION
          </h2>
          <div>
            <h3>Prenom NOM</h3>
            <p className="mb-6">Fonction</p>
          </div>
          <h2 className="font-bold text-black text-lg mb-4">
            <span className="border-b-2 border-pink-500 pb-[0.5px]">POLE</span>{" "}
            STRUCTURE
          </h2>
          <div>
            <h3>Prenom NOM</h3>
            <p className="mb-6">Fonction</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center border-red-500 border-2 bg-gray-200">
        <div>
          <h2 className="font-bold text-black text-lg mb-4">
            <span className="border-b-2 border-pink-500 pb-[0.5px]">POLE</span>{" "}
            TECHNIQUE
          </h2>
          <div>
            <h3>Prenom NOM</h3>
            <p className="mb-6">Fonction</p>
          </div>
        </div>
      </div>
      <div className="border-red-500 border-2 h-56 flex justify-center items-center">
        <img src="" alt="" className="border-red-500 border-2 w-[80%] h-[90%]"/>
      </div>
    </div>
  );
}

export default Equipe;
