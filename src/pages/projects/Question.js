import React, {Component} from 'react';
import '../../css/Questionstyle.css'
import MenuLinked from "../../component/MenuNavbar";
import {Scrollbars} from "react-custom-scrollbars";
import natija from "../../image/intoImage/69b82645f5d6d45641509a06585f0f62-removebg-preview 1.svg";

class Question extends Component {


    render() {
        const {t,i18n} = this.props;
        return (
            <div>
                <MenuLinked t={t} i18n={i18n}/>
                    <div id={'container'} className={'container'}>
                        <div className="row pt-5">
                            <div className=" menu-cols col offset-2 pt-5">
                                <div className="panel-question card">
                                    <h1>{t("ol.h1")}</h1>
                                    <span className={'panel-menu'}>{t("ol.span-1")}</span>
                                    <ol className={'panel-menu-items'}>
                                        <li className={'panel-text'}>{t("ol.li-1")}</li>
                                        <li className={'panel-text'}>{t("ol.li-2")}</li>
                                        <li className={'panel-text'}>{t("ol.li-3")}</li>
                                        <li className={'panel-text'}>{t("ol.li-4")}</li>
                                    </ol>
                                    <span className={'panel-menu'}>{t("ol.span-2")}</span>
                                    <ol className={'panel-menu-items'}>
                                        <li className={'panel-text'}>{t("ol.li-5")}</li>
                                        <li className={'panel-text'}>{t("ol.li-6")}</li>
                                        <li className={'panel-text'}>{t("ol.li-7")}</li>
                                        <li className={'panel-text'}>{t("ol.li-8")}</li>
                                        <li className={'panel-text'}>{t("ol.li-9")}</li>
                                        <li className={'panel-text'}>{t("ol.li-10")}</li>
                                        <li className={'panel-text'}>{t("ol.li-11")}</li>
                                    </ol>

                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        );

    }
}

export default Question;