import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

function Actualites({ latestNews }) {
  console.log("Latest News:", latestNews);
  const isLaptopOrLarger = useMediaQuery({ minWidth: 1024 });

  return (
    <div
      className="px-8 py-4 md:px-6 md:pb-10 bg-[#f6f6f6] xl:px-52"
      style={
        isLaptopOrLarger
          ? { clipPath: "ellipse(150% 95% at 50% 0)" }
          : { clipPath: "ellipse(500% 100% at 50% 0)" }
      }
    >
      <div className="mb-4 lg:mb-10">
        <h1 className="font-bold mb-2 text-2xl lg:text-3xl">
          <span className="border-b-2 border-[#87D2F0] pb-[0.5px]">NOS</span>{" "}
          ACTUALITES
        </h1>
        <p className="leading-tight"></p>
      </div>
      <div className="flex flex-col items-center md:mb-2">
        <div className="w-full md:flex md:justify-around md:w-full">
          {latestNews.map((newsItem) => (
            <Link
              key={newsItem.id} // Move key prop here
              to={`/actualites/${newsItem.id}`}
              onClick={() => window.scrollTo(0, 0)}
            >
              <div className="flex-col w-full rounded-xl mb-10 md:mb-4 md:w-52 lg:w-60 xl:w-72 lg:hover:bg-blue-500 lg:hover:text-white transition-all shadow-lg">
                <div className="">
                  <img
                    src={newsItem.image_url}
                    alt={newsItem.title}
                    className="rounded-t-lg w-full"
                  />
                </div>
                <div className="py-4">
                  <p className="text-[#87D2F0] text-xs font-semibold ml-2">
                    {/* Format the date as needed */}
                    {new Date(newsItem.created_at).toLocaleDateString()}
                  </p>
                  <p className="font-bold text-xs ml-2">{newsItem.title}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <Link
          to="/actualites"
          onClick={() => window.scrollTo(0, 0)}
          className="border-[#87D2F0] border-2 rounded-lg px-8 py-2 text-xs md:mt-4 font-semibold text-[#87D2F0] mb-2 md:px-10 md:text-sm hover:bg-blue-500 hover:text-white transition-all"
        >
          VOIR TOUTE L&apos;ACTUALITE
        </Link>
      </div>
    </div>
  );
}

export default Actualites;
