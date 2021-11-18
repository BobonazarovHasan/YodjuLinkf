import React, {Component} from 'react';
// import PhoneInput from "react-phone-input-2";
// import IMask from 'imask';
import InputMask from 'react-input-mask';
// import * as FaIcon from "react-icons/fa/index";
import * as Icons from "react-icons/fa";
import * as ImIcons from "react-icons/im";
import '../../css/admissionStyle/AdminCards.css';
import {Tabs, Tab, TabPanel, TabList} from 'react-web-tabs';
import {Link} from "react-router-dom";
import {PopoverBody, PopoverHeader, UncontrolledPopover} from "reactstrap";
import {useTranslation} from "react-i18next";
import AdminNavbar from "../../component/AdminNavbar";
import {Scrollbars} from "react-custom-scrollbars";


class AdminCards extends Component {


    render() {

        const {t, i18n} = this.props;

        return (
            <div>
                <AdminNavbar t={t} i18n={i18n}/>

                    <div className={'admissions container pt-4'}>
                        <div className="row pt-5">
                            <div className=" admin-cols col offset-2">
                                <div className={'admission-cards'}>
                                    <div className="card-name card ">

                                        <span>{t("admin.page")} <b>Qabul qilingan</b></span>
                                    </div>
                                    <div className="cards-title card">
                                        <span className={'admin-page'}>{t("admin.page-1")}</span>
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
                                                    <Link className={'rwt__tab'}
                                                          to={'/admission/adminCards/editCards/'}><Icons.FaUserEdit/></Link>
                                                    <button className={'rwt__tab'}><Icons.FaRegFilePdf/></button>
                                                </TabList>
                                            </div>
                                            <TabPanel tabId={"one"}>
                                                <div>
                                                    <div className="doc-row row">
                                                        <div className="doc-col col-md-4">

                                                            <div className="tap">
                                                                <label className={'d-flex'}>
                                                                    {t("cardsOne.oneInput-1")}
                                                                    <div style={{color: 'red'}} className={'mx-1'}>*
                                                                    </div>
                                                                </label>

                                                                <input disabled={true} id="name"
                                                                       className={'form-control'} type="text"
                                                                       placeholder={'Afzal'}/>

                                                                <UncontrolledPopover className={'message'} style={{
                                                                    width: 250,
                                                                    textAlign: 'center'
                                                                }} trigger="legacy" placement="bottom" target="name">
                                                                    <PopoverHeader>Message:</PopoverHeader>
                                                                    <PopoverBody>
                                                    <textarea style={{height: 140, width: '100%'}} cols="30" rows="10">
                                                    </textarea>
                                                                    </PopoverBody>
                                                                </UncontrolledPopover>
                                                                <hr/>
                                                            </div>
                                                            <div className="tap">
                                                                <label>
                                                                    {t("cardsOne.oneInput-2")}
                                                                </label>
                                                                <input disabled={true} id="fathersName"
                                                                       className={'form-control'} type="text"
                                                                       placeholder={'Ilhom o`g`li'}/>

                                                                <UncontrolledPopover className={'message'} style={{
                                                                    width: 250,
                                                                    textAlign: 'center'
                                                                }} trigger="legacy" placement="bottom"
                                                                                     target="fathersName">
                                                                    <PopoverHeader>Message:</PopoverHeader>
                                                                    <PopoverBody>
                                                    <textarea style={{height: 140, width: '100%'}} cols="30" rows="10">
                                                    </textarea>
                                                                    </PopoverBody>
                                                                </UncontrolledPopover>
                                                                <hr/>
                                                            </div>
                                                            <div className="tap">
                                                                <label>
                                                                    {t("cardsOne.oneInput-3")}
                                                                </label>
                                                                <InputMask disabled={true} id="date"
                                                                           className={'form-control'}
                                                                           mask={'99 / 99 / 2099'}
                                                                           placeholder={'12/02/2000'}/>

                                                                <UncontrolledPopover className={'message'} style={{
                                                                    width: 250,
                                                                    textAlign: 'center'
                                                                }} trigger="legacy" placement="bottom" target="date">
                                                                    <PopoverHeader>Message:</PopoverHeader>
                                                                    <PopoverBody>
                                                    <textarea style={{height: 140, width: '100%'}} cols="30" rows="10">
                                                    </textarea>
                                                                    </PopoverBody>
                                                                </UncontrolledPopover>
                                                                <hr/>
                                                            </div>

                                                        </div>
                                                        <div className="doc-col col-md-4">
                                                            <div className="tap">
                                                                <label className={'d-flex'}>
                                                                    {t("cardsOne.oneInput-4")}
                                                                    <div style={{color: 'red'}} className={'mx-1'}>*
                                                                    </div>
                                                                </label>
                                                                <input disabled={true} id={'sureName'}
                                                                       className={'form-control'} type="text"
                                                                       placeholder={'Sadikov'}
                                                                       required/>

                                                                <UncontrolledPopover className={'message'} style={{
                                                                    width: 250,
                                                                    textAlign: 'center'
                                                                }} trigger="legacy" placement="bottom"
                                                                                     target="sureName">
                                                                    <PopoverHeader>Message:</PopoverHeader>
                                                                    <PopoverBody>
                                                    <textarea style={{height: 140, width: '100%'}} cols="30" rows="10">
                                                    </textarea>
                                                                    </PopoverBody>
                                                                </UncontrolledPopover>
                                                                <hr/>
                                                            </div>
                                                            <div className="tap">
                                                                <label className={'d-flex'}>
                                                                    {t("cardsOne.oneInput-5")}
                                                                    <div style={{color: 'red'}} className={'mx-1'}>*
                                                                    </div>
                                                                </label>
                                                                <select disabled={true} id={'pol'}
                                                                        className={'select form-control'}>
                                                                    <option className={'opt'} value="">____</option>
                                                                    <option className={'opt'} value="man">Erkak</option>
                                                                    <option className={'opt'} value="woman">Ayol
                                                                    </option>
                                                                </select>

                                                                <UncontrolledPopover className={'message'} style={{
                                                                    width: 250,
                                                                    textAlign: 'center'
                                                                }} trigger="legacy" placement="bottom" target="pol">
                                                                    <PopoverHeader>Message:</PopoverHeader>
                                                                    <PopoverBody>
                                                    <textarea style={{height: 140, width: '100%'}} cols="30" rows="10">
                                                    </textarea>
                                                                    </PopoverBody>
                                                                </UncontrolledPopover>
                                                                <hr/>
                                                            </div>
                                                            <div className="tap">
                                                                <label className={'d-flex'}>
                                                                    {t("cardsOne.oneInput-6")}
                                                                    <div style={{color: 'red'}} className={'mx-1'}>*
                                                                    </div>
                                                                </label>
                                                                <select disabled={true} id={'sex'}
                                                                        className={'select form-control'}>
                                                                    <option className={'opt'} value="">Yo`q</option>
                                                                    <option className={'opt'} value="1">1-holat</option>
                                                                    <option className={'opt'} value="2">2-holat</option>
                                                                    <option className={'opt'} value="3">3-holat</option>
                                                                    <option className={'opt'} value="4">4-holat</option>
                                                                </select>

                                                                <UncontrolledPopover className={'message'} style={{
                                                                    width: 250,
                                                                    textAlign: 'center'
                                                                }} trigger="legacy" placement="bottom" target="sex">
                                                                    <PopoverHeader>Message:</PopoverHeader>
                                                                    <PopoverBody>
                                                    <textarea style={{height: 140, width: '100%'}} cols="30" rows="10">
                                                    </textarea>
                                                                    </PopoverBody>
                                                                </UncontrolledPopover>
                                                                <hr/>
                                                            </div>
                                                        </div>
                                                        <div className="doc-col col-md-4">
                                                            <div className="tap">
                                                                <label className={'d-flex'} id={'image-1'}>
                                                                    {t("cardsOne.oneInput-6")}
                                                                    <div style={{color: 'red'}} className={'mx-1'}>*
                                                                    </div>
                                                                </label>

                                                                <UncontrolledPopover className={'message'} style={{
                                                                    width: 250,
                                                                    textAlign: 'center'
                                                                }} trigger="legacy" placement="bottom" target="image-1">
                                                                    <PopoverHeader>Message:</PopoverHeader>
                                                                    <PopoverBody>
                                                    <textarea style={{height: 140, width: '100%'}} cols="30" rows="10">
                                                    </textarea>
                                                                    </PopoverBody>
                                                                </UncontrolledPopover>
                                                                <div style={{width: 340, marginLeft: -30}}
                                                                     className="image-tap">
                                                                    <div className="cont container">
                                                                        <div className="wrapper">
                                                                            <div className="image">
                                                                                <img id={'imgOne'} alt={''}/>
                                                                            </div>
                                                                            <div className="content">
                                                                                <div
                                                                                    className="text"> {t("cardsOne.imgPage")}</div>
                                                                            </div>
                                                                        </div>
                                                                        <input disabled={true} id={'default-btn-1'}
                                                                               type="file" hidden/>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>

                                                    <div className="doc-row row">
                                                        <div className="doc-col col-md-6">
                                                            <div className="tap">
                                                                <label className={'d-flex'}>
                                                                    {t("cardsOne.opt-1")}
                                                                    <div style={{color: 'red'}} className={'mx-1'}>*
                                                                    </div>
                                                                </label>
                                                                <select disabled={true} id={'country'}
                                                                        className={'select form-control'}>
                                                                    <option className={'opt'} value="">Yo`q</option>
                                                                    <option className={'opt'} value="Ha"> Ha</option>
                                                                </select>

                                                                <UncontrolledPopover className={'message'} style={{
                                                                    width: 250,
                                                                    textAlign: 'center'
                                                                }} trigger="legacy" placement="bottom" target="country">
                                                                    <PopoverHeader>Message:</PopoverHeader>
                                                                    <PopoverBody>
                                                    <textarea style={{height: 140, width: '100%'}} cols="30" rows="10">
                                                    </textarea>
                                                                    </PopoverBody>
                                                                </UncontrolledPopover>
                                                                <hr/>
                                                            </div>
                                                            <div className="tap">
                                                                <label className={'d-flex'}>
                                                                    {t("cardsOne.opt-2")}
                                                                    <div style={{color: 'red'}} className={'mx-1'}>*
                                                                    </div>
                                                                </label>
                                                                <select disabled={true} id={'town'}
                                                                        className={'select form-control'} required>
                                                                    <option className={'opt'} value="">Yo`q</option>
                                                                    <option className={'opt'} value="man">Ha</option>
                                                                </select>

                                                                <UncontrolledPopover className={'message'} style={{
                                                                    width: 250,
                                                                    textAlign: 'center'
                                                                }} trigger="legacy" placement="bottom" target="town">
                                                                    <PopoverHeader>Message:</PopoverHeader>
                                                                    <PopoverBody>
                                                    <textarea style={{height: 140, width: '100%'}} cols="30" rows="10">
                                                    </textarea>
                                                                    </PopoverBody>
                                                                </UncontrolledPopover>
                                                                <hr/>
                                                            </div>
                                                        </div>
                                                        <div className="doc-col col-md-6">
                                                            <div className="tap">
                                                                <label className={'d-flex'}>
                                                                    {t("cardsOne.opt-3")}
                                                                    <div style={{color: 'red'}} className={'mx-1'}>*
                                                                    </div>
                                                                </label>
                                                                <select disabled={true} id={'region'} required
                                                                        className={'select form-control'}>
                                                                    <option className={'opt'} value="">Yo`q</option>
                                                                    <option className={'opt'} value="man">Ha</option>
                                                                </select>

                                                                <UncontrolledPopover className={'message'} style={{
                                                                    width: 250,
                                                                    textAlign: 'center'
                                                                }} trigger="legacy" placement="bottom" target="region">
                                                                    <PopoverHeader>Message:</PopoverHeader>
                                                                    <PopoverBody>
                                                    <textarea style={{height: 140, width: '100%'}} cols="30" rows="10">
                                                    </textarea>
                                                                    </PopoverBody>
                                                                </UncontrolledPopover>
                                                                <hr/>
                                                            </div>
                                                            <div className="tap">
                                                                <label className={'d-flex'}>
                                                                    {t("cardsOne.opt-4")}
                                                                    <div style={{color: 'red'}} className={'mx-1'}>*
                                                                    </div>
                                                                </label>
                                                                <input disabled={true} id={'address'}
                                                                       className={'form-control'} type="text"
                                                                       placeholder={'Manzilni kiriting...'}
                                                                       required/>

                                                                <UncontrolledPopover className={'message'} style={{
                                                                    width: 250,
                                                                    textAlign: 'center'
                                                                }} trigger="legacy" placement="bottom" target="address">
                                                                    <PopoverHeader>Message:</PopoverHeader>
                                                                    <PopoverBody>
                                                    <textarea style={{height: 140, width: '100%'}} cols="30" rows="10">
                                                    </textarea>
                                                                    </PopoverBody>
                                                                </UncontrolledPopover>
                                                                <hr/>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="doc-row row">
                                                        <div className="doc-col col">
                                                            <div className="tap">
                                                                <label className={'d-flex'}>
                                                                    {t("cardsOne.threeInput-1")}
                                                                    <div style={{color: 'red'}} className={'mx-1'}>*
                                                                    </div>
                                                                </label>
                                                                <select disabled={true} id={'person'}
                                                                        className={'select form-control'} required>
                                                                    <option className={'opt'} value="">Yo`q</option>
                                                                    <option className={'opt'} value="man">Ha</option>
                                                                </select>

                                                                <UncontrolledPopover className={'message'} style={{
                                                                    width: 250,
                                                                    textAlign: 'center'
                                                                }} trigger="legacy" placement="bottom" target="person">
                                                                    <PopoverHeader>Message:</PopoverHeader>
                                                                    <PopoverBody>
                                                    <textarea style={{height: 140, width: '100%'}} cols="30" rows="10">
                                                    </textarea>
                                                                    </PopoverBody>
                                                                </UncontrolledPopover>
                                                                <hr/>
                                                            </div>
                                                            <div className="tap">
                                                                <label className={'d-flex'}>
                                                                    {t("cardsOne.threeInput-2")}
                                                                    <div style={{color: 'red'}} className={'mx-1'}>*
                                                                    </div>
                                                                </label>
                                                                <input disabled={true} id={'lang'}
                                                                       className={'form-control'} type="text"
                                                                       placeholder={'Kiriting'}
                                                                       required/>

                                                                <UncontrolledPopover className={'message'} style={{
                                                                    width: 250,
                                                                    textAlign: 'center'
                                                                }} trigger="legacy" placement="bottom" target="lang">
                                                                    <PopoverHeader>Message:</PopoverHeader>
                                                                    <PopoverBody>
                                                    <textarea style={{height: 140, width: '100%'}} cols="30" rows="10">
                                                    </textarea>
                                                                    </PopoverBody>
                                                                </UncontrolledPopover>
                                                                <hr/>
                                                            </div>
                                                            <div className="tap">
                                                                <label className={'d-flex'}>
                                                                    {t("cardsOne.threeInput-3")}
                                                                    <div style={{color: 'red'}} className={'mx-1'}>*
                                                                    </div>
                                                                </label>
                                                                <InputMask disabled={true} id={'passport'}
                                                                           className={'form-control'}
                                                                           mask={'aa-9999999'}
                                                                           placeholder={'AA-1234567'}
                                                                           required/>

                                                                <UncontrolledPopover className={'message'} style={{
                                                                    width: 250,
                                                                    textAlign: 'center'
                                                                }} trigger="legacy" placement="bottom"
                                                                                     target="passport">
                                                                    <PopoverHeader>Message:</PopoverHeader>
                                                                    <PopoverBody>
                                                    <textarea style={{height: 140, width: '100%'}} cols="30" rows="10">
                                                    </textarea>
                                                                    </PopoverBody>
                                                                </UncontrolledPopover>
                                                                <hr/>
                                                            </div>
                                                        </div>
                                                        <div className="doc-col col">
                                                            <div className="tap">
                                                                <label id={'img-2'} className={'d-flex'}>
                                                                    {t("cardsOne.oneInput-6")}
                                                                    <div style={{color: 'red'}} id={'img-2'}
                                                                         className={'mx-1'}>*
                                                                    </div>
                                                                </label>
                                                                <UncontrolledPopover className={'message'} style={{
                                                                    width: 250,
                                                                    textAlign: 'center'
                                                                }} trigger="legacy" placement="bottom" target="img-2">
                                                                    <PopoverHeader>Message:</PopoverHeader>
                                                                    <PopoverBody>
                                                    <textarea style={{height: 140, width: '100%'}} cols="30" rows="10">
                                                    </textarea>
                                                                    </PopoverBody>
                                                                </UncontrolledPopover>

                                                                <div style={{width: 340, marginLeft: -30}}
                                                                     className="image-tap">
                                                                    <div className="cont container">
                                                                        <div className="wrapper">
                                                                            <div className="image">
                                                                                <img id={'imgOne'} alt={''}/>
                                                                            </div>
                                                                            <div className="content">
                                                                                <div
                                                                                    className="text"> {t("cardsOne.imgPage")}</div>
                                                                            </div>
                                                                        </div>
                                                                        <input id={'default-btn-1'} type="file" hidden/>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="doc-row row">
                                                        <div className="doc-col col-md-6">
                                                            <div className="tap">
                                                                <label className={'d-flex'}>
                                                                    {t('cardsOne.fourInput-1')}
                                                                    <div style={{color: 'red'}} className={'mx-1'}>*
                                                                    </div>
                                                                </label>
                                                                <InputMask disabled={true} id={'phone-1'}
                                                                           className={'form-control'}
                                                                           mask={'+999(99) 999-99-99'}
                                                                           placeholder={'+998(94) 123-45-67'} required/>

                                                                <UncontrolledPopover className={'message'} style={{
                                                                    width: 250,
                                                                    textAlign: 'center'
                                                                }} trigger="legacy" placement="bottom" target="phone-1">
                                                                    <PopoverHeader>Message:</PopoverHeader>
                                                                    <PopoverBody>
                                                    <textarea style={{height: 140, width: '100%'}} cols="30" rows="10">
                                                    </textarea>
                                                                    </PopoverBody>
                                                                </UncontrolledPopover>
                                                                <hr/>
                                                            </div>
                                                            <div className="tap">
                                                                <label>
                                                                    {t('cardsOne.fourInput-2')}
                                                                </label>
                                                                <InputMask disabled={true} id={'phone-2'}
                                                                           className={'form-control'}
                                                                           mask={'+999(99) 999-99-99'}
                                                                           placeholder={'+998(94) 123-45-67'} required/>

                                                                <UncontrolledPopover className={'message'} style={{
                                                                    width: 250,
                                                                    textAlign: 'center'
                                                                }} trigger="legacy" placement="bottom" target="phone-2">
                                                                    <PopoverHeader>Message:</PopoverHeader>
                                                                    <PopoverBody>
                                                    <textarea style={{height: 140, width: '100%'}} cols="30" rows="10">
                                                    </textarea>
                                                                    </PopoverBody>
                                                                </UncontrolledPopover>

                                                                <hr/>
                                                            </div>
                                                            <div className="tap">
                                                                <label>
                                                                    {t('cardsOne.fourInput-3')}
                                                                </label>

                                                                <InputMask disabled={true} id={'phone-3'}
                                                                           className={'form-control'}
                                                                           mask={'+999(99) 999-99-99'}
                                                                           placeholder={'+998(94) 123-45-67'} required/>

                                                                <UncontrolledPopover className={'message'} style={{
                                                                    width: 250,
                                                                    textAlign: 'center'
                                                                }} trigger="legacy" placement="bottom" target="phone-3">
                                                                    <PopoverHeader>Message:</PopoverHeader>
                                                                    <PopoverBody>
                                                    <textarea style={{height: 140, width: '100%'}} cols="30" rows="10">
                                                    </textarea>
                                                                    </PopoverBody>
                                                                </UncontrolledPopover>

                                                                <hr/>
                                                            </div>
                                                        </div>
                                                        <div className="doc-col col-md-6">
                                                            <div className="tap">
                                                                <label>
                                                                    {t('cardsOne.fourInput-4')}
                                                                </label>

                                                                <InputMask disabled={true} id={'phone-4'}
                                                                           className={'form-control'}
                                                                           mask={'+999(99) 999-99-99'}
                                                                           placeholder={'+998(94) 123-45-67'} required/>

                                                                <UncontrolledPopover className={'message'} style={{
                                                                    width: 250,
                                                                    textAlign: 'center'
                                                                }} trigger="legacy" placement="bottom" target="phone-4">
                                                                    <PopoverHeader>Message:</PopoverHeader>
                                                                    <PopoverBody>
                                                    <textarea style={{height: 140, width: '100%'}} cols="30" rows="10">
                                                    </textarea>
                                                                    </PopoverBody>
                                                                </UncontrolledPopover>

                                                                <hr/>
                                                            </div>
                                                            <div className="tap">
                                                                <label>
                                                                    {t('cardsOne.fourInput-5')}
                                                                </label>

                                                                <InputMask disabled={true} id={'phone-5'}
                                                                           className={'form-control'}
                                                                           mask={'+999(99) 999-99-99'}
                                                                           placeholder={'+998(94) 123-45-67'} required/>

                                                                <UncontrolledPopover className={'message'} style={{
                                                                    width: 250,
                                                                    textAlign: 'center'
                                                                }} trigger="legacy" placement="bottom" target="phone-5">
                                                                    <PopoverHeader>Message:</PopoverHeader>
                                                                    <PopoverBody>
                                                    <textarea style={{height: 140, width: '100%'}} cols="30" rows="10">
                                                    </textarea>
                                                                    </PopoverBody>
                                                                </UncontrolledPopover>

                                                                <hr/>
                                                            </div>
                                                            <div className="tap">
                                                                <label>
                                                                    {t('cardsOne.fourInput-6')}
                                                                </label>

                                                                <InputMask disabled={true} id={'phone-6'}
                                                                           className={'form-control'}
                                                                           mask={'+999(99) 999-99-99'}
                                                                           placeholder={'+998(94) 123-45-67'} required/>

                                                                <UncontrolledPopover className={'message'} style={{
                                                                    width: 250,
                                                                    textAlign: 'center'
                                                                }} trigger="legacy" placement="bottom" target="phone-6">
                                                                    <PopoverHeader>Message:</PopoverHeader>
                                                                    <PopoverBody>
                                                    <textarea style={{height: 140, width: '100%'}} cols="30" rows="10">
                                                    </textarea>
                                                                    </PopoverBody>
                                                                </UncontrolledPopover>

                                                                <hr/>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </TabPanel>

                                            <TabPanel tabId={"two"}>
                                                <div>
                                                    <div className="doc-row row">
                                                        <div className="doc-col col">
                                                            <div className="tap">
                                                                <label className={'d-flex'}>
                                                                    {t('cardsTwo.oneInput-1')}
                                                                    <div style={{color: 'red'}} className={'mx-1'}>*
                                                                    </div>
                                                                </label>
                                                                <input disabled={true} id={'school'}
                                                                       className={'form-control'} type="text"
                                                                       placeholder={'Toshkent shahridagi 110-maktab'}
                                                                       required/>

                                                                <UncontrolledPopover className={'message'} style={{
                                                                    width: 250,
                                                                    textAlign: 'center'
                                                                }} trigger="legacy" placement="bottom" target="school">
                                                                    <PopoverHeader>Message:</PopoverHeader>
                                                                    <PopoverBody>
                                                    <textarea style={{height: 140, width: '100%'}} cols="30" rows="10">
                                                    </textarea>
                                                                    </PopoverBody>
                                                                </UncontrolledPopover>

                                                                <hr/>
                                                            </div>
                                                            <div className="tap">
                                                                <label className={'d-flex'}>
                                                                    {t('cardsTwo.oneInput-2')}
                                                                    <div style={{color: 'red'}} className={'mx-1'}>*
                                                                    </div>
                                                                </label>
                                                                <input disabled={true} id={'regions'}
                                                                       className={'form-control'} type="text"
                                                                       placeholder={'Toshket, Mirobod tumani'}
                                                                       required/>

                                                                <UncontrolledPopover className={'message'} style={{
                                                                    width: 250,
                                                                    textAlign: 'center'
                                                                }} trigger="legacy" placement="bottom" target="regions">
                                                                    <PopoverHeader>Message:</PopoverHeader>
                                                                    <PopoverBody>
                                                    <textarea style={{height: 140, width: '100%'}} cols="30" rows="10">
                                                    </textarea>
                                                                    </PopoverBody>
                                                                </UncontrolledPopover>
                                                                <hr/>
                                                            </div>
                                                            <div className="tap">
                                                                <label className={'d-flex'}>
                                                                    {t('cardsTwo.oneInput-3')}
                                                                    <div style={{color: 'red'}} className={'mx-1'}>*
                                                                    </div>
                                                                </label>
                                                                <input disabled={true} id={'city'}
                                                                       className={'form-control'} type="text"
                                                                       placeholder={'Shahar tuman'}
                                                                       required/>

                                                                <UncontrolledPopover className={'message'} style={{
                                                                    width: 250,
                                                                    textAlign: 'center'
                                                                }} trigger="legacy" placement="bottom" target="city">
                                                                    <PopoverHeader>Message:</PopoverHeader>
                                                                    <PopoverBody>
                                                    <textarea style={{height: 140, width: '100%'}} cols="30" rows="10">
                                                    </textarea>
                                                                    </PopoverBody>
                                                                </UncontrolledPopover>
                                                                <hr/>
                                                            </div>
                                                            <div className="tap">
                                                                <label className={'d-flex'}>
                                                                    {t('cardsTwo.oneInput-4')}
                                                                    <div style={{color: 'red'}} className={'mx-1'}>*
                                                                    </div>
                                                                </label>
                                                                <InputMask disabled={true} id={'endYear'}
                                                                           className={'form-control'} mask={'9999'}
                                                                           placeholder={'2018'}
                                                                           required/>

                                                                <UncontrolledPopover className={'message'} style={{
                                                                    width: 250,
                                                                    textAlign: 'center'
                                                                }} trigger="legacy" placement="bottom" target="endYear">
                                                                    <PopoverHeader>Message:</PopoverHeader>
                                                                    <PopoverBody>
                                                    <textarea style={{height: 140, width: '100%'}} cols="30" rows="10">
                                                    </textarea>
                                                                    </PopoverBody>
                                                                </UncontrolledPopover>
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

                                                                <input disabled={true} id={'diplom'} type={'text'}
                                                                       className={'form-control'}
                                                                       placeholder={'K-1090018'}
                                                                       required/>
                                                                <UncontrolledPopover className={'message'} style={{
                                                                    width: 250,
                                                                    textAlign: 'center'
                                                                }} trigger="legacy" placement="bottom" target="diplom">
                                                                    <PopoverHeader>Message:</PopoverHeader>
                                                                    <PopoverBody>
                                                    <textarea style={{height: 140, width: '100%'}} cols="30" rows="10">
                                                    </textarea>
                                                                    </PopoverBody>
                                                                </UncontrolledPopover>

                                                                {/*<InputMask className={'form-control'} mask={'a-9999999'} placeholder={'K-1090018'} required/>*/}
                                                                <hr/>
                                                            </div>
                                                            <div className="tap">
                                                                <label className={'d-flex'} id={'image-3'}>
                                                                    {t("cardsOne.oneInput-6")}
                                                                    <div style={{color: 'red'}} className={'mx-1'}>*
                                                                    </div>
                                                                </label>
                                                                <UncontrolledPopover className={'message'} style={{
                                                                    width: 250,
                                                                    textAlign: 'center'
                                                                }} trigger="legacy" placement="bottom" target="image-3">
                                                                    <PopoverHeader>Message:</PopoverHeader>
                                                                    <PopoverBody>
                                                    <textarea style={{height: 140, width: '100%'}} cols="30" rows="10">
                                                    </textarea>
                                                                    </PopoverBody>
                                                                </UncontrolledPopover>
                                                                <div style={{width: 340, marginLeft: -30}}
                                                                     className="image-tap">
                                                                    <div className="cont container">
                                                                        <div className="wrapper">
                                                                            <div className="image">
                                                                                <img id={'imgOne'} alt={''}/>
                                                                            </div>
                                                                            <div className="content">
                                                                                <div
                                                                                    className="text"> {t("cardsOne.imgPage")}</div>
                                                                            </div>
                                                                        </div>
                                                                        <input id={'default-btn-1'} type="file" hidden/>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="doc-row row">
                                                        <div className="doc-col col">
                                                            <div className="tap">
                                                                <label className={'d-flex'}>
                                                                    {t('cardsTwo.twoOpt-1')}
                                                                    <div style={{color: 'red'}} className={'mx-1'}>*
                                                                    </div>
                                                                </label>
                                                                <select disabled={true} id={'certification'}
                                                                        className={'select form-control'} required>
                                                                    <option className={'opt'} value=""></option>
                                                                    <option className={'opt'} value="man">IELTS</option>
                                                                    <option className={'opt'} value="man">TOPIC</option>
                                                                </select>
                                                                <UncontrolledPopover className={'message'} style={{
                                                                    width: 250,
                                                                    textAlign: 'center'
                                                                }} trigger="legacy" placement="bottom"
                                                                                     target="certification">
                                                                    <PopoverHeader>Message:</PopoverHeader>
                                                                    <PopoverBody>
                                                    <textarea style={{height: 140, width: '100%'}} cols="30" rows="10">
                                                    </textarea>
                                                                    </PopoverBody>
                                                                </UncontrolledPopover>
                                                                <hr/>
                                                            </div>
                                                            <div className="tap">
                                                                <label className={'d-flex'}>
                                                                    {t('cardsTwo.twoOpt-2')}
                                                                    <div style={{color: 'red'}} className={'mx-1'}>*
                                                                    </div>
                                                                </label>
                                                                <input disabled={true} id={'num'}
                                                                       className={'form-control'} type="number"
                                                                       placeholder={'7.0'}
                                                                       required/>

                                                                <UncontrolledPopover className={'message'} style={{
                                                                    width: 250,
                                                                    textAlign: 'center'
                                                                }} trigger="legacy" placement="bottom" target="num">
                                                                    <PopoverHeader>Message:</PopoverHeader>
                                                                    <PopoverBody>
                                                    <textarea style={{height: 140, width: '100%'}} cols="30" rows="10">
                                                    </textarea>
                                                                    </PopoverBody>
                                                                </UncontrolledPopover>
                                                                <hr/>
                                                            </div>
                                                            <div className="tap">
                                                                <label className={'d-flex'}>
                                                                    {t('cardsTwo.twoOpt-3')}
                                                                    <div style={{color: 'red'}} className={'mx-1'}>*
                                                                    </div>
                                                                </label>
                                                                <input disabled={true} id={'num-cer'}
                                                                       className={'form-control'} type="text"
                                                                       placeholder={'15UZ00761BATQAQ25A'}
                                                                       required/>

                                                                <UncontrolledPopover className={'message'} style={{
                                                                    width: 250,
                                                                    textAlign: 'center'
                                                                }} trigger="legacy" placement="bottom" target="num-cer">
                                                                    <PopoverHeader>Message:</PopoverHeader>
                                                                    <PopoverBody>
                                                    <textarea style={{height: 140, width: '100%'}} cols="30" rows="10">
                                                    </textarea>
                                                                    </PopoverBody>
                                                                </UncontrolledPopover>
                                                                <hr/>
                                                            </div>
                                                        </div>
                                                        <div className="doc-col col">
                                                            <div className="tap">
                                                                <label className={'d-flex'} id={'image-4'}>
                                                                    {t("cardsOne.oneInput-6")}
                                                                    <div style={{color: 'red'}} className={'mx-1'}>*
                                                                    </div>
                                                                </label>

                                                                <UncontrolledPopover className={'message'} style={{
                                                                    width: 250,
                                                                    textAlign: 'center'
                                                                }} trigger="legacy" placement="bottom" target="image-4">
                                                                    <PopoverHeader>Message:</PopoverHeader>
                                                                    <PopoverBody>
                                                    <textarea style={{height: 140, width: '100%'}} cols="30" rows="10">
                                                    </textarea>
                                                                    </PopoverBody>
                                                                </UncontrolledPopover>

                                                                <div style={{width: 340, marginLeft: -30}}
                                                                     className="image-tap">
                                                                    <div className="cont container">
                                                                        <div className="wrapper">
                                                                            <div className="image">
                                                                                <img id={'imgOne'} alt={''}/>
                                                                            </div>
                                                                            <div className="content">
                                                                                <div
                                                                                    className="text"> {t("cardsOne.imgPage")}</div>
                                                                            </div>
                                                                        </div>
                                                                        <input id={'default-btn-1'} type="file" hidden/>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="doc-row row">
                                                        <div className="doc-col col">
                                                            <div className="tap">
                                                                <label className={'d-flex'}>
                                                                    {t('cardsTwo.threeOpt-3')}
                                                                    <div style={{color: 'red'}} className={'mx-1'}>*
                                                                    </div>
                                                                </label>

                                                                <select disabled={true} id={'type'}
                                                                        className={'select form-control'} required>
                                                                    <option className={'opt'} value=""></option>
                                                                    <option className={'opt'} value="man">Kunduzgi
                                                                    </option>
                                                                    <option className={'opt'} value="man">Kechki
                                                                    </option>
                                                                    <option className={'opt'} value="man">Sirtqi
                                                                    </option>
                                                                </select>

                                                                <UncontrolledPopover className={'message'} style={{
                                                                    width: 250,
                                                                    textAlign: 'center'
                                                                }} trigger="legacy" placement="bottom" target="type">
                                                                    <PopoverHeader>Message:</PopoverHeader>
                                                                    <PopoverBody>
                                                    <textarea style={{height: 140, width: '100%'}} cols="30" rows="10">
                                                    </textarea>
                                                                    </PopoverBody>
                                                                </UncontrolledPopover>
                                                                <hr/>
                                                            </div>
                                                            <div className="tap">
                                                                <label className={'d-flex'}>
                                                                    {t('cardsTwo.threeOpt-4')}
                                                                    <div style={{color: 'red'}} className={'mx-1'}>*
                                                                    </div>
                                                                </label>
                                                                <select disabled={true} id={'lang-1'}
                                                                        className={'select form-control'} required>
                                                                    <option className={'opt'} value=""></option>
                                                                    <option className={'opt'} value="man">O`zbek
                                                                    </option>
                                                                    <option className={'opt'} value="man">Rus</option>
                                                                    <option className={'opt'} value="man">Ingliz
                                                                    </option>
                                                                </select>

                                                                <UncontrolledPopover className={'message'} style={{
                                                                    width: 250,
                                                                    textAlign: 'center'
                                                                }} trigger="legacy" placement="bottom" target="lang-1">
                                                                    <PopoverHeader>Message:</PopoverHeader>
                                                                    <PopoverBody>
                                                    <textarea style={{height: 140, width: '100%'}} cols="30" rows="10">
                                                    </textarea>
                                                                    </PopoverBody>
                                                                </UncontrolledPopover>
                                                                <hr/>
                                                            </div>
                                                            <div className="tap">
                                                                <label className={'d-flex'}>
                                                                    {t('cardsTwo.threeOpt-1')}
                                                                    <div style={{color: 'red'}} className={'mx-1'}>*
                                                                    </div>
                                                                </label>
                                                                <select disabled={true} id={'type-3'}
                                                                        className={'select form-control'} required>
                                                                    <option className={'opt'} value="">Yo`q</option>
                                                                    <option className={'opt'} value="sasa">Yo`q</option>
                                                                    <option className={'opt'} value="ss">Ha</option>
                                                                    <option className={'opt'} value="aa">Ha</option>
                                                                </select>
                                                                <UncontrolledPopover className={'message'} style={{
                                                                    width: 250,
                                                                    textAlign: 'center'
                                                                }} trigger="legacy" placement="bottom" target="type-3">
                                                                    <PopoverHeader>Message:</PopoverHeader>
                                                                    <PopoverBody>
                                                    <textarea style={{height: 140, width: '100%'}} cols="30" rows="10">
                                                    </textarea>
                                                                    </PopoverBody>
                                                                </UncontrolledPopover>
                                                                <hr/>
                                                            </div>
                                                            <div className="tap">
                                                                <label className={'d-flex'}>
                                                                    {t('cardsTwo.threeOpt-2')}
                                                                    <div style={{color: 'red'}} className={'mx-1'}>*
                                                                    </div>
                                                                </label>
                                                                <select disabled={true} id={'type-4'}
                                                                        className={'select form-control'} required>
                                                                    <option className={'opt'} value="">Yo`q</option>
                                                                    <option className={'opt'} value="woman">Ha</option>
                                                                    <option className={'opt'} value="woman">Ha</option>
                                                                </select>

                                                                <UncontrolledPopover className={'message'} style={{
                                                                    width: 250,
                                                                    textAlign: 'center'
                                                                }} trigger="legacy" placement="bottom" target="type-4">
                                                                    <PopoverHeader>Message:</PopoverHeader>
                                                                    <PopoverBody>
                                                    <textarea style={{height: 140, width: '100%'}} cols="30" rows="10">
                                                    </textarea>
                                                                    </PopoverBody>
                                                                </UncontrolledPopover>
                                                                <hr/>
                                                            </div>
                                                            <div className="tap">
                                                                <label className={'w-100'}>
                                                                    <span>{t('cardsTwo.choose')}</span>
                                                                    <span
                                                                        style={{color: '#000000'}}> Matematika, </span>
                                                                    <span style={{color: '#000000'}}> Fizika </span>
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

                                                                <select disabled={true}
                                                                        className={'select form-control'} required>
                                                                    <option className={'opt'} value=""></option>
                                                                    <option className={'opt'} value="man">Kunduzgi
                                                                    </option>
                                                                    <option className={'opt'} value="man">Kechki
                                                                    </option>
                                                                    <option className={'opt'} value="man">Sirtqi
                                                                    </option>
                                                                </select>
                                                                <select disabled={true}
                                                                        className={'select form-control'} required>
                                                                    <option className={'opt'} value=""></option>
                                                                    <option className={'opt'} value="man">Kunduzgi
                                                                    </option>
                                                                    <option className={'opt'} value="man">Kechki
                                                                    </option>
                                                                    <option className={'opt'} value="man">Sirtqi
                                                                    </option>
                                                                </select>
                                                                <select disabled={true}
                                                                        className={'select form-control'} required>
                                                                    <option className={'opt'} value=""></option>
                                                                    <option className={'opt'} value="man">Kunduzgi
                                                                    </option>
                                                                    <option className={'opt'} value="man">Kechki
                                                                    </option>
                                                                    <option className={'opt'} value="man">Sirtqi
                                                                    </option>
                                                                </select>
                                                                <select disabled={true}
                                                                        className={'select form-control'} required>
                                                                    <option className={'opt'} value=""></option>
                                                                    <option className={'opt'} value="man">Kunduzgi
                                                                    </option>
                                                                    <option className={'opt'} value="man">Kechki
                                                                    </option>
                                                                    <option className={'opt'} value="man">Sirtqi
                                                                    </option>
                                                                </select>
                                                                <select disabled={true}
                                                                        className={'select form-control'} required>
                                                                    <option className={'opt'} value=""></option>
                                                                    <option className={'opt'} value="man">Kunduzgi
                                                                    </option>
                                                                    <option className={'opt'} value="man">Kechki
                                                                    </option>
                                                                    <option className={'opt'} value="man">Sirtqi
                                                                    </option>
                                                                </select>
                                                                <select disabled={true}
                                                                        className={'select form-control'} required>
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
                                            </TabPanel>
                                        </Tabs>
                                    </div>
                                    <div className="doc-btn text-center">
                                        <button className={'btn btn-danger mx-5'}>Reject</button>
                                        <button className={'btn btn-success  mx-5'}>Accept</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        );
    }

}

export default AdminCards;