import { useForm } from "react-hook-form";

function PreInscriptionEntreprise() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch("entreprise"));
  console.log(watch("siret"));
  console.log(watch("interlocuteur"));
  console.log(watch("telephone"));
  console.log(watch("email"));
  console.log(watch("acceptTerms"));

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
          <form
            onSubmit={handleSubmit(onSubmit)}
            className=""
          >
            <div className="flex flex-col md:mr-44 lg:mr-0">
            <input
              {...register("entreprise", { required: true })}
              className="rounded-md p-2 text-left placeholder-black placeholder-opacity-75 mb-4"
              placeholder="Entreprise*"
            />
            {errors.lastName && (
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
            {errors.name && (
              <span className="text-red-600 text-center mb-4">
                Ce champ est obligatoire
              </span>
            )}

            <input
              {...register("interlocuteur", { required: true })}
              className="rounded-md p-2 text-left placeholder-black placeholder-opacity-75 mb-4"
              placeholder="Interlocuteur*"
            />
            {errors.phone && (
              <span className="text-red-600 text-center mb-4">
                Ce champ est obligatoire
              </span>
            )}

            <input
              {...register("telephone", { required: true })}
              className="rounded-md p-2 text-left placeholder-black placeholder-opacity-75 mb-4"
              placeholder="Téléphone*"
              type="number"
            />
            {errors.age && (
              <span className="text-red-600 text-center mb-4">
                Ce champ est obligatoire
              </span>
            )}

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
            </div>
            <div className="flex mb-6">
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
            </div>
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
