import React from 'react';
import {BrowserRouter as Switch, BrowserRouter, Route} from "react-router-dom";
import '../css/admissionStyle/Admission.css';
import {Scrollbars} from "react-custom-scrollbars";
// import { FixedSizeList } from "react-window";

import AdminNavbar from "./AdminNavbar";
import {useTranslation} from "react-i18next";
import News from "../pages/admission/News";
// import NotFound from "../pages/projects/NotFound";
import Applications from "../pages/admission/Applications";
import Statistics from "../pages/admission/Statistics";
import AdminPersons from "../pages/admission/AdminPersons";
import Country from "../pages/admission/Country";
import Regions from "../pages/admission/Regions";
import District from "../pages/admission/District";
import Faculty from "../pages/admission/Faculty";
import EducationType from "../pages/admission/EducationType";
import EducationLan from "../pages/admission/EducationLan";
import AdminCards from "../pages/admission/AdminCards";
import EditCards from "../pages/admission/EditCards";


function Admission() {

    const [t, i18n] = useTranslation('adminTrans');


    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <AdminNavbar t={t} i18n={i18n}/>
                    <Scrollbars
                        autoHeight={true}
                        autoHeightMax={545}
                    >
                        <div className={'admissions container'}>
                            <div className="row">
                                <div className=" admin-cols col offset-2">
                                    <Route exact path={'/admission/'} component={() => <Applications t={t}/>}/>
                                    <Route exact path={'/admission/statistic/'} component={() => <Statistics t={t} i18n={i18n}/>}/>
                                    <Route exact path={'/admission/adminCards/'} component={() => <AdminCards t={t}/>}/>
                                    <Route exact path={'/admission/adminCards/editCards/'} component={() => <EditCards t={t}/>}/>
                                    <Route exact path={'/admission/news/'} component={() => <News t={t}/>}/>
                                    <Route exact path={'/admission/admin/'} component={() => <AdminPersons t={t}/>}/>
                                    <Route exact path={'/admission/country/'} component={() => <Country t={t}/>}/>


                                    <Route exact path={'/admission/region/'} component={() => <Regions t={t}/>}/>
                                    <Route exact path={'/admission/district/'} component={() => <District t={t}/>}/>
                                    <Route exact path={'/admission/faculty/'} component={() => <Faculty t={t}/>}/>
                                    <Route exact path={'/admission/type/'} component={() => <EducationType t={t}/>}/>
                                    <Route exact path={'/admission/language/'} component={() => <EducationLan t={t}/>}/>
                                </div>
                            </div>
                        </div>
                    </Scrollbars>

                </Switch>
            </BrowserRouter>
        </div>
);
}

export default Admission;