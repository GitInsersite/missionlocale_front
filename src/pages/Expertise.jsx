import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Expertise() {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  // Dynamically get the API URL based on the environment
  const apiUrlEnv =
    import.meta.env.MODE === "production"
      ? import.meta.env.VITE_API_URL_PROD
      : import.meta.env.VITE_API_URL_DEV;

  const handleInscription = () => {
    // Make API call to register for the workshop
    const registrationUrl = `${apiUrlEnv}/api/notifierConseillerFormulaire`;

    axios
      .post(registrationUrl)
      .then((response) => {
        console.log("Registration Response:", response);
        // Handle success, e.g., show a success message or update the UI
        setSuccess(response.data.success || "Registration successful.");
      })
      .catch((error) => {
        console.error("Error registering for the workshop:", error);
        // Handle error, e.g., show an error message to the user
        // Set the error state to display the error message
        setError(
          error.response.data.error || "An error occurred while registering."
        );
      });
  };

  return (
    <div>
      <div
        className="bg-image bg-cover bg-center h-12 flex justify-center items-center text-white font-bold sm:h-16 md:h-28 lg:h-40 xl:h-52"
        style={{ backgroundImage: "url(MicrosoftTeams-image14.png)" }}
      >
        <h1 className="md:text-3xl">NOTRE EXPERTISE</h1>

      </div>
      <br />

      <div className="breadcrumb px-4 pt-4 md:px-14 lg:px-20 xl:px-52 mt-14 mb-10">
        <a href="/">Accueil</a> {">"}
        <a href="/"> Entreprise </a>
        {">"}
        <a className="text-[#F29200]" href="/expertise">
          {" "}
          Notre expertise
        </a>
      </div>

      <div className="flex flex-col pl-4 p-4 md:px-14 lg:px-20 xl:px-52">
        <p className="mb-10">
          L’entreprise est au cœur de notre projet. La Mission Locale s’engage à
          vos côtés, vous accompagne et vous conseille au quotidien grâce à
          l’expertise de nos chargés de relations entreprises!
        </p>
        <p className="mb-10">
          En tant que membre service public de l’emploi, la Mission Locale vous
          offre un service sur mesure pour répondre à l’ensemble de vos besoins
          tels que le recrutement de jeunes talents mais aussi la mise en œuvre
          de votre politique RSE.
        </p>
        <p className="mb-10 ">
          Vous avez besoin d’échanger sur le profil de poste adapté à votre
          organisation, d’avoir des informations sur les mesures d’aide à
          l’embauche (contrats aidés, alternance…), d’organiser une session de
          recrutement? Prenez contact avec nos experts métiers qui prendront en
          charge l’intégralité de vos besoins.
        </p>
        {error && <div className="text-red-500">{error}</div>}{" "}
        {/* Display error message */}
        {success && <div className="text-green-500">{success}</div>}{" "}
        {/* Display success message */}
        <Link to="/connexion-entreprise"
          onClick={handleInscription}
          className="bg-[#F29200] text-white font-semibold py-1 px-3 text-center rounded-lg text-sm mb-28 mt-16 md:w-64  hover:bg-orange-500 transition-all duration-300 "
        >
          PRENDRE RDV
        </Link>
      </div>
    </div>
  );
}

export default Expertise;
