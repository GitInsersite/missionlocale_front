import { useState, useEffect } from "react";

function Equipe() {
  const [equipeData, setEquipeData] = useState({
    direction: [],
    structure: [],
    technique: [],
    photogroupe: [],
  });
  const [photo, setPhoto] = useState();

  // Dynamically get the API URL based on the environment
  const apiUrlEnv =
    import.meta.env.MODE === "production"
      ? import.meta.env.VITE_API_URL_PROD
      : import.meta.env.VITE_API_URL_DEV;

  useEffect(() => {
    // Fetch data from your API
    fetch(`${apiUrlEnv}/api/equipe`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Equipe Data:", data); // Log the data to the console
        setEquipeData(data);
        console.log(data.photogroupe[0].image_url);
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
      </div>{" "}
      <br />
      <div className="breadcrumb px-4 pt-4 md:px-14 lg:px-20 xl:px-52">
        <a href="/">Accueil</a> {">"}
        <a href="/"> La Mission Locale </a>
        {">"}
        <a className="text-[#A4195C]" href="/equipe">
          {" "}
          Notre équipe
        </a>
      </div>
      <div className="flex flex-col items-center md:items-start md:px-14 md:pt-4 lg:px-20 xl:px-52">
        <div className="pt-4">
          <h2 className="font-bold text-black text-lg mb-4 md:text-2xl">
            <span className="border-b-2 border-[#A4195C] pb-[0.5px]">POLE</span>{" "}
            DIRECTION
          </h2>
         
          <ul>
            <li>1 Chargé d’accueil ;</li>
            <li>1 Chargée de l’emploi et des relations entreprises ;</li>
            <li>1 Responsable Administrative et Financières ;</li>
            <li>1 Responsable de secteur ;</li>
            <li>1 Chargé de Communication ;</li>
          </ul>
          <br />

          <div>{renderMembers(equipeData.direction)}</div>
          <h2 className="font-bold text-black text-lg mb-4 md:text-2xl">
            <span className="border-b-2 border-[#A4195C] pb-[0.5px]">POLE</span>{" "}
            STRUCTURE
          </h2>
          <ul>
          <li>4 Conseillères CEJ ;</li>
          <li>10 Conseillers classiques ;</li>
          </ul> <br />

          <div>{renderMembers(equipeData.structure)}</div>
        </div>
      </div>
      <div className="flex flex-col items-center bg-[#f6f6f6] md:items-start md:px-14 lg:px-20 xl:px-52">
        <div className="pt-4">
          <h2 className="font-bold text-black text-lg mb-4 md:text-2xl">
            <span className="border-b-2 border-[#A4195C] pb-[0.5px]">POLE</span>{" "}
            TECHNIQUE
          </h2>
          <div className="lg:grid lg:grid-cols-3 xl:grid-cols-5">
            {renderMembers(equipeData.technique)}
          </div>
        </div>
      </div>
      <div className="py-4 flex justify-center items-center md:items-start md:justify-start md:px-14 lg:px-20 xl:px-52">
        {/* <img src={photo} alt="Equipe Image" className="w-[80%] " /> */}
      </div>
    </div>
  );
}

export default Equipe;
