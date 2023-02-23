import React from "react";
import material from "../icons/new-materails.jpg";
import planning from "../assets/planning2.jpg";
import production from "../assets/production.jpg";
import quality from "../assets/QC.jpg";
import warehouse from "../assets/warehouse.jpg";
import Logis from "../assets/Logis.jpg";
import { useTranslation } from "react-i18next";
function Systempage() {
  const { t, i18n } = useTranslation();
  const handleChangeLng = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lng", lng);
  };
  return (
    <div className="w-full py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid gap-4">
        <div className="flex flex-col justify-center">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold p-3 EngFont">
            System Overview
          </h1>
          <p className="text-[#8EACC1] font-bold md:text-4xl sm:text-3xl text-2xl p-3 EngFont">
            FLOW SPCS{" "}
          </p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold p-3 ThaiFont">
            <span className="EngFont">{t("SPCS1")}</span> {t("SPCS2")}
          </h1>
        </div>
        <div className="grid md:grid-cols-3 gap-3">
          <div className="max-w-sm bg-gray-300 border border-gray-300 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 shrink">
            <img className="rounded-t-lg bg-gray-300" src={material} alt="" />

            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white p-1 EngFont">
                Material
              </h5>

              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 p-1 ThaiFont">
                &nbsp;&nbsp;&nbsp;&nbsp;{t("materials1")}{" "}
                <span className="EngFont">{t("materials2")}</span>{" "}
                {t("materials3")}{" "}
                <span className="EngFont">{t("materials4")}</span>
              </p>
            </div>
          </div>
          <div className="max-w-sm bg-gray-300 border border-gray-300 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 shrink">
            <img className="rounded-t-lg" src={planning} alt="" />

            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white p-1 EngFont">
                Planning
              </h5>

              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-left p-1 ThaiFont">
                &nbsp;&nbsp;&nbsp;&nbsp;{t("planing1")}{" "}
                <span className="EngFont">{t("planing2")}</span>
              </p>
            </div>
          </div>
          <div className="max-w-sm bg-gray-300 border border-gray-300 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 shrink">
            <img className="rounded-t-lg" src={production} alt="" />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white p-1 EngFont">
                Production
              </h5>

              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 p-1 ThaiFont">
                &nbsp;&nbsp;&nbsp;&nbsp;{t("production1")}&nbsp;
                <span className="EngFont">{t("production2")}</span>{" "}
                {t("production3")}{" "}
                <span className="EngFont">{t("production4")}</span>&nbsp;
                {t("production5")}
                <span className="EngFont">{t("production6")}</span>
              </p>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-3">
          <div className="max-w-sm bg-gray-300 border border-gray-300 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 shrink">
            <img className="rounded-t-lg" src={quality} alt="" />

            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white p-1 EngFont">
                Quality Control
              </h5>

              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 p-1 ThaiFont">
                &nbsp;&nbsp;&nbsp;&nbsp;{t("qualityControl1")}{" "}
                <span className="EngFont">{t("qualityControl2")}</span>
              </p>
            </div>
          </div>
          <div className="max-w-sm bg-gray-300 border border-gray-300 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 shrink">
            <img className="rounded-t-lg" src={warehouse} alt="" />

            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white p-1 EngFont">
                Warehouse
              </h5>

              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 p-1 ThaiFont">
                &nbsp;&nbsp;&nbsp;&nbsp;{t("wareHouse1")}
                <span className="EngFont">{t("wareHouse2")}</span>
                {t("wareHouse3")}&nbsp;
                <span className="EngFont">{t("wareHouse4")}</span>
              </p>
            </div>
          </div>
          <div className="max-w-sm bg-gray-300 border border-gray-300 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 shrink">
            <img className="rounded-t-lg" src={Logis} alt="" />

            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white p-1 EngFont">
                Logistics
              </h5>

              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 p-1 ThaiFont">
                &nbsp;&nbsp;&nbsp;&nbsp;{t("logistics")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Systempage;
