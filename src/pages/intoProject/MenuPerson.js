import React, {Component} from 'react';
import '../../css/intoCss/MenuPerson.css'
import * as FaIcon from 'react-icons/fa';
import img from '../../image/intoImage/Rectangle 17.svg';
import MenuLinked from "../../component/MenuNavbar";
import {Scrollbars} from "react-custom-scrollbars";
class MenuPerson extends Component {

    render() {

        const {t,i18n}=this.props;

        return (
            <div>
                <MenuLinked t={t} i18n={i18n}/>
                    <div id={'container'} className={'container'}>
                        <div className="row pt-5">
                            <div className=" menu-cols col offset-2 pt-5">
                                <div className={'person '}>
                                    <div className="person-row row">
                                        <div className=" person-col col-md-3">
                                            <div className="person-card-1 card">
                                                <img src={img} alt="#"/>
                                                <label>
                                                    Afzalbek Sadikov
                                                </label>
                                                <button className={'btn'}>
                                                    {t("menuPerson.btn")}
                                                </button>
                                            </div>
                                        </div>
                                        <div className="person-col col-md-9">
                                            <div className="person-card-2 card">
                                                <label className={'ml-4'}><FaIcon.FaPassport/><span> {t("menuPerson.page-1")}</span></label>
                                                <div className="person-row row ml-2">
                                                    <div className="person-col-table col-md-3">
                                                        <table className={'table table-sm table-info '}>
                                                            <tbody>
                                                            <tr>
                                                                <td>{t("menuPerson.td-1")}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>{t("menuPerson.td-2")}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>{t("menuPerson.td-3")}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>{t("menuPerson.td-4")}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>{t("menuPerson.td-5")}</td>
                                                            </tr>
                                                            <tr>
                                                            </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                    <div className="person-col-table col">
                                                        <table className={'table table-sm table-hover table-info table-striped'}>
                                                            <tbody>
                                                            <tr>
                                                                <td><span>AA 1234567</span></td>
                                                            </tr>
                                                            <tr>
                                                                <td><span>Sadikov</span></td>
                                                            </tr>
                                                            <tr>
                                                                <td><span>Afzalbek</span></td>
                                                            </tr>
                                                            <tr>
                                                                <td><span>Ilhom o`g`li</span></td>
                                                            </tr>
                                                            <tr>
                                                                <td><span>25.09.1998</span></td>
                                                            </tr>
                                                            <tr>
                                                            </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                            <div style={{marginBottom: 25}} className="person-card-3 card">
                                                <div className="person-row row">
                                                    <div className="person-cols col">
                                                        <label><FaIcon.FaMapMarkerAlt/><span> {t("menuPerson.page-2")}</span></label>
                                                        <p>Mirobod tumani, Buyuk Turon ko`chasi</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="person-card-3 card">
                                                <div className="person-row row">
                                                    <div className="person-cols col">
                                                        <label><FaIcon.FaSchool/><span> {t("menuPerson.page-3")}</span></label>
                                                        <p>2017-yil Samarqand Milliy Hunarmandchilik kasb hunar kolleji</p>
                                                    </div>
                                                </div>
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

export default MenuPerson;