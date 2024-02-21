import { useForm } from "react-hook-form";
import { FaPencil } from "react-icons/fa6";
import { FaCheckCircle, FaTimesCircle, FaPauseCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import moment from 'moment';
import { useAuth } from '../context/AuthContext';

function EspacePersonnelJeune2() {
  const {register,handleSubmit,formState: { errors },} = useForm();
  const apiUrlEnv =
    import.meta.env.MODE === "production"
      ? import.meta.env.VITE_API_URL_PROD
      : import.meta.env.VITE_API_URL_DEV;

  const { information, ateliers, documents, jobOffers, rendezVous, formations, userData } = useAuth();
  const authToken = localStorage.getItem("authToken");
  const [oldSelectedOption, setOldSelectedOption] = useState(null);

  useEffect(() => {
    userData();
  }, []); 


  const onSubmit = async (data, e) => {
    const selectedOption = data.option;
    e.preventDefault();

    if (oldSelectedOption === selectedOption) {
      console.log("Ne spammez pas votre manager !");
    } else {
      try {
        let response;
        switch (selectedOption) {
          case "1":
            console.log("1");
            response = await axios.post(
              `${apiUrlEnv}/api/soumettre-formulaire`,
              {
                'jeune_id': information.id,
                'choix': 'Avoir un RDV'
              },
              {
                headers: {
                  'Authorization': `Bearer ${authToken}`,
                  'Content-Type': 'application/json'
                }
              },
              200
            );
            console.log("response 1:", response.data);
            // Gérer la réponse ici
            if (response.data.success) {
              // Succès
              console.log("Formulaire soumis avec succès:", response.data.success);
              // Faire quelque chose pour traiter le succès, si nécessaire
            } else {
              // Erreur
              console.error("Erreur lors de la soumission du formulaire:", response.data.error);
              // Faire quelque chose pour traiter l'erreur, si nécessaire
            }
            break;

          case "2":
            console.log("2");
            response = await axios.post(
              `${apiUrlEnv}/api/soumettre-formulaire`,
              {
                'jeune_id': information.id,
                'choix': 'Chercher une formation'
              },
              {
                headers: {
                  'Authorization': `Bearer ${authToken}`,
                  'Content-Type': 'application/json'
                }
              },
              200
            );
            console.log("response 2:", response.data);

            // Gérer la réponse ici
            if (response.data.success) {
              // Succès
              console.log("Formulaire soumis avec succès:", response.data.success);
              // Faire quelque chose pour traiter le succès, si nécessaire
            } else {
              // Erreur
              console.error("Erreur lors de la soumission du formulaire:", response.data.error);
              // Faire quelque chose pour traiter l'erreur, si nécessaire
            }
            break;

            case "3":
              console.log("3");
              response = await axios.post(
                `${apiUrlEnv}/api/soumettre-formulaire`,
                {
                  'jeune_id': information.id,
                  'choix': 'Trouver un emploi'
                },
                {
                  headers: {
                    'Authorization': `Bearer ${authToken}`,
                    'Content-Type': 'application/json'
                  }
                },
                200
              );
              console.log("response 3:", response.data);
  
              // Gérer la réponse ici
              if (response.data.success) {
                // Succès
                console.log("Formulaire soumis avec succès:", response.data.success);
                // Faire quelque chose pour traiter le succès, si nécessaire
              } else {
                // Erreur
                console.error("Erreur lors de la soumission du formulaire:", response.data.error);
                // Faire quelque chose pour traiter l'erreur, si nécessaire
              }
              break;

          default:
            console.log("Option inconnue");
            break;
        }
      } catch (error) {
        console.error("Erreur lors de la requête Axios:", error);
        console.log("Détails:", error.response);
        if (error.response && error.response.status === 401) {
          console.log("Erreur d'authentification");
        }
      }

    }

    setOldSelectedOption(selectedOption); // Mise à jour de l'état local
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
          <form className="flex flex-col mt-4 mb-6 p-4 w-full md:w-[70%] lg:w-[80%] bg-white rounded-3xl"onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col mb-2">
              <div className="flex flex-col ml-8">

                <div className="mb-2">
                  <input type="radio" id="rdvOption"{...register("option", { required: true })}value="1"className="mr-2" />
                  <label htmlFor="rdvOption" className="mr-4">Avoir un RDV</label>
                </div>

                <div className="mb-2"><input type="radio" id="formationOption"{...register("option", { required: true })}value="2"className="mr-2" />
                  <label htmlFor="formationOption"className="mr-2">Chercher une formation</label>
                </div>

                <div className="mb-2">
                  <input type="radio" id="emploiOption"{...register("option", { required: true })} value="3" className="mr-2" />
                  <label htmlFor="emploiOption">Trouver un emploi</label>
                </div>
              </div>
            </div>
            <button type="submit" className="bg-[#D60B52] text-white w-40 py-1 p-2 rounded-md mb-8 font-semibold">ENVOYER</button>
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
            <p className="mb-2">PRENOM: {information.first_name}</p>
            <p className="mb-2">NOM: {information.last_name}</p>
            <p className="mb-2">DATE DE NAISSANCE: {moment(information.dateOfBirth).format('DD/MM/YYYY')}</p>
            <p className="mb-2 leading-tight">N°, TYPE, LIBELLE DE LA VOIE:</p>
            <p className="mb-2">CODE POSTAL: </p>
            <p className="mb-2">COMMUNE: {information.city}</p>
            <p id="rendezvouzSection" className="mb-2">ADRESSE ELECTRONIQUE: {information.email}</p>
            <p className="mb-2">TELEPHONE PRINCIPAL: {information.phone}</p>
          </div>
        </div>
      </div>

      {/* <h2 id="rendezvousSection" className="font-bold text-black text-center text-lg md:text-2xl">MES RENDEZ-VOUS</h2>
      <div className="px-4 flex flex-col items-center bg-[#F6F6F6]">
        <div className="flex flex-col items-center w-[98%]">
          <div className="flex flex-col mt-4 mb-6 p-4 w-full md:w-[70%] lg:w-[80%] bg-white rounded-3xl">
            {rendezVous.map((rendezVous, index) => (
              <div key={index} className="flex flex-col text-start relative w-full">
                <p className="mb-2">Le {moment(rendezVous.date).format('DD/MM/YYYY')} à {moment(rendezVous.heure, 'HH:mm:ss').format('HH:mm')} avec {rendezVous.conseiller.information.first_name}</p>
              </div>
            ))}
          
        </div>
      </div> */}

      <h2 id="docuSection" className="font-bold text-black text-center text-lg md:text-2xl">MES RENDEZ-VOUS</h2>
      <div className="px-4 flex flex-col items-center bg-[#F6F6F6]">
        <div className="flex flex-col items-center w-[98%]">
            <div className="flex flex-col mt-4 mb-6 p-4 w-full md:w-[70%] lg:w-[80%] bg-white rounded-3xl">

              {rendezVous && rendezVous.length > 0 ? (
                <div className="flex flex-col mt-4 mb-6 p-4 w-full bg-white rounded-3xl">
                  {rendezVous.map((rdv, index) => (
                    <div key={index} className="flex flex-col text-start relative w-full">
                    <p className="mb-2">Le {moment(rdv.date).format('DD/MM/YYYY')} à {moment(rdv.heure, 'HH:mm:ss').format('HH:mm')} avec {rdv.conseiller.information.first_name}</p>
                  </div>
                  ))}
                </div>
              ) : (
                <p className="text-center">Vous n'avez pas de rendez-vous.</p>
              )}
          </div>
        </div>
      </div>

      <h2 id="docuSection" className="font-bold text-black text-center text-lg md:text-2xl">MES DOCUMENTS</h2>
      <div className="px-4 flex flex-col items-center bg-[#F6F6F6]">
      <div className="flex flex-col items-center w-[98%]">
          <div className="flex flex-col mt-4 mb-6 p-4 w-full md:w-[70%] lg:w-[80%] bg-white rounded-3xl">

            {documents && documents.length > 0 ? (
                documents.map((document, index) => (
                  <div key={index} className="flex justify-between items-center mb-2">
                    <p className="mb-2">{document.title}</p>
                    <button className="px-2 py-1 bg-gray-300 rounded-md">
                      <a href={document.document_url} target="_blank" rel="noopener noreferrer">
                        Télécharger
                      </a>
                    </button>
                  </div>
                ))
            ) : (
              <p className="text-center">Aucun document disponible.</p>
            )}
          </div>
        </div>
      </div>

      <h2 id="atelierSection" className="font-bold text-black text-center text-lg md:text-2xl">MES ATELIERS</h2>
      <div className="px-4 flex flex-col items-center bg-[#F6F6F6]">
        <div className="flex flex-col items-center w-[98%]">
          <div className="flex flex-col mt-4 mb-6 p-4 w-full md:w-[70%] lg:w-[80%] bg-white rounded-3xl">
            {ateliers && ateliers.length > 0 ? (
              ateliers.map((atelier) => (
                <div key={atelier.id} className="flex justify-start items-center mb-2">
                  <div className="w-1/4"><p>Le {moment(atelier.date).format('DD/MM/YY')}</p></div>
                  <div className="w-1/2"><p>{atelier.title}</p></div>
                  {(() => {
                    switch (atelier.pivot.status) {
                      case 'accepte':
                        return <div className="w-1/4"><p className="text-xs md:text-base leading-tight text-green-500 font-semibold md:flex justify-start items-center"><FaCheckCircle className="md:ml-2" /> Inscription acceptée</p></div>;
                      case 'refuse':
                        return <div className="w-1/4"><p className="text-xs md:text-base leading-tight text-red-600 font-semibold md:flex justify-start items-center"> <FaTimesCircle className="md:ml-2" /> Inscription refusée</p></div>;
                      default:
                        return <div className="w-1/4"><p className="text-xs md:text-base leading-tight text-gray-500 font-semibold md:flex justify-start items-center"> <FaPauseCircle className="md:ml-2" /> En attente</p></div>;
                    }
                  })()}
                </div>
              ))
            ) : (
              <p className="text-center">Vous avez postulé à aucun atelier</p>
            )}
          </div>
        </div>
      </div>


      <h2 id="emploiSection" className="font-bold text-black text-center text-lg md:text-2xl">MES FORMATIONS</h2>
      <div className="px-4 flex flex-col items-center bg-[#F6F6F6]">
        <div className="flex flex-col items-center w-[98%]">
          <div className="flex flex-col mt-4 mb-6 p-4 w-full md:w-[70%] lg:w-[80%] bg-white rounded-3xl">
          {formations && formations.length > 0 ? (
              formations.map((formation) => (
                <div key={formation.id} className="flex justify-start items-center mb-2">
                  <div className="w-1/4"><p>Le {moment(formation.date).format('DD/MM/YY')}</p></div>
                  <div className="w-1/2"><p>{formation.title}</p></div>
                  {(() => {
                    switch (formation.pivot.status) {
                      case 'accepte':
                        return <div className="w-1/4"><p className="text-xs md:text-base leading-tight text-green-500 font-semibold md:flex justify-start items-center"><FaCheckCircle className="md:ml-2" /> Inscription acceptée</p></div>;
                      case 'refuse':
                        return <div className="w-1/4"><p className="text-xs md:text-base leading-tight text-red-600 font-semibold md:flex justify-start items-center"> <FaTimesCircle className="md:ml-2" /> Inscription refusée</p></div>;
                      default:
                        return <div className="w-1/4"><p className="text-xs md:text-base leading-tight text-gray-500 font-semibold md:flex justify-start items-center"> <FaPauseCircle className="md:ml-2" /> En attente</p></div>;
                    }
                  })()}
                </div>
              ))
            ) : (
              <p className="text-center">Vous avez postulé à aucune formation.</p>
            )}
          </div>
        </div>
      </div>

      <h2 id="emploiSection" className="font-bold text-black text-center text-lg md:text-2xl">MES OFFRES D'EMPLOI</h2>
      <div className="px-4 flex flex-col items-center bg-[#F6F6F6]">
        <div className="flex flex-col items-center w-[98%]">
        <div className="flex flex-col mt-4 mb-6 p-4 w-full md:w-[70%] lg:w-[80%] bg-white rounded-3xl">

    {jobOffers && jobOffers.length > 0 ? (
      jobOffers
        .map((uniqueJobOffer) => (
        <div key={uniqueJobOffer.id} className="flex justify-start items-center mb-2">
          <div className="w-1/4">
            <p>Le {moment(uniqueJobOffer.date).format('DD/MM/YY')}</p>
          </div>
          <div className="w-1/2">
            <p>{uniqueJobOffer.title}</p>
          </div>
        </div>
      ))
    ) : (
      <p className="text-center">Vous avez postulé à aucune offre d'emploi</p>
    )}
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