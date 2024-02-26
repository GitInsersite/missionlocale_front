import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useMediaQuery } from "react-responsive";

function Ateliers() {
  const [ateliers, setAteliers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const isLaptopOrLarger = useMediaQuery({ minWidth: 1024 });
  const isTabletOrLarger = useMediaQuery({ minWidth: 768 });

  // Dynamically get the API URL based on the environment
  const apiUrlEnv =
    import.meta.env.MODE === "production"
      ? import.meta.env.VITE_API_URL_PROD
      : import.meta.env.VITE_API_URL_DEV;

  useEffect(() => {
    const apiUrl = `${apiUrlEnv}/api/ateliers?page=${currentPage}`;

    axios
      .get(apiUrl)
      .then((response) => {
        console.log("API Response:", response);
        setAteliers(response.data.ateliers.data);
        setTotalPages(response.data.pagination.last_page);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [currentPage]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  // Define a function to truncate text
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };

  return (
    <div>
      <div
        className="bg-image bg-cover bg-center h-12 flex justify-center items-center text-white font-bold sm:h-16 md:h-28 lg:h-40 xl:h-52"
        style={{ backgroundImage: "url(MicrosoftTeams-image13.png)" }}
      >
        <h1 className="md:text-3xl">ATELIERS</h1>
      </div>
      <div className="breadcrumb px-4 pt-4  md:px-14 lg:px-20 xl:px-52">
        <a className="text-[#95c11f]" href="/ateliers">
          Ateliers{" "}
        </a>{" "}
        {">"}
      </div>{" "}
      <br />
      <div className="bg-[#f6f6f6] md:px-14 lg:px-20 xl:px-44 lg:grid lg:grid-cols-2">
        {ateliers.map((atelier, index) => (
          <div key={index} className="flex flex-col items-center pt-6 pb-6">
            <div className="bg-white mx-10 h-40 rounded-xl flex w-[95%] md:h-48 lg:w-[90%]">
              
            {atelier.image_url ? (
                  <img
                      src={atelier.image_url}
                      alt={atelier.title}
                      className="border-2 my-1 mx-2 rounded-3xl h-[80%] sm:h-[90%] md:h-[85%] object-cover"
                  />
              ) : (
                  <div className=" my-1 mx-2 sm:h-[90%] md:h-[85%]"></div>
              )}  
              
              <div className="w-[55%] flex flex-col items-center justify-center md:w-[65%] md:items-start md:pl-4 lg:w-[55%] xl:w-[60%]">
                <h3 className="font-bold mb-1 leading-tight">
                  {truncateText(atelier.title, isTabletOrLarger ? 30 : 15)}
                </h3>
                <p className="text-[#95c11f] mb-1 text-sm md:mb-4">
                  {new Date(atelier.created_at).toLocaleDateString()}
                </p>{" "}
                {/* Replace 'date' with the actual property name from your API response */}
                <p className="mb-1 md:mb-4 leading-tight">
                  {" "}
                  {truncateText(
                    atelier.description,
                    isTabletOrLarger ? 30 : 18
                  )}
                </p>{" "}
                {/* Replace 'description' with the actual property name from your API response */}
                <Link
                  to={`/ateliers/${atelier.id}`}
                  className="bg-[#95c11f] text-white py-1 px-2 text-center rounded-xl text-sm mb-6"
                >
                  Lire la suite
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Pagination (larger dimensions) */}
      {isLaptopOrLarger && totalPages > 1 ? (
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

export default Ateliers;
