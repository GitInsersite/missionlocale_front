import { Link } from "react-router-dom";

function Gouvernance() {
  return (
    <div className="bg-gray-200">
      <div
        className="bg-image bg-cover bg-center h-12 flex justify-center items-center text-white font-bold"
        style={{ backgroundImage: "url(/public/MicrosoftTeams-image11.png)" }}
      >
        <h1>GOUVERNANCE</h1>
      </div>
      <div>
        <div className=" flex flex-col items-center pt-6">
          <h2 className="font-bold text-black text-lg mb-8 w-[85%]">
            <span className="border-b-2 border-pink-500 pb-[0.5px]">
              CONSEIL
            </span>{" "}
            D'ADMINISTRATION
          </h2>
          <div className="bg-white mx-10 h-28 rounded-xl flex w-3/4">
            <div className="w-[40%]">
              <img
                src=""
                alt=""
                className="border-2 my-1 mx-2 rounded-3xl h-[90%]"
              />
            </div>
            <div className="w-[60%] flex flex-col items-center justify-center">
              <h3 className="font-bold">PRESIDENTE</h3>
              <p>Prenom Nom</p>
              <p>Mot de la pre</p>
            </div>
          </div>
        </div>
        <div className=" flex flex-col items-center">
          <h2 className="font-bold text-black text-lg mb-8 mt-6 w-[85%]">
            <span className="border-b-2 border-pink-500 pb-[0.5px]">
              BUREAU
            </span>
          </h2>
          <div className="bg-white mx-10 h-28 rounded-xl flex w-3/4">
            <div className="w-[40%]">
              <img
                src=""
                alt=""
                className="border-2 my-1 mx-2 rounded-3xl h-[90%]"
              />
            </div>
            <div className="w-[60%] flex flex-col items-center justify-center">
              <h3 className="font-bold leading-tight border-b-2 border-pink-500 mb-2">PRENOM <br />NOM</h3>
              <p>Vice-President</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center pt-6">
        <div className="flex flex-col items-center">
        <h2 className="font-bold text-black text-lg mb-8 mt-6 w-[85%]">
            <span className="border-b-2 border-pink-500 pb-[0.5px]">
              RAPPORT
            </span>{" "}
            D'ACTIVITE
          </h2>
          <p className="text-sm font-semibold flex flex-col items-center pl-4">VOUS POUVEZ CONSULTER NOS RAPPORTS D'DACTIVITE DE SES 5 DERNIERES ANNEES</p>
        </div>
        <div className="flex flex-col">
          <Link className="py-2 bg-fuchsia-600 mb-4 px-6 rounded-xl text-white mt-6">2022</Link>
          <Link className="py-2 bg-red-600 mb-4 px-6 rounded-xl text-white">2021</Link>
          <Link className="py-2 bg-blue-600 mb-6 px-6 rounded-xl text-white">2020</Link>
        </div>
      </div>
    </div>
  );
}

export default Gouvernance;
