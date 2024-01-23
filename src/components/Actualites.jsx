import { Link } from "react-router-dom";

function Actualites({ latestNews }) {

  console.log("Latest News:", latestNews);

  return (
    <div className="mx-4 md:px-6 md:mb-10">
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
      <div className="md:flex md:justify-around md:w-full">
      {latestNews.map((newsItem) => (
        <div key={newsItem.id} className="border-[1px] w-40 h-56 rounded-xl mb-4 md:w-52 md:h-64 lg:h-72">
          {/* Update the src attribute with the actual image URL */}
          <img src={newsItem.image_url} alt={newsItem.title} className="border-[1px] h-[70%] rounded-t-lg lg:h-[75%] w-full" />
          <p className="text-[#87D2F0] text-xs mt-3 font-semibold ml-2">
            {/* Format the date as needed */}
            {new Date(newsItem.created_at).toLocaleDateString()}
          </p>
          <p className="font-bold text-xs ml-2">
            {newsItem.title}
          </p>
        </div>
      ))}
    </div>
        <Link
          to="/actualites"
          onClick={() => window.scrollTo(0, 0)}
          className="border-[#87D2F0] border-2 rounded-lg px-3 py-[0.2rem] text-[0.6rem] mt-4 font-semibold text-[#87D2F0] mb-2 md:px-10 md:text-sm"
        >
          VOIR TOUTE L'ACTUALITE
        </Link>
      </div>
    </div>
  );
}

export default Actualites;
