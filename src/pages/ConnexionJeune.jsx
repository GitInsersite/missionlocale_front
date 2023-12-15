import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function ConnexionJeune() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch("example"));

  return (
    <>
      <img src="MicrosoftTeams-image.png" alt="" className="h-1" />
      <div>
        <div className=" flex flex-col items-center border-red-500 border-2 bg-[#F6F6F6]">
          <div className="border-2 border-[#2897d5] flex flex-col px-4 rounded-lg w-[90%]">
            <img src="/public/logo-inscription.svg" alt="" />
          </div>
          <div className="border-2 border-[#2897d5] flex flex-col items-center px-4 bg-white rounded-3xl pt-2 w-[90%]">
            <h2 className="text-[#D60B52] font-bold mb-2 text-xl">
              ESP
              <span className="border-[#D60B52] border-b-2 pb-1">ACE JEU</span>
              NE
            </h2>
            <form
              className="border-2 border-red-600 flex flex-col mt-4"
              onSubmit={handleSubmit(onSubmit)}
            >
              
              <input
                {...register("email", { required: true })}
                className="border-2 border-black rounded-md p-2 text-center placeholder-black placeholder-opacity-75 mb-2"
                placeholder="Adresse email*"
              />
              {errors.email && <span className="text-red-600 text-center mb-2">Ce champ est obligatoire</span>}

              
              <input
                {...register("password", { required: true })}
                type="password"
                className="border-2 border-black rounded-md p-2 text-center placeholder-black placeholder-opacity-75 mb-2"
                placeholder="Mot de passe*"
              />
              {errors.password && <span className="text-red-600 text-center mb-2">Ce champ est obligatoire</span>}
              <button
                type="submit"
                className="bg-[#D60B52] text-white py-1 p-2 rounded-md mb-8 font-semibold"
              >
                SE CONNECTER
              </button>
            </form>
          </div>
          <div className="border-2 border-[#2897d5] flex justify-between px-4 rounded-lg mb-4 pt-2 w-[90%]">
            <Link className="font-bold text-sm border-b-2 border-black w-[45%]">Créer un compte</Link>
            <Link className="font-bold text-sm border-b-2 border-black w-[45%]">Mot de passe oublié</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default ConnexionJeune;
