import ImageGallery from "react-image-gallery";
import { Link } from "react-router-dom";
import "react-image-gallery/styles/css/image-gallery.css";

function SlideMenu() {
  const slides = [
    {
      original: "./public/MicrosoftTeams-image4.png",
      description: (
        <>
          VOUS AVEZ ENTRE 16 ET 25 ANS ?<br />
          LA MISSION LOCALE DES MUREAUX VOUS ACCOMPAGNE
        </>
      ),
      link: {
        to: "/connexion-jeune",
        text: "JE M'INSCRIS",
      },  
    },
    {
      original: "./public/MicrosoftTeams-image2.png",
      description: (
        <>
          VOUS AVEZ ENTRE 16 ET 25 ANS ?<br />
          LA MISSION LOCALE DES MUREAUX VOUS ACCOMPAGNE
        </>
      ),
      link: {
        to: "/connexion-jeune",
        text: "JE M'INSCRIS",
      },
    },
    {
      original: "./public/MicrosoftTeams-image3.png",
      description: (
        <>
          VOUS AVEZ ENTRE 16 ET 25 ANS ?<br />
          LA MISSION LOCALE DES MUREAUX VOUS ACCOMPAGNE
        </>
      ),
      link: {
        to: "/connexion-jeune",
        text: "JE M'INSCRIS",
      },
    },
  ];

  return (
    <>
    
      <img
        src="MicrosoftTeams-image.png"
        alt=""
        className="h-1 md:h-[5px] xl:h-2 2xl:h-3"
      />
      <div className="relative">
        <ImageGallery
          items={slides.map((item) => ({
            original: item.original,
            description: item.description,
            renderItem: () => (
              <div className="relative h-56 md:h-96 lg:h-[600px] xl:h-[700px]">
                <div className="absolute top-0 left-0 w-full h-2/3 bg-black opacity-50 object-cover rounded-b-[40%] overflow-hidden"></div>
                <img
                  src={item.original}
                  alt={item.description}
                  className="w-full h-2/3 object-cover rounded-b-[40%] overflow-hidden "
                  loading="lazy"
                />
                <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white">
                  <div className="test-container">
                  <p className="text-xs mb-2 text-center md:mb-1 md:text-xl h-1/3">
                    {item.description}
                  </p>
                  </div>
                  
                  
                  <Link
                    to={item.link.to}
                    className="bg-[#A51F60] text-white text-xs px-4 py-1 items rounded-full sm:text-base hover:bg-pink-500 transition-all duration-300"
                  >
                    {item.link.text}
                  </Link>
                </div>
                
                <div className="absolute bottom-4 right-4 text-white text-lg">
          <div className="flex items-center">
            {/* Personnalisez la taille et la couleur ici */}
            <span className="text-s ">›</span> {/* Flèche droite */}
            <span className="text-s">‹</span> {/* Flèche gauche */}
          </div>
          </div>
                
              </div>
            ),
          }))}
          showPlayButton={false}
          showFullscreenButton={false}
          showThumbnails={false}
          showNav={true}
          autoPlay={true}
          slideInterval={5000}
          slideDuration={1000}
        />
      </div>
    </>
  );
}

export default SlideMenu;
