import { HashLink as Link } from 'react-router-hash-link';

function EspacePersonnelJeune() {
  return (
    <div className="bg-[#F6F6F6]">
      <div
        className="bg-image bg-cover bg-center h-12 flex justify-center items-center text-white font-bold sm:h-16 md:h-28 lg:h-40 xl:h-52"
        style={{ backgroundImage: "url(MicrosoftTeams-image12.png)" }}
      >
        <h1 className="md:text-3xl">ESPACE PERSONNEL</h1>
      </div>
      <div className="flex flex-col items-center md:px-32 xl:px-40">
        <div className="md:w-full md:grid md:grid-cols-2 md:px-8 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
          <Link 
          smooth to="/espace-personnel-jeune2#contactSection"
          className="flex flex-col items-center justify-center w-48 h-48 rounded-3xl mt-6 bg-white">
            <img
              src="contact.svg"
              alt=""
              className="w-32 h-32"
            />
            <p className="font-bold text-center">CONTACTER MON CONSEILLER</p>
          </Link>
          <Link smooth to="/espace-personnel-jeune2#infoSection" className="flex flex-col items-center justify-center w-48 h-48 rounded-3xl mt-6 bg-white">
            <img src="info-perso.svg" alt="" className="w-32 h-32" />
            <p className="font-bold text-center">INFORMATIONS PERSONNELLES</p>
          </Link>
          <Link smooth to="/espace-personnel-jeune2#rendezvouzSection" className="flex flex-col items-center justify-center w-48 h-48 rounded-3xl mt-6 bg-white">
            <img
              src="rendez-vous.svg"
              alt=""
              className="w-32 h-32"
            />
            <p className="font-bold text-center">MES RENDEZ-VOUS</p>
          </Link>
          <Link smooth to="/espace-personnel-jeune2#docuSection" className="flex flex-col items-center justify-center w-48 h-48 rounded-3xl mt-6 bg-white">
            <img src="documents.svg" alt="" className="w-32 h-32" />
            <p className="font-bold text-center">MES DOCUMENTS</p>
          </Link>
          <Link smooth to="/espace-personnel-jeune2#atelierSection" className="flex flex-col items-center justify-center w-48 h-48 rounded-3xl mt-6 bg-white">
            <img src="ateliers.svg" alt="" className="w-32 h-32" />
            <p className="font-bold text-center">MES ATELIERS</p>
          </Link>
          <Link smooth to="/espace-personnel-jeune2#formationSection" className="flex flex-col items-center justify-center w-48 h-48 rounded-3xl mt-6 bg-white">
            <img src="formations.svg" alt="" className="w-32 h-32" />
            <p className="font-bold text-center">MES FORMATIONS</p>
          </Link>
          <Link smooth to="/espace-personnel-jeune2#emploiSection" className="flex flex-col items-center justify-center w-48 h-48 rounded-3xl mt-6 bg-white">
            <img src="offre-emploi.svg" alt="" className="w-32 h-32" />
            <p className="font-bold text-center">MES OFFRES D'EMPLOI</p>
          </Link>
          <Link smooth to="/espace-personnel-jeune2#ressourcesSection" className="flex flex-col items-center justify-center w-48 h-48 rounded-3xl mt-6 mb-6 bg-white">
            <img
              src="ressources-informations.svg"
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
