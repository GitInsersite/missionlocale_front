import { useState, useEffect } from "react";
import axios from "axios";
import { useMediaQuery } from "react-responsive";

function OffreEmploi() {
  const [offresEmploi, setOffresEmploi] = useState([]);
  const [pagination, setPagination] = useState({});
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const isLaptopOrLarger = useMediaQuery({ minWidth: 1024 });

  // Dynamically get the API URL based on the environment
  const apiUrlEnv =
    import.meta.env.MODE === "production"
      ? import.meta.env.VITE_API_URL_PROD
      : import.meta.env.VITE_API_URL_DEV;

  useEffect(() => {
    const apiUrl = `${apiUrlEnv}/api/emploi`;

    axios
      .get(apiUrl)
      .then((response) => {
        console.log("API Response:", response);
        setOffresEmploi(response.data.emploi);
        setPagination(response.data.pagination);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError("An error occurred while fetching job offers.");
      });
  }, []);

  const handleInscription = async (id) => {
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

      // Make API call to register
      const registrationUrl = `${apiUrlEnv}/api/emploi/${id}/postulerOffre`;

      const response = await axios.post(registrationUrl, null, headers);

      console.log("Registration Response:", response);

      // Handle success, e.g., show a success message or update the UI
      setSuccess(response.data.success || "Application successful.");
      // Clear any previous error message
      setError(null);

      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) {
      console.error("Error applying for the job:", error);

      // Handle error, e.g., show an error message to the user
      // Set the error state to display the error message
      setError(
        error.response?.data?.error ||
          "An error occurred while applying for the job."
      );
      // Clear any previous success message
      setSuccess(null);

      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handlePageChange = async (page) => {
    try {
      const apiUrl = `${apiUrlEnv}/api/emploi?page=${page}`;

      const response = await axios.get(apiUrl);

      console.log("API Response:", response);
      setOffresEmploi(response.data.emploi);
      setPagination(response.data.pagination);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("An error occurred while fetching job offers.");
    }
  };

  if (!offresEmploi) {
    return <p>Loading...</p>;
  }

  return (
    <div className="bg-[#f6f6f6]">
      <div
        className="bg-image bg-cover bg-center h-12 flex justify-center items-center text-white font-bold sm:h-16 md:h-28 lg:h-40 xl:h-52"
        style={{ backgroundImage: "url(MicrosoftTeams-image12.png)" }}
      >
        <h1 className="md:text-3xl">OFFRE D&apos;EMPLOI</h1>
      </div>

      <div className="flex flex-col items-center pt-6 md:mx-16 lg:mx-32 xl:mx-52">
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded-md mb-4">
            {error}
          </div>
        )}

        {success && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded-md mb-4">
            {success}
          </div>
        )}

        {offresEmploi.map((offre, index) => (
          <div
            key={index}
            className="bg-white mx-10 border-2 p-4 rounded-xl flex flex-col w-[95%] leading-tight mb-4 md:w-full"
          >
            <div className="mb-4">
              <h3 className="font-bold mb-2 text-xl">{offre.title}</h3>
              <p className="text-base">{offre.description}</p>
            </div>
            <div>
              <div className="md:flex md:justify-between md:items-center">
                <p className="md:mr-12">{offre.company_name}</p>
                <div className="flex flex-col text-sm mb-4 md:mb-0 md:w-36">
                  <p className="flex flex-col w-fit">
                    <span className="text-center text-lg">{offre.type}</span>
                    {offre.duration}
                  </p>
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold md:mt-4">
                  Publié {offre.publication}
                </p>
                <button
                  className="bg-[#D60B52] text-white font-semibold py-1 px-2 text-center rounded-lg mt-2"
                  onClick={() => handleInscription(offre.id)}
                >
                  Postuler à cette offre
                </button>
              </div>
            </div>
          </div>
        ))}

        {isLaptopOrLarger ? (
          <div className="flex mb-2 border-2">
            {pagination.current_page > 1 && (
              <button
                className="bg-[#D60B52] text-white font-semibold py-1 px-2 text-center rounded-lg mr-2"
                onClick={() => handlePageChange(pagination.current_page - 1)}
              >
                Previous Page
              </button>
            )}

            {pagination.current_page < pagination.last_page && (
              <button
                className="bg-[#D60B52] text-white font-semibold py-1 px-2 text-center rounded-lg"
                onClick={() => handlePageChange(pagination.current_page + 1)}
              >
                AFFICHER LES 10 PROCHAINES OFFRES
              </button>
            )}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default OffreEmploi;
