

function UneActualite() {
  return (
    <div>
        <div
        className="bg-image bg-cover bg-center h-12 flex justify-center items-center text-white font-bold"
        style={{ backgroundImage: "url(/public/MicrosoftTeams-image15.png)" }}
      >
        <h1>ACTUALITE</h1>
      </div>
      <div className=" flex flex-col items-center pt-6 border-red-500 border-2 bg-[#F6F6F6]">
        <div className="border-2 border-[#2897d5] flex flex-col px-4 bg-white rounded-lg mb-4 pt-2 w-[90%]">
          <h2 className="text-lg mb-2 text-[#2897d5] font-bold">TITRE DE L&apos;ACTUALITE</h2>
          <p className="mb-4">
            JJ/MM/AAAA
          </p>
          <p className="mb-4 text-[#2897d5]">
            #ALTERNANCE
          </p>
        </div>
        <div className="border-2 border-[#2897d5] flex flex-col px-4 bg-white rounded-lg mb-4 pt-2 w-[90%]">
          <img src="" alt="image"  className="mb-6 border-2 border-red-500"/>
          <p className="mb-4">
            Véritable technicien de l’image, le Photographe Professionnel sait
            comment composer une photo, comment l’éclairer
          </p>
        </div>
      </div>
    </div>
  )
}

export default UneActualite