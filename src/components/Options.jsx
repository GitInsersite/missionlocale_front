import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

function Options() {
  const isLaptopOrLarger = useMediaQuery({ minWidth: 1024 });
  const isTabletOrLarger = useMediaQuery({ minWidth: 768 });

  return (
    <div
      className="flex flex-col bg-white py-10 items-center md:items-start md:px-4"
      style={
        isLaptopOrLarger
          ? { clipPath: "ellipse(150% 95% at 50% 0)" }
          : { clipPath: "ellipse(500% 100% at 50% 0)" }
      }
    >
      <div className="md:w-full md:px-6">
        <div className="lg:flex lg:justify-center">
          {isTabletOrLarger ? (
            <div className="flex justify-center">
              <Link to="/pre-inscription" onClick={() => window.scrollTo(0, 0)}>
                <img
                  src="Boule_preinscrire_avec_icone.svg"
                  alt=""
                  className="w-36 h-36 lg:w-44 lg:h-44 xl:w-60 xl:h-60 hover:scale-105 transition-transform"
                />
              </Link>
              <Link to="/offre-emploi" onClick={() => window.scrollTo(0, 0)}>
                <img
                  src="Boule_OFFRE_EMPLOI_avec_icone.svg"
                  alt=""
                  className="w-36 h-36 lg:w-44 lg:h-44 xl:w-60 xl:h-60 hover:scale-105 transition-transform"
                />
              </Link>
              <Link to="/actualites" onClick={() => window.scrollTo(0, 0)}>
                <img
                  src="Boule_EVENEMENT_avec_icone.svg"
                  alt=""
                  className="w-36 h-36 lg:w-44 lg:h-44 xl:w-60 xl:h-60 hover:scale-105 transition-transform mt-16 lg:mt-24"
                />
              </Link>
              <Link to="/ateliers" onClick={() => window.scrollTo(0, 0)}>
                <img
                  src="Boule_ateliers_avec_icone.svg"
                  alt=""
                  className="w-36 h-36 lg:w-44 lg:h-44 xl:w-60 xl:h-60 hover:scale-105 transition-transform mt-9 lg:mt-11 xl:mt-16"
                />
              </Link>
              <Link to="/formations" onClick={() => window.scrollTo(0, 0)}>
                <img
                  src="Boule_FORMATION_avec_icone.svg"
                  alt=""
                  className="w-36 h-36 lg:w-44 lg:h-44 xl:w-60 xl:h-60 relative top-[-36px] lg:top-[-45px]  xl:top-[-65px] hover:scale-105 transition-transform"
                />
              </Link>
            </div>
          ) : (
            <div className="flex-col justify-center">
              <Link to="/pre-inscription" onClick={() => window.scrollTo(0, 0)}>
                <div className="flex-col items-center justify-center mb-4 hover:scale-105 transition-transform">
                  <img
                    src="preinscrire_mobile.svg"
                    alt=""
                    className="w-52 h-52"
                  />
                  <p className="text-center text-[#A4195B] font-bold text-xl">
                    SE PREINSCRIRE
                  </p>
                </div>
              </Link>
              <Link to="/offre-emploi" onClick={() => window.scrollTo(0, 0)}>
                <div className="flex-col items-center justify-center mb-4 hover:scale-105 transition-transform">
                  <img src="emploi-mobile.svg" alt="" className="w-52 h-52" />
                  <p className="text-center text-[#D60B53] font-bold text-xl">
                    NOS OFFRES <br /> D&apos;EMPLOIS
                  </p>
                </div>
              </Link>
              <Link to="/actualites" onClick={() => window.scrollTo(0, 0)}>
                <div className="flex-col items-center justify-center mb-4 hover:scale-105 transition-transform">
                  <img
                    src="evenement-mobile.svg"
                    alt=""
                    className="w-52 h-52"
                  />
                  <p className="text-center text-[#2C96D4] font-bold text-xl">
                    NOS EVENEMENTS
                  </p>
                </div>
              </Link>
              <Link to="/ateliers" onClick={() => window.scrollTo(0, 0)}>
                <div className="flex-col items-center justify-center mb-4 hover:scale-105 transition-transform">
                  <img src="atelier_mobile.svg" alt="" className="w-52 h-52" />
                  <p className="text-center text-[#95C121] font-bold text-xl">
                    NOS ATELIERS
                  </p>
                </div>
              </Link>
              <Link to="/formations" onClick={() => window.scrollTo(0, 0)}>
                <div className="flex-col items-center justify-center hover:scale-105 transition-transform">
                  <img
                    src="formation_mobile.svg"
                    alt=""
                    className="w-52 h-52"
                  />
                  <p className="text-center text-[#F39204] font-bold text-xl">
                    NOS FORMATIONS
                  </p>
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Options;
