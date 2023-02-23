import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import th from "./lng/th.json";
import en from "./lng/en.json";

i18next.use(initReactI18next).init({
	resources: {
		th: {
			translation: th,
		},
		en: {
			translation: en,
		},
	},
	lng: localStorage.getItem("lng") || "th" || "en"
    // lng: 'th'
    
});

export default i18next;