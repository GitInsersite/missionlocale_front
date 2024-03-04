import React from "react";
import CookieConsent from "react-cookie-consent";
import "/CookieBanner.css"; 

function Cookie() {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Accepter"
      cookieName="myAwesomeCookieName2"
      expires={150}
      overlay
      enableDeclineButton
      declineButtonText="Refuser"
      onDecline={() => {
        alert("Pour accéder au site, vous devez accepter l'utilisation de cookies.");
      }}
    >
      Ce site utilise des cookies pour améliorer votre expérience. En continuant à naviguer sur le site, vous acceptez l'utilisation de cookies.
    </CookieConsent>
  );
}

export default Cookie;
