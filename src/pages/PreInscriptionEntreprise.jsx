import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function PreInscriptionEntreprise() {
  const [successMessage, setSuccessMessage] = useState("");

  const navigate = useNavigate();

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
        "http://localhost:8000/api/register-entreprise",
        data
      );
      console.log(response.data);
      // Handle success or redirect if needed

      // Display success message
      setSuccessMessage(response.data.message);

      // Reset the form
      reset();

      // Redirect after 5 seconds
      setTimeout(() => {
        // Redirect to another page (replace '/' with the desired path)
        navigate("/");
      }, 5000);
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
        style={{ backgroundImage: "url(/public/MicrosoftTeams-image14.png)" }}
      >
        <h1 className="md:text-3xl">INSCRIPTION</h1>
      </div>
      <div>
        <div className="flex flex-col px-4 pt-4 font-semibold bg-[#F6F6F6] md:px-20 lg:px-80 xl:px-[500px]">
          <h2 className="font-bold text-black text-lg mb-4 lg:text-center md:text-2xl">
            <span className="border-b-2 border-[#F29200] pb-[0.5px]">
              FORMULAIRE
            </span>{" "}
            D'INSCRIPTION
          </h2>

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

          <form onSubmit={handleSubmit(onSubmit)} className="">
            <div className="flex flex-col md:mr-44 lg:mr-0">
              <input
                {...register("company_name", { required: true })}
                className="rounded-md p-2 text-left placeholder-black placeholder-opacity-75 mb-4"
                placeholder="Entreprise*"
                type="text"
              />
              {errors.company_name && (
                <span className="text-red-600 text-center mb-4">
                  Ce champ est obligatoire
                </span>
              )}

              <input
                {...register("siret", { required: true })}
                className="rounded-md p-2 text-left placeholder-black placeholder-opacity-75 mb-4"
                placeholder="Numéro SIRET*"
                type="number"
              />
              {errors.siret && (
                <span className="text-red-600 text-center mb-4">
                  Ce champ est obligatoire
                </span>
              )}

              <input
                {...register("responsible_name", { required: true })}
                className="rounded-md p-2 text-left placeholder-black placeholder-opacity-75 mb-4"
                placeholder="Interlocuteur*"
              />
              {errors.responsible_name && (
                <span className="text-red-600 text-center mb-4">
                  Ce champ est obligatoire
                </span>
              )}

              <input
                {...register("company_phone", { required: true })}
                className="rounded-md p-2 text-left placeholder-black placeholder-opacity-75 mb-4"
                placeholder="Téléphone*"
                type="tel"
              />
              {errors.company_phone && (
                <span className="text-red-600 text-center mb-4">
                  Ce champ est obligatoire
                </span>
              )}

              <input
                {...register("company_email", { required: true })}
                className="rounded-md p-2 text-left placeholder-black placeholder-opacity-75 mb-4"
                placeholder="Adresse email*"
                type="email"
              />
              {errors.company_email && (
                <span className="text-red-600 text-center mb-4">
                  Ce champ est obligatoire
                </span>
              )}

              <input
                {...register("password", { required: true })}
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
            </div>
            {/* <div className="flex mb-6">
              <div className="mr-2">
                <input
                  {...register("acceptTerms", { required: true })}
                  type="checkbox"
                />
              </div>
              <div>
                <p className="font-bold">
                  J'accepte d'être contactée par la Mission Locale des Mureaux
                  et j'accepte que les informations fournies alimentent mon
                  dossier d'inscription{" "}
                </p>
              </div>
            </div> */}
            <button
              type="submit"
              className="bg-[#F29200] text-white py-1 p-2 rounded-md mb-8 font-semibold w-[50%] md:w-32"
            >
              ENVOYER
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PreInscriptionEntreprise;
