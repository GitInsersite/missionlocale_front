import ImageGallery from "react-image-gallery";
import { Link } from "react-router-dom";
import "react-image-gallery/styles/css/image-gallery.css";
import { useMediaQuery } from "react-responsive";

function SlideMenu() {
  const isTabletOrLarger = useMediaQuery({ minWidth: 768 });
  
  const slides = [
    {
      original: "MicrosoftTeams-image4.webp",
      description: (
        <>
          <h2>
            VOUS AVEZ ENTRE 16 ET 25 ANS ?<br />
            LA MISSION LOCALE DES MUREAUX <br />
            VOUS ACCOMPAGNE 
          </h2>
        </>
      ),
      link: {
        to: "/connexion-jeune",
        text: "JE M'INSCRIS",
      },
    },
    {
      original: "MicrosoftTeams-image2.webp",
      description: (
        <>
          <h2>
            VOUS AVEZ ENTRE 16 ET 25 ANS ?<br />
            LA MISSION LOCALE DES MUREAUX <br />
            VOUS ACCOMPAGNE 
          </h2>
        </>
      ),
      link: {
        to: "/connexion-jeune",
        text: "JE M'INSCRIS",
      },
    },
    {
      original: "MicrosoftTeams-image3.webp",
      description: (
        <>
          <h2>
            VOUS AVEZ ENTRE 16 ET 25 ANS ?<br />
            LA MISSION LOCALE DES MUREAUX <br />
            VOUS ACCOMPAGNE 
          </h2>
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
        alt="ligne coloree"
        className="h-1 md:h-[5px] xl:h-2 2xl:h-3"
      />
      <div className="relative" style={
        isTabletOrLarger
          ? { clipPath: "ellipse(120% 95% at 50% 0)" }
          : { clipPath: "ellipse(150% 95% at 50% 0)" }
      }>
        <ImageGallery
          items={slides.map((item) => ({
            original: item.original,
            description: item.description,
            renderItem: () => (
              <div
                className="relative h-96 lg:h-[500px] xl:h-[700px]"
                
              >
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
                <img
                  src={item.original}
                  alt="jeunes souriants"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white">
                  <div className="flex flex-col items-start">
                    <p className="text-base mb-2 text-left sm:text-xl md:mb-6 md:text-3xl lg:text-4xl xl:text-5xl">
                      {item.description}
                    </p>
                    <Link
                      to={item.link.to}
                      onClick={() => window.scrollTo(0, 0)}
                      className="bg-[#A51F60] text-white mt-3 text-xs px-4 py-1 rounded md:text-base lg:text-lg xl:px-6 xl:py-2 xl:text-xl  hover:bg-pink-500 transition-all duration-300 ease-in-out transform hover:scale-110"
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