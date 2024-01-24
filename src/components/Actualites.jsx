import { Link } from "react-router-dom";

function Actualites({ latestNews }) {
  console.log("Latest News:", latestNews);

  return (
    <div className="px-4 md:px-6 md:pb-10 border-2 bg-[#f6f6f6]">
      <div className="mb-4 lg:mb-10">
        <h1 className="font-bold mb-2 md:text-2xl">
          <span className="border-b-2 border-[#87D2F0] pb-[0.5px]">NOS</span>{" "}
          ACTUALITES
        </h1>
        <p className="leading-tight">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          dignissimos placeat saepe aut perferendis dolores maiores velit fugit
          ex quo.
        </p>
      </div>
      <div className="flex flex-col items-center md:mb-2">
        <div className="w-full md:flex md:justify-around md:w-full">
          {latestNews.map((newsItem) => (
            <Link
              to={`/actualites/${newsItem.id}`}
              onClick={() => window.scrollTo(0, 0)}
            >
              <>
                <div
                  key={newsItem.id}
                  className="border-[2px] flex-col w-full rounded-xl mb-4 md:w-52 hover:bg-blue-500 hover:text-white transition-all"
                >
                  
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
                  
                  {/* Update the src attribute with the actual image URL */}
                </div>
              </>
            </Link>
          ))}
        </div>
        <Link
          to="/actualites"
          onClick={() => window.scrollTo(0, 0)}
          className="border-[#87D2F0] border-2 rounded-lg px-8 py-2 text-xs mt-4 font-semibold text-[#87D2F0] mb-2 md:px-10 md:text-sm hover:bg-blue-500 hover:text-white transition-all"
        >
          VOIR TOUTE L'ACTUALITE
        </Link>
      </div>
    </div>
  );
}

export default Actualites;
