import { useState } from "react";
import axios from "axios";
import '/emploi.css';
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";


function TrouverUnEmploi() {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const isTabletOrLarger = useMediaQuery({ minWidth: 768 });

  // Dynamically get the API URL based on the environment
  const apiUrlEnv =
    import.meta.env.MODE === "production"
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

      <div className="breadcrumb px-4 pt-4  md:px-14 lg:px-20 xl:px-52">
        <a className="hover:text-[#D70B52]" href="/">Accueil</a> {'>'}
        <a className="hover:text-[#D70B52]" href="/Services"> Services</a> {'>'}
        <a className="hover:text-[#D70B52]" href="/Etreaccompagne"> Trouver un emploi</a>
      </div> 
      <section>
      <div className="bloc">
        <div className="carte" style={{ '--clr': '#ff0066' }}>
          <div className="imgBxe">
            <img src="/roux.jpg" alt="Accompagnement" />
          </div>
          <div className="contente">
          <h2 className="font-bold text-black text-lg mb-4 md:text-2xl">    
          LA MISSION LOCALE T'ACCOMPAGNE VERS
          
          <span className="border-b-2 border-[#D60B52] pb-[0.5px]">{" "}
           L'EMPLOI
           </span>

        </h2>     
               <p >
               Des équipes spécialisées en lien avec ton conseiller sont là pour t’aider à trouver une emploi ! Elles sont là pour négocier des offres d’emploi avec les entreprises, organiser des actions de recrutement ainsi que te préparer activement à la recherche d’emploi et à la rencontre avec les employeurs. 

 

N’hésite donc pas à prendre rendez-vous avec ton conseiller si tu es à la recherche d’un emploi et pour que l’on puisse te présenter nos conseils et nos différents dispositifs d’insertion professionnelle. 
              
            </p>
            <div className="rdv">
            <Link to="/connexion-jeune"  >PRENDRE RDV AVEC UN CONSEILLER</Link>
</div>

          </div>
        </div>
      </div>
    </section>

     
    </div>
  );
}

export default TrouverUnEmploi;
