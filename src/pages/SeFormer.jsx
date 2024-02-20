import { Link } from "react-router-dom";
import "/formacontinue.css";
import "/formalter.css";

import { IoIosArrowForward } from "react-icons/io";
import { useMediaQuery } from "react-responsive";

function SeFormer() {
  const isTabletOrLarger = useMediaQuery({ minWidth: 768 });

  return (
    <div className="bg-[#F6F6F6]">
      <div
        className="bg-image bg-cover bg-center h-12 flex justify-center items-center text-white font-bold sm:h-16 md:h-28 lg:h-40 xl:h-52"
        style={{ backgroundImage: "url(MicrosoftTeams-image12.png)" }}
      >
        <h1 className="md:text-3xl">SE FORMER</h1>
      </div>
      <div className="flex flex-col items-center">
        <div>
          <div className=" breadcrumb px-4 pt-4  md:px-14 lg:px-10 xl:px-50">
            <a href="/">Accueil</a> {">"}
            <a href="/"> Services </a>
            {">"}
            <a className="text-[#A4195C]" href="/se-former">
              {" "}
              Se Former
            </a>
          </div>
          <section>
            <div className="containe">
              <div className="carte" style={{ "--clr": "#ff0066" }}>
                <div className="imgBx">
                  <img src="gyal.jpg" alt="Accompagnement" />
                </div>
                <div className="conten">
                  <h2 className="font-bold text-black text-lg mb-4 md:text-2xl">
                    <span className="border-b-2 border-[#D70B52] pb-[0.5px]">
                      FORMA
                    </span>
                    TION CONTINUE
                  </h2>
                  <p>
                    Des équipes spécialisées en lien avec ton conseiller sont là
                    pour t’aider à trouver une emploi ! Elles sont là pour
                    négocier des offres d’emploi avec les entreprises, organiser
                    des actions de recrutement ainsi que te préparer activement
                    à la recherche d’emploi et à la rencontre avec les
                    employeurs. N’hésite donc pas à prendre rendez-vous avec ton
                    conseiller si tu es à la recherche d’un emploi et pour que
                    l’on puisse te présenter nos conseils et nos différents
                    dispositifs d’insertion professionnelle.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <section>
        <div className="containeur">
          <div className="carte" style={{ "--clr": "#ff0066" }}>
            <div className="imgBxe">
              <img src="bizz.jpg" alt="Accompagnement" />
            </div>
            <div className="contente">
              <h2 className="font-bold text-black text-lg mb-4 md:text-2xl">
                <span className="border-b-2 border-[#D70B52] pb-[0.5px]">
                  FORMA
                </span>
                TION EN ALTERNANCE
              </h2>
              <p>
                Des équipes spécialisées en lien avec ton conseiller sont là
                pour t’aider à trouver une emploi ! Elles sont là pour négocier
                des offres d’emploi avec les entreprises, organiser des actions
                de recrutement ainsi que te préparer activement à la recherche
                d’emploi et à la rencontre avec les employeurs. N’hésite donc
                pas à prendre rendez-vous avec ton conseiller si tu es à la
                recherche d’un emploi et pour que l’on puisse te présenter nos
                conseils et nos différents dispositifs d’insertion
                professionnelle.
              </p>
              <div className="rdv">
                <Link
                  to="/formations"
                  onClick={() => window.scrollTo(0, 0)}
                  className="bg-[#D70B52] text-white font-semibold py-1 text-center rounded-lg mb-8 text-sm md:w-56"
                >
                  OFFRES DE FORMATIONS
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SeFormer;
