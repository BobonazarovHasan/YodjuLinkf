import React, {Component} from 'react';
import col from '../../image/4.-Sign-Up.svg';
import instagram from '../../image/iconfinder_1_Instagram_colored_svg_1_5296765.png';
import youTube from '../../image/iconfinder_1_Youtube_colored_svg_5296521.png';
import faceBook from '../../image/iconfinder_facebook_network_logo_1920524.png';
import telegram from '../../image/iconfinder_social-56_1591869.png';
import vector from '../../image/iconfinder_SocialMedia_Website-Outline_2959741.png';
import '../../css/EnterStyle.css'
import InputMask from 'react-input-mask';
import {BrowserRouter as Switch, Link} from "react-router-dom";
import history from "../../utils/history";
import axios from "axios";
import Admission from "../../component/Admission";
import Navbar from "../../component/Navbar";


class SignIn extends Component {

    constructor(props) {
        super(props);
        this.state={
            err:'',
            signIn:[]
        }
    }


    //
    // signIn=(event)=>{
    //     event.preventDefault();
    //     axios({
    //         url:'http://localhost:8080/api/v1/admin/login',
    //         method:'post',
    //         data: {
    //             username:event.target[0].value,
    //             password:event.target[1].value,
    //         }
    //     })
    // }

    signIn=(event)=>{
        event.preventDefault();
        if (event.target[0].value==='+111(11) 111-11-11' && event.target[1].value==='123'){
          history.push('/admission/')
            window.location.reload();
        }else if (event.target[0].value==='+111(11) 111-11-11' && event.target[1].value==='1234'){

            history.push('/abiturient/')
            window.location.reload();
        }else {
            alert('page not found')
        }
    }

    render() {
        const {t, i18n}=this.props;
        return (
            <div>
                <Navbar t={t} i18n={i18n}/>
                <div className={"container pt-4"}>
                <div className="enter-row row mt-4">
                    <div className="enter-col col-md-6">
                        <span className={'page'}>{t("enter.span")}</span>
                        <div className="enter-input">
                            <form id={'login'} onSubmit={this.signIn}>
                                {/*<span className={'err'}>{this.state.err !==''?this.state.err : ''}</span>*/}
                                <InputMask name={'phone'} type={'text'} className={'form-control'} mask={'+999(99) 999-99-99'} placeholder={t("enter.in-1")}/>
                                <InputMask name={'password'} type={'password'} className={'form-control'} placeholder={t("enter.in-2")}/>
                                <Link to={'/forget'}>
                                    <a href="#" className={'float-right mb-4'}>{t("enter.a")}</a>
                                </Link>
                            </form>
                        </div>
                        <div className="enter-button ">
                                <button form={'login'} value={'Login'}   className={' btn'}>{t("enter.btn-1")}</button>
                            <Link to={'/signUp'}>
                                <button className={' btn'}>{t("enter.btn-2")}</button>
                            </Link>
                        </div>
                        <p>{t("enter.p")}</p>
                    </div>
                    <div className="enter-col col-md-6">
                        <img src={col} className={'float-right'} alt=""/>
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

export default SignIn;