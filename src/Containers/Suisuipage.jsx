import React from "react";
import { useTranslation } from "react-i18next";
import Dashboard from "../assets/dashboard.webp";
function Suisuipage() {
  const { t, i18n } = useTranslation();
  const handleChangeLng = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lng", lng);
  };
  return (
    <div className="w-full py-16 px-4 ">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-4">
        <img className="dashboard hover:shadow-2xl " src={Dashboard} alt="/" />
        <div className="flex flex-col justify-center">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-black p-3 EngFont">
            SUISEI Production
          </h1>
          <p className="text-[#8EACC1] font-bold md:text-4xl sm:text-3xl text-2xl p-3 EngFont">
            Control System{" "}
          </p>
          <p className="text-xl font-light text-black p-3 ThaiFont">
            &nbsp;&nbsp;&nbsp;{t("controlSystem1")}{" "}
            <span className="EngFont">Smart Factory</span>
            &nbsp;{t("controlSystem2")}{" "}
            <span className="EngFont">Realtime</span> &nbsp;
            {t("controlSystem3")}{" "}
            <span className="EngFont">Monitor and Control</span>{" "}
            {t("controlSystem4")}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Suisuipage;
