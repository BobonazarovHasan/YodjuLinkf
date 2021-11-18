import React, {Component} from 'react';
import img from '../../image/intoImage/Rectangle 17.svg';
import '../../css/intoCss/MenuVisa.css';
import MenuLinked from "../../component/MenuNavbar";
import {Scrollbars} from "react-custom-scrollbars";

class MenuVisa extends Component {


    render() {
        const {t, i18n} = this.props;

        return (
            <div>
                <MenuLinked t={t} i18n={i18n}/>
                <div id={'container'} className={'container'}>
                    <div className="row pt-5">
                        <div className=" menu-cols col offset-2 pt-5">
                            <div className={'menu-visa ml-3 pl-4 mt-2'}>
                                <div className={'float-right'}><p>{t("menuVisa.page")}</p></div>
                                <div className={' pt-4'}>
                                    <hr className={'hrs'}/>
                                    <div className="row">
                                        <div className="col-md-2">
                                            <img src={img} alt="#"/>
                                        </div>
                                        <div className="col-md-1">
                                            <table className={'table'}>
                                                <tr>
                                                    <td>{t("menuVisa.id")}</td>
                                                </tr>
                                                <tr>
                                                    <td>{t("menuVisa.fish")}</td>
                                                </tr>
                                                <tr>
                                                    <td>{t("menuVisa.pass")}</td>
                                                </tr>
                                                <tr>
                                                    <td>{t("menuVisa.date")}</td>
                                                </tr>
                                            </table>
                                        </div>
                                        <div className="col-md-8">
                                            <table className={'table'}>
                                                <tr>
                                                    <td>TOU 18268</td>
                                                </tr>
                                                <tr>
                                                    <td>Afzalbek Sadikov Ilhom o`g`li</td>
                                                </tr>
                                                <tr>
                                                    <td>AA1234567</td>
                                                </tr>
                                                <tr>
                                                    <td>25.09.1998</td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <p className={'mb-1'}>{t("menuVisa.test-1")} <span>YTIT binosi, 3-avgust, soat  10:00</span>
                                            </p>
                                            <p className={'mb-1'}>{t("menuVisa.test-2")} <span>Toshkent shahri, U.Nosir ko`chasi №159 uy, YTIT binosi.</span>
                                            </p>
                                            <p className={'mb-1'}>{t("menuVisa.test-3")} <span>YTIT</span></p>
                                        </div>
                                    </div>
                                    <div className=" row ">
                                        <div className="visa-col col d-flex">
                                            <p className={'mr-3'}>{t("menuVisa.smena")}<span>1</span></p>
                                            <p className={'mr-3'}>{t("menuVisa.guruh")}<span>7</span></p>
                                            <p className={'mr-3'}>{t("menuVisa.guruhRaqam")}<span>123</span></p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col d-flex">
                                            <p className={'mr-3'}>{t("menuVisa.shakl")} <span>Kunduzgi</span></p>
                                            <p className={'mr-3'}>{t("menuVisa.til")} <span>O`zbekcha</span></p>
                                            <p className={'mr-3'}>{t("menuVisa.testT")} <span>Lotin</span></p>
                                        </div>
                                    </div>
                                    <div className="visa-row row">
                                        <div className=" col">
                                            <hr/>
                                            <h4>{t("menuVisa.page-1")}</h4>
                                            <span>Architechture and Urban Design(AUD)</span>
                                        </div>
                                    </div>
                                    <div className="visa-row row">
                                        <div className=" col">
                                            <hr/>
                                            <h4>{t("menuVisa.page-2")}</h4>
                                            <div>
                                                <span>IELTS 8.0</span>
                                            </div>
                                            <div className={'topic'}>
                                                <span>TOPIC 6</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="visa-row row">
                                        <div className=" col">
                                            <hr/>
                                            <h4>{t("menuVisa.page-3")}</h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad
                                                cum cupiditate
                                                delectus eaque eveniet explicabo facilis fugiat illum molestiae odio
                                                officia officiis
                                                provident, quas ratione sapiente soluta vero voluptatibus.Lorem ipsum
                                                dolor sit amet,
                                                consectetur adipisicing elit. Accusamus ad cum cupiditate
                                                delectus eaque eveniet explicabo facilis fugiat illum molestiae odio
                                                officia officiis
                                                provident, quas ratione sapiente soluta vero voluptatibus.
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad
                                                cum cupiditate
                                                delectus eaque eveniet explicabo facilis fugiat illum molestiae odio
                                                officia officiis
                                                provident, quas ratione sapiente soluta vero voluptatibus.
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad
                                                cum cupiditate
                                                delectus eaque eveniet explicabo facilis fugiat illum molestiae odio
                                                officia officiis
                                                provident, quas ratione sapiente soluta vero voluptatibus.
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad
                                                cum cupiditate
                                                delectus eaque eveniet explicabo facilis fugiat illum molestiae odio
                                                officia officiis
                                                provident, quas ratione sapiente soluta vero voluptatibus.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )

    }
}

export default MenuVisa;