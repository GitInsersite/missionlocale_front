import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SessionExpiredPopup from "../components/SessionExpiredPopup";

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem("isAuthenticated") === "true");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [name, setName] = useState(localStorage.getItem("name") || null);
  const [lastname, setLastname] = useState(localStorage.getItem("lastname") || null);
  const [responsible, setresponsible] = useState(localStorage.getItem("responsible") || null);
  const [role, setRole] = useState(localStorage.getItem("role") || null);
  
  const [ateliers, setAteliers] = useState(JSON.parse(localStorage.getItem("ateliers") || null));
  const [information, setInformation] = useState(JSON.parse(localStorage.getItem("information") || null));
  const [documents, setDocuments] = useState(JSON.parse(localStorage.getItem("documents") || null));
  const [formations, setFormations] = useState(JSON.parse(localStorage.getItem("formations") || null));
  const [jobOffers, setJobOffers] = useState(JSON.parse(localStorage.getItem("joboffers") || null));
  const [rendezVous, setRendezVous] = useState(JSON.parse(localStorage.getItem("rendezVous") || null));

  const [showSessionExpiredPopup, setShowSessionExpiredPopup] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("isAuthenticated", isAuthenticated);
    localStorage.setItem("name", name);
    localStorage.setItem("lastname", lastname);
    localStorage.setItem("responsible", responsible);
    localStorage.setItem("role", role);
    
    const authToken = localStorage.getItem("authToken");
    const expiresAt = localStorage.getItem("expiresAt");

    if (role === "jeune") {
      // Mettre à jour les valeurs spécifiques au rôle "jeune"
      localStorage.setItem("ateliers", JSON.stringify(ateliers));
      localStorage.setItem("information", JSON.stringify(information));
      localStorage.setItem("documents", JSON.stringify(documents));
      localStorage.setItem("formations", JSON.stringify(formations));
      localStorage.setItem("jobOffers", JSON.stringify(jobOffers));
      localStorage.setItem("rendezVous", JSON.stringify(rendezVous));
    }

    if (authToken && expiresAt) {
      const currentTimestamp = new Date().getTime();
      const expiresTimestamp = new Date(expiresAt).getTime();

      if (currentTimestamp > expiresTimestamp) {
        setShowSessionExpiredPopup(true);
        setTimeout(() => {logout();}, 3000);
      }
    }
  }, [isAuthenticated, name, lastname, role, responsible,ateliers, information, documents, formations, jobOffers, rendezVous]);

  const closeSessionExpiredPopup = () => {
    setShowSessionExpiredPopup(false);
  };

  const login = async (data) => {
    try {
    const apiUrl = import.meta.env.MODE === 'production'
      ? import.meta.env.VITE_API_URL_PROD
      : import.meta.env.VITE_API_URL_DEV;

      const response = await axios.post(
      `${apiUrl}/api/login/entreprise-jeune`,
      data
    );

      // Retrieve the token from the response
      const token = response.data.token;
      const expiresAt = response.data.expires_at;
  
      // Store the token in local storage for later use
      localStorage.setItem("authToken", token);
      localStorage.setItem("expiresAt", expiresAt);
      localStorage.setItem("isAuthenticated", true);
      localStorage.setItem("name", response.data.information.first_name);
      localStorage.setItem("lastname", response.data.information.last_name);
      localStorage.setItem("responsible", response.data.information.responsible_name);
      localStorage.setItem("role", response.data.role);

      localStorage.setItem("ateliers", JSON.stringify(response.data.ateliers));
      localStorage.setItem("information", JSON.stringify(response.data.information));
      localStorage.setItem("documents", JSON.stringify(response.data.documents));
      localStorage.setItem("formations", JSON.stringify(response.data.formations));
      localStorage.setItem("jobOffers", JSON.stringify(response.data.jobOffers));
      localStorage.setItem("rendezVous", JSON.stringify(response.data.rendezVous));

  
      // Handle success or redirect if needed
      setSuccessMessage(response.data.message);
      setName(response.data.information.first_name);
      setLastname(response.data.information.last_name);
      setresponsible(response.data.information.responsible_name);
      setRole(response.data.role);
      
      setAteliers(response.data.ateliers);
      setInformation(response.data.information);
      setDocuments(response.data.documents);
      setFormations(response.data.formations);
      setJobOffers(response.data.jobOffers);
      setRendezVous(response.data.rendezVous);


      setErrorMessage(false);
      // Set isAuthenticated to true if the token exists
      if (token) {
        setIsAuthenticated(true);
      } else {
        console.error("Token is missing in the response");
      }
      
      navigate("/"); // Redirect to another page (replace '/' with the desired path)
  
      window.scrollTo(0, 0); // Scroll to the top of the page

      console.log(response)
  
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setErrorMessage(error.response.data.error || "Invalid credentials");// Unauthorized (Invalid credentials) - Set error in component state
      } else {
        console.error("API request failed with error:", error);// Other errors - Log and handle as needed
      }
    }
  };
  

  const logout = () => {
    // Remove the authentication token from local storage
    localStorage.removeItem("authToken");
    localStorage.removeItem("expiresAt");
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("name");
    localStorage.removeItem("lastname");
    
    localStorage.removeItem("responsible");
    localStorage.removeItem("role");
    localStorage.removeItem("ateliers");
    localStorage.removeItem("information");
    localStorage.removeItem("documents");
    localStorage.removeItem("formations");
    localStorage.removeItem("jobOffers");
    localStorage.removeItem("rendezVous");

    setIsAuthenticated(false);
    setSuccessMessage(null);
    setName(null);
    setLastname(null);
    setresponsible(null);
    setRole(null);
    setAteliers([]); // Reset ateliers to an empty array
    setInformation({}); // Reset information to an empty object
    setDocuments([]); // Reset documents to an empty array
    setFormations([]); // Reset formations to an empty array
    setJobOffers([]); // Reset jobOffers to an empty array
    setRendezVous([]); // Reset rendezVous to an empty array
    navigate("/");

    // Scroll to the top of the page
    window.scrollTo(0, 0);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        login,
        logout,
        successMessage,
        errorMessage,
        name,
        lastname,
        responsible,
        role,
        ateliers,
        information,
        documents,
        formations,
        jobOffers,
        rendezVous,
      }}
    >
      {children}
      {showSessionExpiredPopup && <SessionExpiredPopup onClose={closeSessionExpiredPopup} />}
    </AuthContext.Provider>
  );
};
