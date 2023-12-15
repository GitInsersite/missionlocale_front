import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

import Accueil from "./pages/accueil";
import NosMissions from "./pages/NosMissions";
import NosCommunes from "./pages/NosCommunes";
import Gouvernance from "./pages/Gouvernance";
import Equipe from "./pages/Equipe";
import SeFormer from "./pages/SeFormer";
import Sorienter from "./pages/Sorienter";
import TrouverUnEmploi from "./pages/TrouverUnEmploi";
import EtreAccompagne from "./pages/EtreAccompagne";
import Expertise from "./pages/Expertise";
import DemarcheRse from "./pages/DemarcheRse";
import TaxeApprentissage from "./pages/TaxeApprentissage";
import Actualites from "./pages/Actualites";
import Ateliers from "./pages/Ateliers";
import UnAtelier from "./pages/UnAtelier";
import Contact from "./pages/Contact";
import UneActualite from "./pages/UneActualite";
import ConnexionJeune from "./pages/ConnexionJeune";
import ConnexionEntreprise from "./pages/ConnexionEntreprise";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/nos-missions" element={<NosMissions />} />
        <Route path="/nos-communes" element={<NosCommunes />} />
        <Route path="/gouvernance" element={<Gouvernance />} />
        <Route path="/equipe" element={<Equipe />} />
        <Route path="/se-former" element={<SeFormer />} />
        <Route path="/sorienter" element={<Sorienter />} />
        <Route path="/trouver-un-emploi" element={<TrouverUnEmploi />} />
        <Route path="/etre-accompagne" element={<EtreAccompagne />} />
        <Route path="/expertise" element={<Expertise />} />
        <Route path="/demarche-rse" element={<DemarcheRse />} />
        <Route path="/taxe-apprentissage" element={<TaxeApprentissage />} />
        <Route path="/actualites" element={<Actualites />} />
        <Route path="/actualites/:id" element={<UneActualite />} />
        <Route path="/ateliers" element={<Ateliers />} />
        <Route path="/ateliers/:id" element={<UnAtelier />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/connexion-jeune" element={<ConnexionJeune />} />
        <Route path="/connexion-entreprise" element={<ConnexionEntreprise />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
