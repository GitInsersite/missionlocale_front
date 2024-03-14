function NosMissions() {
  const handleDownload = async () => {
    try {
      const response = await fetch(
        "/pdf/livret insersite V13-Mission local.pdf"
      );
      const blob = await response.blob();
      const url = window.URL.createObjectURL(new Blob([blob]));
      const a = document.createElement("a");
      a.href = url;
      a.download = "Guide.pdf";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch (error) {
      console.error("Error downloading the file:", error);
    }
  };

  return (
    <div className="bg-[#F6F6F6]">
      <div
        className="bg-image bg-cover bg-center h-12 flex justify-center items-center text-white font-bold sm:h-16 md:h-28 lg:h-40 xl:h-52"
        style={{ backgroundImage: "url(MicrosoftTeams-image11.png)" }}
      >
        <h1 className="md:text-3xl">NOS MISSIONS</h1>
      </div>{" "}
      <br />
      <div className=" breadcrumb px-4 pt-4  md:px-14 lg:px-10 xl:px-56">
        <a href="/">Accueil</a> {">"}
        <a href="/"> La Mission Locale </a>
        <a className="text-[#A4195C]" href="/nos-missions">Nos missions</a>
      </div>
      <div className="texte" style={{ opacity: 0, animation: "fadeIn 1s ease-in-out forwards" }}>
        <div className="flex flex-col mx-4 mt-4 md:mx-14 lg:mx-20 xl:mx-56">
          <h2 className="font-bold text-black text-lg mb-8 md:text-2xl"><span className="border-b-2 border-[#A4195C] pb-[0.5px]">Qui </span>sommes-nous ?</h2>
          <div>
            <p className="mb-2 leading-6 text-justify">
              La Mission Locale des Mureaux est un lieu d’accueil, d’orientation
              et d’aide pour tous les jeunes de 16 à 25 ans qui rencontrent des
              freins pour entrer dans la vie professionnelle. Au sein de la
              Mission Locale, découvrez tout ce dont vous avez besoin pour trouver
              un emploi, un stage, ou une alternance.</p>
              <p>
              Cela passe par de la
              formation, de l’orientation, de l’aide à la réalisation de CV,
              lettre de motivation, entretien d’embauche, de la mise en contact
              avec des employeurs, et découverte des métiers pour vous accompagner
              dans votre orientation professionnelle.
              </p>
              <p className="mb-6 leading-6 text-justify">Nous vous accompagnons aussi
              dans toutes les tâches administratives que vous pourrez rencontrer
              dans la vie active, et vous assistons pour tout problème urgent de
              santé ou de logement.
            </p>
          </div>
          

          <h2 className="font-bold text-black text-lg mb-8 md:text-2xl"><span className="border-b-2 border-[#A4195C] pb-[0.5px]">Nos </span>Objectifs</h2>
          <div >
            <p className="mb-2 leading-6 text-justify">
              Notre objectif principal est d’accompagner tout jeune dans son
              entrée en vie active, en proposant des services et accompagnements
              personnalisés, et l’aidant ainsi à s’épanouir tout en construisant
              son avenir professionnel.</p>
            <p  className="mb-6 leading-6 text-justify">L’avenir des jeunes, et leur insertion à
              la fois professionnelle et sociale, est le pilier fondateur de la
              Mission Locale des Mureaux, et ce pour quoi nous continuons d’agir.
            </p>
          </div>

        </div>
        <div
          className="texte"
          style={{ opacity: 0, animation: "fadeIn 1s ease-in-out forwards" }}
        >
          <div className="flex flex-col mx-4 mt-4 md:mx-14 lg:mx-20 xl:mx-56">
            <button
              className="bg-[#A4195C] text-white font-semibold py-1 text-center rounded-lg mb-8 text-sm md:w-56 hover:bg-pink-700 transition-all duration-300"
              onClick={handleDownload}
            >
              TELECHARGER NOTRE GUIDE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NosMissions;
