import { useState } from "react";
import axios from "axios";
import '/accompagnement.css'; // Importez les styles CSS
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

function EtreAccompagne() {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const isTabletOrLarger = useMediaQuery({ minWidth: 768 });

  const handleInscription = () => {
    // Make API call to register for the workshop
    const registrationUrl =
      "http://localhost:8000/api/notifierConseillerFormulaire";

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
        style={{ backgroundImage: "url(/public/MicrosoftTeams-image12.png)" }}
      >
        <div className="titre">
        <h1 className="md:text-3xl">ETRE ACCOMPAGNE</h1>
      </div>
      </div>
      
      <div className="breadcrumb px-4 pt-4  md:px-14 lg:px-20 xl:px-52">
        <a className="hover:text-[#D70B52]" href="/">Accueil</a> {'>'}
        <a className="hover:text-[#D70B52]" href="/Services"> Services</a> {'>'}
        <a className="hover:text-[#D70B52]" href="/Etreaccompagne"> Etre accompagné</a>
      </div> 
      
      <section>
      <div className="container_acc">
        <div className="carte" style={{ '--clr': '#ff0066' }}>
          <div className="imgBx">
            <img src="/bosse.jpg" alt="Accompagnement" />
          </div>
          <div className="conten">
          <h2 className="font-bold text-black text-lg mb-4 md:text-2xl">
          <span className="border-b-2 border-[#D60B52] pb-[0.5px]">
            UN ACCOM
          </span>
          PAGNEMENT PERSONNALISE
        </h2>     
               <p >
               Un accompagnement est proposé pour t’aider dans ta recherche d’emploi ou de formation, personnalisé en fonction de tes attentes. Ces accompagnements seront aussi là pour t’aider sur le plan social, tels que la santé, le logement ou bien encore la mobilité.  

 

Un conseiller est assigné pour t’accompagner et t’aider dans toutes les démarches d’insertion, d’orientation, de formation ou de recherche d’emploi. De nombreux dispositifs te seront alors présentés pour t’aider dans tes démarches professionnelles (PACEA, CEJ, Parrainage...) et sociales (Santé, Logement, Mobilité). 
              
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

export default EtreAccompagne;
