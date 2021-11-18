import React, {Component} from 'react';
import '../../css/Appellation.css';
import img from '../../image/54-Sign-up.svg';
import {Link} from "react-router-dom";
import MenuLinked from "../../component/MenuNavbar";
import {Scrollbars} from "react-custom-scrollbars";
import natija from "../../image/intoImage/69b82645f5d6d45641509a06585f0f62-removebg-preview 1.svg";

class MenuAppellation extends Component {

    render() {
        const {t, i18n} = this.props;
        return (
            <div>
                <MenuLinked t={t} i18n={i18n}/>
                    <div id={'container'} className={'container'}>
                        <div className="row pt-5">
                            <div className=" menu-cols col offset-2 pt-5">
                                <div className={'appellation my-4'}>
                                    <div className="row">
                                        <div className="col-md-7 py-5">
                                            <p>{t("application.p")}</p>
                                            <div className={'row'}>
                                                <button className={'btn'}>{t("notFount.btn")}</button>
                                                <button className={'btn'}>{t("register.btn")}</button>
                                            </div>

                                        </div>
                                        <div className="col-md-5">
                                            <img style={{width: 380, height: 380, marginTop: -10}} src={img} alt="#"/>
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

export default MenuAppellation;