import { Link } from "react-router-dom";

function TrouverUnEmploi() {
  return (
    <div className="bg-[#F6F6F6]">
      <div
        className="bg-image bg-cover bg-center h-12 flex justify-center items-center text-white font-bold"
        style={{ backgroundImage: "url(/public/MicrosoftTeams-image12.png)" }}
      >
        <h1>TROUVER UN EMPLOI</h1>
      </div>
      <div className="flex flex-col pl-4 p-4 border-red-500 border-2 font-semibold">
        <h2 className="font-bold text-black text-lg mb-4">
          <span className="border-b-2 border-[#D60B52] pb-[0.5px]">
            La Mission
          </span>{" "}
          Locale t’accompagne vers l’emploi
        </h2>
        <h3 className="leading-tight">
          L’objectif de la Mission Locale est simple : vous permettre de trouver
          un emploi ! Des équipes spécialisées en lien avec votre conseiller
          sont là pour :
        </h3>
        <ul className="mb-6 mt-6 leading-tight">
          <li>- Négocier des offres d’emploi avec les entreprises</li>
          <li>
            - Organiser des actions de recrutement pour vous ou pour tout autre
            jeune de la Mission Locale
          </li>
          <li>
            - Vous préparer activement à la recherche d’emploi et à la rencontre
            avec les employeurs{" "}
          </li>
        </ul>
      </div>
      <div className="flex flex-col px-4 pt-4 border-red-500 border-2 font-semibold ">
        <h2 className="font-bold text-black text-lg mb-4">
          <span className="border-b-2 border-[#D60B52] pb-[0.5px]">
            Nos cons
          </span>
          eillers
        </h2>
        <p className="mb-6">
          Un conseiller est à votre disposition sans rendez-vous pour vous
          accompagner dans la mise à jour de vos outils de recherche d’emploi :
          CV, lettre de motivation, compte LinkedIn… <br /> N’hésitez donc pas à
          prendre rendez-vous avec votre conseiller si vous êtes à la recherche
          d’un emploi et pour que l’on puisse vous présenter nos conseils et nos
          différents dispositifs d’insertion professionnelle.
        </p>
      </div>
      <div className="flex flex-col px-4 pt-4 border-red-500 border-2 font-semibold ">
        <h2 className="font-bold text-black text-lg mb-4">
          <span className="border-b-2 border-[#D60B52] pb-[0.5px]">
            Nos ateli
          </span>
          ers
        </h2>
        <p className="mb-6">
          La Mission Locale propose de nombreux ateliers pour vous aider dans
          vos recherches, les métiers qui recrutent, simulations d’entretiens
          d’embauche… Pour consulter les ateliers, il vous suffit de consulter
          notre page « Ateliers », qui détaille chaque semaine les différents
          ateliers gratuits qui sont disponibles pour vous aider à développer
          vos compétences professionnelles.
        </p>
        <Link className="bg-[#D60B52] text-white font-semibold py-1 text-center rounded-lg text-sm mb-6">
          PRENDRE RDV AVEC UN CONSEILLER
        </Link>
      </div>
    </div>
  );
}

export default TrouverUnEmploi;
