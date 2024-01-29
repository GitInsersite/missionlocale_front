import { useState } from "react";
import axios from "axios";

function TrouverUnEmploi() {

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  // Dynamically get the API URL based on the environment
  const apiUrlEnv = import.meta.env.MODE === 'production'
  ? import.meta.env.VITE_API_URL_PROD
  : import.meta.env.VITE_API_URL_DEV;

  const handleInscription = () => {
    // Retrieve the token from local storage
    const authToken = localStorage.getItem("authToken");
    //console.log("authToken:", authToken);

    // Check if authToken exists before making the request
    if (authToken) {
      // Set the Authorization header with the token
      const headers = {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      };

      //console.log("Request Headers:", headers);

      // Make API call to register for the workshop
      const registrationUrl = `${apiUrlEnv}/api/notifierConseillerFormulaire`;

      axios
        .post(registrationUrl, null, headers)
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
    } else {
      console.error("Auth token not found.");
      // Handle the case where the auth token is not found
    }
  };

  return (
    <div className="bg-[#F6F6F6]">
      <div
        className="bg-image bg-cover bg-center h-12 flex justify-center items-center text-white font-bold sm:h-16 md:h-28 lg:h-40 xl:h-52"
        style={{ backgroundImage: "url(MicrosoftTeams-image12.png)" }}
      >
        <h1 className="md:text-3xl">TROUVER UN EMPLOI</h1>
      </div>

      <br /> <br />
      <div className="breadcrumb px-4 pt-4 font-semibold md:px-14 lg:px-20 xl:px-52">
       <a href="/">Accueil</a>{'>'}
        <a href="/Services">Services</a> {'>'}
        <a className="text-[#D70B52]" href="/TrouverUnEmploi">Trouver un emploi</a>
        </div> <br />

      <div>
      <div className="flex flex-col px-4 pt-4  font-semibold bg-[#F6F6F6] md:px-14 lg:px-20 xl:px-52">

            <div className="flex font-sans">
              <div className="flex-none w-56">
                <img src="/smileyrousse.jpg" alt="" className="object-cover rounded-[20%]" loading="lazy" />
              </div>

              <div className="bg-white rounded-[5%] ">
                <form class="flex-auto p-6">
                  <div className="flex flex-wrap t-20px l-20px relative">

                  <h2 className="font-bold text-black text-lg mb-4 md:text-2xl">
          <span className="border-b-2 border-[#D60B52] pb-[0.5px]">
            LA MISSION
          </span>{" "}
          LOCALE T’ACCOMPAGNE VERS L’EMPLOI
        </h2>
        <p className="text-sm text-slate-500">
          Un conseiller est à votre disposition sans rendez-vous pour vous
          accompagner dans la mise à jour de vos outils de recherche d’emploi:
          CV, lettre de motivation, compte LinkedIn… <br /> N’hésitez donc pas à
          prendre rendez-vous avec votre conseiller si vous êtes à la recherche
          d’un emploi et pour que l’on puisse vous présenter nos conseils et nos
          différents dispositifs d’insertion professionnelle.
        </p>
        <br />
        <p className="text-sm text-slate-500">
          La Mission Locale propose de nombreux ateliers pour vous aider dans
          vos recherches, les métiers qui recrutent, simulations d’entretiens
          d’embauche… Pour consulter les ateliers, il vous suffit de consulter
          notre page «Ateliers», qui détaille chaque semaine les différents
          ateliers gratuits qui sont disponibles pour vous aider à développer
          vos compétences professionnelles.
        </p>
        <div className="flex flex-col px-4 pt-4 font-semibold md:px-14 lg:px-20">
        {error && <div className="text-red-500">{error}</div>}{" "}
        {/* Display error message */}
        {success && <div className="text-green-500">{success}</div>}{" "}
        {/* Display success message */}
        <button 
        onClick={handleInscription}
        className="bg-[#D60B52] text-white font-semibold py-2 px-2 text-center rounded-lg text-sm mb-6 md:w-64">
          PRENDRE RDV AVEC UN CONSEILLER
        </button> 
          </div>
        </div>
        </form>
        </div>
        </div>
        </div> <br />
        </div> <br />
        </div>
        
  );
}

export default TrouverUnEmploi;
