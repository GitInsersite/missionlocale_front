import { Link } from "react-router-dom";

function Actualites() {
  return (
    <div className="mx-4 mt-4">
      <div className="mb-4">
        <h1 className="font-bold mb-2">
          <span className="border-b-2 border-blue-500 pb-[0.5px]">NOS</span>{" "}
          ACTUALITES
        </h1>
        <p className="leading-tight">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          dignissimos placeat saepe aut perferendis dolores maiores velit fugit
          ex quo.
        </p>
      </div>
      <div className="flex flex-col items-center">
        <div className="border-[1px] w-40 h-56 rounded-xl mb-4">
          <img
            src=""
            alt=""
            className="border-[1px] h-[70%] rounded-t-lg"
          />
          <p className="text-blue-400 text-xs mt-3 font-semibold ml-2">
            11/10/13
          </p>
          <p className="font-bold text-xs ml-2">ALTERNANCE</p>
        </div>
        <div className="border-[1px] w-40 h-56 rounded-xl">
          <img
            src=""
            alt=""
            className="border-[1px] h-[70%] rounded-t-lg"
          />
          <p className="text-blue-400 text-xs mt-3 font-semibold ml-2">
            18/10/13
          </p>
          <p className="font-bold text-xs ml-2">STAGE D'IMMERSION</p>
        </div>
          <Link to="/" className="border-blue-400 border-2 rounded-lg px-3 py-[0.2rem] text-[0.6rem] mt-4 font-semibold text-blue-400 mb-2">VOIR TOUTE L'ACTUALITE</Link>
      </div>
    </div>
  );
}

export default Actualites;
