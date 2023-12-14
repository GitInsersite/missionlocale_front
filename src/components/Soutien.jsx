import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

function Soutien() {

  const slides = [
    {
      pair: [
        { original: "./public/MicrosoftTeams-image5.png" },
        { original: "./public/MicrosoftTeams-image6.png" },
      ],
    },
    {
      pair: [
        { original: "./public/MicrosoftTeams-image7.png" },
        { original: "./public/MicrosoftTeams-image8.png" },
      ],
    },
    {
      pair: [
        { original: "./public/MicrosoftTeams-image9.png" },
        { original: "./public/MicrosoftTeams-image10.png" },
      ],
    },
    // Add more pairs as needed
  ];

  return (
    <div className="bg-gray-200">
      <h1 className='font-bold ml-4 mt-2'>
        <span className='border-b-2 border-yellow-500 pb-[0.5px]'>AVEC </span>LE SOUTIEN DE:
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
          slideInterval={3000}
          slideDuration={1000}
          renderItem={(item) => (
            <div className="flex ">
              {item.pair.map((image, index) => (
                <img key={index} src={image.original} alt={`Slide ${index + 1}`} className="w-32 h-32 mx-2" />
              ))}
            </div>
          )}
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default Soutien