import { useForm } from "react-hook-form";

function PreInscription() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch("lastName"));
  console.log(watch("name"));
  console.log(watch("phone"));
  console.log(watch("email"));
  console.log(watch("age"));
  console.log(watch("commune"));
  console.log(watch("acceptTerms"));

  return (
    <div>
      <div
        className="bg-image bg-cover bg-center h-12 flex justify-center items-center text-white font-bold"
        style={{ backgroundImage: "url(/public/MicrosoftTeams-image12.png)" }}
      >
        <h1>PRE-INSCRIPTION</h1>
      </div>
      <div>
        <div className="flex flex-col px-4 pt-4 mb-6 border-red-500 border-2 font-semibold bg-[#F6F6F6]">
          <h2 className="font-bold text-black text-lg mb-4">
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
            NB: L'inscription sera définitive lorsque votre conseiller(ère) aura
            en sa possession vos justificatifs (pièce d'identité et justificatif
            de domicile).
          </p>
          <form
            className="border-2 border-red-600 flex flex-col mt-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              {...register("lastName", { required: true })}
              className="rounded-md p-2 text-left placeholder-black placeholder-opacity-75 mb-4"
              placeholder="Nom*"
            />
            {errors.lastName && (
              <span className="text-red-600 text-center mb-4">
                Ce champ est obligatoire
              </span>
            )}

            <input
              {...register("name", { required: true })}
              className="rounded-md p-2 text-left placeholder-black placeholder-opacity-75 mb-4"
              placeholder="Prénom*"
            />
            {errors.name && (
              <span className="text-red-600 text-center mb-4">
                Ce champ est obligatoire
              </span>
            )}

            <input
              {...register("phone", { required: true })}
              className="rounded-md p-2 text-left placeholder-black placeholder-opacity-75 mb-4"
              placeholder="Téléphone*"
              type="number"
            />
            {errors.phone && (
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

            <input
              {...register("age", { required: true })}
              className="rounded-md p-2 text-left placeholder-black placeholder-opacity-75 mb-4"
              placeholder="Age*"
              type="number"
            />
            {errors.age && (
              <span className="text-red-600 text-center mb-4">
                Ce champ est obligatoire
              </span>
            )}

            <input
              {...register("commune", { required: true })}
              className="rounded-md p-2 text-left placeholder-black placeholder-opacity-75 mb-6"
              placeholder="Commune*"
            />
            {errors.commune && (
              <span className="text-red-600 text-center mb-4">
                Ce champ est obligatoire
              </span>
            )}
            <button
              type="submit"
              className="bg-[#D60B52] text-white py-1 p-2 rounded-md mb-8 font-semibold w-[50%]"
            >
              ENVOYER
            </button>

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
            <p>
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
