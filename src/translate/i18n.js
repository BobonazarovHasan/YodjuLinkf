import i18n from "i18next";
import {initReactI18next} from "react-i18next";

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';


import allTrans_uz from './uz/AllNavbar.json';
import allTrans_en from './eng/AllNavbar.json';
import allTrans_ru from './ru/AllNavbar.json';

i18n

    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)

    .init({
        fallbackLng:'uz',
        debug:true,
        detection:['queryString','cookie'],
        cache:['cookie'],

        interpolation:{
            escapeValue:false,
            whitelist:['uz', 'ru','en'],
},
        lng:'uz',
        resources:{
            uz: {
               allTrans:allTrans_uz
            },
            ru: {
                allTrans:allTrans_ru
            },
            en:{
                allTrans:allTrans_en
            }
        }



    });

export default i18n;