import { useState } from "react";

import axios from "axios";
import { useMediaQuery } from "react-responsive";
import "/orienter.css"; // Importez les styles CSS

function Sorienter() {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [isClicked, setIsClicked] = useState(false); // État pour vérifier si le bouton a été cliqué

  const handleRedirectToConnexion = () => {
    history.push("/connexion-jeune?redirectFrom=sorienter");
  };

  const isTabletOrLarger = useMediaQuery({ minWidth: 768 });

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
        setIsClicked(true); // Mettre à jour l'état lorsque le bouton est cliqué
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
    <div className="bg-[#F6F6F6]">
      <div
        className="bg-image bg-cover bg-center h-12 flex justify-center items-center text-white font-bold sm:h-16 md:h-28 lg:h-40 xl:h-52"
        style={{ backgroundImage: "url(MicrosoftTeams-image12.png)" }}
      >
        <h1 className="md:text-3xl">S&apos;ORIENTER</h1>
      </div>
      <div className="flex flex-col px-4 pt-4  md:px-14 lg:px-20">
        <div className="breadcrumb px-4 pt-4  md:px-14 lg:px-20 xl:px-52">
          <a className="hover:text-[#D70B52]" href="/">
            Accueil
          </a>{" "}
          {">"}
          <a className="hover:text-[#D70B52]" href="/Services">
            {" "}
            Services
          </a>{" "}
          {">"}
          <a className="hover:text-[#D70B52]" href="/Etreaccompagne">
            {" "}
            S'orienter
          </a>
        </div>
        <section>
          <div
            className={`bloc_orient ${
              isClicked
                ? "transition-transform duration-500 transform translate-y-10"
                : ""
            }`}
          >
            <div className="carte" style={{ "--clr": "#ff0066" }}>
              <div className="imgBx">
                <img src="/think.jpg" alt="Accompagnement" />
              </div>
              <div className="conten">
                <h2 className="font-bold text-black text-lg mb-4 md:text-2xl">
                  <span className="border-b-2 border-[#D60B52] pb-[0.5px]">
                    QUEL MET
                  </span>
                  IER EST FAIT POUR MOI
                </h2>
                <p>
                  Un accompagnement est proposé pour t’aider dans ta recherche
                  d’emploi ou de formation, personnalisé en fonction de tes
                  attentes. Ces accompagnements seront aussi là pour t’aider sur
                  le plan social, tels que la santé, le logement ou bien encore
                  la mobilité. Un conseiller est assigné pour t’accompagner et
                  t’aider dans toutes les démarches d’insertion, d’orientation,
                  de formation ou de recherche d’emploi. De nombreux dispositifs
                  te seront alors présentés pour t’aider dans tes démarches
                  professionnelles (PACEA, CEJ, Parrainage...) et sociales
                  (Santé, Logement, Mobilité).
                </p>
                <div className="rdv">
                  <button onClick={handleRedirectToConnexion}>
                    PRENDRE RDV AVEC UN CONSEILLER
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {error && <div className="text-red-500">{error}</div>}{" "}
        {/* Display error message */}
        {success && <div className="text-green-500">{success}</div>}{" "}
        {/* Display success message */}
      </div>
    </div>
  );
}

export default Sorienter;
