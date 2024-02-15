import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";

function MotDePasseOublieEntreprise() {
  const { resetPassword, successMessage, errorMessage } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    // Call the resetPassword function from the context
    await resetPassword(data.email);
  };

  return (
    <>
      <div>
        <div className="flex flex-col items-center bg-[#F6F6F6] md:px-20 lg:px-48 xl:px-96">
          <div className="flex flex-col items-center px-4 rounded-lg w-[90%] md:items-center">
            {/* You can keep the logo or customize it for the forgot password page */}
            <img
              src="logo-inscription.svg"
              alt=""
              className="md:w-96 md:h-96"
            />
          </div>
          <div className="flex flex-col items-center px-4 bg-white rounded-3xl pt-2 w-[90%] md:py-10">
            <h2 className="text-[#FFA500] font-bold mb-2 text-xl md:mb-4">
              ESPAC
              <span className="border-[#FFA500] border-b-2 pb-1 md:pb-2">
                E ENTR
              </span>
              EPRISE
            </h2>
            {/* Display success message */}
            {successMessage && (
              <div className="text-green-600">{successMessage}</div>
            )}

            {errorMessage && (
              <div className="text-red-600 text-center mb-2">
                {errorMessage}
              </div>
            )}

            <form
              className="flex flex-col mt-4"
              onSubmit={handleSubmit(onSubmit)}
            >
              <input
                {...register("email", { required: true })}
                className="border-2 border-black rounded-md p-2 text-center placeholder-black placeholder-opacity-75 mb-2 md:mb-6"
                placeholder="Adresse email*"
              />
              {errors.email && (
                <span className="text-red-600 text-center mb-2">
                  Ce champ est obligatoire
                </span>
              )}

              <button
                type="submit"
                className="bg-[#FFA500] text-white py-1 p-2 rounded-md mb-8 font-semibold md:mb-0"
              >
                RÉINITIALISER LE MOT DE PASSE
              </button>
            </form>
          </div>
          <div className="flex justify-between px-4 rounded-lg mb-4 pt-2 w-[90%]">
            <Link
              onClick={() => window.scrollTo(0, 0)}
              to="/connexion-entreprise" // Update the link to navigate back to the login page
              className="font-bold text-sm border-b-2 border-black w-[45%] sm:w-fit"
            >
              Retour à la connexion
            </Link>
            {/* You can include additional links or information here if needed */}
          </div>
        </div>
      </div>
    </>
  );
}

export default MotDePasseOublieEntreprise;
