import React, { useState } from "react";
import Typed from "react-typed";
import { useTranslation } from "react-i18next";
function Homepage() {
  const localStorageLanguage = localStorage.getItem("lng");

  const [lang, setLang] = useState(
    localStorageLanguage ? localStorageLanguage : "th"
  );
  const { t, i18n } = useTranslation();

  const handleChangeTH = (lng) => {
    setLang("th");
    i18n.changeLanguage(lng);
    localStorage.setItem("lng", lng);
  };
  const handleChangEng = (lng) => {
    setLang("en");
    i18n.changeLanguage(lng);
    localStorage.setItem("lng", lng);
  };

  return (
    <div className="text-black bg-main">
      <img
        src="https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/SPCS/SPCS+Logo+Rev.01.png"
        alt=""
        className="xl:w-[200px] md:w-[150px] sm:w-[100px]"
      ></img>
      <div className="max-w-[800px] md:mt-[-96px] w-full h-screen mx-auto md:text-left flex flex-col justify-center p-3">
        <h1 className="md:text-7xl sm:text-6xl text-[40px] font-bold md:py-6 md:mt-[850px] md:ml-[-650px] lg:ml-[-350px] lg:mt-[600px] xl:ml-[-500px]">
          SUISEI CONTROL <br></br>SYSTEM
        </h1>
        <div className="flex justify-left">
          <Typed
            className="md:text-7xl sm:text-6xl sm:text-[30px] font-bold  md:ml-[-650px] lg:ml-[-350px] lg:text-6xl xl:ml-[-500px]"
            strings={[
              "DIGITAL",
              "SAAS",
              "DEVOPS",
              "CLOUD BASED",
              "DATA TRANSFORMATION",
            ]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
      </div>
      <ul className="justify-end space-y-8 md:flex md:space-x-6 md:space-y-0 text-lg right-3">
        <li className="navFont hover:text-blue-600 link-underline link-underline-black duration-500">
          <button
            className={`Font1 ${
              lang === "th" ? "text-blue-600 underline" : ""
            }`}
            onClick={() => handleChangeTH("th")}
          >
            TH
          </button>
        </li>

        <li className="navFont hover:text-blue-600 link-underline link-underline-black duration-500">
          <button
            className={`Font1 ${
              lang === "en" ? "text-blue-600 underline" : ""
            }`}
            onClick={() => handleChangEng("en")}
          >
            EN
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Homepage;
