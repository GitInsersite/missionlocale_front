import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from '../context/AuthContext';

function EspacePersonnelEntreprise() {
  const [selectedFileName, setSelectedFileName] = useState(null);
  const {register,handleSubmit,formState: { errors },} = useForm();
  const { information, documents } = useAuth();
  const authToken = localStorage.getItem("authToken");

  const apiUrlEnv =
    import.meta.env.MODE === "production"
      ? import.meta.env.VITE_API_URL_PROD
      : import.meta.env.VITE_API_URL_DEV;

  const handleFileChange = (e) => {
    const fileName = e.target.files[0]?.name;
    setSelectedFileName(fileName);
  };

  const onSubmit = async (data, e) => {
    e.preventDefault();
    const documentpdf = data.docpdf;
    console.log("Envoyer un document");

    // Logique pour obtenir le nom du fichier
    const fileName = documentpdf[0]?.name;
    console.log("Nom du fichier :", fileName);
  }

  return (
    <div id="infoSection">

  <div className="bg-image bg-cover bg-center h-12 flex justify-center items-center text-white font-bold sm:h-16 md:h-28 lg:h-40 xl:h-52" style={{ backgroundImage: "url(MicrosoftTeams-image14.png)" }}>
    <h1 className="md:text-3xl">ESPACE ENTREPRISE</h1>
  </div>

  <div className="flex flex-col items-center bg-[#F6F6F6]">
    <h2 className="font-bold text-black text-lg mb-8 mt-6 md:text-3xl"><span className="border-b-2 border-[#F29200] pb-[0.5px]">INFORMATIONS</span>{" "}PERSONNELLES</h2>
    <div className="flex flex-col rounded-3xl mt-4 mb-6 p-4 bg-white md:w-[360px]">
      <p className="font-bold mb-2">Entreprise : {information.company_name}</p>
      <p className="font-bold mb-2">Numéro SIRET : {information.siret}</p><p className="font-bold mb-2">Interlocuteur : {information.responsible_name}</p>
      <p className="font-bold mb-2">Téléphone : {information.company_phone}</p>
      <p id="offreSection" className="font-bold">Adresse mail : {information.company_email}</p>
    </div>
  </div>

  <div className="flex flex-col items-center bg-[#F6F6F6]">
    <h2 className="font-bold text-black text-lg mb-8 mt-6 md:text-3xl"><span className="border-b-2 border-[#F29200] pb-[0.5px]">DEPOSER UNE O</span>FFRE D'EMPLOI</h2>
    <form className="flex flex-col items-center justify-center rounded-3xl mt-4 mb-6 p-4 bg-white md:w-[360px]" onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data" >
        <div className="mb-2 relative flex items-center justify-center">
          <label id="labelchoisir" htmlFor="choisirpdf" className="bg-[#F29200] text-white w-40 py-1 p-2 rounded-md mx-auto font-semibold text-center justify-center">
            {selectedFileName ? selectedFileName : 'PARCOURIR'}
          </label>
          <input
            type="file"
            id="choisirpdf"
            {...register("docpdf", { required: true })}
            accept=".pdf"
            className="hidden"
            onChange={handleFileChange}
          />
        </div>
        <button type="submit" className="bg-[#F29200] text-white w-40 py-1 p-2 rounded-md mx-auto mb-8 font-semibold">
          ENVOYER
        </button>
      </form>
  </div>

</div>
  );
}

export default EspacePersonnelEntreprise;
