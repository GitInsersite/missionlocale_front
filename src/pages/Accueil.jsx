import SlideMenu from "../components/SlideMenu";
import Actualites from "../components/Actualites";
import Youtube from "../components/Youtube";
import Statistiques from "../components/Statistiques";
import Soutien from "../components/Soutien";

function Accueil() {
  return (
    <>
      <SlideMenu />
      <Actualites />
      <Youtube />
      <Statistiques />
      <Soutien />
    </>
  );
}

export default Accueil;
