import { useForm } from "react-hook-form";
import { useMediaQuery } from "react-responsive";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import moment from 'moment';

function PreInscription() {
  const [successMessage, setSuccessMessage] = useState("");
  const isLaptopOrLarger = useMediaQuery({ minWidth: 1024 });
  const dateMin = moment().subtract(25, 'years').format('YYYY-MM-DD');
  const dateMax = moment().subtract(16, 'years').format('YYYY-MM-DD');

  const navigate = useNavigate();

  // Dynamically get the API URL based on the environment
  const apiUrlEnv = import.meta.env.MODE === 'production'
  ? import.meta.env.VITE_API_URL_PROD
  : import.meta.env.VITE_API_URL_DEV;

  const {
    register,
    handleSubmit,
    setError, // Destructure setError from useForm
    reset, // Destructure reset from useForm
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        `${apiUrlEnv}/api/registerCandidat`,
        data
      );
      console.log(response.data);
      // Handle success or redirect if needed

      // Display success message
      setSuccessMessage(response.data.message);

      // Reset the form
      reset();
      // Redirect after 3 seconds
      setTimeout(() => {
        // Redirect to another page (replace '/' with the desired path)
        navigate("/");
      }, 3000);
    } catch (error) {
      if (error.response && error.response.status === 422) {
        // Handle validation errors
        const validationErrors = error.response.data.errors;

        // Update the form errors with the validationErrors
        Object.keys(validationErrors).forEach((fieldName) => {
          const field = validationErrors[fieldName][0]; // Take the first error for simplicity
          setError(fieldName, { type: "manual", message: field });
        });
      } else {
        console.error("Error submitting form:", error);
      }
    }
  };

  return (
    <div>
      <div
        className="bg-image bg-cover bg-center h-12 flex justify-center items-center text-white font-bold sm:h-16 md:h-28 lg:h-40 xl:h-52"
        style={{ backgroundImage: "url(MicrosoftTeams-image12.png)" }}
      >
        <h1 className="md:text-3xl">PRÉ-INSCRIPTION</h1>
      </div>
      <div>
        <div className="flex flex-col px-4 pt-4 pb-6 font-semibold bg-[#F6F6F6] md:px-20 lg:px-56 xl:px-96">
          <h2 className="font-bold text-black text-lg mb-4 md:text-2xl">
            <span className="border-b-2 border-[#D60B52] pb-[0.5px]">
              FORMU
            </span>
            LAIRE DE PRÉ-INSCRIPTION
          </h2>
          <p className="mb-6">
            En remplissant ce formulaire vous serez contacté prochainement par
            un conseilller qui vous proposera un rendez-vous.
          </p>
          <p className="mb-6 text-sm font-semibold">
            NB: L&apos;inscription sera définitive lorsque votre conseiller(ère) aura
            en sa possession vos justificatifs (pièce d&apos;identité et justificatif
            de domicile).
          </p>

          {/* Display success message */}
          {successMessage && (
            <div className="text-green-600">{successMessage}</div>
          )}

          {/* Display validation errors */}
          {Object.keys(errors).length > 0 && (
            <div className="text-red-600">
              Please fix the following errors:
              <ul>
                {Object.keys(errors).map((fieldName, index) => (
                  <li key={index}>{errors[fieldName].message}</li>
                ))}
              </ul>
            </div>
          )}

          <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
            {isLaptopOrLarger ? (
              <div className="flex flex-col">
                <div className="flex justify-between">
                  <div className="flex flex-col w-[45%]">
                    <input
                      {...register("last_name", {
                        required: true,
                      })}
                      className="rounded-md p-2 text-left placeholder-black placeholder-opacity-75 mb-4"
                      placeholder="Nom*"
                    />
                    {errors.last_name && (
                      <span className="text-red-600 text-center mb-4">
                        Ce champ est obligatoire
                      </span>
                    )}

                    <input
                      {...register("first_name", {
                        required: true,
                      })}
                      className="rounded-md p-2 text-left placeholder-black placeholder-opacity-75 mb-4"
                      placeholder="Prénom*"
                    />
                    {errors.first_name && (
                      <span className="text-red-600 text-center mb-4">
                        Ce champ est obligatoire
                      </span>
                    )}

                    <input
                      {...register("phone", {
                        required: true,
                      })}
                      className="rounded-md p-2 text-left placeholder-black placeholder-opacity-75 mb-4"
                      placeholder="Téléphone*"
                      type="tel"
                    />
                    {errors.phone && (
                      <span className="text-red-600 text-center mb-4">
                        Ce champ est obligatoire
                      </span>
                    )}

                    <input
                      {...register("dateOfBirth", {
                        required: true,
                      })}
                      className="rounded-md p-2 text-left placeholder-black placeholder-opacity-75 mb-4"
                      defaultValue={dateMin} min={dateMin} max={dateMax}
                      type="date"
                    />
                    {errors.dateOfBirth && (
                      <span className="text-red-600 text-center mb-4">
                        Ce champ est obligatoire
                      </span>
                    )}

                  </div>

                  <div className="flex flex-col w-[45%]">
                    <input
                      {...register("email", {
                        required: true,
                      })}
                      className="rounded-md p-2 text-left placeholder-black placeholder-opacity-75 mb-4"
                      placeholder="Adresse email*"
                      type="email"
                    />
                    {errors.email && (
                      <span className="text-red-600 text-center mb-4">
                        Ce champ est obligatoire
                      </span>
                    )}

                    <input
                      {...register("password", {
                        required: true,
                      })}
                      className="rounded-md p-2 text-left placeholder-black placeholder-opacity-75 mb-4"
                      placeholder="Mot de passe*"
                      type="password"
                    />
                    {errors.password && (
                      <span className="text-red-600 text-center mb-4">
                        Ce champ est obligatoire
                      </span>
                    )}

                    <input
                      {...register("password_confirmation", { required: true })}
                      className="rounded-md p-2 text-left placeholder-black placeholder-opacity-75 mb-4"
                      placeholder="Confirm Password*"
                      type="password"
                    />

                    {/* <input
                                        {...register("age", {
                                            //required: true,
                                        })}
                                        className="rounded-md p-2 text-left placeholder-black placeholder-opacity-75 mb-4"
                                        placeholder="Âge*"
                                        type="number"
                                    /> */}
                    {/* {errors.age && (
                                        <span className="text-red-600 text-center mb-4">
                                            Ce champ est obligatoire
                                        </span>
                                    )} */}
                    <select
                      {...register("city", {
                        required: true,
                      })}
                      className="rounded-md p-2 text-left mb-6"
                    >
                      <option value="" disabled selected hidden>
                        Commune*
                      </option>
                      <option value="Aulnay Sur Mauldre">
                        Aulnay Sur Mauldre
                      </option>
                      <option value="Aubergenville">Aubergenville</option>
                      <option value="Bouafle">Bouafle</option>
                      <option value="Brueil-En-Vexin">Brueil-En-Vexin</option>
                      <option value="Ecquevilly">Ecquevilly</option>
                      <option value="Evecquemont">Evecquemont</option>
                      <option value="Flins Sur Seine">Flins Sur Seine</option>
                      <option value="Gaillon-Sur-Montcient">
                        Gaillon-Sur-Montcient
                      </option>
                      <option value="Hardricourt">Hardricourt</option>
                      <option value="Jambville">Jambville</option>
                      <option value="Juziers">Juziers</option>
                      <option value="Lainville">Lainville</option>
                      <option value="Les Mureaux">Les Mureaux</option>
                      <option value="Meulan En Yvelines">
                        Meulan En Yvelines
                      </option>
                      <option value="Mézy-Sur-Seine">Mézy-Sur-Seine</option>
                      <option value="Montalet Le Bois">Montalet Le Bois</option>
                      <option value="Nézel">Nézel</option>
                      <option value="Oinville-Sur-Montcient">
                        Oinville-Sur-Montcient
                      </option>
                      <option value="Tessancourt Sur Aubette">
                        Tessancourt Sur Aubette
                      </option>
                      <option value="Vaux Sur Seine">Vaux Sur Seine</option>
                    </select>
                    {errors.city && (
                      <span className="text-red-600 text-center mb-4">
                        Ce champ est obligatoire
                      </span>
                    )}
                  </div>
                </div>
                {/* <div className="flex mb-6 mt-4">
                                <div className="mr-2">
                                    <input
                                        {...register("acceptTerms", {
                                            required: true,
                                        })}
                                        type="checkbox"
                                    />
                                </div>
                                <div>
                                    <p className="font-bold">
                                        J'accepte d'être contacté par la
                                        Mission Locale des Mureaux et
                                        j'accepte que les informations
                                        fournies alimentent mon dossier
                                        d'inscription{" "}
                                    </p>
                                </div>
                            </div> */}
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="bg-[#D60B52] text-white py-1 p-2 rounded-md mb-8 font-semibold w-[80%]"
                  >
                    ENVOYER MA DEMANDE DE PRÉ-INSCRIPTION
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex flex-col md:mr-80">
                <input
                  {...register("last_name", {
                    required: true,
                  })}
                  className="rounded-md p-2 text-left placeholder-black placeholder-opacity-75 mb-4"
                  placeholder="Nom*"
                />
                {errors.last_name && (
                  <span className="text-red-600 text-center mb-4">
                    Ce champ est obligatoire
                  </span>
                )}

                <input
                  {...register("first_name", {
                    required: true,
                  })}
                  className="rounded-md p-2 text-left placeholder-black placeholder-opacity-75 mb-4"
                  placeholder="Prénom*"
                />
                {errors.first_name && (
                  <span className="text-red-600 text-center mb-4">
                    Ce champ est obligatoire
                  </span>
                )}

                <input
                  {...register("phone", { required: true })}
                  className="rounded-md p-2 text-left placeholder-black placeholder-opacity-75 mb-4"
                  placeholder="Téléphone*"
                  type="tel"
                />
                {errors.phone && (
                  <span className="text-red-600 text-center mb-4">
                    Ce champ est obligatoire
                  </span>
                )}

                {/* <select
                                {...register("schooled", {
                                    required: true,
                                })}
                                className="rounded-md p-2 text-left placeholder-black placeholder-opacity-75 mb-4"
                            >
                                <option value="" disabled selected hidden>
                                    Scolarisé*
                                </option>
                                <option value="yes">Scolarisé: Oui</option>
                                <option value="no">Scolarisé: Non</option>
                            </select>
                            {errors.schooled && (
                                <span className="text-red-600 text-center mb-4">
                                    Ce champ est obligatoire
                                </span>
                            )} */}

                <input
                  {...register("email", { required: true })}
                  className="rounded-md p-2 text-left placeholder-black placeholder-opacity-75 mb-4"
                  placeholder="Adresse email*"
                  type="email"
                />
                {errors.email && (
                  <span className="text-red-600 text-center mb-4">
                    Ce champ est obligatoire
                  </span>
                )}

                <input
                  {...register("dateOfBirth", {
                    required: true,
                  })}
                  className="rounded-md p-2 text-left placeholder-black placeholder-opacity-75 mb-4"
                  placeholder="Date de naissance*"
                  type="date"
                />
                {errors.dateOfBirth && (
                  <span className="text-red-600 text-center mb-4">
                    Ce champ est obligatoire
                  </span>
                )}

                {/* <input
                                {...register("age", { required: true })}
                                className="rounded-md p-2 text-left placeholder-black placeholder-opacity-75 mb-4"
                                placeholder="Âge*"
                                type="number"
                            />
                            {errors.age && (
                                <span className="text-red-600 text-center mb-4">
                                    Ce champ est obligatoire
                                </span>
                            )} */}
                <select
                  {...register("city", { required: true })}
                  className="rounded-md p-2 text-left mb-6"
                >
                  <option value="" disabled selected hidden>
                    Commune*
                  </option>
                  <option value="Aulnay Sur Mauldre">Aulnay Sur Mauldre</option>
                  <option value="Aubergenville">Aubergenville</option>
                  <option value="Bouafle">Bouafle</option>
                  <option value="Brueil-En-Vexin">Brueil-En-Vexin</option>
                  <option value="Ecquevilly">Ecquevilly</option>
                  <option value="Evecquemont">Evecquemont</option>
                  <option value="Flins Sur Seine">Flins Sur Seine</option>
                  <option value="Gaillon-Sur-Montcient">
                    Gaillon-Sur-Montcient
                  </option>
                  <option value="Hardricourt">Hardricourt</option>
                  <option value="Jambville">Jambville</option>
                  <option value="Juziers">Juziers</option>
                  <option value="Lainville">Lainville</option>
                  <option value="Les Mureaux">Les Mureaux</option>
                  <option value="Meulan En Yvelines">Meulan En Yvelines</option>
                  <option value="Mézy-Sur-Seine">Mézy-Sur-Seine</option>
                  <option value="Montalet Le Bois">Montalet Le Bois</option>
                  <option value="Nézel">Nézel</option>
                  <option value="Oinville-Sur-Montcient">
                    Oinville-Sur-Montcient
                  </option>
                  <option value="Tessancourt Sur Aubette">
                    Tessancourt Sur Aubette
                  </option>
                  <option value="Vaux Sur Seine">Vaux Sur Seine</option>
                </select>
                {errors.city && (
                  <span className="text-red-600 text-center mb-4">
                    Ce champ est obligatoire
                  </span>
                )}

                <input
                  {...register("password", {
                    required: true,
                  })}
                  className="rounded-md p-2 text-left placeholder-black placeholder-opacity-75 mb-4"
                  placeholder="Mot de passe*"
                  type="password"
                />
                {errors.password && (
                  <span className="text-red-600 text-center mb-4">
                    Ce champ est obligatoire
                  </span>
                )}

                <input
                  {...register("password_confirmation", { required: true })}
                  className="rounded-md p-2 text-left placeholder-black placeholder-opacity-75 mb-4"
                  placeholder="Confirm Password*"
                  type="password"
                />
                <button
                  type="submit"
                  className="bg-[#D60B52] text-white py-1 p-2 rounded-md mb-8 font-semibold w-[50%]"
                >
                  ENVOYER
                </button>
              </div>
            )}

            {isLaptopOrLarger ? (
              ""
            ) : (
              <div className="flex mb-6">
                {/* <div className="mr-2">
                                <input
                                    {...register("acceptTerms", {
                                        //required: true,
                                    })}
                                    type="checkbox"
                                />
                            </div> */}
                <div>
                  <p className="font-bold">
                    J'accepte d'être contacté par la Mission Locale des Mureaux
                    et j'accepte que les informations fournies alimentent mon
                    dossier d'inscription{" "}
                  </p>
                </div>
              </div>
            )}
            <p className="text-sm">
              Une fois le formulaire de pré-inscription validé, vous serez
              contacté afin de fixer un rendez-vous obligatoire avec un
              conseiller pour finaliser votre inscription.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PreInscription;
