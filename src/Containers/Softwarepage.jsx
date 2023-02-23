import React from "react";
import dashboard from "../icons/dashboard.png";
import paperless from "../icons/paperless.png";
import realTime from "../icons/real-time.png";
import filter from "../icons/filter.png";
import cloud from "../icons/cloud.png";
import cheap from "../icons/loss1.png";
import { useTranslation } from "react-i18next";
function Softwarepage() {
  const { t, i18n } = useTranslation();
  const handleChangeLng = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lng", lng);
  };
  return (
    <div className="w-full py-16 px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid gap-4">
        <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold p-3 ThaiFont">
          {t("question")}
        </h1>
        <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold p-3 EngFont">
          Software as a service
        </h1>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center shrink">
            <img src={dashboard} alt="" />
            <h1 className="p-3 EngFont text-xl">Dashboard System</h1>
            <h2 className="p-3 ThaiFont">{t("dashBoardSystem")}</h2>
          </div>
          <div className="text-center shrink">
            <img src={paperless} alt="" />
            <h1 className="p-3 EngFont text-xl">Paperless</h1>
            <h2 className="p-3 ThaiFont">
              {t("paper1")}
              <br />
              {t("paper2")}
            </h2>
          </div>
          <div className="text-center shrink">
            <img src={realTime} alt="" />
            <h1 className="p-2 EngFont text-xl">Real-time</h1>
            <h2 className="p-2 ThaiFont">
              {t("real1")}
              <span className="EngFont">{t("real2")}</span> {t("real3")}{" "}
              <span className="EngFont">{t("real4")}</span> <br />
              {t("real5")}
            </h2>
          </div>
          <div className="text-center shrink">
            <img src={filter} alt="" />
            <h1 className="p-2 EngFont text-xl">Search and Filter</h1>
            <h2 className="p-2 ThaiFont">
              {t("search1")}
              <br />
              {t("search2")} <span className="EngFont">{t("search3")}</span>
            </h2>
          </div>
          <div className="text-center shrink">
            <img src={cloud} alt="" />
            <h1 className="p-2 EngFont text-xl">Cloud Based Technology</h1>
            <h2 className="p-2 ThaiFont">
              {t("could1")}
              <span className="EngFont">{t("could2")}</span> <br />
              {t("could3")} <span className="EngFont">{t("could4")}</span>
              {t("could5")}
            </h2>
          </div>
          <div className="text-center shrink">
            <img src={cheap} alt="" />
            <h1 className="p-2 EngFont text-xl">Subscription-based Model</h1>
            <h2 className="p-2 ThaiFont">
              {t("subscription1")}
              <br></br> {t("subscription2")}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Softwarepage;
