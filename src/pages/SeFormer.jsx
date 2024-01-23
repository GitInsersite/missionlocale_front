import { Link } from "react-router-dom";

function SeFormer() {
  return (
    <div>
      <div
        className="bg-image bg-cover bg-center h-12 flex justify-center items-center text-white font-bold sm:h-16 md:h-28 lg:h-40 xl:h-52"
        style={{ backgroundImage: "url(/public/MicrosoftTeams-image12.png)" }}
      >
        <h1 className="md:text-3xl">SE FORMER</h1>
      </div>

      <div className="flex flex-col items-center">
        <div>   
          <div className="flex flex-col px-4 pt-4  font-semibold bg-[#F6F6F6] md:px-14 lg:px-20">

      <div class="flex font-sans">
  <div class="flex-none w-56 relative">
    <img src="/" alt="" class="absolute inset-0 w-full h-full object-cover rounded-lg" loading="lazy" />
  </div>

  <div>
  <form class="flex-auto p-6">
    <div class="flex flex-wrap">
      
    <h2 className="font-bold text-black text-lg mb-4 md:text-2xl">
              <span className="border-b-2 border-[#D70B52] pb-[0.5px]">
                FORMA
              </span>
              TION CONTINUE...
            </h2>
            <p class="text-sm text-slate-500">
              Une formation pré-qualifiante est, pourrait-on dire, une
              introduction, une découverte d’un métier ou d’un secteur
              professionnel. Durant celle-ci, vous seront présentées les bases
              constitutives, les pratiques courantes, pour y évoluer. Vous
              effectuerez aussi des stages qui vous permettront d’avoir une
              première expérience pratique dans le domaine choisi.{" "}
            </p>

    </div>
  </form>    
</div>
          </div>
        </div>
      </div>


      <div className="flex flex-col items-center">
        <div>   
          <div className="flex flex-col px-4 pt-4  font-semibold bg-[#F6F6F6] md:px-14 lg:px-20">
      <div class="flex font-sans">
  
  <form class="flex-auto p-6">
    <div class="flex flex-wrap">
      
    <h2 className="font-bold text-black text-lg mb-4 md:text-2xl">
              <span className="border-b-2 border-[#D70B52] pb-[0.5px]">
                FORMA
              </span>
              TION EN ALTERNANCE...
            </h2>
            <p class="text-sm text-slate-500">
            Les formations qualifiantes sont des formations de durée variable,
          mais longues pour la plupart, préparant à une qualification reconnue,
          que ce soit par le biais de la préparation à un diplôme ou encore à un
          titre professionnel. Elles se composent de cours théoriques et de
          stages.{" "}
          </p>
          <div className="flex flex-col px-4 pt-4 font-semibold bg-[#F6F6F6] md:px-14 lg:px-20">
        <Link to="/formations" onClick={() => window.scrollTo(0, 0)} className="bg-[#D70B52] text-white font-semibold py-1 text-center rounded-lg mb-8 text-sm md:w-56">
          OFFRES DE FORMATIONS
        </Link>
      </div>
            
    </div>  
  </form>
  <div class="flex-none w-56 relative">
    <img src="/smileyrousse.jpg" alt="" class="absolute inset-0 w-full h-full object-cover rounded-lg" loading="lazy" />
    </div>
  </div>    
</div>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default SeFormer;
