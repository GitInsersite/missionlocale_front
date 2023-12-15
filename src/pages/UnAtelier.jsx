import { Link } from "react-router-dom";

function UnAtelier() {
  return (
    <div>
      <div
        className="bg-image bg-cover bg-center h-12 flex justify-center items-center text-white font-bold"
        style={{ backgroundImage: "url(/public/MicrosoftTeams-image13.png)" }}
      >
        <h1>ATELIERS</h1>
      </div>
      <div className=" flex flex-col items-center pt-6 border-red-500 border-2 bg-[#F6F6F6]">
        <div className="border-2 border-[#95c11f] flex flex-col px-4 bg-white rounded-lg mb-4 pt-2 w-[90%]">
          <h2 className="font-semibold text-lg mb-2">ATELIER PODCAST</h2>
          <p className="mb-4">
            Initié par notre partenaire Insersite, cet atelier Photo
            Professionnelle vous permettra de découvrir le métier de
            photographe, de vous initier aux techniques photo, et de prendre en
            main ses différents outils
          </p>
          <Link
            to="/"
            className="bg-[#95c11f] text-white py-1 px-2 text-center rounded-xl text-sm mb-6 w-[55%]"
          >
            S&apos;inscrire à l&apos;atelier
          </Link>
        </div>
        <div className="flex mb-6">
            <div className=" w-[40%]">
                <p className="font-semibold">LE PROCHAIN ATELIER</p>
            </div>
            <div className="flex justify-between w-[60%] font-bold">
                <p className="bg-white px-2 py-3 rounded-lg">12</p>
                <p className="bg-white px-2 py-3 rounded-lg">12</p>
                <p className="bg-white px-2 py-3 rounded-lg">2023</p>
            </div>
        </div>
        <div className="border-2 border-[#95c11f] flex flex-col px-4 bg-white rounded-lg mb-4 pt-2 w-[90%]">
          <h2 className="font-semibold text-lg mb-2">METIER</h2>
          <p className="mb-4">
            Véritable technicien de l’image, le Photographe Professionnel sait
            comment composer une photo, comment l’éclairer, et faire en sorte
            que le produit fini raconte une histoire. Il possède des compétences
            techniques et un esprit créatif, un fort bagage culturel, et une
            véritable sensibilité artistique.
          </p>
        </div>
        <div className="border-2 border-[#95c11f] flex flex-col px-4 bg-white rounded-lg mb-4 pt-2 w-[90%]">
          <h2 className="font-semibold text-lg mb-2">METIER</h2>
          <p className="mb-4">
            Vous initier au métier de photographe, en vous faisant découvrir les
            bases qu’elles soient au niveau technique (prise en main de
            l’appareil...) ou bien au niveau artistique (composition,
            éclairage…). Vous permettre de découvrir ce métier fascinant qui
            laisse libre cours à votre imagination et à votre créativité.
          </p>
        </div>
      </div>
    </div>
  );
}

export default UnAtelier;
