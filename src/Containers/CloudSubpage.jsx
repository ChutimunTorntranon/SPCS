import React from "react";
import { useTranslation } from "react-i18next";
import cloud from "../icons/cloud2.png";
import cheap from "../icons/loss1.png";
function CloudSubpage() {
  const { t, i18n } = useTranslation();
  const handleChangeLng = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lng", lng);
  };
  return (
    <div className="w-full bg-white py-16 px-4 ">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-4">
        <div className="flex flex-col">
          <img className="w-[400px]" src={cloud} alt="/" />
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-black p-3 EngFont">
            Cloud Based
          </h1>
          <p className="text-black font-bold md:text-4xl sm:text-3xl text-2xl p-3 EngFont">
            Technology{" "}
          </p>
          <p className="text-2xl font-light text-black p-3 ThaiFont">
            {t("couldBase1")} <span className="EngFont">{t("couldBase2")}</span>{" "}
            {t("couldBase3")}&nbsp;
            <span className="EngFont">{t("couldBase4")}</span>
            &nbsp;เ{t("couldBase5")}{" "}
            <span className="EngFont">{t("couldBase6")}</span> {t("couldBase7")}{" "}
            <span className="EngFont">{t("couldBase8")}</span>
            {t("couldBase9")}
          </p>
        </div>
        <div className="flex flex-col ">
          <img className="w-[400px]" src={cheap} alt="/" />
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-black p-3 EngFont">
            Subscription
          </h1>
          <p className="text-black font-bold md:text-4xl sm:text-3xl text-2xl p-3 EngFont">
            based Model{" "}
          </p>
          <p className="text-2xl font-light text-black p-3 ThaiFont">
            {t("subscriptionBase1")}
            <span className="EngFont"> {t("subscriptionBase2")}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default CloudSubpage;
