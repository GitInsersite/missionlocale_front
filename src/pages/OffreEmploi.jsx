import { Link } from "react-router-dom";

function OffreEmploi() {
  return (
    <div className="bg-[#f6f6f6]">
      <div
        className="bg-image bg-cover bg-center h-12 flex justify-center items-center text-white font-bold sm:h-16 md:h-28 lg:h-40 xl:h-52"
        style={{ backgroundImage: "url(/public/MicrosoftTeams-image12.png)" }}
      >
        <h1 className="md:text-3xl">OFFRE D'EMPLOI</h1>
      </div>
      <div>
        <div className=" flex flex-col items-center pt-6 md:mx-16 lg:mx-32 xl:mx-52">
          <div className="bg-white mx-10 p-4 rounded-xl flex flex-col w-3/4 leading-tight mb-4 md:w-full">
            <div className="mb-4">
              <h3 className="font-bold">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </h3>
              <p className="text-sm">Lorem ipsum dolor sit amet.</p>
            </div>
            <div>
              <div className="md:flex md:justify-between md:items-center">
                <p className="md:mr-12">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quaerat quis doloribus rerum qui rem architecto.
                </p>
                <div className="flex flex-col text-sm mb-4 md:mb-0 md:w-36">
                  <p className="flex flex-col w-fit">
                    <span className="text-center">CDI</span>Temps plein
                  </p>
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold md:mt-4">Publié 14/11/2023</p>
              </div>
            </div>
          </div>
          <div className="bg-white mx-10 p-4 rounded-xl flex flex-col w-3/4 leading-tight mb-4 md:w-full">
            <div className="mb-4">
              <h3 className="font-bold">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </h3>
              <p className="text-sm">Lorem ipsum dolor sit amet.</p>
            </div>
            <div>
              <div className="md:flex md:justify-between md:items-center">
                <p className="md:mr-12">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quaerat quis doloribus rerum qui rem architecto.
                </p>
                <div className="flex flex-col text-sm mb-4 md:mb-0 md:w-36">
                  <p className="flex flex-col w-fit">
                    <span className="text-center">CDI</span>Temps plein
                  </p>
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold md:mt-4">Publié 14/11/2023</p>
              </div>
            </div>
          </div>
          <div className="bg-white mx-10 p-4 rounded-xl flex flex-col w-3/4 leading-tight mb-4 md:w-full">
            <div className="mb-4">
              <h3 className="font-bold">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </h3>
              <p className="text-sm">Lorem ipsum dolor sit amet.</p>
            </div>
            <div>
              <div className="md:flex md:justify-between md:items-center">
                <p className="md:mr-12">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quaerat quis doloribus rerum qui rem architecto.
                </p>
                <div className="flex flex-col text-sm mb-4 md:mb-0 md:w-36">
                  <p className="flex flex-col w-fit">
                    <span className="text-center">CDI</span>Temps plein
                  </p>
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold md:mt-4">Publié 14/11/2023</p>
              </div>
            </div>
          </div>
          <Link className="bg-[#D60B52] text-white font-semibold py-1 text-center rounded-lg text-sm mb-6 px-2">
            AFFICHER LES 10 OFFRES SUIVANTES
          </Link>
        </div>
      </div>
    </div>
  );
}

export default OffreEmploi;
