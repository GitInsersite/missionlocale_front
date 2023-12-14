import React, { useEffect, useState } from "react";

function Statistiques() {
  const [currentNumber, setCurrentNumber] = useState(0);
  const [currentNumber1, setCurrentNumber1] = useState(0);
  const [currentNumber2, setCurrentNumber2] = useState(0);
  const [currentNumber3, setCurrentNumber3] = useState(0);
  const [currentNumber4, setCurrentNumber4] = useState(0);

  const finalNumber = 10196;
  const finalNumber1 = 4050;
  const finalNumber2 = 7471;
  const finalNumber3 = 2973;
  const finalNumber4 = 16;


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNumber((prevNumber) => {
        const increment = Math.ceil((finalNumber - prevNumber) / 50);
        return prevNumber + increment;
      });
    }, 20);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNumber1((prevNumber) => {
        const increment = Math.ceil((finalNumber1 - prevNumber) / 50);
        return prevNumber + increment;
      });
    }, 20);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNumber2((prevNumber) => {
        const increment = Math.ceil((finalNumber2 - prevNumber) / 50);
        return prevNumber + increment;
      });
    }, 20);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNumber3((prevNumber) => {
        const increment = Math.ceil((finalNumber3 - prevNumber) / 50);
        return prevNumber + increment;
      });
    }, 20);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNumber4((prevNumber) => {
        const increment = Math.ceil((finalNumber4 - prevNumber) / 50);
        return prevNumber + increment;
      });
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center">
      <h1 className="mt-2 font-bold">
        <span className="border-b-2 border-red-500 pb-[0.5px]">CETT</span>E
        ANNEE A LA MISSION LOCALE
      </h1>
      <div>
        <div className="border-purple-800 border-2 w-36 h-20 mt-10 relative">
          <p className="absolute top-[13px] left-1/2 transform -translate-x-1/2 -translate-y-full bg-white rounded-lg px-2 text-lg font-bold text-purple-800">
            {currentNumber.toLocaleString()}
          </p>
          <p className="text-center leading-tight text-sm mt-5">
            JEUNES
            <br />
            ACCOMPAGNES
          </p>
        </div>
        <div className="border-pink-800 border-2 w-36 h-20 mt-10 relative">
          <p className="absolute top-[13px] left-1/2 transform -translate-x-1/2 -translate-y-full bg-white rounded-lg px-2 text-lg font-bold text-pink-800">
          {currentNumber1.toLocaleString()}
          </p>
          <p className="text-center leading-tight text-sm mt-5">
            JEUNES
            <br />
            EN EMPLOI
          </p>
        </div>
        <div className="border-blue-800 border-2 w-36 h-20 mt-10 relative">
          <p className="absolute top-[13px] left-1/2 transform -translate-x-1/2 -translate-y-full bg-white rounded-lg px-2 text-lg font-bold text-blue-800">
          {currentNumber2.toLocaleString()}
          </p>
          <p className="text-center leading-tight text-sm mt-5">
            JEUNES
            <br />
            EN FORMATION
          </p>
        </div>
        <div className="border-green-800 border-2 w-36 h-20 mt-10 mb-4 relative">
          <p className="absolute top-[13px] left-1/2 transform -translate-x-1/2 -translate-y-full bg-white rounded-lg px-2 text-lg font-bold text-green-800">
          {currentNumber3.toLocaleString()}
          </p>
          <p className="text-center leading-tight text-sm mt-5">
            JEUNES
            <br />
            ET ATELIERS
          </p>
        </div>
        <div className="border-yellow-800 border-2 w-36 h-20 mt-10 mb-4 relative">
          <p className="absolute top-[13px] left-1/2 transform -translate-x-1/2 -translate-y-full bg-white rounded-lg px-2 text-lg font-bold text-yellow-800">
          {currentNumber4.toLocaleString()}
          </p>
          <p className="text-center leading-tight text-sm mt-5">
            JEUNES
            <br />
            ET ATELIERS
          </p>
        </div>
      </div>
    </div>
  );
}

export default Statistiques;
