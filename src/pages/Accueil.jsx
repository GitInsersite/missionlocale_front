import SlideMenu from "../components/SlideMenu";
import Actualites from "../components/Actualites";
import Options from "../components/Options";
import Statistiques from "../components/Statistiques";
import Soutien from "../components/Soutien";
import CookieConsent from "react-cookie-consent"


import { useState, useEffect } from "react";
import axios from "axios";

function Accueil() {
  // Dynamically get the API URL based on the environment
  const apiUrlEnv =
    import.meta.env.MODE === "production"
      ? import.meta.env.VITE_API_URL_PROD
      : import.meta.env.VITE_API_URL_DEV;

  const [latestNews, setLatestNews] = useState([]);

  useEffect(() => {
    // Define the API endpoint
    const apiUrl = `${apiUrlEnv}/api/home`;

    // Make a GET request to the API
    axios
      .get(apiUrl)
      .then((response) => {
        // Log the entire response to the console
        //console.log("API Response:", response);

        // Update the state with the fetched data
        setLatestNews(response.data.latestNews);
      })
      .catch((error) => {
        // Handle errors, e.g., log them or show an error message
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <SlideMenu />
      <div className="bg-[#f6f6f6]">
        <Options />
        <CookieConsent
            location="bottom"
            buttonText="Bien sûr!!"
            cookieName="myAwesomeCookieName2"
            style={{ background: "#2B373B" }}
            buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
            expires={150}
            >
          En utilisant ce site, vous acceptez l'utilisation de cookies.
        </CookieConsent>

      </div>
      <Actualites latestNews={latestNews} />
      <Statistiques />
      <Soutien />
    </>
  );
}

export default Accueil;