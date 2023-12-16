import { Link } from "react-router-dom";

function EspacePersonnelJeune() {
  return (
    <div className="bg-[#F6F6F6]">
      <div
        className="bg-image bg-cover bg-center h-12 flex justify-center items-center text-white font-bold"
        style={{ backgroundImage: "url(/public/MicrosoftTeams-image12.png)" }}
      >
        <h1>ESPACE PERSONNEL</h1>
      </div>
      <div className="flex flex-col items-center border border-red-600">
        <Link className="flex flex-col items-center justify-center w-48 h-48 rounded-3xl mt-6 bg-white border border-blue-600">
          <img
            src="/public/logo-inscription.svg"
            alt=""
            className="w-32 h-32"
          />
          <p className="font-bold text-center">CONTACTER MON CONSEILLER</p>
        </Link>
        <Link className="flex flex-col items-center justify-center w-48 h-48 rounded-3xl mt-6 bg-white border border-blue-600">
          <img
            src="/public/logo-inscription.svg"
            alt=""
            className="w-32 h-32"
          />
          <p className="font-bold text-center">INFORMATIONS PERSONNELLES</p>
        </Link>
        <Link className="flex flex-col items-center justify-center w-48 h-48 rounded-3xl mt-6 bg-white border border-blue-600">
          <img
            src="/public/logo-inscription.svg"
            alt=""
            className="w-32 h-32"
          />
          <p className="font-bold text-center">MES RENDEZ-VOUS</p>
        </Link>
        <Link className="flex flex-col items-center justify-center w-48 h-48 rounded-3xl mt-6 bg-white border border-blue-600">
          <img
            src="/public/logo-inscription.svg"
            alt=""
            className="w-32 h-32"
          />
          <p className="font-bold text-center">MES DOCUMENTS</p>
        </Link>
        <Link className="flex flex-col items-center justify-center w-48 h-48 rounded-3xl mt-6 bg-white border border-blue-600">
          <img
            src="/public/logo-inscription.svg"
            alt=""
            className="w-32 h-32"
          />
          <p className="font-bold text-center">MES ATELIERS</p>
        </Link>
        <Link className="flex flex-col items-center justify-center w-48 h-48 rounded-3xl mt-6 bg-white border border-blue-600">
          <img
            src="/public/logo-inscription.svg"
            alt=""
            className="w-32 h-32"
          />
          <p className="font-bold text-center">MES FORMATIONS</p>
        </Link>
        <Link className="flex flex-col items-center justify-center w-48 h-48 rounded-3xl mt-6 bg-white border border-blue-600">
          <img
            src="/public/logo-inscription.svg"
            alt=""
            className="w-32 h-32"
          />
          <p className="font-bold text-center">MES OFFRE D'EMPLOI</p>
        </Link>
        <Link className="flex flex-col items-center justify-center w-48 h-48 rounded-3xl mt-6 mb-6 bg-white border border-blue-600">
          <img
            src="/public/logo-inscription.svg"
            alt=""
            className="w-32 h-32"
          />
          <p className="font-bold text-center">RESSOURCES / INFORMATIONS</p>
        </Link>
      </div>
    </div>
  );
}

export default EspacePersonnelJeune;
