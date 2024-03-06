import React from "react";
import CookieConsent from "react-cookie-consent";
import "/CookieBanner.css";

function Cookie() {
  return (
    <CookieConsent
      containerClasses="cookie-container"
      buttonClasses=""
      declineButtonClasses=""
      location="bottom"
      buttonText="Accepter"
      cookieName="myAwesomeCookieName2"
      expires={150}
      overlay
      enableDeclineButton
      declineButtonText="Refuser"
    >
      <div className="cookie-content">
        <img src="cooks.png" alt="Cookie image" className="cookie-image" />
        <p>
          {" "}
          Ce site utilise des cookies pour améliorer votre expérience. En
          continuant à naviguer sur le site, vous acceptez l'utilisation de
          cookies.
        </p>
      </div>
    </CookieConsent>
  );
}

export default Cookie;
