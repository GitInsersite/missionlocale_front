import { useForm } from "react-hook-form";
import React, { useRef } from 'react';
import { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from '../context/AuthContext';

function EspacePersonnelEntreprise() {
  const [submitCounter, setSubmitCounter] = useState(0);
  const [selectedImageName, setSelectedImageName] = useState(null);
  const [selectedPdfName, setSelectedPdfName] = useState(null);
  const [selectedImageFile, setSelectedImageFile] = useState(null);
  const [selectedPdfFile, setSelectedPdfFile] = useState(null);
  const imageInputRef = useRef(null);
  const pdfInputRef = useRef(null);
  const {register,handleSubmit, setValue,formState: { errors },} = useForm();
  const { information, documents } = useAuth();
  const authToken = localStorage.getItem("authToken");
  const selectStyle = {
    fontSize: '14px',
    border: '2px solid #e5e7eb', // Ajout de la bordure
    borderRadius: '0.375rem',
    background: 'transparent',
    height: '100%',
    width: '100%',
    cursor: 'pointer',
    outline: 'none',
    paddingRight: '35px',
    paddingLeft: '15px',
    WebkitAppearance: 'none', // Disable default styling on webkit browsers
    MozAppearance: 'none', // Disable default styling on ff
    msExpand: 'none', // Disable default arrow on IE 11+
  };

  const apiUrlEnv =
    import.meta.env.MODE === "production"
      ? import.meta.env.VITE_API_URL_PROD
      : import.meta.env.VITE_API_URL_DEV;

  const handleImageChange = () => {
    const file = imageInputRef.current?.files[0];
    if (file) {
      setSelectedImageName(file.name);
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImageFile(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
    
  const handlePdfChange = () => {
    const file = pdfInputRef.current?.files[0];
    if (file) {
      setSelectedPdfName(file.name);
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedPdfFile(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = async (data, e) => {
    e.preventDefault();
  
    if (submitCounter > 0) {
      console.log("Ne spammez pas !");
    } else {
      const formData = new FormData();
      // Ajouter les données du formulaire au FormData
      formData.append("entreprise", e.target.entreprise.value);
      formData.append("title", e.target.title.value);
      formData.append("job", e.target.job.value);
      formData.append("type", e.target.type.value);
      formData.append("description", e.target.description.value);
      formData.append("publication", e.target.publication.value);
      
      if (selectedImageFile !== null) {
        formData.append("image", selectedImageFile);
      } else {
        formData.append("image", null);
      }
  
      if (selectedPdfFile !== null) {
        formData.append("docpdf", selectedPdfFile);
      } else {
        formData.append("docpdf", null);
      }
  
      console.log(formData);
  
      // Envoi de la requête HTTP avec Axios
      try {
        const response = await axios.post(
          `${apiUrlEnv}/api/soumettre-joboffer`, 
          {
            'entreprise_id': information.id,
            formData
          },
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${authToken}`,
            },
          }
        );
  
        console.log("Response:", response.data);
  
        // Gérer la réponse ici
        if (response.data.success) {
          // Succès
          console.log("Formulaire soumis avec succès:", response.data.success);
          // Faire quelque chose pour traiter le succès, si nécessaire
        } else {
          // Erreur
          console.error("Erreur lors de la soumission du formulaire:", response.data.error);
          // Faire quelque chose pour traiter l'erreur, si nécessaire
        }
      } catch (error) {
        console.error("Error:", error);
      }
  
      // Réinitialiser le formulaire et les états locaux
      e.target.reset();
      setValue("type", "");
      setSelectedImageName(null);
      setSelectedPdfName(null);
      setSelectedImageFile(null);
      setSelectedPdfFile(null);
      setSubmitCounter(0);
    }
  };
  
      

  return (
    <div id="infoSection">
  
      <div className="bg-image bg-cover bg-center h-12 flex justify-center items-center text-white font-bold sm:h-16 md:h-28 lg:h-40 xl:h-52" style={{ backgroundImage: "url(MicrosoftTeams-image14.png)" }}>
        <h1 className="md:text-3xl">ESPACE ENTREPRISE</h1>
      </div>
  
      <div className="flex flex-col items-center bg-[#F6F6F6]">
        <h2 className="font-bold text-black text-lg mb-8 mt-6 md:text-3xl"><span className="border-b-2 border-[#F29200] pb-[0.5px]">INFORMATIONS</span>{" "}PERSONNELLES</h2>
        <div className="flex flex-col rounded-3xl mt-4 mb-6 p-4 bg-white md:w-[360px]">
          <p className="font-bold mb-2">Entreprise : {information.company_name}</p>
          <p className="font-bold mb-2">Numéro SIRET : {information.siret}</p>
          <p className="font-bold mb-2">Interlocuteur : {information.responsible_name}</p>
          <p className="font-bold mb-2">Téléphone : {information.company_phone}</p>
          <p id="offreSection" className="font-bold">Adresse mail : {information.company_email}</p>
        </div>
      </div>
  
      <div className="flex flex-col items-center bg-[#F6F6F6]">
        <h2 className="font-bold text-black text-lg my-8 md:text-3xl"><span className="border-b-2 border-[#F29200] pb-[0.5px]">DEPOSER UNE O</span>FFRE D'EMPLOI</h2>
        <form className="flex flex-col items-center justify-center rounded-3xl mt-4 mb-6 p-4 bg-white md:w-[360px]" onSubmit={handleSubmit(onSubmit)} >
          <input {...register("entreprise", { required: true })} name="entreprise" className="w-full border-2 rounded-md p-2  placeholder-black placeholder-opacity-75 my-1 md:mb-6" placeholder="Entreprise*" />
          <input {...register("title", { required: true })} name="title" className="w-full border-2  rounded-md p-2 placeholder-black placeholder-opacity-75 my-1 md:mb-6" placeholder="Titre*" />
          <input {...register("job", { required: true })} name="job" className="w-full border-2  rounded-md p-2 placeholder-black placeholder-opacity-75 my-1 md:mb-6" placeholder="Job visé*" />

          <select {...register("type", { required: true })} name="type" className="w-full border-2  rounded-md p-2 text-center placeholder-black placeholder-opacity-75 my-1 md:mb-6" style={selectStyle}>
            <option className="text-center" value="" disabled selected hidden>Choisissez le type de contrat</option>
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
          <textarea {...register("description")} name="description" className="w-full border-2  rounded-md p-2 text-start placeholder-black placeholder-opacity-75 my-1 md:mb-6" id="description"  placeholder="Description :"></textarea>
          <div className="w-full flex items-center justify-between my-4">
            <label htmlFor="publication" className="block text-sm font-medium mr-4">Date de Publication</label>
            <div>
              <input type="date" id="publication"
                {...register("publication", { required: true })} name="publication" className="border-2  rounded-md p-2 text-start placeholder-black placeholder-opacity-75" 
              />
            </div>
          </div>

          <div className="w-full flex flex-col md:flex-row md:justify-between">
            <div className="my-1 md:w-[calc(50%-10px)] relative flex items-center justify-center">
              <label id="labelchoisir" htmlFor="choisirimage" className="bg-[#F29200] text-white w-full py-1 p-2 rounded-md mx-auto font-semibold text-center justify-center">
                {selectedImageName ? selectedImageName : 'Ajouter un logo'}
              </label>
              <input type="file" id="choisirimage" {...register("image")} ref={imageInputRef} name="image" accept="image/*" className="hidden" onChange={handleImageChange} />

            </div>
  
            <div className="my-1 md:w-[calc(50%-10px)] relative flex items-center justify-center">
              <label id="labelchoisir" htmlFor="choisirpdf" className="bg-[#F29200] text-white w-full py-1 p-2 rounded-md mx-auto font-semibold text-center justify-center">
                {selectedPdfName ? selectedPdfName : 'Ajouter un pdf'}
              </label>
              <input type="file" id="choisirpdf" {...register("docpdf")} ref={pdfInputRef} name="docpdf" accept=".pdf" className="hidden" onChange={handlePdfChange} />

            </div>
          </div>

  
          <button type="submit" className="bg-[#F29200] text-white w-full py-1 p-2 my-4 rounded-md mx-auto font-semibold text-center justify-center">
            ENVOYER
          </button>
        </form>
      </div>
    </div>
  );
  
}

export default EspacePersonnelEntreprise;
