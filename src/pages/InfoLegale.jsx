import { useState } from "react";
import { useMediaQuery } from "react-responsive";

function InfoLegale() {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const isTabletOrLarger = useMediaQuery({ minWidth: 768 });

  
  

  return (
    <div >
        <div className="bg-image bg-cover bg-center h-12 flex justify-center items-center text-white font-bold sm:h-16 md:h-28 lg:h-40 xl:h-52" style={{ backgroundImage: 'url(MicrosoftTeams-image16.png)' }}>
            <h1 className="md:text-3xl">MENTIONS LEGALES</h1>
        </div> <br />

             
        <div className="breadcrumb px-4 pt-4  md:px-14 lg:px-20 xl:px-52">
        <a className="hover:text-[#5e5d5d]" href="/">Accueil</a> {'>'}
        <a className="hover:text-[#5e5d5d]" href="/info-legale"> Mentions légales</a>
      </div> 

        <div className="texte" style={{ opacity: 0, animation: 'fadeIn 1s ease-in-out forwards' }}>
        <div className='flex flex-col mx-4 mt-4 md:mx-14 lg:mx-20 xl:mx-56'>
            <p className='font-bold mt-8 mb-6 leading-tight '> En application de la loi n°2004-575 du 21 juin 2004 relative à la confiance dans l’économie numérique, vous trouverez ci-dessous les informations légales concernant ce site : </p>
          
            <h1 className='font-bold text-black text-lg mb-8 md:text-2xl'>Protection des données personnelles </h1>
            <p className='mb-6 leading-tight '> Conformément à la loi Informatique et Libertés du 6 janvier 1978 (art. 34), vous disposez d’un droit d’accès, de rectification ou de suppression concernant les données personnelles que nous pourrions être amenés à recueillir (données renseignées par vous).</p>
<h1 className='font-bold text-black text-lg mb-8 md:text-2xl'> Droits d’auteur </h1>
<p className='mb-6 leading-tight '> Tous les articles et documents de ce site sont sous licence Créative Commons. Vous pouvez les télécharger et les utiliser à des fins pédagogiques. Nous vous demandons de conserver la source.

Malgré tous les soins apportés à la réalisation de ce site et à son actualisation régulière, des erreurs peuvent s’être glissées dans les informations et/ou documents présentés. Si vous en constatez n’hésitez pas à nous le faire savoir en nous contactant, nous procéderons aux rectifications correspondantes. </p>


<h1 className='font-bold text-black text-lg mb-8 md:text-2xl'> Liens hypertextes</h1>
<p className='mb-6 leading-tight '> Ce site contient des liens hypertextes permettant l’accès à des sites qui ne sont pas édités par le responsable de ce site. En conséquence le directeur de publication ne saurait être tenu pour responsable du contenu des sites auxquels l’internaute aurait ainsi accès.</p>

    
    <h1 className='font-bold text-black text-lg mb-8 md:text-2xl'>  Exploitant du site :</h1>
   
    <ul className='mb-6 leading-tight '>
    <li> Mission Locale Les Mureaux, Association </li>
    <li> 38 Avenue Paul Raoult</li>
    <li>78130 Les Mureaux</li>
    </ul> 

    <ul className='mb-6 leading-tight '>
    <li> SIREN : 380659987 </li>
    <li> SIRET (siège) : 3806599870002</li>
    <li>Représenté par Salamata BIENSO MATETA, sa présidente</li>
    <li>Adresse email : utilisez notre formulaire de contact</li>
    </ul> 

    <h1 className='font-bold text-black text-lg mb-8 md:text-2xl'> Ce site est réalisé et édité par : </h1>
   
    <ul className='mb-6 leading-tight '>
    <li> INSERSITE</li>
    <li> 70 Boulevard Victor Hugo</li>
    <li>78130 Les Mureaux</li>
    <li>Tél : 01 30 22 12 92</li>
    <li>Internet : http://insersite.org</li>
    </ul> 

    <ul className='mb-6 leading-tight '>
    <li> Le site est réalisé par l’équipe du Hub Digital d’INSERSITE.</li>
    <li> Le directeur de la publication est Ibrahima CAMARA.</li>
    </ul> 

    <h1 className='font-bold text-black text-lg mb-8 md:text-2xl'>   Crédits images et design :</h1>
    <p className='mb-4 leading-tight '> © Copyright icônes par :</p>

    <ul className='mb-6 leading-tight '>
    <li> - Free Icons Library sous licence CCO Public Domain</li>
    <li> - Icons made by Freepik from flaticon.com</li>
    <li> - Insersite</li>
    </ul> 




            </div>
        </div>
    </div>
  );
}


export default InfoLegale;

