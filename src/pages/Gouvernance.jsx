import { useState, useEffect } from "react";
import axios from "axios";

function Gouvernance() {
  const [governanceData, setGovernanceData] = useState({
    conseil_admin: [],
    bureau: [],
  });

  // Dynamically get the API URL based on the environment
  const apiUrlEnv = import.meta.env.MODE === 'production'
  ? import.meta.env.VITE_API_URL_PROD
  : import.meta.env.VITE_API_URL_DEV;

  useEffect(() => {
    const fetchGovernanceData = async () => {
      try {
        const res = await axios.get(`${apiUrlEnv}/api/gouvernance`);
        setGovernanceData(res.data);
        console.log(res);
      } catch (error) {
        console.error("Error fetching governance data:", error);
      }
    };

    fetchGovernanceData();
  }, []);

  const handleDownload18 = async () => {
    try {
      const response = await fetch("/pdf/CRA-2018.pdf");
      const blob = await response.blob();
      const url = window.URL.createObjectURL(new Blob([blob]));
      const a = document.createElement("a");
      a.href = url;
      a.download = "CRA-2018.pdf";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch (error) {
      console.error("Error downloading the file:", error);
    }
  };

  const handleDownload19 = async () => {
    try {
      const response = await fetch("/pdf/CRA-2019.pdf");
      const blob = await response.blob();
      const url = window.URL.createObjectURL(new Blob([blob]));
      const a = document.createElement("a");
      a.href = url;
      a.download = "CRA-2018.pdf";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch (error) {
      console.error("Error downloading the file:", error);
    }
  };

  const handleDownload20 = async () => {
    try {
      const response = await fetch("/pdf/CRA-2020.pdf");
      const blob = await response.blob();
      const url = window.URL.createObjectURL(new Blob([blob]));
      const a = document.createElement("a");
      a.href = url;
      a.download = "CRA-2018.pdf";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch (error) {
      console.error("Error downloading the file:", error);
    }
  };

  const handleDownload21 = async () => {
    try {
      const response = await fetch("/pdf/CRA-2021.pdf");
      const blob = await response.blob();
      const url = window.URL.createObjectURL(new Blob([blob]));
      const a = document.createElement("a");
      a.href = url;
      a.download = "CRA-2018.pdf";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch (error) {
      console.error("Error downloading the file:", error);
    }
  };

  const handleDownload22 = async () => {
    try {
      const response = await fetch("/pdf/CRA-2022.pdf");
      const blob = await response.blob();
      const url = window.URL.createObjectURL(new Blob([blob]));
      const a = document.createElement("a");
      a.href = url;
      a.download = "CRA-2018.pdf";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch (error) {
      console.error("Error downloading the file:", error);
    }
  };

  return (
    <div className="bg-[#f6f6f6]">
      <div
        className="bg-image bg-cover bg-center h-12 flex justify-center items-center text-white font-bold sm:h-16 md:h-28 lg:h-40 xl:h-52"
        style={{ backgroundImage: "url(MicrosoftTeams-image11.png)" }}
      >
        <h1 className="md:text-3xl">GOUVERNANCE</h1>
      </div>
      <div className="xl:px-32">
        <div className="flex flex-col items-center pt-6 md:items-start md:mx-14 lg:mx-20">
          <h2 className="font-bold text-black text-lg mb-8 w-[85%] md:text-2xl">
            <span className="border-b-2 border-[#A4195C] pb-[0.5px]">
              CONSEIL
            </span>{" "}
            D&apos;ADMINISTRATION
          </h2>
          {governanceData.conseil_admin.map((member, index) => (
            <div
              key={index}
              className="bg-white mx-10 h-28 rounded-xl flex w-3/4 md:mx-0 md:w-[90%]"
            >
              <div className="w-[40%] md:w-[20%] lg:w-[15%] xl:w-[10%]">
                <img
                  src={member.image_url || "placeholder.jpg"}
                  alt="image"
                  className="border-2 my-1 mx-2 rounded-3xl h-[90%] "
                />
              </div>
              <div className="w-[60%] flex flex-col items-start justify-center pl-4 md:items-start md:ml-4">
                <h3 className="font-bold">{member.job}</h3>
                <p>{`${member.first_name} ${member.last_name}`}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center md:items-start md:mx-14 lg:mx-20">
          <h2 className="font-bold text-black text-lg mb-8 mt-6 w-[85%] md:text-2xl">
            <span className="border-b-2 border-[#A4195C] pb-[0.5px]">
              BUREAU
            </span>
          </h2>
          <div className="md:w-full md:grid md:grid-cols-2 lg:grid-cols-3">
            {governanceData.bureau.map((member, index) => (
              <div
                key={index}
                className="bg-white mb-4 mx-10 h-28 rounded-xl flex w-3/4 md:flex-col md:w-52 md:items-center md:h-fit md:py-4 md:mx-0 md:mb-8"
              >
                <div className="w-[45%] flex items-center md:w-28 md:h-28 md:rounded-full">
                  <img
                    src={member.image_url || "placeholder.jpg"}
                    alt=""
                    className="border-2 my-1 mx-2 h-20 w-20 md:w-28 md:h-28 rounded-full md:mx-0 md:my-0"
                  />
                </div>
                <div className="w-[80%] flex flex-col justify-center pl-6 md:pl-0 md:mt-6">
                  <h3 className="font-bold leading-tight border-b-2 border-[#A4195C] mb-2 mr-10 md:pb-4">
                    {member.first_name}
                    <br />
                    {member.last_name}
                  </h3>
                  <p className="md:mt-4">{member.job}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center pt-6 md:items-start md:mx-14 lg:mx-20 xl:px-32">
        <div className="flex flex-col items-center md:items-start">
          <h2 className="font-bold text-black text-lg mb-8 mt-6 w-[85%] md:text-2xl md:mb-4">
            <span className="border-b-2 border-[#A4195C] pb-[0.5px]">
              RAPPORT
            </span>{" "}
            D&apos;ACTIVITE
          </h2>
          <p className="text-sm font-semibold flex flex-col items-center pl-4 md:pl-0">
            VOUS POUVEZ CONSULTER NOS RAPPORTS D&apos;DACTIVITE DE SES 5
            DERNIERES ANNEES
          </p>
        </div>
        <div className="flex flex-col md:flex-row  md:w-full md:mt-4">
          <button className="py-2 bg-[#A4195C] mb-4 px-6 rounded-xl text-white mt-6 md:mt-0 md:px-8 md:py-2 md:mr-4" onClick={handleDownload22}>
            2022
          </button>
          <button className="py-2 bg-[#D70B52] mb-4 px-6 rounded-xl text-white md:px-8 md:py-2 md:mr-4" onClick={handleDownload21}>
            2021
          </button>
          <button className="py-2 bg-[#2997D6] mb-6 px-6 rounded-xl text-white md:px-8 md:py-2 md:mb-4 md:mr-4" onClick={handleDownload20}>
            2020
          </button>
          <button className="py-2 bg-[#95C221] mb-6 px-6 rounded-xl text-white md:px-8 md:py-2 md:mb-4 md:mr-4" onClick={handleDownload19}>
            2019
          </button>
          <button className="py-2 bg-[#F29200] mb-6 px-6 rounded-xl text-white md:px-8 md:py-2 md:mb-4" onClick={handleDownload18}>
            2018
          </button>
        </div>
      </div>
    </div>
  );
}

export default Gouvernance;
