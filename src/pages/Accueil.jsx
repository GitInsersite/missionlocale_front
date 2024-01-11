import SlideMenu from "../components/SlideMenu";
import Actualites from "../components/Actualites";
import Youtube from "../components/Youtube";
import Statistiques from "../components/Statistiques";
import Soutien from "../components/Soutien";

import { useState, useEffect } from "react";
import axios from "axios";

function Accueil() {

  const [latestNews, setLatestNews] = useState([]);

  useEffect(() => {
    // Define the API endpoint
    const apiUrl = "http://localhost:8000/api/home";

    // Make a GET request to the API
    axios.get(apiUrl)
      .then(response => {
        // Log the entire response to the console
        console.log("API Response:", response);

        // Update the state with the fetched data
        setLatestNews(response.data.latestNews);
      })
      .catch(error => {
        // Handle errors, e.g., log them or show an error message
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <SlideMenu />
      <Actualites latestNews={latestNews}/>
      <Youtube />
      <Statistiques />
      <Soutien />
    </>
  );
}

export default Accueil;
