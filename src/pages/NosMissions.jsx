import { Link } from "react-router-dom"

function NosMissions() {
  return (
    <div>
        <div className="bg-image bg-cover bg-center h-12 flex justify-center items-center text-white font-bold" style={{ backgroundImage: 'url(/public/MicrosoftTeams-image11.png)' }}>
            <h1>NOS MISSIONS</h1>
        </div>
        <div className='flex flex-col mx-4'>
            <h1 className='font-bold text-black text-lg mb-8'><span className='border-b-2 border-pink-500 pb-[0.5px]'>Qui</span> sommes-nous ? </h1>
            <p className='mb-6 leading-tight font-medium'>La Mission Locale des Mureaux est un lieu d’accueil, d’orientation et d’aide pour tous les jeunes de 16 à 25 ans qui rencontrent des freins pour entrer dans la vie professionnelle.  </p>
            <p className='mb-6 leading-tight font-medium'>Au sein de la Mission Locale, découvrez tout ce dont vous avez besoin pour trouver un emploi, un stage, ou une alternance. Cela passe par de la formation, de l’orientation, de l’aide à la réalisation de CV, lettre de motivation, entretien d’embauche, et découverte des métiers pour vous accompagner dans votre orientation professionnelle.  </p>
            <p className='mb-6 leading-tight font-medium'>Nous vous accompagnons dans toutes les tâches administratives que vous pourrez rencontrer dans la vie active, et vous assistons pour tout problème urgent de santé ou de logement.  </p>
            <p className='mb-6 leading-tight font-medium'>La Mission Locale des Mureaux, c’est aussi un facilitateur de rencontres entre tous les jeunes et tous les employeurs : nous mettons en avant vos compétences et votre profil auprès des employeurs, et faisons le pont entre vous pour une prise de contact rapide qui peut déboucher vers quelque chose de concret. </p>
            <p className='mb-6 leading-tight font-medium'>Nos actions sont basées sur :  </p>
            <p className='font-semibold leading-tight'>- Une approche globale des problématiques d’insertion </p>
            <p className='font-semibold'>- Des prestations gratuites </p>
            <p className='font-semibold'>- Le volontariat </p>
            <p className='font-semibold mb-8'>- L’absence de contrainte réglementaire </p>
            <h1 className='font-bold text-black text-lg mb-8'><span className='border-b-2 border-pink-500 pb-[0.5px]'>Nos</span> Objectifs </h1>
            <p className='mb-6 leading-tight font-medium'>Notre objectif principal est d’accompagner tout jeune dans son entrée en vie active, en proposant des services et accompagnements personnalisés, et l’aidant ainsi à s’épanouir tout en construisant son avenir professionnel. Favoriser l’insertion des jeunes de 16 à 26 ans non scolarisés, ainsi perpétuer notre combat contre l’exclusion. </p>
            <p className='mb-6 leading-tight font-medium'>Nous vous proposons donc un parcours spécialisé en fonction de vos attentes, vos aspirations et de vos compétences, pour optimiser vos chances de réussir sur le plan professionnel. Vous permettre d’être en contact avec des entreprises et des employeurs, mais aussi vous assister avec un suivi pour favoriser votre autonomie sociale et professionnelle.  </p>
            <p className='mb-6 leading-tight font-medium'>L’avenir des jeunes, et leur insertion à la fois professionnelle et sociale, est le pilier fondateur de la Mission Locale des Mureaux, et ce pour quoi nous continuons d’agir. </p>
            <h1 className='font-bold text-black text-lg mb-8'> <span className="border-b-2 border-pink-500 pb-[0.5px]">DISPOSITIFS</span></h1>
            <Link className="bg-pink-500 text-white font-semibold py-1 text-center rounded-lg mb-8 text-sm">TELECHARGER NOTRE GUIDE</Link>
        </div>
    </div>
  )
}

export default NosMissions