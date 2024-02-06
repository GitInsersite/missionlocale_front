import { useForm } from "react-hook-form";
import { FaPencil } from "react-icons/fa6";
import { FaCheckCircle, FaTimesCircle, FaPauseCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
// import { useState, useEffect } from "react";
// import axios from "axios";
import moment from 'moment';
import { useAuth } from '../context/AuthContext';

function EspacePersonnelJeune2() {
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Utilisez directement le contexte d'authentification
  const { information, ateliers, documents, jobOffers, rendezVous , formations} = useAuth();

  const onSubmit = (data) => {
  };

  

  return (
    <div>
      <div
        id="contactSection"
        className="bg-image bg-cover bg-center h-12 flex justify-center items-center text-white font-bold sm:h-16 md:h-28 lg:h-40 xl:h-52"
        style={{ backgroundImage: "url(MicrosoftTeams-image12.png)" }}>
        <h1 className="md:text-3xl">ESPACE PERSONNEL</h1>
      </div>
      <div className="px-4 flex flex-col items-center bg-[#F6F6F6]">
        <div className="flex flex-col items-center w-[98%]">
          <h2 id="infoSection" className="font-bold text-black text-lg mb-8 mt-6 md:text-3xl">JE CONTACTE MON CONSEILLER POUR :</h2>
          <form
            className="flex flex-col mt-4 w-full md:w-[70%] lg:w-[80%]"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col mb-2">
              <div className="flex flex-col ml-8">
                <div className="mb-2">
                  <input type="radio" id="rdvOption" {...register("option", { required: true })} value="avoir-un-rdv" className="mr-2" />
                  <label htmlFor="rdvOption" className="mr-4">Avoir un RDV</label>
                </div>

                <div className="mb-2">
                  <input
                    type="radio"
                    id="formationOption"
                    {...register("option", { required: true })}
                    value="chercher-une-formation"
                    className="mr-2"
                  />
                  <label htmlFor="formationOption" className="mr-4">
                    Chercher une formation
                  </label>
                </div>

                <div className="mb-2">
                  <input
                    type="radio"
                    id="emploiOption"
                    {...register("option", { required: true })}
                    value="trouver-un-emploi"
                    className="mr-2"
                  />
                  <label htmlFor="emploiOption">Trouver un emploi</label>
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="bg-[#D60B52] text-white w-40 py-1 p-2 rounded-md mb-8 font-semibold"
            >
              ENVOYER
            </button>
          </form>
        </div>
      </div>
      <h2 className="font-bold text-black text-center text-lg md:text-2xl">INFORMATIONS PERSONNELLES</h2>
      <div className="px-4 flex flex-col items-center bg-[#F6F6F6]">
        <div className="flex flex-col items-center w-[98%]">

            <div className="flex flex-col mt-4 mb-6 p-4 w-full md:w-[70%] lg:w-[80%] bg-white rounded-3xl">
              {/* Render the first section of personal information */}

              <div className="absolute top-2 right-4">
                <Link>
                  <FaPencil />
                </Link>
              </div>
              {/* <p className="font-bold mb-2">CIVILITE: </p> */}
              <p className="font-bold mb-2">PRENOM: {information.first_name}</p>
              <p className="font-bold mb-2">NOM: {information.last_name}</p>
              <p className="font-bold mb-2">DATE DE NAISSANCE: {moment(information.dateOfBirth).format('DD/MM/YYYY')}</p>
              <p className="font-bold mb-2 leading-tight">N°, TYPE, LIBELLE DE LA VOIE:</p>
              <p className="font-bold mb-2">CODE POSTAL: </p>
              <p className="font-bold mb-2">COMMUNE: {information.city}</p>
              <p id="rendezvouzSection" className="font-bold mb-2">ADRESSE ELECTRONIQUE: {information.email}</p>
              <p className="font-bold mb-2">TELEPHONE PRINCIPAL: {information.phone}</p>

            </div>

        </div>
      </div>
      <h2 id="rendezvousSection" className="font-bold text-black text-center text-lg md:text-2xl">MES RENDEZ-VOUS</h2>
      <div className="px-4 flex flex-col items-center bg-[#F6F6F6]">
        <div className="flex flex-col items-center w-[98%]">
            <div className="flex flex-col items-center mt-4 mb-6 p-4 w-full md:w-[70%] lg:w-[80%] bg-white rounded-3xl">
              {rendezVous.map((rendezVous, index) => (
                <div key={index} className="flex flex-col text-start relative w-full">
                  <p className="font-bold mb-2">Le {moment(rendezVous.date).format('DD/MM/YYYY')} à {moment(rendezVous.heure, 'HH:mm:ss').format('HH:mm')} avec {rendezVous.conseiller.information.first_name}</p>
                </div>
              ))}
            </div>
        </div>
      </div>
      <h2 id="docuSection" className="font-bold text-black text-center text-lg md:text-2xl">MES DOCUMENTS</h2>
      <div className="px-4 flex flex-col items-center bg-[#F6F6F6]">
        <div className="flex flex-col items-center w-[98%]">

            <div className="flex flex-col mt-4 mb-6 p-4 w-full md:w-[70%] lg:w-[80%] bg-white rounded-3xl">
              {documents.map((document, index) => (
                <div key={index} className="flex justify-between items-center mb-2">
                  <p className="font-bold mb-2">{document.title}</p>
                  <button className="font-semibold px-2 py-1 bg-gray-300 rounded-md">
                    <a href={document.document_url} target="_blank" rel="noopener noreferrer">
                      Télécharger
                    </a>
                  </button>
                </div>
              ))}
            </div>
        </div>
      </div>

      <h2 id="atelierSection" className="font-bold text-black text-center text-lg md:text-2xl">MES ATELIERS</h2>
      <div className="px-4 flex flex-col items-center bg-[#F6F6F6]">
        <div className="flex flex-col items-center w-[98%]">
          <div className="flex flex-col mt-4  p-4 w-full md:w-[70%] lg:w-[80%] bg-white rounded-3xl">
            {ateliers && ateliers.length > 0 ? (
              ateliers.map((atelier) => (
                <div key={atelier.id} className="flex justify-between items-center mb-2">
                  <p className="font-semibold">{atelier.title}</p>
                  {(() => {
                    switch (atelier.pivot.status) {
                      case 'accepte':
                        return <p className="text-green-500 text-start">Accepté</p>;
                      case 'refuse':
                        return <p className="text-red-500 text-start">Refusée</p>;
                      default:
                        return <p className="text-gray-500 text-start">En attente</p>;
                    }
                  })()}<br />
                  <p className="font-semibold">{moment(atelier.date).format('DD/MM/YYYY')}</p>
                </div>
              ))
            ) : (
              <p>Aucun atelier disponible.</p>
            )}
          </div>
        </div>
      </div>

      <h2 id="formationSection" className="font-bold text-black text-center text-lg md:text-2xl">MES FORMATIONS</h2>
      <div className="px-4 flex flex-col items-center bg-[#F6F6F6]">
        <div className="flex flex-col items-center w-[98%]">
          {formations && formations.length > 0 ? (
            <div className="flex flex-col mt-4 p-4 w-full md:w-[70%] lg:w-[80%] bg-white rounded-3xl">
              {formations.map((formation) => (
                <div key={formation.id} className="flex justify-between items-center mb-2">
                  <p className="font-semibold">{formation.title}</p>
                  {(() => {
                    switch (formation.pivot.status) {
                      case 'accepte':
                        return <p className="text-green-500 text-start">Accepté</p>;
                      case 'refuse':
                        return <p className="text-red-500 text-start">Refusée</p>;
                      default:
                        return <p className="text-gray-500 text-start">En attente</p>;
                    }
                  })()}<br />
                  <p className="font-semibold">{moment(formation.start).format('DD/MM/YYYY')} - {moment(formation.end).format('DD/MM/YYYY')}</p>
                </div>
              ))}
            </div>
          ) : (
            <p>Aucune formation disponible.</p>
          )}
        </div>
      </div>

      <h2 id="emploiSection" className="font-bold text-black text-center text-lg md:text-2xl">MES OFFRES D'EMPLOI</h2>
      <div className="px-4 flex flex-col items-center bg-[#F6F6F6]">
        <div className="flex flex-col items-center w-[98%]">
          <div className="flex flex-col mt-4 mb-6 p-4 w-full md:w-[70%] lg:w-[80%]">
            <p className="leading-tight mb-2 font-semibold">
              TECHNICIEN DE MAINTENANCE
            </p>
            <p className="leading-tight mb-2 font-semibold">AGENT DE VENTE</p>
          </div>
        </div>
      </div>


      <h2 id="ressourcesSection" className="font-bold text-black text-center text-lg md:text-2xl">RESSOURCES / INFORMATIONS</h2>
      <div className="px-4 flex flex-col items-center bg-[#F6F6F6]">
        <div className="flex flex-col items-center w-[98%]">
          <div className="flex flex-col mt-4 mb-6 p-4 w-full md:w-[70%] lg:w-[80%]"></div>
        </div>
      </div>
    </div>
  );
}

export default EspacePersonnelJeune2;
