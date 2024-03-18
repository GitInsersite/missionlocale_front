import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";

function Formation() {
  const [formation, setFormation] = useState(null);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const { id } = useParams();

  // Dynamically get the API URL based on the environment
  const apiUrlEnv = import.meta.env.MODE === 'production'
  ? import.meta.env.VITE_API_URL_PROD
  : import.meta.env.VITE_API_URL_DEV;

  useEffect(() => {
    const apiUrl = `${apiUrlEnv}/api/formations/${id}`;

    axios
      .get(apiUrl)
      .then((response) => {
        console.log("API Response:", response);
        setFormation(response.data.formation);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [id]);

  const handleInscription = async () => {
    try {
      // Retrieve the token from local storage
      const authToken = localStorage.getItem("authToken");
      console.log("authToken:", authToken);
  
      const headers = {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      };
  
      console.log("Request Headers:", headers);
  
      // Make API call to register for the workshop
      const registrationUrl = `${apiUrlEnv}/api/formations/${id}/postuler`;
  
      const response = await axios.post(registrationUrl, null, headers);
  
      console.log("Registration Response:", response);
  
      // Handle success, e.g., show a success message or update the UI
      setSuccess(response.data.success || 'Registration successful.');
    } catch (error) {
      console.error("Error registering for the workshop:", error);
      
      // Handle error, e.g., show an error message to the user
      // Set the error state to display the error message
      setError(error.response?.data?.error || 'An error occurred while registering.');
    }
  };

  if (!formation) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div
        className="bg-image bg-cover bg-center h-12 flex justify-center items-center text-white font-bold sm:h-16 md:h-28 lg:h-40 xl:h-52"
        style={{ backgroundImage: "url(/MicrosoftTeams-image12.png)" }}
      >
        <h1 className="md:text-3xl">FORMATION</h1>
      </div>
      <div className="flex flex-col items-center pt-6 bg-[#F6F6F6] md:px-14 lg:px-20">
        <div className="border-2 border-[#D70B52] flex flex-col px-4 bg-white rounded-lg mb-4 pt-2 w-[90%]">
          <h2 className="font-semibold text-lg mb-2">{formation.title}</h2>
          <p className="mb-4">{formation.description}</p>
          {error && <div className="text-red-500">{error}</div>} {/* Display error message */}
          {success && <div className="text-green-500">{success}</div>} {/* Display success message */}
          <button
            onClick={handleInscription}
            className="bg-[#D70B52] text-white py-1 px-2 text-center rounded-xl text-sm mb-6 w-[55%] md:w-56"
          >
            S&apos;inscrire à la formation
          </button>
        </div>
        <div className="flex mb-6 justify-center items-center md:justify-start md:items-center md:w-[90%] md:ml-4">
          <div className=" w-[40%] md:w-fit md:mr-4">
            <p className="font-semibold text-sm md:text-base">
              LA PROCHAINE FORMATION
            </p>
          </div>
          <div className="flex flex-col items-center w-[50%] md:w-fit bg-white rounded-lg px-4 py-2">
            <p className="font-bold text-sm text-center">
              {`DU ${formation.start} AU ${formation.end}`}
            </p>
            <p className="text-sm font-semibold flex justify-center items-center">
              <FaLocationDot className="mr-1 text-[#D70B52]" />
              {`Lieu de la formation: ${formation.place}`}
            </p>
          </div>
        </div>
        <div className="border-2 border-[#D70B52] flex flex-col px-4 bg-white rounded-lg mb-4 pt-2 w-[90%]">
          <h2 className="font-semibold text-lg mb-2">Resume</h2>
          <p className="mb-4">{formation.job_summary}</p>
        </div>
        <div className="border-2 border-[#D70B52] flex flex-col px-4 bg-white rounded-lg mb-4 pt-2 w-[90%]">
          <h2 className="font-semibold text-lg mb-2">
            OBJECTIF DE LA FORMATION
          </h2>
          <p className="mb-4">{formation.objectives}</p>
        </div>
        <div className="border-2 border-[#D70B52] flex flex-col px-4 bg-white rounded-lg mb-4 pt-2 w-[90%]">
          <h2 className="font-semibold text-lg mb-2">DUREE ET PREREQUIS</h2>
          <p className="mb-4 font-semibold">{`Durée : ${formation.duration}`}</p>
          <p className="mb-4 font-semibold">{`Prérequis : ${formation.prerequisites}`}</p>
        </div>
        <div className="border-2 border-[#D70B52] flex flex-col px-4 bg-white rounded-lg mb-4 pt-2 w-[90%]">
          <h2 className="font-semibold text-lg mb-2">
            PROGRAMME DE LA FORMATION
          </h2>
          <p className="mb-4">{formation.program}</p>
        </div>
      </div>
    </div>
  );
}

export default Formation;
