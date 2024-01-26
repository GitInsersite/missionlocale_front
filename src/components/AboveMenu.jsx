import { BsFillTelephoneFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { useMediaQuery } from "react-responsive";
import DropdownButtonConnexion from "./DropdownButtonConnexion";
import DropdownButtonConnexionMo from "./DropdownButtonConnexionMo";

function AboveMenu() {
  const isTabletOrLarger = useMediaQuery({ minWidth: 768 });
  const googleMapsEmbedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2618.0406529566458!2d1.9105878751635066!3d48.9907837913822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6928ec8766197%3A0x4a462aa9e0eb44c3!2s38%20Av.%20Paul%20Raoult%2C%2078130%20Les%20Mureaux!5e0!3m2!1sfr!2sfr!4v1699452035578!5m2!1sfr!2sfr";

  const phoneNumber = "01 30 91 21 50";
  const handleLinkClick = (event) => {
    event.preventDefault();

    // Open the link in a new tab or window
    window.open(googleMapsEmbedUrl, "_blank");
  };
  return (
    <>
      {isTabletOrLarger ? (
        <div className="bg-[#252323] text-white flex justify-end text-xs py-1 pr-10 lg:pr-0 xl:pr-[153px]">
          <div className="mr-6 lg:mr-10 flex items-center">
            <FaLocationDot className="mr-2" />
            <a
              href={googleMapsEmbedUrl}
              onClick={handleLinkClick}
              className="cursor-pointer"
            >
              38 AV. PAUL RAOULT, 78130 LES MUREAUX
            </a>
          </div>
          <div className="mr-6 lg:mr-10 flex items-center">
            <BsFillTelephoneFill className="mr-2" />
            <a href={`tel:${phoneNumber}`} className="cursor-pointer">
              {phoneNumber}
            </a>
          </div>
          <div className="mr-6 lg:mr-10 flex items-center">
            <DropdownButtonConnexion />
          </div>
        </div>
      ) : (
        <div className="bg-[#252323] text-white flex justify-end text-xs py-1">
          <div className="mr-4 flex items-center">
            <BsFillTelephoneFill className="mr-2" />
            <a href={`tel:${phoneNumber}`} className="cursor-pointer">
              {phoneNumber}
            </a>
          </div>
          <div className="mr-4 flex items-center">
            <DropdownButtonConnexionMo />
          </div>
        </div>
      )}
    </>
  );
}

export default AboveMenu;
