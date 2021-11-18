import React, {Component} from 'react';
import '../../css/admissionStyle/News.css';
import '../../css/admissionStyle/Admission.css';
import {Scrollbars} from "react-custom-scrollbars";
import {useTranslation} from "react-i18next";
import AdminNavbar from "../../component/AdminNavbar";

class News extends Component {


    render() {

        const {t, i18n} = this.props;

        function countWords() {
            let text = document.getElementById("inputField").value;

            let numWords = 0;

            for (let i = 0; i < text.length; i++) {
                numWords += 1

                if (numWords === 1001) {
                    numWords--;

                }

            }

            numWords += 1;

            let shows = document.getElementById("show").innerHTML = numWords - 1;

        }

        return (
            <div>
                <AdminNavbar t={t} i18n={i18n}/>
                <div className={'admissions container'}>
                    <div className="row pt-5">
                        <div className=" admin-cols col offset-2 pt-4">
                            <div className={'news'}>
                                <div>
                    <textarea onChange={countWords} maxLength={1000} className={' message form-control count-chars'}
                              placeholder={t('admin.mes-1')} id="inputField">
                </textarea>
                                </div>
                                <div className={'row'}>
                                    <div className="col">
                                        <input type={'radio'} name={'radio'}/>
                                        <label>{t('admin.mes-2')}</label>
                                    </div>
                                    <div className="col">
                                        <input type={'radio'} name={'radio'}/>
                                        <label>{t('admin.mes-3')}</label>
                                    </div>
                                    <div className="col">
                                        <input type={'radio'} name={'radio'}/>
                                        <label>{t('admin.mes-4')}</label>
                                    </div>
                                    <div className="col">
                                        <div className="word float-right">
                                            <span><span id={'show'}>0</span>/1000</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="row ">
                                    <div className="col offset-10 ">
                                        <button className={'btn'}>{t('admin.mesBtn')}</button>
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

export default News;