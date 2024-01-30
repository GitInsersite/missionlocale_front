import { useState } from "react";
import axios from "axios";

function EtreAccompagne() {
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
        <h1 className="md:text-3xl">ETRE ACCOMPAGNE</h1>
      </div> <br /> <br />


      <div className="breadcrumb px-4 pt-4 font-semibold md:px-14 lg:px-20 xl:px-52">
        <a href="/">Accueil</a> {'>'}
        <a href="/Services"> Services</a> {'>'}
        <a className="text-[#D70B52]" href="/Etreaccompagne"> Etre accompagné</a>
      </div> <br />

      <div>
        <div className="flex flex-col pl-4 p-4 px-4 pt-4 font-semibold bg-[#F6F6F6] md:px-10 sm:w-full lg:px-20 xl:px-52">
          <div className="flex font-sans">
            <div className="flex-none w-56">
              <img src="/ouvriers.jpg" alt="" className="object-cover rounded-[20%]" loading="lazy" />
            </div>

            <div className="bg-white rounded-[5%] ">
              <form className="flex-auto p-6">
                <div className="flex flex-wrap t-20px l-20px relative">

                  <h2 className="font-bold text-black text-lg mb-4 md:text-2xl">
                    <span className="border-b-2 border-[#D60B52] pb-[0.5px]">
                      UN ACCOM
                    </span>
                    PAGNEMENT PERSONNALISE
                  </h2>
                  <p className="text-sm text-slate-500">
                  Un accompagnement est proposé pour t’aider dans ta recherche d’emploi ou de formation, personnalisé en fonction de tes attentes. 
                  Ces accompagnements seront aussi là pour t’aider sur le plan social, tels que la santé, le logement ou bien encore la mobilité.
                  </p> <br />
                  <p className="text-sm text-slate-500">
                  Un conseiller est assigné pour t’accompagner et t’aider dans toutes les démarches d’insertion, d’orientation, de formation ou de recherche d’emploi. 
                  De nombreux dispositifs te seront alors présentés pour t’aider dans tes démarches professionnelles (PACEA, CEJ, Parrainage...) et sociales (Santé, Logement, Mobilité). 
                  </p>
                  <div className="flex flex-col px-4 pt-4 font-semibold md:px-14 lg:px-20">
                    {error && <div className="text-red-500">{error}</div>}{" "}
                    {/* Display error message */}
                    {success && <div className="text-green-500">{success}</div>}{" "}
                    {/* Display success message */}
                    <button onClick={handleInscription} className="bg-[#D60B52] text-white font-semibold py-2 text-center rounded-lg text-sm mb-6 md:w-64">
                      PRENDRE RDV AVEC UN CONSEILLER
                    </button>
                  </div>
                </div>

              </form>
            </div>
          </div> <br /> < br />

        </div>
      </div>
    </div>
  );
}

export default EtreAccompagne;
