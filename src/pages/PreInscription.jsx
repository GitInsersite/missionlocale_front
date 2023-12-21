import { useForm } from "react-hook-form";
import { useMediaQuery } from "react-responsive";

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

  const isLaptopOrLarger = useMediaQuery({ minWidth: 1024 });

  return (
    <div>
      <div
        className="bg-image bg-cover bg-center h-12 flex justify-center items-center text-white font-bold sm:h-16 md:h-28 lg:h-40 xl:h-52"
        style={{ backgroundImage: "url(/public/MicrosoftTeams-image12.png)" }}
      >
        <h1 className="md:text-3xl">PRE-INSCRIPTION</h1>
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
            NB: L'inscription sera définitive lorsque votre conseiller(ère) aura
            en sa possession vos justificatifs (pièce d'identité et justificatif
            de domicile).
          </p>
          <form
            className="flex flex-col"
            onSubmit={handleSubmit(onSubmit)}
          >
            {isLaptopOrLarger ? (
              <div className="flex flex-col">
                <div className="flex justify-between">
                  <div className="flex flex-col w-[45%]">
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
                  </div>

                  <div className="flex flex-col w-[45%]">
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
                  </div>
                </div>
                <div className="flex mb-6 mt-4">
                  <div className="mr-2">
                    <input
                      {...register("acceptTerms", { required: true })}
                      type="checkbox"
                    />
                  </div>
                  <div>
                    <p className="font-bold">
                      J'accepte d'être contactée par la Mission Locale des
                      Mureaux et j'accepte que les informations fournies
                      alimentent mon dossier d'inscription{" "}
                    </p>
                  </div>
                </div>
                <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-[#D60B52] text-white py-1 p-2 rounded-md mb-8 font-semibold w-[80%]"
                >
                  ENVOYER MA DEMANDE DE PRE-INSCRIPTION
                </button>
                </div>
              </div>
            ) : (
              <div className="flex flex-col md:mr-80">
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
              </div>
            )}

            {isLaptopOrLarger ? (
              ""
            ) : (
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
