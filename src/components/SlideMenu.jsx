import ImageGallery from "react-image-gallery";
import { Link } from "react-router-dom";
import "react-image-gallery/styles/css/image-gallery.css";

function SlideMenu() {
  const slides = [
    {
      original: "MicrosoftTeams-image4.png",
      description: (
        <>
          VOUS AVEZ ENTRE 16 ET 25 ANS ?<br />
          LA MISSION LOCALE DES MUREAUX <br />
          VOUS ACCOMPAGNE 
        </>
      ),
      link: {
        to: "/connexion-jeune",
        text: "JE M'INSCRIS",
      },
    },
    {
      original: "MicrosoftTeams-image2.png",
      description: (
        <>
          VOUS AVEZ ENTRE 16 ET 25 ANS ?<br />
          LA MISSION LOCALE DES MUREAUX <br />
          VOUS ACCOMPAGNE 
        </>
      ),
      link: {
        to: "/connexion-jeune",
        text: "JE M'INSCRIS",
      },
    },
    {
      original: "MicrosoftTeams-image3.png",
      description: (
        <>
          VOUS AVEZ ENTRE 16 ET 25 ANS ?<br />
          LA MISSION LOCALE DES MUREAUX <br />
          VOUS ACCOMPAGNE 
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
      <div className="relative" style={{ clipPath: "ellipse(100% 95% at 50% 0)" }}>
        <ImageGallery
          items={slides.map((item) => ({
            original: item.original,
            description: item.description,
            renderItem: () => (
              <div
                className="relative h-56 md:h-96 lg:h-[500px] xl:h-[700px]"
                
              >
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
                <img
                  src={item.original}
                  alt={item.description}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white">
                  <div className="flex flex-col items-start">
                    <p className="text-base mb-2 text-left md:mb-6 md:text-xl">
                      {item.description}
                    </p>
                    <Link
                      to={item.link.to}
                      className="bg-[#A51F60] text-white text-xs px-4 py-1 rounded md:text-base"
                    >
                      {item.link.text}
                    </Link>
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
