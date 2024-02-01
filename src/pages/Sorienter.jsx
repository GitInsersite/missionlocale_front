import { useState } from "react";
import axios from "axios";
import '/accompagnement.css'; // Importez les styles CSS


function Sorienter() {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

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
        <h1 className="md:text-3xl">S&apos;ORIENTER</h1>
      </div>
      <div className="flex flex-col px-4 pt-4 font-semibold md:px-14 lg:px-20">
      
        <section>
      <div className="container">
        <div className="carte" style={{ '--clr': '#ff0066' }}>
          <div className="imgBx">
            <img src="/public/think.jpg" alt="Accompagnement" />
          </div>
          <div className="conten">
          <h2 className="font-bold text-black text-lg mb-4 md:text-2xl">
          <span className="border-b-2 border-[#D60B52] pb-[0.5px]">
           QUEL MET 
          </span>
          IER EST FAIT POUR MOI
        </h2>     
               <p >
               Un accompagnement est proposé pour t’aider dans ta recherche d’emploi ou de formation, personnalisé en fonction de tes attentes. Ces accompagnements seront aussi là pour t’aider sur le plan social, tels que la santé, le logement ou bien encore la mobilité.  

 

Un conseiller est assigné pour t’accompagner et t’aider dans toutes les démarches d’insertion, d’orientation, de formation ou de recherche d’emploi. De nombreux dispositifs te seront alors présentés pour t’aider dans tes démarches professionnelles (PACEA, CEJ, Parrainage...) et sociales (Santé, Logement, Mobilité). 
              
            </p>
            <div className="rdv">
  <button onClick={handleInscription}>PRENDRE RDV AVEC UN CONSEILLER</button>
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
