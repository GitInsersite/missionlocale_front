import ImageGallery from "react-image-gallery";
import { useMediaQuery } from "react-responsive";
import "react-image-gallery/styles/css/image-gallery.css";

function Soutien() {
  const isTabletOrLarger = useMediaQuery({ minWidth: 768 });
  const isLaptopOrLarger = useMediaQuery({ minWidth: 1024 });

  const slidesTwoImages = [
    {
      pair: [
        { original: "MicrosoftTeams-image5.png" },
        { original: "MicrosoftTeams-image6.png" },
      ],
    },
    {
      pair: [
        { original: "MicrosoftTeams-image7.png" },
        { original: "MicrosoftTeams-image8.png" },
      ],
    },
    {
      pair: [
        { original: "MicrosoftTeams-image9.png" },
        { original: "MicrosoftTeams-image10.png" },
      ],
    },
    // Add more pairs as needed
  ];

  const slidesThreeImages = [
    {
      pair: [
        { original: "MicrosoftTeams-image5.png" },
        { original: "MicrosoftTeams-image6.png" },
        { original: "MicrosoftTeams-image7.png" }, // Add the third image
      ],
    },
    {
      pair: [
        { original: "MicrosoftTeams-image8.png" },
        { original: "MicrosoftTeams-image9.png" },
        { original: "MicrosoftTeams-image10.png" }, // Add the third image
      ],
    },
    // Add more pairs as needed
  ];

  const slidesSixImages = [
    {
      pair: [
        { original: "MicrosoftTeams-image5.png" },
        { original: "MicrosoftTeams-image6.png" },
        { original: "MicrosoftTeams-image7.png" },
        { original: "MicrosoftTeams-image8.png" },
        { original: "MicrosoftTeams-image9.png" },
        { original: "MicrosoftTeams-image10.png" },
      ],
    },
    {
      pair: [
        { original: "MicrosoftTeams-image5.png" },
        { original: "MicrosoftTeams-image6.png" },
        { original: "MicrosoftTeams-image7.png" },
        { original: "MicrosoftTeams-image8.png" },
        { original: "MicrosoftTeams-image9.png" },
        { original: "MicrosoftTeams-image10.png" },
      ],
    },
    // Add more pairs as needed
  ];

  const slides = isLaptopOrLarger
    ? slidesSixImages
    : isTabletOrLarger
    ? slidesThreeImages
    : slidesTwoImages;

  return (
    <div
      className="relative bg-[#f6f6f6] bg-image bg-cover bg-center"
      style={{ backgroundImage: "url(soutien.png)" }}
    >
      <div className="relative h-full py-10">
        <div className="absolute inset-0 bg-gray-400 opacity-50"></div>
        <h1 className="font-bold text-white ml-4 mt-2 md:text-2xl md:ml-11 md:mt-10 relative z-10">
          <span className="border-b-2 border-white pb-[0.5px]">AVEC </span>
          LE SOUTIEN DE:
        </h1>
        <div className="flex items-center justify-center h-52">
          <ImageGallery
            items={slides}
            showPlayButton={false}
            showFullscreenButton={false}
            showThumbnails={false}
            showNav={false}
            autoPlay={true}
            showBullets={true}
            slideInterval={5000}
            slideDuration={1000}
            renderItem={(item) => (
              <div className="flex">
                {item.pair.map((image, index) => (
                  <img
                    key={index}
                    src={image.original}
                    alt={`Slide ${index + 1}`}
                    className="w-32 h-32 mx-2 md:mx-8 lg:mx-4 xl:mx-10"
                  />
                ))}
              </div>
            )}
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}

export default Soutien;
