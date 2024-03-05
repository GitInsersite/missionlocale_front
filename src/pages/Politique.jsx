import { useState } from "react";
import { useMediaQuery } from "react-responsive";

function Politique() {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const isTabletOrLarger = useMediaQuery({ minWidth: 768 });

  
  

  return (
    <div >
        <div className="bg-image bg-cover bg-center h-12 flex justify-center items-center text-white font-bold sm:h-16 md:h-28 lg:h-40 xl:h-52" style={{ backgroundImage: 'url(MicrosoftTeams-image16.png)' }}>
            <h1 className="md:text-3xl">POLITIQUE DE CONFIDENTIALITE</h1>
        </div> <br />

             
        <div className="breadcrumb px-4 pt-4  md:px-14 lg:px-20 xl:px-52">
        <a className="hover:text-[#5e5d5d]" href="/">Accueil</a> {'>'}
        <a className="hover:text-[#5e5d5d]" href="/politique-confidentialite"> Politique de confidentialité</a>
      </div> 

        <div className="texte" style={{ opacity: 0, animation: 'fadeIn 1s ease-in-out forwards' }}>
        <div className='flex flex-col mx-4 mt-4 md:mx-14 lg:mx-20 xl:mx-56'>
            <h1 className='font-bold text-black text-lg mb-8 md:text-2xl'> Objet de la présente politique </h1>
            <p className='mb-6 leading-tight '> La présente politique décrit la manière dont les données personnelles sont collectées et traitées sur le site Web de La Mission Locale des Mureaux. Cette politique peut être modifiée ou complétée à tout moment pour se conformer aux évolutions légales, réglementaires et techniques.  </p>
          
            <h1 className='font-bold text-black text-lg mb-8 md:text-2xl'>Responsable de traitement </h1>
            <p className='mb-6 leading-tight '>Le responsable de traitement a pour mission de mettre en œuvre les mesures techniques et organisationnelles appropriées pour s'assurer et démontrer que le traitement est effectué conformément au Règlement Général sur la Protection des Données.

Dans le cadre de ce site Web, le responsable de traitement est la Mission Locale Intercommunale des Mureaux, association au numéro de SIRET 38065998700024 et dont le siège social est situé au 38 Avenue Paul Raoult, 78130 Les Mureaux.

La Mission Locale Intercommunale de Sartrouville est représentée par sa Présidente, Salamata BIENSO MATETA. </p>
<h1 className='font-bold text-black text-lg mb-8 md:text-2xl'> Finalité des données collectées </h1>
<p className='mb-6 leading-tight '>  Le site Web permet d'accéder aux offres d'emploi publiées par la Mission Locale Intercommunale des Mureaux. Les données personnelles d'un utilisateur sont donc principalement collectées pour : </p>

<ul className='mb-6 leading-tight '>
    <li> · Créer un espace personnel sécurisé</li>
    <li>. Lutter contre la fraude informatique (piratage du compte, spam)</li>
    <li>. Améliorer la navigation sur le site</li>
    <li>. Effectuer des statistiques sur l'utilisation de l'outi </li>
    </ul> 
<p className='mb-6 leading-tight '> Chaque formulaire limite la collecte des données personnelles au strict nécessaire et précise le caractère obligatoire ou facultatif des données personnelles demandées. </p>
<h1 className='font-bold text-black text-lg mb-8 md:text-2xl'> Types de données traitées</h1>
<p className='mb-6 leading-tight '> En tant que responsable de traitement, la Mission Locale Intercommunale des Mureaux est susceptible de traiter tout ou partie des données personnelles suivantes : </p>
<ul className='mb-6 leading-tight '>
    <li> · Civilité</li>
    <li>. Nom</li>
    <li>. Prénom</li>
    <li>. Email </li>
    <li>. Téléphone portable </li>
    <li>.  Adresse (numéro et libellé de voie, code postal et ville) </li>
    <li>. Date de naissance </li>
    </ul> 
    <p className='mb-6 leading-tight '> La Mission Locale Intercommunale des Mureaux traite enfin des données personnelles dans le cadre de son formulaire de contact (accessible à tout utilisateur, identifié ou non) : </p>

    <ul className='mb-6 leading-tight '>
    <li> · Société</li>
    <li>. Nom</li>
    <li>. Prénom</li>
    <li>. Email </li>
    <li>. Téléphone  </li>
    <li>.  Sujet </li>
    <li>. Message </li>
    </ul> 
    <p className='mb-6 leading-tight '> Lorsque l'utilisateur est connecté à son espace personnel sécurisé, les données déjà connues sont automatiquement pré-renseignées. </p>
    <h1 className='font-bold text-black text-lg mb-8 md:text-2xl'> Communication des données personnelles</h1>
    <p className='mb-6 leading-tight '> Les données personnelles d'un utilisateur ne seront jamais transmises à des acteurs publicitaires. </p>
    <h1 className='font-bold text-black text-lg mb-8 md:text-2xl'> Durée de conservation des données personnelles</h1>
    <p className='mb-6 leading-tight '> La Mission Locale Intercommunale des Mureaux conserve les données personnelles d'un utilisateur jusqu'à suppression du compte par ce dernier dans son espace personnel sécurisé ou s'il effectue une demande de suppression de ses données auprès de la Mission Locale Intercommunale des Mureaux, conformément à la législation. </p>
    <p className='mb-6 leading-tight '>Les données du formulaire de contact sont conservées pendant deux ans. </p>
    <h1 className='font-bold text-black text-lg mb-8 md:text-2xl'> Cookies</h1>
    <p className='mb-6 leading-tight '> A des fins de statistiques, la Mission Locale Intercommunale des Mureaux fait appel au service Google Analytics, lequel dépose des fichiers d'informations (cookies) sur le terminal de l'utilisateur.</p>
    <p className='mb-6 leading-tight '>Ces traceurs, dont la durée de conservation est de 13 mois, ont une finalité strictement limitée à la seule mesure de l’audience du site (mesure des performances, détection de problèmes de navigation, optimisation des performances techniques ou de son ergonomie, estimation de la puissance des serveurs nécessaires, analyse des contenus consulté), pour le compte de la Mission Locale Intercommunale des Mureaux, et à la production de données statistiques anonymes uniquement. </p>
    <h1 className='font-bold text-black text-lg mb-8 md:text-2xl'> Droits des utilisateurs</h1>
    <p className='mb-6 leading-tight '>Conformément au Règlement Général sur la Protection des Données (RGPD), un utilisateur dispose des droits suivants : </p>
    <ul className='mb-6 leading-tight '>
    <li> · Droit d'accès (article 15 du RGPD)</li>
    <li>. Doit de rectification (article 16 du RGPD)</li>
    <li>. Droit d'effacement des données personnelles (article 17 du RGPD)</li>
    <li>. Droit de retirer un consentement (article 13 du RGPD) </li>
    <li>. Droit à la limitation du traitement des données personnelles (article 18 du RGPD) </li>
    <li>.  Droit d'opposition au traitement des données personnelles (article 21 du RGPD) </li>
    <li>. Droit à la portabilité des données personnelles (article 20 du RGPD) </li>
    </ul> 
    <p className='text-xl mb-6 leading-tight '>Pour exercer un des droits précédemment cités, l'utilisateur peut contacter la Mission Locale Intercommunale des Mureaux grâce à notre formulaire de contact.</p>



            </div>
        </div>
    </div>
  );
}


export default Politique;

