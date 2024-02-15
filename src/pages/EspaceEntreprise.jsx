import { HashLink as Link } from "react-router-hash-link";

function EspaceEntreprise() {
  return (
    <div className="bg-[#F6F6F6]">
      <div
        className="bg-image bg-cover bg-center h-12 flex justify-center items-center text-white font-bold sm:h-16 md:h-28 lg:h-40 xl:h-52"
        style={{ backgroundImage: "url(MicrosoftTeams-image14.png)" }}
      >
        <h1 className="md:text-3xl">ESPACE ENTREPRISE</h1>
      </div>
      <div className="flex flex-col items-center pb-6 md:px-32 xl:px-72">
        <div className="md:w-full md:grid md:grid-cols-2 md:px-8 md:gap-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-72">
          <Link
            smooth
            to="/espace-personnel-entreprise#infoSection"
            className="flex flex-col items-center justify-center w-48 h-48 rounded-3xl mt-6 bg-white"
          >
            <img
              src="info-perso_entreprise.svg"
              alt=""
              className="w-32 h-32"
            />
            <p className="font-bold text-center">INFORMATIONS PERSONNELLES</p>
          </Link>
          <Link
            smooth
            to="/espace-personnel-entreprise#offreSection"
            className="flex flex-col items-center justify-center w-48 h-48 rounded-3xl mt-6 bg-white"
          >
            <img
              src="depot_offre-emploi.svg"
              alt=""
              className="w-32 h-32"
            />
            <p className="font-bold text-center">DEPOSER LES OFFRES D'EMPLOI</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EspaceEntreprise;
