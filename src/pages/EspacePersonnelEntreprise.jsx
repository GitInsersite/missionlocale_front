import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from '../context/AuthContext';

function EspacePersonnelEntreprise() {
  const [selectedImageName, setSelectedImageName] = useState(null);
  const [selectedPdfName, setSelectedPdfName] = useState(null);
  const {register,handleSubmit, setValue,formState: { errors },} = useForm();
  const { information, documents } = useAuth();
  const authToken = localStorage.getItem("authToken");

  const apiUrlEnv =
    import.meta.env.MODE === "production"
      ? import.meta.env.VITE_API_URL_PROD
      : import.meta.env.VITE_API_URL_DEV;

      const handleImageChange = (e) => {
        const imageName = e.target.files[0]?.name;
        setSelectedImageName(imageName);
        handleFileChange(e);
      };
    
      const handlePdfChange = (e) => {
        const pdfName = e.target.files[0]?.name;
        setSelectedPdfName(pdfName);
        handleFileChange(e);
      };

  const onSubmit = async (data, e) => {
    e.preventDefault();
    const documentpdf = data.docpdf;
    const image = data.image;
    const fileName = documentpdf[0]?.name;

    console.log("Form data submitted:", data);
    e.target.reset();
    setValue("type", "");
    setSelectedImageName(null);
    setSelectedPdfName(null);

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
          <input {...register("entreprise", { required: true })} className="border-2 border-black rounded-md p-2 text-center placeholder-black placeholder-opacity-75 mb-2 md:mb-6"placeholder="Entreprise*"/>
          <input {...register("title", { required: true })} className="border-2 border-black rounded-md p-2 text-center placeholder-black placeholder-opacity-75 mb-2 md:mb-6"placeholder="Titre*"/>
          <input {...register("job", { required: true })} className="border-2 border-black rounded-md p-2 text-center placeholder-black placeholder-opacity-75 mb-2 md:mb-6"placeholder="Job visé*"/>

          <select {...register("type", { required: true })} className="border-2 border-black rounded-md p-2 text-center placeholder-black placeholder-opacity-75 mb-2 md:mb-6">
            <option value="" disabled selected hidden>Choisissez le type de contrat</option>
            <option value="cdi">CDI</option>
            <option value="cdd">CDD</option>
            <option value="interim">Intérim</option>
            <option value="insertion">Contrats d’insertion</option>
            <option value="saisonnier">Saisonnier</option>
            <option value="alternance">Alternance</option>
            <option value="apprentissage">Apprentissage</option>
            <option value="professionnalisation">Professionnalisation</option>
            <option value="stage">Stage</option>
          </select>

          <textarea {...register("description")} className="border-2 border-black rounded-md p-2 text-start placeholder-black placeholder-opacity-75 mb-2 md:mb-6" id="description" name="description" placeholder="Description :"></textarea>

          <div className="mb-4">
            <label htmlFor="publication" className="block text-sm font-medium">Date de Publication :</label>
            <input
                type="date"
                id="publication"
                {...register("publication", { required: true })}  // Assuming you are using React Hook Form
                className="border-2 border-black rounded-md p-2 text-start placeholder-black placeholder-opacity-75 mb-2 md:mb-6"
                name="publication"
            />
        </div>
          
          <div className="mb-2 relative flex items-center justify-center">
            <label id="labelchoisir" htmlFor="choisirimage" className="bg-[#F29200] text-white w-40 py-1 p-2 rounded-md mx-auto font-semibold text-center justify-center">
              {selectedImageName ? selectedImageName : 'Ajouter une image ou un logo'}
            </label>
            <input type="file"id="choisirimage"{...register("image")} accept="image/*" className="hidden" onChange={handleImageChange}/>
          </div>

          <div className="mb-2 relative flex items-center justify-center">
            <label id="labelchoisir" htmlFor="choisirpdf" className="bg-[#F29200] text-white w-40 py-1 p-2 rounded-md mx-auto font-semibold text-center justify-center">
              {selectedPdfName ? selectedPdfName : 'Ajouter un pdf'}
            </label>
            <input type="file"id="choisirpdf"{...register("docpdf")}accept=".pdf"className="hidden" onChange={handlePdfChange}/>
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
