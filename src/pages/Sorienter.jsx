import { useState } from "react";
import axios from "axios";

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


    <div className="flex px-4 pt-4 font-semibold md:px-14 lg:px-20">
      <figure className="md:flex bg-white rounded-[20%] mx-auto p-8">
        <img class=" rounded-[20%]" src="\jeunefemme.jpg" alt="" width="384" height="51"/>
        <div className="transform translate-y-11 pt-6 space-y-4">
          <blockquote>
          <h2 className="font-bold text-black text-lg mb-4 md:text-2xl">
          <span className="border-b-2 border-[#D60B52] pb-[0.5px]">
            Quel mét
          </span>
          ier est fait pour moi?
        </h2>
        <p className="mb-6">
          Au sein de la Mission Locale, nous vous informons sur toutes les
          possibilités de métiers et de formations professionnelles. Nous vous
          faisons tester de nombreux métiers, en fonction de vos appétences et
          de vos envies, et vous accompagnons dans l’élaboration de votre projet
          professionnel.
        </p>
        <p className="mb-6">
          En fonction de vos centres d’intérêt, un grand nombre de possibilités
          s’ouvrent à vous. La Mission Locale vous donne la possibilité de
          découvrir les métiers et voies professionnelles possibles, en fonction
          de vos compétences et aspirations.
        </p>
          </blockquote>
        <figcaption class="text justify center ">
    
          <div className="flex flex-col px-4 pt-4 font-semibold md:px-14 lg:px-20">
        
        {error && <div className="text-red-500">{error}</div>}{" "}
        {/* Display error message */}
        {success && <div className="text-green-500">{success}</div>}{" "}
        {/* Display success message */}
        <button
          onClick={handleInscription}
          className="bg-[#D60B52] text-white font-semibold py-1 text-center rounded-lg text-sm mb-6 md:w-64"
        >
          PRENDRE RDV AVEC UN CONSEILLER
        </button>
      </div>
        </figcaption>
        </div>
      </figure>
      </div>

      <br />
      
    </div>
  );
}

export default Sorienter;
