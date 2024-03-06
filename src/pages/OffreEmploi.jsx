import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useMediaQuery } from "react-responsive";
import moment from "moment";

function OffreEmploi() {
  const [offresEmploi, setOffresEmploi] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const isLaptopOrLarger = useMediaQuery({ minWidth: 1024 });
  const isTabletOrLarger = useMediaQuery({ minWidth: 768 });

  // Dynamically get the API URL based on the environment
  const apiUrlEnv =
    import.meta.env.MODE === "production"
      ? import.meta.env.VITE_API_URL_PROD
      : import.meta.env.VITE_API_URL_DEV;

  useEffect(() => {
    const apiUrl = `${apiUrlEnv}/api/emploi?page=${currentPage}`;

    axios
      .get(apiUrl)
      .then((response) => {
        console.log("API Response:", response);
        setOffresEmploi(response.data.emploi);
        setTotalPages(response.data.pagination.last_page);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [currentPage]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleInscription = async (id) => {
    try {
      const authToken = localStorage.getItem("authToken");
      console.log("authToken:", authToken);
      const headers = {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      };
      console.log("Request Headers:", headers);
      const registrationUrl = `${apiUrlEnv}/api/emploi/${id}/postulerOffre`;
      const response = await axios.post(registrationUrl, null, headers);
      console.log("Registration Response:", response);
      setSuccess(response.data.success || "Application successful.");
      setError(null);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) {
      console.error("Error applying for the job:", error);
      setError(
        error.response?.data?.error ||
          "An error occurred while applying for the job."
      );
      setSuccess(null);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Define a function to truncate text
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };

  if (!offresEmploi) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div
        className="bg-image bg-cover bg-center h-12 flex justify-center items-center text-white font-bold sm:h-16 md:h-28 lg:h-40 xl:h-52"
        style={{ backgroundImage: "url(MicrosoftTeams-image12.png)" }}
      >
        <h1 className="md:text-3xl">OFFRES D&apos;EMPLOI</h1>
      </div>
      <div className="breadcrumb px-4 pt-4  md:px-14 lg:px-20 xl:px-52">
        <a className="text-[#D70B52]" href="/offre-emploi">
          Offres d&apos;emploi{" "}
        </a>{" "}
        {">"}
      </div>{" "}
      <br />
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded-md mb-4 text-center">
          {error}
        </div>
      )}
      {success && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded-md mb-4 text-center">
          {success}
        </div>
      )}
      <div className="bg-[#f6f6f6] md:px-14 lg:px-20 xl:px-44 lg:grid lg:grid-cols-2">
        {offresEmploi.map((offre, index) => (
          <div key={index} className="flex flex-col items-center p-6">
            <div className="bg-white mx-10 mb-10 rounded-xl w-full">
              {offre.image_url ? (
                <div className="flex justify-start items-center">
                  <img
                    src={offre.image_url}
                    alt={offre.title}
                    style={{
                      maxWidth: "50%",
                      maxHeight: "50%",
                      width: "auto",
                      height: "auto",
                    }}
                    className="border-2 my-1 mx-2 rounded-3xl h-[80%] sm:h-[90%] md:h-[85%] object-cover"
                  />
                </div>
              ) : null}

            <div className="p-4">
              <h3 className="font-bold mb-1 leading-tight">

                {offre.title}
              </h3>
              <p className="text-[#D70B52] mb-1 text-sm">
                Publié le {moment(offre.publication).format("DD/MM/YYYY")}
              </p>
              <p className="mb-3 leading-tight px-2">
                {offre.description}
              </p>
              <div className="flex justify-between">
                <button
                    className="bg-[#D60B52] text-white font-semibold py-1 px-2 text-center rounded-lg "
                    onClick={() => handleInscription(offre.id)}
                  >
                    Postuler à cette offre
                  </button>
                  {offre.job_url && (
                    <a
                      href={offre.job_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="bg-[#D60B52] text-white font-semibold py-1 px-2 text-center rounded-lg">
                        Télécharger le PDF
                      </button>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Pagination (larger dimensions) */}
      {totalPages > 1 ? (
        <nav
          aria-label="Page navigation example"
          className="py-4 flex justify-center bg-[#f6f6f6]"
        >
          <ul className="flex items-center -space-x-px h-10 text-base">
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                <span className="sr-only">Previous</span>
                <svg
                  className="w-3 h-3 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 1 1 5l4 4"
                  />
                </svg>
              </a>
            </li>
            {/* Generate pagination items based on totalPages */}
            {Array.from({ length: totalPages }, (_, index) => (
              <li key={index}>
                <a
                  href="#"
                  className={`flex items-center justify-center px-4 h-10 leading-tight ${
                    currentPage === index + 1
                      ? "text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                      : "text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  }`}
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                <span className="sr-only">Next</span>
                <svg
                  className="w-3 h-3 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      ) : (
        ""
      )}
    </div>
  );
}

export default OffreEmploi;