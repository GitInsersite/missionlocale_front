import { Link } from "react-router-dom"

function NosMissions() {
  return (
    <div >
        <div className="bg-image bg-cover bg-center h-12 flex justify-center items-center text-white font-bold sm:h-16 md:h-28 lg:h-40 xl:h-52" style={{ backgroundImage: 'url(/public/MicrosoftTeams-image11.png)' }}>
            <h1 className="md:text-3xl">NOS MISSIONS</h1>
        </div>

         
      <div className="breadcrumb px-4 pt-4  md:px-14 lg:px-20 xl:px-52">
        <a className="hover:text-[#A4195C]" href="/">Accueil</a> {'>'}
        <a className="hover:text-[#A4195C]" href="/Services"> Services</a> {'>'}
        <a className="hover:text-[#A4195C]" href="/Etreaccompagne"> Etre accompagné</a>
      </div> 
        <div className='flex flex-col mx-4 mt-4 md:mx-14 lg:mx-20'>
            <h1 className='font-bold text-black text-lg mb-8 md:text-2xl'><span className='border-b-2 border-[#A4195C] pb-[0.5px]'>Qui</span> sommes-nous ? </h1>
            <p className='mb-6 leading-tight '> La Mission Locale des Mureaux est un lieu d’accueil, d’orientation et d’aide pour tous les jeunes de 16 à 25 ans qui rencontrent des freins pour entrer dans la vie professionnelle. Au sein de la Mission Locale, découvrez tout ce dont vous avez besoin pour trouver un emploi, un stage, ou une alternance. Cela passe par de la formation, de l’orientation, de l’aide à la réalisation de CV, lettre de motivation, entretien d’embauche, de la mise en contact avec des employeurs, et découverte des métiers pour vous accompagner dans votre orientation professionnelle. Nous vous accompagnons aussi dans toutes les tâches administratives que vous pourrez rencontrer dans la vie active, et vous assistons pour tout problème urgent de santé ou de logement.  

</p>
            <h1 className='font-bold text-black text-lg mb-8 md:text-2xl'><span className='border-b-2 border-[#A4195C] pb-[0.5px]'>Nos</span> Objectifs </h1>
            <p className='mb-6 leading-tight '> Notre objectif principal est d’accompagner tout jeune dans son entrée en vie active, en proposant des services et accompagnements personnalisés, et l’aidant ainsi à s’épanouir tout en construisant son avenir professionnel. L’avenir des jeunes, et leur insertion à la fois professionnelle et sociale, est le pilier fondateur de la Mission Locale des Mureaux, et ce pour quoi nous continuons d’agir.</p>
            
            <h1 className='font-bold text-black text-lg mb-8 md:text-2xl'> <span className="border-b-2 border-[#A4195C] pb-[0.5px]">Dis</span>positifs</h1>
            <Link className="bg-[#A4195C] text-white font-semibold py-1 text-center rounded-lg mb-8 text-sm md:w-56 hover:bg-pink-500 transition-all duration-300">TELECHARGER NOTRE GUIDE</Link>
        </div>
    </div>
  )
}

export default NosMissions