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
  const [isAuthenticated, setIsAuthenticated] = useState(
    // Check local storage for isAuthenticated
    localStorage.getItem("isAuthenticated") === "true"
  );
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [name, setName] = useState(
    // Check local storage for name
    localStorage.getItem("name") || null
  );
  const [lastname, setLastname] = useState(
    // Check local storage for lastname
    localStorage.getItem("lastname") || null
  );
  const [responsible, setresponsible] = useState(
    // Check local storage for responsible
    localStorage.getItem("responsible") || null
  );
  const [role, setRole] = useState(
    // Check local storage for role
    localStorage.getItem("role") || null
  );
  const [showSessionExpiredPopup, setShowSessionExpiredPopup] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    // Update local storage when isAuthenticated changes
    localStorage.setItem("isAuthenticated", isAuthenticated);
    // Update local storage when name changes
    localStorage.setItem("name", name);
    // Update local storage when lastname changes
    localStorage.setItem("lastname", lastname);
    // Update local storage when responsible changes
    localStorage.setItem("responsible", responsible);
    // Update local storage when role changes
    localStorage.setItem("role", role);


    const authToken = localStorage.getItem("authToken");
    const expiresAt = localStorage.getItem("expiresAt");

    if (authToken && expiresAt) {
      const currentTimestamp = new Date().getTime();
      const expiresTimestamp = new Date(expiresAt).getTime();

      if (currentTimestamp > expiresTimestamp) {
        // Token has expired, show the session expired popup
        setShowSessionExpiredPopup(true);
        // Perform logout after a delay (you can adjust the delay according to your needs)
        setTimeout(() => {
          logout();
          //setShowSessionExpiredPopup(false);
        }, 3000);
      }
    }
  }, [isAuthenticated, name, lastname, role, responsible]);

  const closeSessionExpiredPopup = () => {
    setShowSessionExpiredPopup(false);
  };

  const login = async (data) => {
    try {
    // Dynamically get the API URL based on the environment
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
  
      // Handle success or redirect if needed
      setSuccessMessage(response.data.message);
      setName(response.data.information.first_name);
      setLastname(response.data.information.last_name);
      setresponsible(response.data.information.responsible_name);
      setRole(response.data.role);
      setErrorMessage(false);

      // Set isAuthenticated to true if the token exists
      if (token) {
        setIsAuthenticated(true);
      } else {
        // Handle the case where the token is missing in the response
        console.error("Token is missing in the response");
      }
  
      // Redirect to another page (replace '/' with the desired path)
      navigate("/");
  
      // Scroll to the top of the page
      window.scrollTo(0, 0);

      console.log(response)
  
    } catch (error) {
      if (error.response && error.response.status === 401) {
        // Unauthorized (Invalid credentials) - Set error in component state
        setErrorMessage(error.response.data.error || "Invalid credentials");
      } else {
        // Other errors - Log and handle as needed
        console.error("API request failed with error:", error);
      }
    }
  };
  

  const logout = () => {
    // Remove the authentication token from local storage
    localStorage.removeItem("authToken");
    localStorage.removeItem("expiresAt");

    // Perform your logout logic here
    // For simplicity, just setting isAuthenticated to false
    setIsAuthenticated(false);
    setSuccessMessage(null);
    setName(null);
    setLastname(null);
    setresponsible(null);
    setRole(null);
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
      }}
    >
      {children}
      {showSessionExpiredPopup && <SessionExpiredPopup onClose={closeSessionExpiredPopup} />}
    </AuthContext.Provider>
  );
};
