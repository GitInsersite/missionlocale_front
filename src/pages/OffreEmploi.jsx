import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function OffreEmploi() {
  const [offresEmploi, setOffresEmploi] = useState([]);

  useEffect(() => {
    const apiUrl = "http://localhost:8000/api/emploi";

    axios
      .get(apiUrl)
      .then((response) => {
        console.log("API Response:", response);
        setOffresEmploi(response.data.emploi);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="bg-[#f6f6f6]">
      <div
        className="bg-image bg-cover bg-center h-12 flex justify-center items-center text-white font-bold sm:h-16 md:h-28 lg:h-40 xl:h-52"
        style={{ backgroundImage: "url(MicrosoftTeams-image12.png)" }}
      >
        <h1 className="md:text-3xl">OFFRE D&apos;EMPLOI</h1>
      </div>
      <div>
        <div className="flex flex-col items-center pt-6 md:mx-16 lg:mx-32 xl:mx-52">
          {offresEmploi.map((offre, index) => (
            <div
              key={index}
              className="bg-white mx-10 p-4 rounded-xl flex flex-col w-3/4 leading-tight mb-4 md:w-full"
            >
              <div className="mb-4">
                <h3 className="font-bold">{offre.title}</h3>
                <p className="text-sm">{offre.description}</p>
              </div>
              <div>
                <div className="md:flex md:justify-between md:items-center">
                  <p className="md:mr-12">{offre.company_name}</p>
                  <div className="flex flex-col text-sm mb-4 md:mb-0 md:w-36">
                    <p className="flex flex-col w-fit">
                      <span className="text-center">{offre.type}</span>
                      {offre.duration}
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold md:mt-4">
                    Publié {offre.publication}
                  </p>
                </div>
              </div>
            </div>
          ))}
          <Link className="bg-[#D60B52] text-white font-semibold py-1 text-center rounded-lg text-sm mb-6 px-2">
            AFFICHER LES 10 OFFRES SUIVANTES
          </Link>
        </div>
      </div>
    </div>
  );
}

export default OffreEmploi;
