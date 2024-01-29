import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

function SeFormer() {
  return (
    <div className="bg-[#F6F6F6]">
      <div
        className="bg-image bg-cover bg-center h-12 flex justify-center items-center text-white font-bold sm:h-16 md:h-28 lg:h-40 xl:h-52"
        style={{ backgroundImage: "url(/public/MicrosoftTeams-image12.png)" }}
      >
        <h1 className="md:text-3xl">SE FORMER</h1>
      </div>

      <div className="flex flex-col px-4 pt-4 font-semibold md:px-14 lg:px-20 xl:px-40">
        <div className="flex-row justify-content px-4 pt-4  font-semibold bg-[#F6F6F6] md:px-14 lg:px-20">
          <div className="flex items-center">Accueil <IoIosArrowForward /> Services <IoIosArrowForward /><span className="text-[#D70B52]" aria-current="page">Se former</span></div>
        </div>
        <br />
        <div >
          <div className="flex flex-col px-4 pt-4  font-semibold bg-[#F6F6F6] md:px-14 lg:px-20">

            <div className="flex font-sans">
              <div className="flex-none w-56 relative">
                <img src="/women.jpg" alt="" className="absolute inset-0 w-full h-full object-cover rounded-[20%]" loading="lazy" />
              </div>

              <div className="bg-white rounded-[5%] ">
                <form class="flex-auto p-6">
                  <div className="flex flex-wrap t-20px l-20px relative">

                    <h2 className="font-bold text-black text-lg mb-4 md:text-2xl">
                      <span className="border-b-2 border-[#D70B52] pb-[0.5px]">
                        FORMA
                      </span>
                      TION CONTINUE...
                    </h2>
                    <p class="text-sm text-slate-500">
                      Une formation pré-qualifiante est, pourrait-on dire, une
                      introduction, une découverte d’un métier ou d’un secteur
                      professionnel. Durant celle-ci, vous seront présentées les bases
                      constitutives, les pratiques courantes, pour y évoluer. Vous
                      effectuerez aussi des stages qui vous permettront d’avoir une
                      première expérience pratique dans le domaine choisi.{" "}
                    </p>

                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <br /> <br />  <br />

        <div className="flex flex-col">
          <div >
            <div className="flex flex-col px-4 pt-4  font-semibold bg-[#F6F6F6] md:px-14 lg:px-20">
              <div className="flex font-sans ">

                <form class="flex-auto p-6 bg-white rounded-[5%]">
                  <div className="flex flex-wrap">
                    <h2 className="font-bold text-black text-lg mb-4 md:text-2xl">
                      <span className="border-b-2 border-[#D70B52] pb-[0.5px]">
                        FORMA
                      </span>
                      TION EN ALTERNANCE...
                    </h2>
                    <p class="text-sm text-slate-500">
                      Les formations qualifiantes sont des formations de durée variable,
                      mais longues pour la plupart, préparant à une qualification reconnue,
                      que ce soit par le biais de la préparation à un diplôme ou encore à un
                      titre professionnel. Elles se composent de cours théoriques et de
                      stages.{" "}
                    </p>
                    <div className="flex flex-col px-4 pt-4 font-semibold justify:center md:px-14 lg:px-20">
                      <Link to="/formations" onClick={() => window.scrollTo(0, 0)} className="bg-[#D70B52] text-white font-semibold py-1 text-center rounded mb-8 text-sm md:w-56">
                        OFFRES DE FORMATIONS
                      </Link>
                    </div>

                  </div>
                </form>
                <div className="flex-none w-56 relative">
                  <img src="/travailleur.jpg" alt="" className="absolute inset-0 w-full h-full object-cover rounded-[20%]" loading="lazy" />
                </div>
              </div>
            </div>

            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SeFormer;
