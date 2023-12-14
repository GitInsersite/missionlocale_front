import { Link } from "react-router-dom";

function Expertise() {
  return (
    <div>
      <div
        className="bg-image bg-cover bg-center h-12 flex justify-center items-center text-white font-bold"
        style={{ backgroundImage: "url(/public/MicrosoftTeams-image12.png)" }}
      >
        <h1>NOTRE EXPERTISE</h1>
      </div>
      <div className="flex flex-col pl-4 p-4 border-red-500 border-2 font-semibold">
        <p className="mb-6">
          L’entreprise est au cœur de notre projet. La Mission Locale s’engage à
          vos côtés, vous accompagne et vous conseille au quotidien grâce à
          l’expertise de nos chargés de relations entreprises !
        </p>
        <p className="mb-6">
          En tant que membre service public de l’emploi, la Mission Locale vous
          offre un service sur mesure pour répondre à l’ensemble de vos besoins
          tels que le recrutement de jeunes talents mais aussi la mise en œuvre
          de votre politique RSE.
        </p>
        <p className="mb-6">
          Vous avez besoin d’échanger sur le profil de poste adapté à votre
          organisation, d’avoir des informations sur les mesures d’aide à
          l’embauche (contrats aidés, alternance…), d’organiser une session de
          recrutement ? Prenez contact avec nos experts métiers qui prendront en
          charge l’intégralité de vos besoins.
        </p>
        <div>
        <Link className="bg-[#D60B52] text-white font-semibold py-1 px-3 text-center rounded-lg text-sm mb-6">
          PRENDRE RDV
        </Link>
        </div>
      </div>
    </div>
  );
}

export default Expertise;
