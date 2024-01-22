import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function UnAtelier() {
  const [atelier, setAtelier] = useState(null);
  const [date, setDate] = useState(null);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const { id } = useParams();

  // Dynamically get the API URL based on the environment
  const apiUrlEnv = import.meta.env.MODE === 'production'
  ? import.meta.env.VITE_API_URL_PROD
  : import.meta.env.VITE_API_URL_DEV;

  useEffect(() => {
    const apiUrl = `${apiUrlEnv}/api/ateliers/${id}`;

    axios
      .get(apiUrl)
      .then((response) => {
        console.log("API Response:", response);
        setAtelier(response.data.atelier);
        setDate(response.data)
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
      const registrationUrl = `http://localhost:8000/api/atelier/${id}/inscription`;
  
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
  

  if (!atelier) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div
        className="bg-image bg-cover bg-center h-12 flex justify-center items-center text-white font-bold sm:h-16 md:h-28 lg:h-40 xl:h-52"
        style={{ backgroundImage: "url(MicrosoftTeams-image13.png)" }}
      >
        <h1 className="md:text-3xl">ATELIER</h1>
      </div>
      <div className="flex flex-col items-center pt-6 bg-[#F6F6F6] md:px-14 lg:px-20">
        <div className="border-2 border-[#95c11f] flex flex-col px-4 bg-white rounded-lg mb-4 pt-2 w-[90%]">
          <h2 className="font-semibold text-lg mb-2">{atelier.title}</h2>
          <p className="mb-4">{atelier.description}</p>
          {error && <div className="text-red-500">{error}</div>} {/* Display error message */}
          {success && <div className="text-green-500">{success}</div>} {/* Display success message */}
          <button
            onClick={handleInscription}
            className="bg-[#95c11f] text-white py-1 px-2 text-center rounded-xl text-sm mb-6 w-[55%] md:w-56"
          >
            S&apos;inscrire à l&apos;atelier
          </button>
        </div>
        <div className="flex mb-6 md:justify-start md:items-center md:w-[90%] md:ml-4">
          <div className=" w-[40%] md:w-fit md:mr-4">
            <p className="font-semibold">LE PROCHAIN ATELIER</p>
          </div>
          <div className="flex justify-between w-[60%] md:w-fit font-bold">
            <p className="bg-white px-2 py-3 rounded-lg md:mr-4 md:px-3">
              {date.day}
            </p>
            <p className="bg-white px-2 py-3 rounded-lg md:mr-4 md:px-3">
              {date.month}
            </p>
            <p className="bg-white px-2 py-3 rounded-lg md:mr-4 md:px-3">
              {date.year}
            </p>
          </div>
        </div>
        <div className="border-2 border-[#95c11f] flex flex-col px-4 bg-white rounded-lg mb-4 pt-2 w-[90%]">
          <h2 className="font-semibold text-lg mb-2">RESUME</h2>
          <p className="mb-4">{atelier.resume}</p>
        </div>
        <div className="border-2 border-[#95c11f] flex flex-col px-4 bg-white rounded-lg mb-4 pt-2 w-[90%]">
          <h2 className="font-semibold text-lg mb-2">
            OBJETIF DE L&apos;ATELIER
          </h2>
          <p className="mb-4">{atelier.objectif}</p>
        </div>
      </div>
    </div>
  );
}

export default UnAtelier;
