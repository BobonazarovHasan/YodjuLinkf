import React, {Component} from 'react';
import col from '../../image/54-Sign-up.svg';
import vek from '../../image/Vectors.png';
import '../../css/RegisterStyle.css';
// import Inputmask from "react-input-mask";
import InputMask from "react-input-mask";
import {BrowserRouter as Switch, Link} from "react-router-dom";
import Navbar from "../../component/Navbar";
import faceBook from "../../image/iconfinder_facebook_network_logo_1920524.png";
import telegram from "../../image/iconfinder_social-56_1591869.png";
import instagram from "../../image/iconfinder_1_Instagram_colored_svg_1_5296765.png";
import youTube from "../../image/iconfinder_1_Youtube_colored_svg_5296521.png";
import vector from "../../image/iconfinder_SocialMedia_Website-Outline_2959741.png";

class ForgetPassword extends Component {

    render() {
        const {t,i18n}=this.props;
        return (
            <div>
                <Navbar t={t} i18n={i18n}/>
                <div className={"container pt-4"}>
                <div className=" register-row row mt-4">
                    <div  className="register-col mt-5 pt-4 col-md-6">
                        <span>{t("forget.p")}</span>
                        <div className="register-input">
                            <InputMask type={'text'} className={'form-control'} mask={'+999(99) 999-99-99'} placeholder={t("enter.in-1")}/>
                        </div>
                        <div  className="register-button" >
                            <Link  to={'/'}>
                                <button className={'btn'}>{t("forget.btn-1")}</button>
                            </Link>
                            <Link to={'/'}>
                                <button className={'btn'}>{t("forget.btn-2")}</button>
                            </Link>
                        </div>
                    </div>
                    <div className="register-col col-md-6">
                        <img  src={col}  alt={"#"} className={'float-right'}/>
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

export default ForgetPassword;