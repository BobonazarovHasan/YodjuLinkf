import React, {Component} from 'react';
import PhoneInput from "react-phone-input-2";
import {BrowserRouter as Router, NavLink, Route} from "react-router-dom";
import {Link} from 'react-router-dom'
import IMask from 'imask';
import InputMask from 'react-input-mask';
import * as FaIcon from "react-icons/fa/index";
import {useTranslation} from "react-i18next";
import history from "../../utils/history";
import '../../css/docStyle/cardsStyle.css';

import {Tab, TabList, TabPanel, Tabs} from "react-web-tabs";
import * as ImIcons from "react-icons/im";
import * as Icons from "react-icons/fa";
import MenuLinked from "../../component/MenuNavbar";
import {Scrollbars} from "react-custom-scrollbars";
import natija from "../../image/intoImage/69b82645f5d6d45641509a06585f0f62-removebg-preview 1.svg";

// import 'react-web-tabs/dist/react-web-tabs.css';

class Cards extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tags: [
                'Tags',
                'Input'
            ]
        };
    }

    removeTag = (i) => {
        const newTags = [...this.state.tags];
        newTags.splice(i, 1);
        this.setState({tags: newTags});
    }

    defaultButton = (pos) => {

        const defaultBtnOne = document.querySelector("#default-btn-1")
        const defaultBtnTwo = document.querySelector("#default-btn-2")
        const fileName = document.querySelector(".file-name")
        const cancelBtn = document.querySelector("#cancel-btn")
        const wrapper = document.querySelector(".wrapper")
        const customBtn = document.querySelector("#custom-btn")
        const imgOne = document.querySelector("#imgOne");
        const imgTwo = document.querySelector("#imgTwo");
        const regExp = /[0-9a-zA-Z\^\&\'\@\{\}\[\]\,\$\=\!\-\#\(\)\.\%\+\~\_ ]+$/;

        if (pos === true) {
            defaultBtnOne.click();
            defaultBtnOne.addEventListener('change', function () {
                const file = this.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = function () {
                        imgOne.src = reader.result;
                        wrapper.classList.add('active');
                    }
                    reader.readAsDataURL(file);
                }
                if (this.value) {
                    fileName.textContent = this.value.match(regExp);

                }
            })
        } else if (pos === false) {
            defaultBtnTwo.click();
            defaultBtnTwo.addEventListener('change', function () {
                const file = this.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = function () {
                        imgTwo.src = reader.result;
                        wrapper.classList.add('active');
                    }
                    reader.readAsDataURL(file);
                }
                if (this.value) {
                    fileName.textContent = this.value.match(regExp);

                }
            })
        }

    }


    render() {

        const {t, i18n} = this.props;

        return (
            <div>
                <MenuLinked t={t} i18n={i18n}/>
                <div id={'container'} className={'container'}>
                    <div className="row pt-5">
                        <div className=" menu-cols col offset-2 pt-5">
                            <div className={'cards'}>
                                <form id={'allId'}>
                                    <Tabs
                                        defaultTab="one"
                                        onChange={(tabId) => {
                                            console.log(tabId)
                                        }}
                                    >
                                        <div className={' tabs-link '}>
                                            <TabList>
                                                <Tab tabFor="one"><ImIcons.ImProfile/></Tab>
                                                <Tab tabFor="two"><Icons.FaUniversity/></Tab>
                                            </TabList>
                                        </div>
                                        <TabPanel tabId="one">
                                            <div>
                                                <div className="card-name card">
                                                    {t("cardsOne.menuOne")}
                                                </div>
                                                <div className="cards-title card">
                                                    <div>
                                                        <div className="doc-row row">
                                                            <div className="doc-col col-md-4">

                                                                <div className="tap">
                                                                    <label className={'d-flex'}>
                                                                        {t("cardsOne.oneInput-1")}
                                                                        <div style={{color: 'red'}}
                                                                             className={'mx-1'}>*
                                                                        </div>
                                                                    </label>
                                                                    <input className={'form-control'} type="text"
                                                                           placeholder={'Afzal'}
                                                                           required/>
                                                                    <hr/>
                                                                </div>
                                                                <div className="tap">
                                                                    <label>
                                                                        {t("cardsOne.oneInput-2")}
                                                                    </label>
                                                                    <input className={'form-control'} type="text"
                                                                           placeholder={'Ilhom o`g`li'}/>
                                                                    <hr/>
                                                                </div>
                                                                <div className="tap">
                                                                    <label>
                                                                        {t("cardsOne.oneInput-3")}
                                                                    </label>
                                                                    <InputMask className={'form-control'}
                                                                               mask={'99 / 99 / 2099'}
                                                                               placeholder={'12/02/2000'}/>
                                                                    <hr/>
                                                                </div>

                                                            </div>
                                                            <div className="doc-col col-md-4">
                                                                <div className="tap">
                                                                    <label className={'d-flex'}>
                                                                        {t("cardsOne.oneInput-4")}
                                                                        <div style={{color: 'red'}}
                                                                             className={'mx-1'}>*
                                                                        </div>
                                                                    </label>
                                                                    <input className={'form-control'} type="text"
                                                                           placeholder={'Sadikov'}
                                                                           required/>
                                                                    <hr/>
                                                                </div>
                                                                <div className="tap">
                                                                    <label className={'d-flex'}>
                                                                        {t("cardsOne.oneInput-5")}
                                                                        <div style={{color: 'red'}}
                                                                             className={'mx-1'}>*
                                                                        </div>
                                                                    </label>
                                                                    <select className={'select form-control'} required>
                                                                        <option className={'opt'} value="">____</option>
                                                                        <option className={'opt'} value="man">Erkak
                                                                        </option>
                                                                        <option className={'opt'} value="woman">Ayol
                                                                        </option>
                                                                    </select>
                                                                    <hr/>
                                                                </div>
                                                                <div className="tap">
                                                                    <label className={'d-flex'}>
                                                                        {t("cardsOne.oneInput-6")}
                                                                        <div style={{color: 'red'}}
                                                                             className={'mx-1'}>*
                                                                        </div>
                                                                    </label>
                                                                    <select className={'select form-control'} required>
                                                                        <option className={'opt'} value="">Yo`q</option>
                                                                        <option className={'opt'} value="1">1-holat
                                                                        </option>
                                                                        <option className={'opt'} value="2">2-holat
                                                                        </option>
                                                                        <option className={'opt'} value="3">3-holat
                                                                        </option>
                                                                        <option className={'opt'} value="4">4-holat
                                                                        </option>
                                                                    </select>
                                                                    <hr/>
                                                                </div>
                                                            </div>
                                                            <div className="doc-col col-md-4">
                                                                <div className="tap">
                                                                    <div style={{width: 340, marginLeft: -30}}
                                                                         className="image-tap">
                                                                        <div className="cont container">
                                                                            <div className="wrapper">
                                                                                <div className="image">
                                                                                    <img id={'imgOne'} alt={''}/>
                                                                                    {/*<img src=""  alt={''}/>*/}
                                                                                </div>
                                                                                <div className="content">
                                                                                    <div className="icon">
                                                                                        <i><FaIcon.FaCloudUploadAlt/></i>
                                                                                    </div>
                                                                                    <div
                                                                                        className="text"> {t("cardsOne.imgPage")}</div>
                                                                                </div>
                                                                                <div id={'cancel-btn'}><FaIcon.FaTimes/>
                                                                                </div>
                                                                                <div className="file-name">
                                                                                    {t('cardsOne.text-1')} <br/>
                                                                                    {t('cardsOne.text-2')} <br/>
                                                                                    {t('cardsOne.text-3')} <br/>
                                                                                    {t('cardsOne.text-4')}
                                                                                </div>
                                                                            </div>
                                                                            <input id={'default-btn-1'} type="file"
                                                                                   hidden/>
                                                                            <button form={'1'}
                                                                                    onClick={() => this.defaultButton(true)}
                                                                                    id={'custom-btn'}>
                                                                                {t('cardsOne.oneFileBtn')}
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                        <div className="card-name card">
                                                            {t("cardsOne.menuTwo")}
                                                        </div>
                                                        <div className="doc-row row">
                                                            <div className="doc-col col-md-6">
                                                                <div className="tap">
                                                                    <label className={'d-flex'}>
                                                                        {t("cardsOne.opt-1")}
                                                                        <div style={{color: 'red'}}
                                                                             className={'mx-1'}>*
                                                                        </div>
                                                                    </label>
                                                                    <select required className={'select form-control'}>
                                                                        <option className={'opt'} value="">Yo`q</option>
                                                                        <option className={'opt'} value="Ha"> Ha
                                                                        </option>
                                                                    </select>
                                                                    <hr/>
                                                                </div>
                                                                <div className="tap">
                                                                    <label className={'d-flex'}>
                                                                        {t("cardsOne.opt-2")}
                                                                        <div style={{color: 'red'}}
                                                                             className={'mx-1'}>*
                                                                        </div>
                                                                    </label>
                                                                    <select className={'select form-control'} required>
                                                                        <option className={'opt'} value="">Yo`q</option>
                                                                        <option className={'opt'} value="man">Ha
                                                                        </option>
                                                                    </select>
                                                                    <hr/>
                                                                </div>
                                                            </div>
                                                            <div className="doc-col col-md-6">
                                                                <div className="tap">
                                                                    <label className={'d-flex'}>
                                                                        {t("cardsOne.opt-3")}
                                                                        <div style={{color: 'red'}}
                                                                             className={'mx-1'}>*
                                                                        </div>
                                                                    </label>
                                                                    <select required className={'select form-control'}>
                                                                        <option className={'opt'} value="">Yo`q</option>
                                                                        <option className={'opt'} value="man">Ha
                                                                        </option>
                                                                    </select>
                                                                    <hr/>
                                                                </div>
                                                                <div className="tap">
                                                                    <label className={'d-flex'}>
                                                                        {t("cardsOne.opt-4")}
                                                                        <div style={{color: 'red'}}
                                                                             className={'mx-1'}>*
                                                                        </div>
                                                                    </label>
                                                                    <input className={'form-control'} type="text"
                                                                           placeholder={'Manzilni kiriting...'}
                                                                           required/>
                                                                    <hr/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="card-name card">
                                                            {t("cardsOne.menuThree")}
                                                        </div>
                                                        <div className="doc-row row">
                                                            <div className="doc-col col">
                                                                <div className="tap">
                                                                    <label className={'d-flex'}>
                                                                        {t("cardsOne.threeInput-1")}
                                                                        <div style={{color: 'red'}}
                                                                             className={'mx-1'}>*
                                                                        </div>
                                                                    </label>
                                                                    <select className={'select form-control'} required>
                                                                        <option className={'opt'} value="">Yo`q</option>
                                                                        <option className={'opt'} value="man">Ha
                                                                        </option>
                                                                    </select>
                                                                    <hr/>
                                                                </div>
                                                                <div className="tap">
                                                                    <label className={'d-flex'}>
                                                                        {t("cardsOne.threeInput-2")}
                                                                        <div style={{color: 'red'}}
                                                                             className={'mx-1'}>*
                                                                        </div>
                                                                    </label>
                                                                    <input className={'form-control'} type="text"
                                                                           placeholder={'Kiriting'}
                                                                           required/>
                                                                    <hr/>
                                                                </div>
                                                                <div className="tap">
                                                                    <label className={'d-flex'}>
                                                                        {t("cardsOne.threeInput-3")}
                                                                        <div style={{color: 'red'}}
                                                                             className={'mx-1'}>*
                                                                        </div>
                                                                    </label>
                                                                    <InputMask className={'form-control'}
                                                                               mask={'aa-9999999'}
                                                                               placeholder={'AA-1234567'} required/>
                                                                    <hr/>
                                                                </div>
                                                            </div>
                                                            <div className="doc-col col">
                                                                <div className="tap">
                                                                    <div className="image-tap">
                                                                        <div className="cont container">
                                                                            <div className="wrapper">
                                                                                <div className="image">
                                                                                    <img id={'imgTwo'} alt={''}/>
                                                                                    {/*<img src=""  alt={''}/>*/}
                                                                                </div>
                                                                                <div className="content">
                                                                                    <div className="icon">
                                                                                        <i><FaIcon.FaCloudUploadAlt/></i>
                                                                                    </div>
                                                                                    <div
                                                                                        className="text">{t("cardsOne.imgPage")}</div>
                                                                                </div>
                                                                                <div id={'cancel-btn'}><FaIcon.FaTimes/>
                                                                                </div>
                                                                                <div className="file-name">
                                                                                    {t('cardsOne.text-1')} <br/>
                                                                                    {t('cardsOne.text-2')} <br/>
                                                                                    {t('cardsOne.text-3')} <br/>
                                                                                    {t('cardsOne.text-4')}
                                                                                </div>
                                                                            </div>
                                                                            <input id={'default-btn-2'} type="file"
                                                                                   hidden/>
                                                                            <button form={'1'}
                                                                                    onClick={() => this.defaultButton(false)}
                                                                                    id={'custom-btn'}>
                                                                                {t("cardsOne.oneFileBtn")}
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="card-name card">
                                                            {t("cardsOne.menuFour")}
                                                        </div>
                                                        <div className="doc-row row">
                                                            <div className="doc-col col-md-6">
                                                                <div className="tap">
                                                                    <label className={'d-flex'}>
                                                                        {t('cardsOne.fourInput-1')}
                                                                        <div style={{color: 'red'}}
                                                                             className={'mx-1'}>*
                                                                        </div>
                                                                    </label>
                                                                    <InputMask className={'form-control'}
                                                                               mask={'+999(99) 999-99-99'}
                                                                               placeholder={'+998(94) 123-45-67'}
                                                                               required/>
                                                                    <hr/>
                                                                </div>
                                                                <div className="tap">
                                                                    <label>
                                                                        {t('cardsOne.fourInput-2')}
                                                                    </label>
                                                                    <InputMask className={'form-control'}
                                                                               mask={'+999(99) 999-99-99'}
                                                                               placeholder={'+998(94) 123-45-67'}/>
                                                                    <hr/>
                                                                </div>
                                                                <div className="tap">
                                                                    <label>
                                                                        {t('cardsOne.fourInput-3')}
                                                                    </label>
                                                                    <input className={'form-control'} type="email"
                                                                           placeholder={'username@gmail.com'}/>
                                                                    <hr/>
                                                                </div>
                                                            </div>
                                                            <div className="doc-col col-md-6">
                                                                <div className="tap">
                                                                    <label>
                                                                        {t('cardsOne.fourInput-4')}
                                                                    </label>
                                                                    <InputMask className={'form-control'}
                                                                               mask={'+999(99) 999-99-99'}
                                                                               placeholder={'+998(94) 123-45-67'}/>
                                                                    <hr/>
                                                                </div>
                                                                <div className="tap">
                                                                    <label>
                                                                        {t('cardsOne.fourInput-5')}
                                                                    </label>
                                                                    <InputMask className={'form-control'}
                                                                               mask={'+999(99) 999-99-99'}
                                                                               placeholder={'+998(94) 123-45-67'}/>
                                                                    <hr/>
                                                                </div>
                                                                <div className="tap">
                                                                    <label>
                                                                        {t('cardsOne.fourInput-6')}
                                                                    </label>
                                                                    <input className={'form-control'} type="email"
                                                                           placeholder={'@theafzalbeksadikov'}/>
                                                                    <hr/>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </TabPanel>
                                        <TabPanel tabId="two">
                                            <div>
                                                <div className="card-name card">
                                                    {t('cardsTwo.menuOne')}
                                                </div>
                                                <div className="cards-title card">

                                                    <div className="doc-row row">
                                                        <div className="doc-col col">
                                                            <div className="tap">
                                                                <label className={'d-flex'}>
                                                                    {t('cardsTwo.oneInput-1')}
                                                                    <div style={{color: 'red'}} className={'mx-1'}>*
                                                                    </div>
                                                                </label>
                                                                <input className={'form-control'} type="text"
                                                                       placeholder={'Toshkent shahridagi 110-maktab'}
                                                                       required/>
                                                                <hr/>
                                                            </div>
                                                            <div className="tap">
                                                                <label className={'d-flex'}>
                                                                    {t('cardsTwo.oneInput-2')}
                                                                    <div style={{color: 'red'}} className={'mx-1'}>*
                                                                    </div>
                                                                </label>
                                                                <input className={'form-control'} type="text"
                                                                       placeholder={'Toshket, Mirobod tumani'}
                                                                       required/>
                                                                <hr/>
                                                            </div>
                                                            <div className="tap">
                                                                <label className={'d-flex'}>
                                                                    {t('cardsTwo.oneInput-3')}
                                                                    <div style={{color: 'red'}} className={'mx-1'}>*
                                                                    </div>
                                                                </label>
                                                                <input className={'form-control'} type="text"
                                                                       placeholder={'Shahar tuman'}
                                                                       required/>
                                                                <hr/>
                                                            </div>
                                                            <div className="tap">
                                                                <label className={'d-flex'}>
                                                                    {t('cardsTwo.oneInput-4')}
                                                                    <div style={{color: 'red'}} className={'mx-1'}>*
                                                                    </div>
                                                                </label>
                                                                <InputMask className={'form-control'} mask={'9999'}
                                                                           placeholder={'2018'}
                                                                           required/>
                                                                <hr/>
                                                            </div>
                                                        </div>
                                                        <div className="doc-col col">
                                                            <div className="tap" style={{marginLeft: 34}}>
                                                                <label className={'d-flex'}>
                                                                    {t('cardsTwo.oneInput-5')}
                                                                    <div style={{color: 'red'}} className={'mx-1'}>*
                                                                    </div>
                                                                </label>
                                                                <input type={'text'} className={'form-control'}
                                                                       placeholder={'K-1090018'} required/>
                                                                {/*<InputMask className={'form-control'} mask={'a-9999999'} placeholder={'K-1090018'} required/>*/}
                                                                <hr/>
                                                            </div>
                                                            <div className="tap">
                                                                <div className="image-tap">
                                                                    <div className="cont container">
                                                                        <div className="wrapper">
                                                                            <div className="image">
                                                                                <img id={'imgOne'} alt={''}/>
                                                                            </div>
                                                                            <div className="content">
                                                                                <div className="icon">
                                                                                    <i><FaIcon.FaCloudUploadAlt/></i>
                                                                                </div>
                                                                                <div
                                                                                    className="text"> {t("cardsOne.imgPage")}</div>
                                                                            </div>
                                                                            <div id={'cancel-btn'}><FaIcon.FaTimes/>
                                                                            </div>
                                                                            <div className="file-name">
                                                                                {t('cardsOne.text-1')} <br/>
                                                                                {t('cardsOne.text-2')} <br/>
                                                                                {t('cardsOne.text-3')} <br/>
                                                                                {t('cardsOne.text-4')}
                                                                            </div>
                                                                        </div>
                                                                        <input id={'default-btn-1'} type="file" hidden/>
                                                                        <button onClick={() => this.defaultButton(true)}
                                                                                id={'custom-btn'}>
                                                                            {t('cardsOne.oneFileBtn')}
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="card-name card">
                                                        {t('cardsTwo.menuTwo')}
                                                    </div>
                                                    <div className="doc-row row">
                                                        <div className="doc-col col">
                                                            <div className="tap">
                                                                <label className={'d-flex'}>
                                                                    {t('cardsTwo.twoOpt-1')}
                                                                    <div style={{color: 'red'}} className={'mx-1'}>*
                                                                    </div>
                                                                </label>
                                                                <select className={'select form-control'} required>
                                                                    <option className={'opt'} value=""></option>
                                                                    <option className={'opt'} value="man">IELTS</option>
                                                                    <option className={'opt'} value="man">TOPIC</option>
                                                                </select>
                                                                <hr/>
                                                            </div>
                                                            <div className="tap">
                                                                <label className={'d-flex'}>
                                                                    {t('cardsTwo.twoOpt-2')}
                                                                    <div style={{color: 'red'}} className={'mx-1'}>*
                                                                    </div>
                                                                </label>
                                                                <input className={'form-control'} type="number"
                                                                       placeholder={'7.0'}
                                                                       required/>
                                                                <hr/>
                                                            </div>
                                                            <div className="tap">
                                                                <label className={'d-flex'}>
                                                                    {t('cardsTwo.twoOpt-3')}
                                                                    <div style={{color: 'red'}} className={'mx-1'}>*
                                                                    </div>
                                                                </label>
                                                                <input className={'form-control'} type="text"
                                                                       placeholder={'15UZ00761BATQAQ25A'}
                                                                       required/>
                                                                <hr/>
                                                            </div>
                                                        </div>
                                                        <div className="doc-col col">
                                                            <div className="tap">
                                                                <div className="image-tap">
                                                                    <div className="cont container">
                                                                        <div className="wrapper">
                                                                            <div className="image">
                                                                                <img id={'imgTwo'} alt={''}/>
                                                                                {/*<img src=""  alt={''}/>*/}
                                                                            </div>
                                                                            <div className="content">
                                                                                <div className="icon">
                                                                                    <i><FaIcon.FaCloudUploadAlt/></i>
                                                                                </div>
                                                                                <div
                                                                                    className="text"> {t("cardsOne.imgPage")}</div>
                                                                            </div>
                                                                            <div id={'cancel-btn'}><FaIcon.FaTimes/>
                                                                            </div>
                                                                            <div className="file-name">
                                                                                {t('cardsOne.text-1')} <br/>
                                                                                {t('cardsOne.text-2')} <br/>
                                                                                {t('cardsOne.text-3')} <br/>
                                                                                {t('cardsOne.text-4')}
                                                                            </div>
                                                                        </div>
                                                                        <input id={'default-btn-2'} type="file" hidden/>
                                                                        <button
                                                                            onClick={() => this.defaultButton(false)}
                                                                            id={'custom-btn'}>
                                                                            {t('cardsOne.oneFileBtn')}
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="card-name card">
                                                        {t('cardsTwo.menuThree')}
                                                    </div>
                                                    <div className="doc-row row">
                                                        <div className="doc-col col">
                                                            <div className="tap">
                                                                <label className={'d-flex'}>
                                                                    {t('cardsTwo.threeOpt-3')}
                                                                    <div style={{color: 'red'}} className={'mx-1'}>*
                                                                    </div>
                                                                </label>
                                                                <select className={'select form-control'} required>
                                                                    <option className={'opt'} value=""></option>
                                                                    <option className={'opt'} value="man">Kunduzgi
                                                                    </option>
                                                                    <option className={'opt'} value="man">Kechki
                                                                    </option>
                                                                    <option className={'opt'} value="man">Sirtqi
                                                                    </option>
                                                                </select>
                                                                <hr/>
                                                            </div>
                                                            <div className="tap">
                                                                <label className={'d-flex'}>
                                                                    {t('cardsTwo.threeOpt-4')}
                                                                    <div style={{color: 'red'}} className={'mx-1'}>*
                                                                    </div>
                                                                </label>
                                                                <select className={'select form-control'} required>
                                                                    <option className={'opt'} value=""></option>
                                                                    <option className={'opt'} value="man">O`zbek
                                                                    </option>
                                                                    <option className={'opt'} value="man">Rus</option>
                                                                    <option className={'opt'} value="man">Ingliz
                                                                    </option>
                                                                </select>
                                                                <hr/>
                                                            </div>
                                                            <div className="tap">
                                                                <label className={'d-flex'}>
                                                                    {t('cardsTwo.threeOpt-1')}
                                                                    <div style={{color: 'red'}} className={'mx-1'}>*
                                                                    </div>
                                                                </label>
                                                                <select className={'select form-control'} required>
                                                                    <option className={'opt'} value="">Yo`q</option>
                                                                    <option className={'opt'} value="sasa">Yo`q</option>
                                                                    <option className={'opt'} value="ss">Ha</option>
                                                                    <option className={'opt'} value="aa">Ha</option>
                                                                </select>
                                                                <hr/>
                                                            </div>
                                                            <div className="tap">
                                                                <label className={'d-flex'}>
                                                                    {t('cardsTwo.threeOpt-2')}
                                                                    <div style={{color: 'red'}} className={'mx-1'}>*
                                                                    </div>
                                                                </label>
                                                                <select className={'select form-control'} required>
                                                                    <option className={'opt'} value="">Yo`q</option>
                                                                    <option className={'opt'} value="woman">Ha</option>
                                                                    <option className={'opt'} value="woman">Ha</option>
                                                                </select>
                                                                <hr/>
                                                            </div>
                                                            <div className="tap">
                                                                <label className={'w-100'}>
                                                                    <span>{t('cardsTwo.choose')}</span>
                                                                    <span><b> Matematika, </b></span>
                                                                    <span><b> Fizika </b></span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className="doc-col col">
                                                            <div className="tap">
                                                                <label className={'d-flex'}>
                                                                    {t('cardsTwo.threeOpt-5')}
                                                                    <div style={{color: 'red'}} className={'mx-1'}>*
                                                                    </div>
                                                                </label>


                                                                <select className={'select form-control'} required>
                                                                    <option className={'opt'} value=""></option>
                                                                    <option className={'opt'} value="man">Kunduzgi
                                                                    </option>
                                                                    <option className={'opt'} value="man">Kechki
                                                                    </option>
                                                                    <option className={'opt'} value="man">Sirtqi
                                                                    </option>
                                                                </select>
                                                                <select className={'select form-control'} required>
                                                                    <option className={'opt'} value=""></option>
                                                                    <option className={'opt'} value="man">Kunduzgi
                                                                    </option>
                                                                    <option className={'opt'} value="man">Kechki
                                                                    </option>
                                                                    <option className={'opt'} value="man">Sirtqi
                                                                    </option>
                                                                </select>
                                                                <select className={'select form-control'} required>
                                                                    <option className={'opt'} value=""></option>
                                                                    <option className={'opt'} value="man">Kunduzgi
                                                                    </option>
                                                                    <option className={'opt'} value="man">Kechki
                                                                    </option>
                                                                    <option className={'opt'} value="man">Sirtqi
                                                                    </option>
                                                                </select>
                                                                <select className={'select form-control'} required>
                                                                    <option className={'opt'} value=""></option>
                                                                    <option className={'opt'} value="man">Kunduzgi
                                                                    </option>
                                                                    <option className={'opt'} value="man">Kechki
                                                                    </option>
                                                                    <option className={'opt'} value="man">Sirtqi
                                                                    </option>
                                                                </select>
                                                                <select className={'select form-control'} required>
                                                                    <option className={'opt'} value=""></option>
                                                                    <option className={'opt'} value="man">Kunduzgi
                                                                    </option>
                                                                    <option className={'opt'} value="man">Kechki
                                                                    </option>
                                                                    <option className={'opt'} value="man">Sirtqi
                                                                    </option>
                                                                </select>
                                                                <select className={'select form-control'} required>
                                                                    <option className={'opt'} value=""></option>
                                                                    <option className={'opt'} value="man">Kunduzgi
                                                                    </option>
                                                                    <option className={'opt'} value="man">Kechki
                                                                    </option>
                                                                    <option className={'opt'} value="man">Sirtqi
                                                                    </option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </TabPanel>
                                    </Tabs>
                                </form>
                                <div className="doc-btn text-center">

                                    <button form={'allId'} className={'btn '}>{t('cardsTwo.btn-2')}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cards;