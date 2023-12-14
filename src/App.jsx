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
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
