import { Link } from "react-router-dom";

function Actualites() {
  const id = 6;

  return (
    <div>
      <div
        className="bg-image bg-cover bg-center h-12 flex justify-center items-center text-white font-bold"
        style={{ backgroundImage: "url(/public/MicrosoftTeams-image15.png)" }}
      >
        <h1>ACTUALITE</h1>
      </div>
      <div className=" flex flex-col items-center pt-6 border-red-500 border-2">
        <div className="bg-white mx-10 h-40 rounded-xl flex w-3/4 border-blue-500 border-2">
          <div className="w-[50%]">
            <img
              src=""
              alt=""
              className="border-2 my-1 mx-2 rounded-3xl h-[90%]"
            />
          </div>
          <div className="w-[50%] flex flex-col items-center justify-center border-blue-500 border-2">
            <h3 className="font-bold">TEST</h3>
            <p className="text-[#2897d5]">17/11/2023</p>
            <p>test</p>
            <Link
              to={`/actualites/${id}`}
              className="bg-[#2897d5] text-white py-1 px-2 text-center rounded-xl text-sm mb-6"
            >
              Lire la suite
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Actualites;
