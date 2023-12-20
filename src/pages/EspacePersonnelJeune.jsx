import { Link } from "react-router-dom";

function EspacePersonnelJeune() {
  return (
    <div className="bg-[#F6F6F6]">
      <div
        className="bg-image bg-cover bg-center h-12 flex justify-center items-center text-white font-bold sm:h-16 md:h-28 lg:h-40 xl:h-52 2xl:h-96"
        style={{ backgroundImage: "url(/public/MicrosoftTeams-image12.png)" }}
      >
        <h1 className="md:text-3xl">ESPACE PERSONNEL</h1>
      </div>
      <div className="flex flex-col items-center md:px-32">
        <div className="md:w-full md:grid md:grid-cols-2 md:px-8 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
          <Link className="flex flex-col items-center justify-center w-48 h-48 rounded-3xl mt-6 bg-white">
            <img
              src="/public/contact.svg"
              alt=""
              className="w-32 h-32"
            />
            <p className="font-bold text-center">CONTACTER MON CONSEILLER</p>
          </Link>
          <Link className="flex flex-col items-center justify-center w-48 h-48 rounded-3xl mt-6 bg-white">
            <img src="/public/info-perso.svg" alt="" className="w-32 h-32" />
            <p className="font-bold text-center">INFORMATIONS PERSONNELLES</p>
          </Link>
          <Link className="flex flex-col items-center justify-center w-48 h-48 rounded-3xl mt-6 bg-white">
            <img
              src="/public/rendez-vous.svg"
              alt=""
              className="w-32 h-32"
            />
            <p className="font-bold text-center">MES RENDEZ-VOUS</p>
          </Link>
          <Link className="flex flex-col items-center justify-center w-48 h-48 rounded-3xl mt-6 bg-white">
            <img src="/public/documents.svg" alt="" className="w-32 h-32" />
            <p className="font-bold text-center">MES DOCUMENTS</p>
          </Link>
          <Link className="flex flex-col items-center justify-center w-48 h-48 rounded-3xl mt-6 bg-white">
            <img src="/public/ateliers.svg" alt="" className="w-32 h-32" />
            <p className="font-bold text-center">MES ATELIERS</p>
          </Link>
          <Link className="flex flex-col items-center justify-center w-48 h-48 rounded-3xl mt-6 bg-white">
            <img src="/public/formations.svg" alt="" className="w-32 h-32" />
            <p className="font-bold text-center">MES FORMATIONS</p>
          </Link>
          <Link className="flex flex-col items-center justify-center w-48 h-48 rounded-3xl mt-6 bg-white">
            <img src="/public/offre-emploi.svg" alt="" className="w-32 h-32" />
            <p className="font-bold text-center">MES OFFRE D'EMPLOI</p>
          </Link>
          <Link className="flex flex-col items-center justify-center w-48 h-48 rounded-3xl mt-6 mb-6 bg-white">
            <img
              src="/public/ressources-informations.svg"
              alt=""
              className="w-32 h-32"
            />
            <p className="font-bold text-center">RESSOURCES / INFORMATIONS</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EspacePersonnelJeune;
