import React, {Component} from 'react';
import natija from '../../image/intoImage/69b82645f5d6d45641509a06585f0f62-removebg-preview 1.svg';
import '../../css/intoCss/MenuEnter.css';
import {useSpring, animated} from 'react-spring';
import MenuLinked from "../../component/MenuNavbar";
import {Scrollbars} from "react-custom-scrollbars";
import {BrowserRouter as Switch} from "react-router-dom";
class MenuEnter extends Component {

    render() {
        const {t,i18n}=this.props;
        return (
            <div>
                <MenuLinked t={t} i18n={i18n}/>

                    <div id={'container'} className={'container'}>
                        <div className="row pt-5">
                            <div className=" menu-cols col offset-2 pt-5">
                                <div className={'menu-enter ml-2'}>
                                    <div className={'labels'}>
                                        <label>
                                            <p className={'p'}>{t("menuEnter.h")}</p>
                                        </label>
                                        <div className={'row'}>
                                            <div className={'col'}>
                                                <a href="#">
                                                    <div className={'col-card card'}><img className={'imgs'} src={natija} alt="#"/>
                                                        <h5>Natija-2021</h5>
                                                        <p>2021-2022 o`quv yili uchun qabul </p>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className={'col'}>
                                                <a href="#">
                                                    <div className={'col-card card'}><img className={'imgs'} src={natija} alt="#"/>
                                                        <h5>Natija-2021</h5>
                                                        <p>2021-2022 o`quv yili uchun qabul </p>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className={'col '}>
                                                <a href="#">
                                                    <div className={'col-card card'}><img className={'imgs'} src={natija} alt="#"/>
                                                        <h5>Natija-2021</h5>
                                                        <p>2021-2022 o`quv yili uchun qabul </p>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className={'col '}>
                                                <a href="#">
                                                    <div className={'col-card card'}><img className={'imgs'} src={natija} alt="#"/>
                                                        <h5>Natija-2021</h5>
                                                        <p>2021-2022 o`quv yili uchun qabul </p>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={'labels'}>
                                        <label>
                                            <p  className={'p'}>{t("menuEnter.h-1")}</p>
                                        </label>
                                        <div className={'row'}>
                                            <div className={'col'}>
                                                <a href="#">
                                                    <div className={'col-card card'}><img className={'imgs'} src={natija} alt="#"/>
                                                        <h5>Natija-2021</h5>
                                                        <p>2021-2022 o`quv yili uchun qabul </p>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className={'col '}>
                                                <a href="#">
                                                    <div className={'col-card card'}><img className={'imgs'} src={natija} alt="#"/>
                                                        <h5>Natija-2021</h5>
                                                        <p>2021-2022 o`quv yili uchun qabul </p>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className={'col '}>
                                                <a href="#">
                                                    <div className={'col-card card'}><img className={'imgs'} src={natija} alt="#"/>
                                                        <h5>Natija-2021</h5>
                                                        <p>2021-2022 o`quv yili uchun qabul </p>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className={'col '}>
                                                <a href="#">
                                                    <div className={'col-card card'}><img className={'imgs'} src={natija} alt="#"/>
                                                        <h5>Natija-2021</h5>
                                                        <p>2021-2022 o`quv yili uchun qabul </p>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        );
    }
}

export default MenuEnter;