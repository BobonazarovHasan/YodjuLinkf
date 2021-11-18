import React, {Component} from 'react';
import '../../css/admissionStyle/Application.css';
import {Tabs, Tab, TabPanel, TabList} from 'react-web-tabs';
import * as ImIcons from "react-icons/bi";
// import * as Icons from "react-icons/fa";
import {BrowserRouter as Switch, Link} from "react-router-dom";
import AdminNavbar from "../../component/AdminNavbar";
import {useTranslation} from "react-i18next";
import {Scrollbars} from "react-custom-scrollbars";

// import InputMask from "react-input-mask";

class Applications extends Component{


    render() {
        const {t, i18n} = this.props;

        return (
            <div>
                <AdminNavbar t={t} i18n={i18n}/>

                    <div className={'admissions container'}>
                        <div className="row">
                            <div className=" admin-cols col offset-2">

                                <div className={'application pt-5'}>

                                    <div className="row">
                                        <div className="col d-flex">
                                            <div className="card-info card">
                                                123
                                                <span className={'info'}>{t('admin.circle-1')}</span>
                                            </div>
                                            <div className="card-info card">
                                                2342
                                                <span className={'info'}>{t('admin.circle-2')}</span>

                                            </div>
                                            <div className="card-info card">
                                                456
                                                <span className={'info'}>{t('admin.circle-3')}</span>
                                            </div>
                                            <div className="card-info card">
                                                3456
                                                <span className={'info'}>{t('admin.circle-4')}</span>

                                            </div>
                                        </div>
                                    </div>
                                    <Tabs
                                        defaultTab="one"
                                        onChange={(tabId) => {
                                        }}

                                    >
                                        <div className={' tabs-link '}>
                                            <TabList>
                                                <Tab tabFor="one">{t('admin.tables-1')}</Tab>
                                                <Tab tabFor="two">{t('admin.tables-2')}</Tab>
                                                <Tab tabFor="three">{t('admin.tables-3')}</Tab>
                                                <Tab tabFor="four">{t('admin.tables-4')}</Tab>
                                            </TabList>
                                        </div>
                                        <div className="cols col">
                                            <TabPanel tabId={"one"}>

                                                <div className="row">
                                                    <div className="col mb-4">
                                                        <input type="text" className={'search'}
                                                               placeholder={'Search...'}/>
                                                        <button className={'btn float-right'}>
                                                            <ImIcons.BiExport className={'mr-1'}/>
                                                            Export Exel
                                                        </button>
                                                    </div>
                                                </div>
                                                <table className={'table table-hover table-bordered'}>
                                                    <thead>
                                                    <tr>
                                                        <th>№</th>
                                                        <th>{t('admin.th-1')}</th>
                                                        <th>{t('admin.th-2')}</th>
                                                        <th>{t('admin.th-3')}</th>
                                                        <th>{t('admin.th-4')}</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>
                                                            <Link className={'link-name text-decoration-none'}
                                                                  to={'/admission/adminCards/'}>
                                                                Sadikov Afzalbek
                                                            </Link>
                                                        </td>
                                                        <td>2021-03-11 01:20:20</td>
                                                        <td>Turizm</td>
                                                        <td>+998998572532</td>
                                                    </tr>
                                                    <tr>
                                                        <td>2</td>
                                                        <td>
                                                            <Link className={'link-name text-decoration-none'}
                                                                  to={'/admission/adminCards/'}>
                                                                Sadikov Afzalbek
                                                            </Link>
                                                        </td>
                                                        <td>2021-03-11 01:20:20</td>
                                                        <td>Turizm</td>
                                                        <td>+998998572532</td>
                                                    </tr>
                                                    <tr>
                                                        <td>3</td>
                                                        <td>
                                                            <Link className={'link-name text-decoration-none'}
                                                                  to={'/admission/adminCards/'}>
                                                                Sadikov Afzalbek
                                                            </Link>
                                                        </td>
                                                        <td>2021-03-11 01:20:20</td>
                                                        <td>Turizm</td>
                                                        <td>+998998572532</td>
                                                    </tr>
                                                    <tr>
                                                        <td>4</td>
                                                        <td>
                                                            <Link className={'link-name text-decoration-none'}
                                                                  to={'/admission/adminCards/'}>
                                                                Sadikov Afzalbek
                                                            </Link>
                                                        </td>
                                                        <td>2021-03-11 01:20:20</td>
                                                        <td>Turizm</td>
                                                        <td>+998998572532</td>
                                                    </tr>
                                                    <tr>
                                                        <td>5</td>
                                                        <td>
                                                            <Link className={'link-name text-decoration-none'}
                                                                  to={'/admission/adminCards/'}>
                                                                Sadikov Afzalbek
                                                            </Link>
                                                        </td>
                                                        <td>2021-03-11 01:20:20</td>
                                                        <td>Turizm</td>
                                                        <td>+998998572532</td>
                                                    </tr>
                                                    <tr>
                                                        <td>6</td>
                                                        <td>
                                                            <Link className={'link-name text-decoration-none'}
                                                                  to={'/admission/adminCards/'}>
                                                                Sadikov Afzalbek
                                                            </Link>
                                                        </td>
                                                        <td>2021-03-11 01:20:20</td>
                                                        <td>Turizm</td>
                                                        <td>+998998572532</td>
                                                    </tr>
                                                    <tr>
                                                        <td>7</td>
                                                        <td>
                                                            <Link className={'link-name text-decoration-none'}
                                                                  to={'/admission/adminCards/'}>
                                                                Sadikov Afzalbek
                                                            </Link>
                                                        </td>
                                                        <td>2021-03-11 01:20:20</td>
                                                        <td>Turizm</td>
                                                        <td>+998998572532</td>
                                                    </tr>
                                                    <tr>
                                                        <td>8</td>
                                                        <td>
                                                            <Link className={'link-name text-decoration-none'}
                                                                  to={'/admission/adminCards/'}>
                                                                Sadikov Afzalbek
                                                            </Link>
                                                        </td>
                                                        <td>2021-03-11 01:20:20</td>
                                                        <td>Turizm</td>
                                                        <td>+998998572532</td>
                                                    </tr>
                                                    <tr>
                                                        <td>9</td>
                                                        <td>
                                                            <Link className={'link-name text-decoration-none'}
                                                                  to={'/admission/adminCards/'}>
                                                                Sadikov Afzalbek
                                                            </Link>
                                                        </td>
                                                        <td>2021-03-11 01:20:20</td>
                                                        <td>Turizm</td>
                                                        <td>+998998572532</td>
                                                    </tr>
                                                    <tr>
                                                        <td>10</td>
                                                        <td>
                                                            <Link className={'link-name text-decoration-none'}
                                                                  to={'/admission/adminCards/'}>
                                                                Sadikov Afzalbek
                                                            </Link>
                                                        </td>
                                                        <td>2021-03-11 01:20:20</td>
                                                        <td>Turizm</td>
                                                        <td>+998998572532</td>
                                                    </tr>
                                                    </tbody>
                                                </table>

                                            </TabPanel>
                                            <TabPanel tabId={"two"}>

                                                <div className="row">
                                                    <div className="col mb-4">
                                                        <input type="text" className={'search'}
                                                               placeholder={'Search...'}/>
                                                        <button className={'btn float-right'}>
                                                            <ImIcons.BiExport className={'mr-1'}/>
                                                            Export Exel
                                                        </button>
                                                    </div>
                                                </div>

                                                <table className={'table table-hover table-bordered'}>
                                                    <tr>
                                                        <th>№</th>
                                                        <th>{t('admin.th-1')}</th>
                                                        <th>{t('admin.th-2')}</th>
                                                        <th>{t('admin.th-3')}</th>
                                                        <th>{t('admin.th-4')}</th>
                                                    </tr>
                                                    <tbody>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>
                                                            <Link className={'link-name text-decoration-none'}
                                                                  to={'/admission/adminCards/'}>
                                                                Sadikov Afzalbek
                                                            </Link>
                                                        </td>
                                                        <td>2021-03-11 01:20:20</td>
                                                        <td>Turizm</td>
                                                        <td>+998998572532</td>
                                                    </tr>
                                                    <tr>
                                                        <td>2</td>
                                                        <td>
                                                            <Link className={'link-name text-decoration-none'}
                                                                  to={'/admission/adminCards/'}>
                                                                Sadikov Afzalbek
                                                            </Link>
                                                        </td>
                                                        <td>2021-03-11 01:20:20</td>
                                                        <td>Turizm</td>
                                                        <td>+998998572532</td>
                                                    </tr>
                                                    <tr>
                                                        <td>3</td>
                                                        <td>
                                                            <Link className={'link-name text-decoration-none'}
                                                                  to={'/admission/adminCards/'}>
                                                                Sadikov Afzalbek
                                                            </Link>
                                                        </td>
                                                        <td>2021-03-11 01:20:20</td>
                                                        <td>Turizm</td>
                                                        <td>+998998572532</td>
                                                    </tr>
                                                    <tr>
                                                        <td>4</td>
                                                        <td>
                                                            <Link className={'link-name text-decoration-none'}
                                                                  to={'/admission/adminCards/'}>
                                                                Sadikov Afzalbek
                                                            </Link>
                                                        </td>
                                                        <td>2021-03-11 01:20:20</td>
                                                        <td>Turizm</td>
                                                        <td>+998998572532</td>
                                                    </tr>
                                                    <tr>
                                                        <td>5</td>
                                                        <td>
                                                            <Link className={'link-name text-decoration-none'}
                                                                  to={'/admission/adminCards/'}>
                                                                Sadikov Afzalbek
                                                            </Link>
                                                        </td>
                                                        <td>2021-03-11 01:20:20</td>
                                                        <td>Turizm</td>
                                                        <td>+998998572532</td>
                                                    </tr>
                                                    <tr>
                                                        <td>6</td>
                                                        <td>
                                                            <Link className={'link-name text-decoration-none'}
                                                                  to={'/admission/adminCards/'}>
                                                                Sadikov Afzalbek
                                                            </Link>
                                                        </td>
                                                        <td>2021-03-11 01:20:20</td>
                                                        <td>Turizm</td>
                                                        <td>+998998572532</td>
                                                    </tr>
                                                    <tr>
                                                        <td>7</td>
                                                        <td>
                                                            <Link className={'link-name text-decoration-none'}
                                                                  to={'/admission/adminCards/'}>
                                                                Sadikov Afzalbek
                                                            </Link>
                                                        </td>
                                                        <td>2021-03-11 01:20:20</td>
                                                        <td>Turizm</td>
                                                        <td>+998998572532</td>
                                                    </tr>
                                                    <tr>
                                                        <td>8</td>
                                                        <td>
                                                            <Link className={'link-name text-decoration-none'}
                                                                  to={'/admission/adminCards/'}>
                                                                Sadikov Afzalbek
                                                            </Link>
                                                        </td>
                                                        <td>2021-03-11 01:20:20</td>
                                                        <td>Turizm</td>
                                                        <td>+998998572532</td>
                                                    </tr>
                                                    <tr>
                                                        <td>9</td>
                                                        <td>
                                                            <Link className={'link-name text-decoration-none'}
                                                                  to={'/admission/adminCards/'}>
                                                                Sadikov Afzalbek
                                                            </Link>
                                                        </td>
                                                        <td>2021-03-11 01:20:20</td>
                                                        <td>Turizm</td>
                                                        <td>+998998572532</td>
                                                    </tr>
                                                    <tr>
                                                        <td>10</td>
                                                        <td>
                                                            <Link className={'link-name text-decoration-none'}
                                                                  to={'/admission/adminCards/'}>
                                                                Sadikov Afzalbek
                                                            </Link>
                                                        </td>
                                                        <td>2021-03-11 01:20:20</td>
                                                        <td>Turizm</td>
                                                        <td>+998998572532</td>
                                                    </tr>
                                                    </tbody>
                                                </table>

                                            </TabPanel>
                                            <TabPanel tabId={"three"}>

                                                <div className="row">
                                                    <div className="col mb-4">
                                                        <input type="text" className={'search'}
                                                               placeholder={'Search...'}/>
                                                        <button className={'btn float-right'}>
                                                            <ImIcons.BiExport className={'mr-1'}/>
                                                            Export Exel
                                                        </button>
                                                    </div>
                                                </div>

                                                <table className={'table table-hover table-bordered'}>
                                                    <tr>
                                                        <th>№</th>
                                                        <th>{t('admin.th-1')}</th>
                                                        <th>{t('admin.th-2')}</th>
                                                        <th>{t('admin.th-3')}</th>
                                                        <th>{t('admin.th-4')}</th>
                                                    </tr>
                                                    <tbody>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>
                                                            <Link className={'link-name text-decoration-none'}
                                                                  to={'/admission/adminCards/'}>
                                                                Sadikov Afzalbek
                                                            </Link>
                                                        </td>
                                                        <td>2021-03-11 01:20:20</td>
                                                        <td>Turizm</td>
                                                        <td>+998998572532</td>
                                                    </tr>
                                                    <tr>
                                                        <td>2</td>
                                                        <td>
                                                            <Link className={'link-name text-decoration-none'}
                                                                  to={'/admission/adminCards/'}>
                                                                Sadikov Afzalbek
                                                            </Link>
                                                        </td>
                                                        <td>2021-03-11 01:20:20</td>
                                                        <td>Turizm</td>
                                                        <td>+998998572532</td>
                                                    </tr>
                                                    <tr>
                                                        <td>3</td>
                                                        <td>
                                                            <Link className={'link-name text-decoration-none'}
                                                                  to={'/admission/adminCards/'}>
                                                                Sadikov Afzalbek
                                                            </Link>
                                                        </td>
                                                        <td>2021-03-11 01:20:20</td>
                                                        <td>Turizm</td>
                                                        <td>+998998572532</td>
                                                    </tr>
                                                    <tr>
                                                        <td>4</td>
                                                        <td>
                                                            <Link className={'link-name text-decoration-none'}
                                                                  to={'/admission/adminCards/'}>
                                                                Sadikov Afzalbek
                                                            </Link>
                                                        </td>
                                                        <td>2021-03-11 01:20:20</td>
                                                        <td>Turizm</td>
                                                        <td>+998998572532</td>
                                                    </tr>
                                                    <tr>
                                                        <td>5</td>
                                                        <td>
                                                            <Link className={'link-name text-decoration-none'}
                                                                  to={'/admission/adminCards/'}>
                                                                Sadikov Afzalbek
                                                            </Link>
                                                        </td>
                                                        <td>2021-03-11 01:20:20</td>
                                                        <td>Turizm</td>
                                                        <td>+998998572532</td>
                                                    </tr>
                                                    <tr>
                                                        <td>6</td>
                                                        <td>
                                                            <Link className={'link-name text-decoration-none'}
                                                                  to={'/admission/adminCards/'}>
                                                                Sadikov Afzalbek
                                                            </Link>
                                                        </td>
                                                        <td>2021-03-11 01:20:20</td>
                                                        <td>Turizm</td>
                                                        <td>+998998572532</td>
                                                    </tr>
                                                    <tr>
                                                        <td>7</td>
                                                        <td>
                                                            <Link className={'link-name text-decoration-none'}
                                                                  to={'/admission/adminCards/'}>
                                                                Sadikov Afzalbek
                                                            </Link>
                                                        </td>
                                                        <td>2021-03-11 01:20:20</td>
                                                        <td>Turizm</td>
                                                        <td>+998998572532</td>
                                                    </tr>
                                                    <tr>
                                                        <td>8</td>
                                                        <td>
                                                            <Link className={'link-name text-decoration-none'}
                                                                  to={'/admission/adminCards/'}>
                                                                Sadikov Afzalbek
                                                            </Link>
                                                        </td>
                                                        <td>2021-03-11 01:20:20</td>
                                                        <td>Turizm</td>
                                                        <td>+998998572532</td>
                                                    </tr>
                                                    <tr>
                                                        <td>9</td>
                                                        <td>
                                                            <Link className={'link-name text-decoration-none'}
                                                                  to={'/admission/adminCards/'}>
                                                                Sadikov Afzalbek
                                                            </Link>
                                                        </td>
                                                        <td>2021-03-11 01:20:20</td>
                                                        <td>Turizm</td>
                                                        <td>+998998572532</td>
                                                    </tr>
                                                    <tr>
                                                        <td>10</td>
                                                        <td>
                                                            <Link className={'link-name text-decoration-none'}
                                                                  to={'/admission/adminCards/'}>
                                                                Sadikov Afzalbek
                                                            </Link>
                                                        </td>
                                                        <td>2021-03-11 01:20:20</td>
                                                        <td>Turizm</td>
                                                        <td>+998998572532</td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </TabPanel>
                                            <TabPanel tabId={"four"}>

                                                <div className="row">
                                                    <div className="col mb-4">
                                                        <input type="text" className={'search'}
                                                               placeholder={'Search...'}/>
                                                        <button className={'btn float-right'}>
                                                            <ImIcons.BiExport className={'mr-1'}/>
                                                            Export Exel
                                                        </button>
                                                    </div>
                                                </div>

                                                <table className={'table table-hover table-bordered'}>
                                                    <tr>
                                                        <th>№</th>
                                                        <th>{t('admin.th-1')}</th>
                                                        <th>{t('admin.th-2')}</th>
                                                        <th>{t('admin.th-3')}</th>
                                                        <th>{t('admin.th-4')}</th>
                                                    </tr>
                                                    <tbody>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>
                                                            <Link className={'link-name text-decoration-none'}
                                                                  to={'/admission/adminCards/'}>
                                                                Sadikov Afzalbek
                                                            </Link>
                                                        </td>
                                                        <td>2021-03-11 01:20:20</td>
                                                        <td>Turizm</td>
                                                        <td>+998998572532</td>
                                                    </tr>
                                                    <tr>
                                                        <td>2</td>
                                                        <td>
                                                            <Link className={'link-name text-decoration-none'}
                                                                  to={'/admission/adminCards/'}>
                                                                Sadikov Afzalbek
                                                            </Link>
                                                        </td>
                                                        <td>2021-03-11 01:20:20</td>
                                                        <td>Turizm</td>
                                                        <td>+998998572532</td>
                                                    </tr>
                                                    <tr>
                                                        <td>3</td>
                                                        <td>
                                                            <Link className={'link-name text-decoration-none'}
                                                                  to={'/admission/adminCards/'}>
                                                                Sadikov Afzalbek
                                                            </Link>
                                                        </td>
                                                        <td>2021-03-11 01:20:20</td>
                                                        <td>Turizm</td>
                                                        <td>+998998572532</td>
                                                    </tr>
                                                    <tr>
                                                        <td>4</td>
                                                        <td>
                                                            <Link className={'link-name text-decoration-none'}
                                                                  to={'/admission/adminCards/'}>
                                                                Sadikov Afzalbek
                                                            </Link>
                                                        </td>
                                                        <td>2021-03-11 01:20:20</td>
                                                        <td>Turizm</td>
                                                        <td>+998998572532</td>
                                                    </tr>
                                                    <tr>
                                                        <td>5</td>
                                                        <td>
                                                            <Link className={'link-name text-decoration-none'}
                                                                  to={'/admission/adminCards/'}>
                                                                Sadikov Afzalbek
                                                            </Link>
                                                        </td>
                                                        <td>2021-03-11 01:20:20</td>
                                                        <td>Turizm</td>
                                                        <td>+998998572532</td>
                                                    </tr>
                                                    <tr>
                                                        <td>6</td>
                                                        <td>
                                                            <Link className={'link-name text-decoration-none'}
                                                                  to={'/admission/adminCards/'}>
                                                                Sadikov Afzalbek
                                                            </Link>
                                                        </td>
                                                        <td>2021-03-11 01:20:20</td>
                                                        <td>Turizm</td>
                                                        <td>+998998572532</td>
                                                    </tr>
                                                    <tr>
                                                        <td>7</td>
                                                        <td>
                                                            <Link className={'link-name text-decoration-none'}
                                                                  to={'/admission/adminCards/'}>
                                                                Sadikov Afzalbek
                                                            </Link>
                                                        </td>
                                                        <td>2021-03-11 01:20:20</td>
                                                        <td>Turizm</td>
                                                        <td>+998998572532</td>
                                                    </tr>
                                                    <tr>
                                                        <td>8</td>
                                                        <td>
                                                            <Link className={'link-name text-decoration-none'}
                                                                  to={'/admission/adminCards/'}>
                                                                Sadikov Afzalbek
                                                            </Link>
                                                        </td>
                                                        <td>2021-03-11 01:20:20</td>
                                                        <td>Turizm</td>
                                                        <td>+998998572532</td>
                                                    </tr>
                                                    <tr>
                                                        <td>9</td>
                                                        <td>
                                                            <Link className={'link-name text-decoration-none'}
                                                                  to={'/admission/adminCards/'}>
                                                                Sadikov Afzalbek
                                                            </Link>
                                                        </td>
                                                        <td>2021-03-11 01:20:20</td>
                                                        <td>Turizm</td>
                                                        <td>+998998572532</td>
                                                    </tr>
                                                    <tr>
                                                        <td>10</td>
                                                        <td>
                                                            <Link className={'link-name text-decoration-none'}
                                                                  to={'/admission/adminCards/'}>
                                                                Sadikov Afzalbek
                                                            </Link>
                                                        </td>
                                                        <td>2021-03-11 01:20:20</td>
                                                        <td>Turizm</td>
                                                        <td>+998998572532</td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </TabPanel>
                                        </div>
                                    </Tabs>
                                </div>

                            </div>
                        </div>
                    </div>
            </div>
        );
    }
}

export default Applications;