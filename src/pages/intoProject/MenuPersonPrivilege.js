import React, {Component} from 'react';
import natija from "../../image/intoImage/69b82645f5d6d45641509a06585f0f62-removebg-preview 1.svg";
import '../../css/intoCss/MenuPersonPrivilege.css';
import {Link} from "react-router-dom";
import MenuLinked from "../../component/MenuNavbar";
import {Scrollbars} from "react-custom-scrollbars";
class MenuPersonPrivilege extends Component {

    render() {

        const {t,i18n}=this.props;

        return (
            <div>
                <MenuLinked t={t} i18n={i18n}/>
                    <div id={'container'} className={'container'}>
                        <div className="row pt-5">
                            <div className=" menu-cols col offset-2 pt-5">
                                <div className={'personPri ml-3'}>
                                    <div >
                                        <label>
                                            <p className={'personPri-label'}>{t("menuPr.h")}</p>
                                        </label>
                                        <div className=" personPri-row row">
                                            <div className="personPri-col col">
                                                <Link to="#">
                                                    <div className="card">
                                                        <h6>{t("menuPr.card-1")}</h6>
                                                        <div className={'personPri-submit'}>
                                                            <hr/>
                                                            <tr>
                                                                <a className={'mr-4'} href="#">{t("menuPr.me")}</a>
                                                                <a className={'ml-4'} href="#"><b>{t("menuPr.q")}</b></a>
                                                            </tr>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="personPri-col col">
                                                <Link to="#">
                                                    <div className="card">
                                                        <h6>{t("menuPr.card-2")}</h6>
                                                        <div className={'personPri-submit'}>
                                                            <hr/>
                                                            <tr>
                                                                <a className={'mr-4'} href="#">{t("menuPr.me")}</a>
                                                                <a className={'ml-4'} href="#"><b>{t("menuPr.q")}</b></a>
                                                            </tr>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="personPri-col col">
                                                <Link to="#">
                                                    <div className="card">
                                                        <h6>{t("menuPr.card-3")}</h6>
                                                        <div className={'personPri-submit'}>
                                                            <hr/>
                                                            <tr>
                                                                <a className={'mr-4'} href="#">{t("menuPr.me")}</a>
                                                                <a className={'ml-4'} href="#"><b>{t("menuPr.q")}</b></a>
                                                            </tr>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="personPri-col col">
                                                <Link to="#">
                                                    <div className="card">
                                                        <h6>{t("menuPr.card-4")}</h6>
                                                        <div className={'personPri-submit'}>
                                                            <hr/>
                                                            <tr>
                                                                <a className={'mr-4'} href="#">{t("menuPr.me")}</a>
                                                                <a className={'ml-4'} href="#"><b>{t("menuPr.q")}</b></a>
                                                            </tr>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className=" personPri-row row">
                                            <div className="personPri-col col">
                                                <Link to="#">
                                                    <div className="card">
                                                        <h6>{t("menuPr.card-5")}</h6>
                                                        <div className={'personPri-submit'}>
                                                            <hr/>
                                                            <tr>
                                                                <a className={'mr-4'} href="#">{t("menuPr.me")}</a>
                                                                <a className={'ml-4'} href="#"><b>{t("menuPr.q")}</b></a>
                                                            </tr>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="personPri-col col">
                                                <Link to="#">
                                                    <div className="card">
                                                        <h6>{t("menuPr.card-6")}</h6>
                                                        <div className={'personPri-submit'}>
                                                            <hr/>
                                                            <tr>
                                                                <a className={'mr-4'} href="#">{t("menuPr.me")}</a>
                                                                <a className={'ml-4'} href="#"><b>{t("menuPr.q")}</b></a>
                                                            </tr>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="personPri-col col">
                                                <Link to="#">
                                                    <div className="card">
                                                        <h6>{t("menuPr.card-7")}</h6>
                                                        <div className={'personPri-submit'}>
                                                            <hr/>
                                                            <tr>
                                                                <a className={'mr-4'} href="#">{t("menuPr.me")}</a>
                                                                <a className={'ml-4'} href="#"><b>{t("menuPr.q")}</b></a>
                                                            </tr>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="personPri-col col">
                                                <Link to="#">
                                                    <div className="card">
                                                        <h6>{t("menuPr.card-8")}</h6>
                                                        <div className={'personPri-submit'}>
                                                            <hr/>
                                                            <tr>
                                                                <a className={'mr-4'} href="#">{t("menuPr.me")}</a>
                                                                <a className={'ml-4'} href="#"><b>{t("menuPr.q")}</b></a>
                                                            </tr>
                                                        </div>
                                                    </div>
                                                </Link>
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

export default MenuPersonPrivilege;