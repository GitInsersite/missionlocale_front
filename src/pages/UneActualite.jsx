import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function UneActualite() {
  const [actualite, setActualite] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const apiUrl = `http://localhost:8000/api/actualite/${id}`;

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
        style={{ backgroundImage: "url(/public/MicrosoftTeams-image15.png)" }}
      >
        <h1 className="md:text-3xl">ACTUALITE</h1>
      </div>
      <div className="flex flex-col items-center pt-6 bg-[#F6F6F6] md:px-14 lg:px-20">
        <div className="flex flex-col px-4 bg-white rounded-lg mb-4 pt-2 w-[90%]">
          <h2 className="text-lg mb-2 text-[#2897d5] font-bold">{actualite.title}</h2>
          <p className="mb-4">{new Date(actualite.created_at).toLocaleDateString()}</p>
          <p className="mb-4 text-[#2897d5]">#{actualite.hashtag}</p>
        </div>
        <div className="flex flex-col px-4 bg-white rounded-lg mb-4 pt-2 w-[90%]">
          <img
            src={actualite.image_path}
            alt="image"
            className="mb-6 rounded-lg"
          />
          <p className="mb-4">{actualite.description}</p>
        </div>
      </div>
    </div>
  );
}

export default UneActualite;
