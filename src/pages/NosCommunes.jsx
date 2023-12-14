import React from "react";

function NosCommunes() {
  return (
    <div>
      <div
        className="bg-image bg-cover bg-center h-12 flex justify-center items-center text-white font-bold"
        style={{ backgroundImage: "url(/public/MicrosoftTeams-image11.png)" }}
      >
        <h1>NOS COMMUNES</h1>
      </div>
      <div className="flex flex-col items-center mt-6">
        <h1 className='font-bold text-black text-lg mb-8'><span className="border-b-2 border-pink-500 pb-[0.5px]">COMMUNES</span> ADHERENTES</h1>
        <ul className="font-medium">
          <li>-ECQUEVILLY,</li>
          <li>-EVECQUEMONT,</li>
          <li>-FLINS SUR SEINE,</li>
          <li>-GAILLON-SUR-MONTCIENT,</li>
          <li>-HADRICOURT,</li>
          <li>-JAMBVILLE,</li>
          <li>-JUZIERS,</li>
          <li>-LAINVILLE,</li>
          <li>-LES MUREAUX,</li>
          <li>-MEULAN EN YVELINES,</li>
          <li>-MEZY-SUR-SEINE,</li>
          <li>-MONTALET LE BOIS,</li>
          <li>-NEZEL,</li>
          <li>-OINVILLE-SUR-MONTCIENT,</li>
          <li>-TESSANCOURT SUR AUBETTE,</li>
          <li>-VAUX SUR SEINE,</li>
        </ul>
      </div>
      <div className="bg-gray-300 mt-6 pt-2 pb-6">
        <div className="rounded-b-2xl rounded-t-md mt-6 mx-4 bg-white">
            <div className="bg-pink-500 rounded-md text-center py-1 text-white">ANTENNE PRINCIPALE</div>
            <h2 className="font-semibold ml-4 mb-2">LES MUREAUX</h2>
            <div className="text-xs ml-4 font-medium pb-2">
                <p>38 AV. PAUL RAOULT,
                    78130 LES MUREAUX</p>
                <p>01 30 91 21 50</p>
                <p>contact@missionlocalelesmureaux.org</p>
            </div>
        </div>
        <div className="rounded-b-2xl rounded-t-md mt-6 mx-4 bg-white">
            <div className="bg-yellow-500 rounded-md text-center py-1 text-white">PERMANENCES</div>
            <h2 className="font-semibold ml-4 mb-2">MEULAN</h2>
            <div className="text-xs ml-4 font-medium pb-2">
                <p>12 RUE DE LA FERME <br />
                    LE 1er ET 3eme MARDI</p>
                <p>14H00 - 17H00</p>
                <p>01 30 91 21 50</p>
            </div>
        </div>
        <div className="rounded-b-2xl rounded-t-md mt-6 mx-4 bg-white">
            <div className="bg-yellow-500 rounded-md text-center py-1 text-white">PERMANENCES</div>
            <h2 className="font-semibold ml-4 mb-2">AUBERGENVILLE</h2>
            <div className="text-xs ml-4 font-medium pb-2">
                <p>MAISON DE TOUS<br/>
                    LES MERCREDIS</p>
                <p>14H00 - 17H00</p>
                <p>01 30 90 36 63</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default NosCommunes;
