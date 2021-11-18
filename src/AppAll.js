import React from 'react';
import { Route, Switch} from "react-router-dom";

import Applications from "./pages/admission/Applications";

import {useTranslation} from "react-i18next";
import Statistics from "./pages/admission/Statistics";
import AdminCards from "./pages/admission/AdminCards";
import EditCards from "./pages/admission/EditCards";
import News from "./pages/admission/News";
import AdminPersons from "./pages/admission/AdminPersons";
import Country from "./pages/admission/Country";
import Regions from "./pages/admission/Regions";
import District from "./pages/admission/District";
import Faculty from "./pages/admission/Faculty";
import EducationType from "./pages/admission/EducationType";
import EducationLan from "./pages/admission/EducationLan";
import MenuEnter from "./pages/intoProject/MenuEnter";
import NotFound from "./pages/projects/NotFound";
import Appellation from "./pages/projects/Appellation";
import MenuVisa from "./pages/intoProject/MenuVisa";
import MenuPersonPrivilege from "./pages/intoProject/MenuPersonPrivilege";
import Cards from "./pages/intoProject/cards";
import MenuPerson from "./pages/intoProject/MenuPerson";
import Question from "./pages/projects/Question";
import Help from "./pages/projects/Help";
import SignUp from "./pages/projects/SignUp";
import ForgetPassword from "./pages/projects/ForgetPassword";
import SignIn from "./pages/projects/SignIn";
import Visa from "./pages/projects/Visa";


function AppAll() {

    const [t, i18n] = useTranslation('allTrans');

    return (
        <div>
            <Switch>
                <Route exact path={'/signUp'} component={() => <SignUp t={t} i18n={i18n}/>}/>
                <Route exact path={'/forget'} component={() => <ForgetPassword t={t} i18n={i18n}/>}/>
                <Route exact path={'/notFound/'} component={() => <NotFound t={t} i18n={i18n}/>}/>
                <Route exact path={'/'} component={() => <SignIn t={t} i18n={i18n}/>}/>
                <Route exact path={'/visa'} component={() => <Visa t={t} i18n={i18n}/>}/>

                <Route exact path={'/abiturient/'} component={() => <MenuEnter t={t} i18n={i18n}/>}/>
                <Route exact path={'/abiturient/notFound/'} component={() => <NotFound t={t} i18n={i18n}/>}/>
                <Route exact path={'/abiturient/appellation/'} component={() => <Appellation t={t} i18n={i18n}/>}/>
                <Route exact path={'/abiturient/menuVisa/'} component={() => <MenuVisa t={t} i18n={i18n}/>}/>
                <Route exact path={'/abiturient/statistics/'}
                       component={() => <MenuPersonPrivilege t={t} i18n={i18n}/>}/>
                <Route exact path={'/abiturient/cards/'} component={() => <Cards t={t} i18n={i18n}/>}/>
                <Route exact path={'/abiturient/menuPerson/'} component={() => <MenuPerson t={t} i18n={i18n}/>}/>
                <Route exact path={'/abiturient/question/'} component={() => <Question t={t} i18n={i18n}/>}/>
                <Route exact path={'/abiturient/help/'} component={() => <Help t={t} i18n={i18n}/>}/>


                <Route exact path={'/admission/'} component={() => <Applications t={t} i18n={i18n}/>}/>
                <Route exact path={'/admission/statistics/'} component={() => <Statistics t={t} i18n={i18n}/>}/>
                <Route exact path={'/admission/adminCards/'} component={() => <AdminCards t={t} i18n={i18n}/>}/>
                <Route exact path={'/admission/adminCards/editCards/'} component={() => <EditCards t={t} i18n={i18n}/>}/>
                <Route exact path={'/admission/news/'} component={() => <News t={t} i18n={i18n}/>}/>
                <Route exact path={'/admission/admin/'} component={() => <AdminPersons t={t} i18n={i18n}/>}/>
                <Route exact path={'/admission/country/'} component={() => <Country t={t} i18n={i18n}/>}/>
                <Route exact path={'/admission/region/'} component={() => <Regions t={t} i18n={i18n}/>}/>
                <Route exact path={'/admission/district/'} component={() => <District t={t} i18n={i18n}/>}/>
                <Route exact path={'/admission/faculty/'} component={() => <Faculty t={t} i18n={i18n}/>}/>
                <Route exact path={'/admission/type/'} component={() => <EducationType t={t} i18n={i18n}/>}/>
                <Route exact path={'/admission/language/'} component={() => <EducationLan t={t} i18n={i18n}/>}/>

            </Switch>
        </div>
    );
}

export default AppAll;