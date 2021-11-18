import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import {BrowserRouter, BrowserRouter as Switch, Route} from "react-router-dom";
import MenuLinked from "./MenuNavbar";
import Question from "../pages/projects/Question";
import Help from "../pages/projects/Help";
import Statistics from "../pages/intoProject/Statistics";
import MenuPersonPrivilege from "../pages/intoProject/MenuPersonPrivilege";
import MenuPerson from "../pages/intoProject/MenuPerson";
import MenuVisa from "../pages/intoProject/MenuVisa";
import MenuEnter from "../pages/intoProject/MenuEnter";
import '../css/intoCss/Menu.css';
import Appellation from "../pages/projects/Appellation";
import {useTranslation} from "react-i18next";
import Cards from "../pages/intoProject/cards";
import NotFound from "../pages/projects/NotFound";
import { Scrollbars } from 'react-custom-scrollbars';



function Menu() {

    const [t, i18n] = useTranslation('menuTrans');



    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <MenuLinked t={t} i18n={i18n}/>
                    <Scrollbars
                        autoHeight={true}
                        autoHeightMax={575}
                    >
                    <div id={'container'} className={'container'}>
                        <div className="row">
                            <div className=" menu-cols col offset-2">
                                <Route exact path={'/abiturient/'} component={() => <MenuEnter t={t}/>}/>

                                <Route exact path={'/abiturient/notFound/'} component={() => <NotFound t={t}/>}/>

                                <Route exact path={'/abiturient/appellation/'} component={() => <Appellation t={t}/>}/>

                                <Route exact path={'/abiturient/menuVisa/'} component={() => <MenuVisa t={t}/>}/>

                                <Route exact path={'/abiturient/menuPersonPrivilege/'} component={() => <MenuPersonPrivilege t={t}/>}/>

                                <Route exact path={'/abiturient/cards/'} component={() => <Cards t={t}/>}/>


                                <Route exact path={'/abiturient/menuPerson/'} component={() => <MenuPerson t={t}/>}/>

                                <Route exact path={'/abiturient/question/'} component={() => <Question t={t}/>}/>

                                <Route exact path={'/abiturient/help/'} component={() => <Help t={t}/>}/>

                                <Route exact path={'/abiturient/statistics/'} component={() => <Statistics t={t}/>}/>
                            </div>
                        </div>
                    </div>
                    </Scrollbars>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default Menu;