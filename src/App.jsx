import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Header from "./components/Header";
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
import PreInscription from "./pages/PreInscription";
import EspacePersonnelJeune from "./pages/EspacePersonnelJeune";
import EspacePersonnelJeune2 from "./pages/EspacePersonnelJeune2";
import Formations from "./pages/Formations";
import PreInscriptionEntreprise from "./pages/PreInscriptionEntreprise";
import EspaceEntreprise from "./pages/EspaceEntreprise";
import EspacePersonnelEntreprise from "./pages/EspacePersonnelEntreprise";
import OffreEmploi from "./pages/OffreEmploi";
import Formation from "./pages/Formation";
import NotFound from "./pages/NotFound";
import MotDePasseOublieJeune from "./pages/MotDePasseOublieJeune";
import MotDePasseOublieEntreprise from "./pages/MotDePasseOublieEntreprise";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Header />
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
          <Route path="/mot-de-passe-oublie" element={<MotDePasseOublieJeune/>} />
          <Route
            path="/connexion-entreprise"
            element={<ConnexionEntreprise />}
          />
          <Route path="/mot-de-passe-oublie-entreprise" element={<MotDePasseOublieEntreprise/>} />
          <Route path="/pre-inscription" element={<PreInscription />} />
          <Route
            path="/espace-personnel-jeune"
            element={<EspacePersonnelJeune />}
          />
          <Route
            path="/espace-personnel-jeune2"
            element={<EspacePersonnelJeune2 />}
          />
          <Route path="/formations" element={<Formations />} />
          <Route path="/formations/:id" element={<Formation />} />
          <Route
            path="/pre-inscription-entreprise"
            element={<PreInscriptionEntreprise />}
          />
          <Route path="/espace-entreprise" element={<EspaceEntreprise />} />
          <Route
            path="/espace-personnel-entreprise"
            element={<EspacePersonnelEntreprise />}
          />
          <Route path="/offre-emploi" element={<OffreEmploi />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
