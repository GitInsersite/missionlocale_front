import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

function UneActualite() {
  const [actualite, setActualite] = useState(null);
  const { id } = useParams();

  const isLaptopOrLarger = useMediaQuery({ minWidth: 1440 });

  // Dynamically get the API URL based on the environment
  const apiUrlEnv =
    import.meta.env.MODE === "production"
      ? import.meta.env.VITE_API_URL_PROD
      : import.meta.env.VITE_API_URL_DEV;

  useEffect(() => {
    const apiUrl = `${apiUrlEnv}/api/actualite/${id}`;

    axios
      .get(apiUrl)
      .then((response) => {
        console.log("API Response:", response);
        setActualite(response.data.actualite);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [id]);

  if (!actualite) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div
        className="bg-image bg-cover bg-center h-12 flex justify-center items-center text-white font-bold sm:h-16 md:h-28 lg:h-40 xl:h-52"
        style={{ backgroundImage: "url(/MicrosoftTeams-image15.png)" }}
      >
        <h1 className="md:text-3xl">ACTUALITE</h1>
      </div>
      <div className="flex flex-col items-center p-6 bg-[#F6F6F6] md:px-14 lg:px-20 xl:px-40">
        <div className="flex flex-col px-4 bg-white rounded-lg mb-4 pt-2 w-[90%]">
          <h2 className="text-lg mb-2 text-[#2897d5] font-bold">
            {actualite.title}
          </h2>
          <p className="mb-4">
            {new Date(actualite.created_at).toLocaleDateString()}
          </p>
              <p className="mb-4 text-[#2897d5]">
                {actualite.hashtag && (
                  <>
                    {actualite.hashtag.split(', ').map((tag, index) => (
                      <span key={index}>
                        #{tag} {/* Ajoutez une balise de saut de ligne après chaque hashtag */}
                      </span>
                    ))}
                  </>
                )}
              </p>
              

        </div>
        {isLaptopOrLarger ? (
          <div className="flex px-4 bg-white rounded-lg mb-4 pt-2 w-[90%]">
            <img
              src={actualite.image_url}
              alt="image"
              className="px-4 mb-6 rounded-lg w-[500px] h-auto xl:w-[300px]"
            />
            <p className="mb-4 p-4">{actualite.description}</p>
          </div>
        ) : (
          <div className="flex-col px-4 bg-white rounded-lg mb-4 pt-2 w-[90%]">
            <img
              src={actualite.image_url}
              alt="image"
              className="mb-6 px-4 rounded-lg w-[500px] h-auto"
            />
            <p className="mb-4 px-4 py-3 overflow-hidden break-words">{actualite.description}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default UneActualite;
