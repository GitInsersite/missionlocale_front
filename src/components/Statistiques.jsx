import { useEffect, useState, useRef } from "react";
import { useMediaQuery } from "react-responsive";

function Statistiques() {
const [isIntersecting, setIsIntersecting] = useState(false);
const [currentNumber, setCurrentNumber] = useState(0);
const [currentNumber1, setCurrentNumber1] = useState(0);
const [currentNumber2, setCurrentNumber2] = useState(0);
const [currentNumber3, setCurrentNumber3] = useState(0);
const [currentNumber4, setCurrentNumber4] = useState(0);

const isTabletOrLarger = useMediaQuery({ minWidth: 768 });

const finalNumber = 10196;
const finalNumber1 = 4050;
const finalNumber2 = 7471;
const finalNumber3 = 2973;
const finalNumber4 = 16;

const statisticsRef = useRef(null);

useEffect(() => {
const handleScroll = () => {
if (statisticsRef.current) {
const boundingBox = statisticsRef.current.getBoundingClientRect();
setIsIntersecting(boundingBox.top < window.innerHeight); } }; window.addEventListener("scroll", handleScroll); 
//Initial check on mount 
  handleScroll(); return ()=> {
  window.removeEventListener("scroll", handleScroll);
  };
  }, []);

  useEffect(() => {
  if (isIntersecting) {
  const interval = setInterval(() => {
  setCurrentNumber((prevNumber) => {
  const increment = Math.ceil((finalNumber - prevNumber) / 50);
  return prevNumber + increment;
  });
  }, 20);

  return () => clearInterval(interval);
  }
  }, [isIntersecting]);

  useEffect(() => {
  if (isIntersecting) {
  const interval = setInterval(() => {
  setCurrentNumber1((prevNumber) => {
  const increment = Math.ceil((finalNumber1 - prevNumber) / 50);
  return prevNumber + increment;
  });
  }, 20);

  return () => clearInterval(interval);
  }
  }, [isIntersecting]);

  useEffect(() => {
  if (isIntersecting) {
  const interval = setInterval(() => {
  setCurrentNumber2((prevNumber) => {
  const increment = Math.ceil((finalNumber2 - prevNumber) / 50);
  return prevNumber + increment;
  });
  }, 20);

  return () => clearInterval(interval);
  }
  }, [isIntersecting]);

  useEffect(() => {
  if (isIntersecting) {
  const interval = setInterval(() => {
  setCurrentNumber3((prevNumber) => {
  const increment = Math.ceil((finalNumber3 - prevNumber) / 50);
  return prevNumber + increment;
  });
  }, 20);

  return () => clearInterval(interval);
  }
  }, [isIntersecting]);

  useEffect(() => {
  if (isIntersecting) {
  const interval = setInterval(() => {
  setCurrentNumber4((prevNumber) => {
  const increment = Math.ceil((finalNumber4 - prevNumber) / 50);
  return prevNumber + increment;
  });
  }, 20);

  return () => clearInterval(interval);
  }
  }, [isIntersecting]);

  return (
  <div ref={statisticsRef} className="flex flex-col items-center py-4 md:items-start md:px-10 md:pt-10 xl:px-52">
    <h1 className="mt-2 px-4 md:px-0 font-bold text-2xl lg:text-3xl">
      <span className="border-b-2 border-[#DB34C7] pb-[0.5px]">CETT</span>E
      ANNEE A LA MISSION LOCALE
    </h1>



    <div className="flex md:flex-row sm:flex-col sm:m-8 my-8 w-full font-semibold">

      <div className="flex flex-col md:w-1/5 sm:my-6 ">
        <div>
          <div className="flex justify-center pb-4">
            <img src="JEUNES_ACCOMPAGNÉS.svg" alt="jeunes accompagnés" className="w-12 h-12 flex justify-center" />
          </div>
        </div>
        <div className="flex justify-center pb-4 text-3xl font-bold" style={{ color: "rgba(0, 0, 0, 0.5)" }}>
          {currentNumber.toLocaleString()}</div>
        <div>
          <div className="text-center leading-tight text-xs flex justify-center">
            JEUNES
            <br />
            ACCOMPAGNES
          </div>
        </div>
      </div>
      <div className="flex flex-col md:w-1/5  sm:my-6 ">
        <div>
          <div className="flex justify-center pb-4">
            <img src="JEUNES_EMPLOI.svg" alt="jeunes  emploi" className="w-12 h-12 flex justify-center" />
          </div>
        </div>
        <div className="flex justify-center pb-4 text-3xl font-bold" style={{ color: "rgba(0, 0, 0, 0.5)" }}>
          {currentNumber1.toLocaleString()}</div>
        <div>
          <p className="text-center leading-tight text-xs flex justify-center">
            JEUNES
            <br />
            EN EMPLOI
          </p>
        </div>
      </div>
      <div className="flex flex-col  md:w-1/5  sm:my-6 ">
        <div>
          <div className="flex justify-center pb-4">
            <img src="JEUNES_FORMATION.svg" alt="jeunes formation" className="w-12 h-12 flex justify-center" />
          </div>
        </div>
        <div className="flex justify-center pb-4 text-3xl font-bold" style={{ color: "rgba(0, 0, 0, 0.5)" }}>
          {currentNumber2.toLocaleString()}
        </div>
        <div>
          <p className="text-center leading-tight text-xs flex justify-center">
            JEUNES
            <br />
            EN FORMATION
          </p>
        </div>
      </div>
      <div className="flex flex-col  md:w-1/5  sm:my-6 ">
        <div>
          <div className="flex justify-center pb-4">
            <img src="ENTRETIEN_ATELIER.svg" alt="entretien, atelier" className="w-12 h-12 flex justify-center" />
          </div>
        </div>
        <div className="flex justify-center pb-4 text-3xl font-bold" style={{ color: "rgba(0, 0, 0, 0.5)" }}>
          {currentNumber3.toLocaleString()}</div>
        <div>
          <p className="text-center leading-tight text-xs flex justify-center">
            ENTRETIENS
            <br />
            ET ATELIERS
          </p>
        </div>
      </div>
      <div className="flex flex-col md:w-1/5 sm:my-6 ">
        <div>
          <div className="flex justify-center pb-4">
            <img src="PARTENAIRES.svg" alt="partenaire" className="w-12 h-12 flex justify-center" />
          </div>
        </div>
        <div className="flex justify-center pb-4 text-3xl font-bold" style={{ color: "rgba(0, 0, 0, 0.5)" }}>
          {currentNumber4.toLocaleString()}</div>
        <div>
          <p className="text-center leading-tight text-xs flex justify-center">
            PARTENAIRES
          </p>
        </div>
      </div>
    </div>



  </div>


  );
  }

  export default Statistiques;