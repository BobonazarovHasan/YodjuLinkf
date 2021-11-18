import React, {Component, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import {BrowserRouter as  Switch, Route, BrowserRouter} from "react-router-dom";
import Navbar from "./Navbar";
import SignIn from "../pages/projects/SignIn";
import Question from "../pages/projects/Question";
import Help from "../pages/projects/Help";
import Visa from "../pages/projects/Visa";
import SignUp from "../pages/projects/SignUp";
import Appellation from "../pages/projects/Appellation";

import faceBook from "../image/iconfinder_facebook_network_logo_1920524.png";
import telegram from "../image/iconfinder_social-56_1591869.png";
import instagram from "../image/iconfinder_1_Instagram_colored_svg_1_5296765.png";
import youTube from "../image/iconfinder_1_Youtube_colored_svg_5296521.png";
import vector from "../image/iconfinder_SocialMedia_Website-Outline_2959741.png";
import NotFound from "../pages/projects/NotFound";
import '../css/AppStyle.css';
import {useTranslation} from "react-i18next";
import ForgetPassword from "../pages/projects/ForgetPassword";
import Menu from "./Menu";

function App(){


    const [t, i18n] = useTranslation('appTrans');


        return (

            <div>
                <BrowserRouter>
                    <Switch>
                        <Navbar t={t} i18n={i18n}/>
                        <div className={"container pt-4"}>
                            <Route exact path={'/signUp'} component={() => <SignUp  t={t}/>}/>
                            <Route exact path={'/forget'} component={() => <ForgetPassword t={t}/>}/>
                            <Route exact path={'/notFound/'} component={() => <NotFound t={t}/>}/>
                            <Route exact path={'/menu/'} component={() => <Menu t={t}/>}/>
                            <Route exact path={'/'} component={() => <SignIn t={t} />}/>

                            <footer className={'text-center'}>
                                <p >© {t("appPage.p")}</p>
                                <div className='app-row row'>
                                    <div className="app-col col">
                                        <p>
                                            <a href="https://www.facebook.com/ytit.uz/"><img style={{height:14, width:16}} src={faceBook} alt="#"/></a>
                                            <a className='mr-1' href="https://t.me/yodju"><img style={{height:16, width:16}} src={telegram} alt="#"/></a>
                                            <a className='mr-1' href="https://www.instagram.com/ytit.uz/?hl=ru"><img style={{height:15, width:16}} src={instagram} alt="#"/></a>
                                            <a className='mr-1' href="https://www.youtube.com/watch?v=Ghfh0D-cqz8"><img style={{height:18, width:16}} src={youTube} alt="#"/></a>
                                            <a className='mr-1' href="https://www.google.com/"><img style={{height:15, width:16}} src={vector} alt="#"/></a>
                                        </p>
                                    </div>
                                </div>
                            </footer>
                        </div>
                    </Switch>
                </BrowserRouter>
            </div>
        );
}

export default App;