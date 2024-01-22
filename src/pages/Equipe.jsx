import { useState, useEffect } from "react";

function Equipe() {
  const [equipeData, setEquipeData] = useState({
    direction: [],
    structure: [],
    technique: [],
    photogroupe: [],
  });
  const [photo, setPhoto] = useState()

  useEffect(() => {
    // Fetch data from your API
    fetch("http://localhost:8000/api/equipe")
      .then((response) => response.json())
      .then((data) => {
        console.log("Equipe Data:", data); // Log the data to the console
        setEquipeData(data);
        console.log(data.photogroupe[0].image_url)
        setPhoto(data.photogroupe[0].image_url);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const renderMembers = (members) => {
    return members.map((member) => (
      <div key={member.id} className="mb-8 mr-8">
        <h3 className="text-lg font-bold">{`${member.first_name} ${member.last_name}`}</h3>
        <p className="text-gray-600">{member.job}</p>
      </div>
    ));
  };

  return (
    <div>
      <div
        className="bg-image bg-cover bg-center h-12 flex justify-center items-center text-white font-bold sm:h-16 md:h-28 lg:h-40 xl:h-52"
        style={{ backgroundImage: "url(MicrosoftTeams-image11.png)" }}
      >
        <h1 className="md:text-3xl">NOTRE EQUIPE</h1>
      </div>
      <div className="flex flex-col items-center md:items-start md:px-14 md:pt-4 lg:px-20">
        <div>
          <h2 className="font-bold text-black text-lg mb-4 md:text-2xl">
            <span className="border-b-2 border-[#A4195C] pb-[0.5px]">POLE</span>{" "}
            DIRECTION
          </h2>
          <div>{renderMembers(equipeData.direction)}</div>
          <h2 className="font-bold text-black text-lg mb-4 md:text-2xl">
            <span className="border-b-2 border-[#A4195C] pb-[0.5px]">POLE</span>{" "}
            STRUCTURE
          </h2>
          <div>{renderMembers(equipeData.structure)}</div>
        </div>
      </div>
      <div className="flex flex-col items-center bg-[#f6f6f6] md:items-start md:px-14 lg:px-20">
        <div>
          <h2 className="font-bold text-black text-lg mb-4 md:text-2xl">
            <span className="border-b-2 border-[#A4195C] pb-[0.5px]">POLE</span>{" "}
            TECHNIQUE
          </h2>
          <div className="lg:grid lg:grid-cols-3 xl:grid-cols-5">
            {renderMembers(equipeData.technique)}
          </div>
        </div>
      </div>
      <div className="py-4 flex justify-center items-center md:items-start md:justify-start md:px-14 lg:px-20">
        <img
          src={photo}
          alt="Equipe Image"
          className="h-40 w-[80%] md:h-80 "
        />
      </div>
    </div>
  );
}

export default Equipe;
