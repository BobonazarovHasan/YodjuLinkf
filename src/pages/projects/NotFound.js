import React, {Component} from 'react';
import img from '../../image/24.-404-Error.svg';
import {BrowserRouter as Switch, Link} from "react-router-dom";
import '../../css/NotFound.css';
import Navbar from "../../component/Navbar";
import faceBook from "../../image/iconfinder_facebook_network_logo_1920524.png";
import telegram from "../../image/iconfinder_social-56_1591869.png";
import instagram from "../../image/iconfinder_1_Instagram_colored_svg_1_5296765.png";
import youTube from "../../image/iconfinder_1_Youtube_colored_svg_5296521.png";
import vector from "../../image/iconfinder_SocialMedia_Website-Outline_2959741.png";

class NotFound extends Component {
    render() {
        const {t, i18n} = this.props;
        return (
            <div>
                <Navbar t={t} i18n={i18n}/>
                <div className={"container pt-5"}>
                <div className={'NotFound my-4'}>
                    <div className="row">
                        <div className="col-md-7 py-5 ">
                            <p>{t("notFount.p")}</p>
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
            </div>
        );
    }
}

export default NotFound;