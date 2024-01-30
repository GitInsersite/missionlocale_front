import { useState } from "react";
import axios from "axios";

function Sorienter() {
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
    <div className="bg-[#F6F6F6]">
      <div
        className="bg-image bg-cover bg-center h-12 flex justify-center items-center text-white font-bold sm:h-16 md:h-28 lg:h-40 xl:h-52"
        style={{ backgroundImage: "url(MicrosoftTeams-image12.png)" }}
      >
        <h1 className="md:text-3xl">S&apos;ORIENTER</h1>
      </div>{" "}
      <br />
      <div className="breadcrumb px-4 pt-4 font-semibold md:px-14 lg:px-20 xl:px-52">
        <a href="/">Accueil</a> {">"}
        <a href="/Services"> Services </a>
        {">"}
        <a className="text-[#D70B52]" href="/Sorientier">
          {" "}
          S'orientier
        </a>
      </div>{" "}
      <br />
      <div>
        <div className="flex flex-col px-4 pt-4  font-semibold bg-[#F6F6F6] md:px-14 lg:px-20 xl:px-52">
          <div className="flex font-sans">
            <div className="flex-none w-56">
              <img
                className="object-cover rounded-[20%]"
                loading="lazy"
                src="\jeunefemme.jpg"
                alt=""
              />
            </div>

            <div className="bg-white rounded-[5%] flex font-sans">
              <form class="flex-auto p-6 bg-white rounded-[5%]">
                <div className="flex flex-wrap">
                  <h2 className="font-bold text-black text-lg mb-4 md:text-2xl">
                    <span className="border-b-2 border-[#D60B52] pb-[0.5px]">
                      QUEL MET
                    </span>
                    IER EST FAIT POUR MOI ?
                  </h2>
                  <p class="text-sm text-slate-500">
                    Au sein de la Mission Locale, nous t’informons sur toutes
                    les possibilités de métiers et de formations
                    professionnelles. En fonction de tes centres d’intérêt, un
                    grand nombre de possibilités s’ouvrent à toi. La Mission
                    Locale te donne la possibilité de découvrir les métiers et
                    voies professionnelles possibles, en fonction de tes
                    compétences et aspirations. Cela passe par différents
                    parcours personnalisés, ateliers, et mises en situation
                    réelles de travail pour vous aider à trouver votre voie dans
                    le monde professionnel.
                  </p>{" "}
                  <br />
                  <p class="text-sm text-slate-500">
                    En fonction de vos centres d’intérêt, un grand nombre de
                    possibilités s’ouvrent à vous. La Mission Locale vous donne
                    la possibilité de découvrir les métiers et voies
                    professionnelles possibles, en fonction de vos compétences
                    et aspirations.
                  </p>
                  <div className="flex flex-col px-4 pt-4 font-semibold md:px-14 lg:px-20">
                    {error && <div className="text-red-500">{error}</div>}{" "}
                    {/* Display error message */}
                    {success && (
                      <div className="text-green-500">{success}</div>
                    )}{" "}
                    {/* Display success message */}
                    <button
                      onClick={handleInscription}
                      className="bg-[#D60B52] text-white font-semibold py-1 text-center rounded-lg text-sm mb-6 md:w-64"
                    >
                      PRENDRE RDV AVEC UN CONSEILLER
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>{" "}
          <br /> <br />
        </div>{" "}
      </div>
    </div>
  );
}

export default Sorienter;
