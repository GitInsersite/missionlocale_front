import { useForm } from "react-hook-form";
import { FaPencil } from "react-icons/fa6";
import { FaCheckCircle, FaTimesCircle, FaPauseCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function EspacePersonnelJeune2() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const authToken = localStorage.getItem("authToken");

    // Check if authToken exists before making the request
    if (authToken) {
      // Use Axios to fetch user data from Laravel API with the token in headers
      axios
        .get("http://localhost:8000/api/espacepersoDetail", {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        })
        .then((response) => {
          if (!response.data) {
            throw new Error("Empty response data");
          }
          setUserData(response.data);
        })
        .catch((error) => console.error("Error fetching user data:", error));
    }
  }, []); // The empty dependency array ensures the effect runs only once when the component mounts

  const onSubmit = (data) => {
    // Implement logic to send data to Laravel API if needed
    //console.log(data);
  };

  console.log("userData:", userData);

  return (
    <div>
      <div
        id="contactSection"
        className="bg-image bg-cover bg-center h-12 flex justify-center items-center text-white font-bold sm:h-16 md:h-28 lg:h-40 xl:h-52"
        style={{ backgroundImage: "url(/public/MicrosoftTeams-image12.png)" }}
      >
        <h1 className="md:text-3xl">ESPACE PERSONNEL</h1>
      </div>
      <div className="px-4 flex flex-col items-center bg-[#F6F6F6]">
        <div className="flex flex-col items-center w-[98%]">
          <h2
            id="infoSection"
            className="font-bold text-black text-lg mb-8 mt-6 md:text-3xl"
          >
            JE CONTACTE MON CONSEILLER POUR :
          </h2>
          <form
            className="flex flex-col mt-4 w-full md:w-[70%] lg:w-[80%]"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col mb-2">
              <div className="flex flex-col ml-8">
                <div className="mb-2">
                  <input
                    type="radio"
                    id="rdvOption"
                    {...register("option", { required: true })}
                    value="avoir-un-rdv"
                    className="mr-2"
                  />
                  <label htmlFor="rdvOption" className="mr-4">
                    Avoir un RDV
                  </label>
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
      <h2 className="font-bold text-black text-center text-lg md:text-2xl">
        INFORMATIONS PERSONNELLES
      </h2>
      <div className="px-4 flex flex-col items-center bg-[#F6F6F6]">
        <div className="flex flex-col items-center w-[98%] border">
          {userData && (
            <div className="md:w-[500px]">
              {/* Render the first section of personal information */}
              <div className="flex flex-col rounded-3xl mt-4 mb-6 pt-6 p-4 bg-white relative w-full md:w-[70%] lg:w-[80%]">
                <div className="absolute top-2 right-4">
                  <Link>
                    <FaPencil />
                  </Link>
                </div>
                <p className="font-bold mb-2">CIVILITE: </p>
                <p className="font-bold mb-2">
                  PRENOM: {userData.information.first_name}
                </p>
                <p className="font-bold mb-2">
                  NOM: {userData.information.last_name}
                </p>
                <p className="font-bold mb-2">
                  DATE DE NAISSANCE: {userData.information.dateOfBirth}
                </p>
              </div>

              {/* Render the second section of personal information */}
              <div className="flex flex-col rounded-3xl mt-4 mb-6 pt-6 p-4 bg-white relative w-full md:w-[70%] lg:w-[80%]">
                <div className="absolute top-2 right-4">
                  <Link>
                    <FaPencil />
                  </Link>
                </div>
                <p className="font-bold mb-2">PAYS: </p>
                <p className="font-bold mb-2">CODE POSTAL: </p>
                <p className="font-bold mb-2">
                  COMMUNE: {userData.information.city}
                </p>
                <p className="font-bold mb-2 leading-tight">
                  N°, TYPE, LIBELLE DE LA VOIE:
                </p>
                <p className="font-bold mb-2 leading-tight">
                  COMPLEMENT DESTINATAIRE:
                </p>
              </div>

              {/* Render the third section of personal information */}
              <div className="flex flex-col rounded-3xl mt-4 mb-6 pt-6 p-4 bg-white relative w-full md:w-[70%] lg:w-[80%]">
                <div className="absolute top-2 right-4">
                  <Link>
                    <FaPencil />
                  </Link>
                </div>
                <p id="rendezvouzSection" className="font-bold mb-2">
                  ADRESSE ELECTRONIQUE: {userData.information.email}
                </p>
                <p className="font-bold mb-2">
                  TELEPHONE PRINCIPAL: {userData.information.phone}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
      <h2
        id="docuSection"
        className="font-bold text-black text-center text-lg md:text-2xl"
      >
        MES RENDEZ-VOUS
      </h2>
      <div className="px-4 flex flex-col items-center bg-[#F6F6F6]">
        <div className="flex flex-col items-center w-[98%]">
          <div className="flex flex-col mt-4 mb-6 p-4 w-full md:w-[70%] lg:w-[80%]"></div>
        </div>
      </div>
      <h2 className="font-bold text-black text-center text-lg md:text-2xl">
        MES DOCUMENTS
      </h2>
      <div className="px-4 flex flex-col items-center bg-[#F6F6F6]">
        <div className="flex flex-col items-center w-[98%]">
          <div className="flex flex-col mt-4 mb-6 p-4 w-full md:w-[70%] lg:w-[80%]">
            <div className="flex justify-between items-center mb-2">
              <p className="font-semibold">LOREM IPSUM</p>
              <button className="font-semibold px-2 py-1 bg-gray-300 rounded-md">
                TELECHARGER
              </button>
            </div>
            <div className="flex justify-between items-center mb-2">
              <p className="font-semibold">LOREM IPSUM</p>
              <button className="font-semibold px-2 py-1 bg-gray-300 rounded-md">
                TELECHARGER
              </button>
            </div>
            <div
              id="atelierSection"
              className="flex justify-between items-center mb-2"
            >
              <p className="font-semibold">LOREM IPSUM</p>
              <button className="font-semibold px-2 py-1 bg-gray-300 rounded-md">
                TELECHARGER
              </button>
            </div>
            <div className="flex justify-between items-center mb-2">
              <p className="font-semibold">LOREM IPSUM</p>
              <button className="font-semibold px-2 py-1 bg-gray-300 rounded-md">
                TELECHARGER
              </button>
            </div>
          </div>
        </div>
      </div>
      <h2 className="font-bold text-black text-center text-lg md:text-2xl">
        MES ATELIERS
      </h2>
      <div className="px-4 flex flex-col items-center bg-[#F6F6F6]">
        <div className="flex flex-col items-center w-[98%]">
          <div className="flex flex-col mt-4 mb-6 p-4 w-full md:w-[70%] lg:w-[80%]">
            <div
              id="formationSection"
              className="flex justify-between items-center mb-2"
            >
              <p className="font-semibold">COMMENT FAIRE UN BON CV</p>
              <p className="font-semibold ml-2">23/12/2023</p>
            </div>
            <div className="flex justify-between items-center mb-2">
              <p className="font-semibold">FAIRE UNE LETTRE DE MOTIVATION</p>
              <p className="font-semibold">23/12/2023</p>
            </div>
          </div>
        </div>
      </div>
      <h2 className="font-bold text-black text-center text-lg md:text-2xl">
        MES FORMATIONS
      </h2>
      <div className="px-4 flex flex-col items-center bg-[#F6F6F6]">
        <div className="flex flex-col items-center w-[98%]">
          <div className="flex flex-col mt-4 mb-6 p-4 w-full md:w-[70%] lg:w-[80%]">
            <div className="flex justify-between items-center mb-2">
              <p className="font-semibold leading-tight pr-2">
                INITIATION A LA FORMATION
              </p>
              <p className="text-xs md:text-base leading-tight text-gray-500 font-semibold md:flex justify-center items-center">
                FORMATION EN ATTENTE <FaPauseCircle className="md:ml-2" />
              </p>
            </div>
            <p className="text-sm font-semibold mb-4 leading-tight">
              Date du plan de formation: <br />
              du 10/12/2023 au 22/12/2023
            </p>
            <div className="flex justify-between items-center mb-2">
              <p className="font-semibold leading-tight pr-2">
                INITIATION A LA FORMATION
              </p>
              <p className="text-xs md:text-base leading-tight text-red-600 font-semibold md:flex justify-center items-center">
                INSCRIPTION REFUSEE <FaTimesCircle className="md:ml-2" />
              </p>
            </div>
            <p className="text-sm font-semibold mb-4 leading-tight">
              Date du plan de formation: <br />
              du 10/12/2023 au 22/12/2023
            </p>
            <div
              id="emploiSection"
              className="flex justify-between items-center mb-2"
            >
              <p className="font-semibold leading-tight pr-2">
                INITIATION A LA FORMATION
              </p>
              <p className="text-xs md:text-base leading-tight text-green-500 font-semibold md:flex justify-center items-center">
                FORMATION ACCEPTEE <FaCheckCircle className="md:ml-2" />
              </p>
            </div>
            <p className="text-sm font-semibold mb-4 leading-tight">
              Date du plan de formation: <br />
              du 10/12/2023 au 22/12/2023
            </p>
          </div>
        </div>
      </div>
      <h2 className="font-bold text-black text-center text-lg md:text-2xl">
        MES OFFRES D'EMPLOI
      </h2>
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
      <h2
        id="ressourcesSection"
        className="font-bold text-black text-center text-lg md:text-2xl"
      >
        RESSOURCES / INFORMATIONS
      </h2>
      <div className="px-4 flex flex-col items-center bg-[#F6F6F6]">
        <div className="flex flex-col items-center w-[98%]">
          <div className="flex flex-col mt-4 mb-6 p-4 w-full md:w-[70%] lg:w-[80%]"></div>
        </div>
      </div>
    </div>
  );
}

export default EspacePersonnelJeune2;
