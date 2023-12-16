import { Link } from "react-router-dom";

function EspaceEntreprise() {
  return (
    <div className="bg-[#F6F6F6]">
      <div
        className="bg-image bg-cover bg-center h-12 flex justify-center items-center text-white font-bold"
        style={{ backgroundImage: "url(/public/MicrosoftTeams-image14.png)" }}
      >
        <h1>ESPACE ENTREPRISE</h1>
      </div>
      <div className="flex flex-col items-center border border-red-600">
        <Link className="flex flex-col items-center justify-center w-48 h-48 rounded-3xl mt-6 bg-white border border-blue-600">
          <img
            src="/public/logo-inscription.svg"
            alt=""
            className="w-32 h-32"
          />
          <p className="font-bold text-center">INFORMATIONS PERSONNELLES</p>
        </Link>
        <Link className="flex flex-col items-center justify-center w-48 h-48 rounded-3xl mt-6 mb-6 bg-white border border-blue-600">
          <img
            src="/public/logo-inscription.svg"
            alt=""
            className="w-32 h-32"
          />
          <p className="font-bold text-center">DEPOSER LES OFFRES D'EMPLOI</p>
        </Link>
      </div>
    </div>
  );
}

export default EspaceEntreprise;
