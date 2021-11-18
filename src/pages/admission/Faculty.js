import React, {Component} from 'react';
import * as RiIcons from "react-icons/ri";
import * as FaIcons from "react-icons/fa";
// import * as MdIcons from "react-icons/md";

import '../../css/admissionStyle/Faculty.css';
import {Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import Switch from "react-switch";
import axios from "axios";
import AdminNavbar from "../../component/AdminNavbar";
import {Scrollbars} from "react-custom-scrollbars";
import ReactFC from "react-fusioncharts";
import sun from "../../image/adminIcons/clarity_sun-solid.svg";
import moon from "../../image/adminIcons/cil_moon.svg";
import book from "../../image/adminIcons/mdi_book-education-outline.svg";
import BootstrapSwitchButton from "bootstrap-switch-button-react";

class Faculty extends Component {

    constructor(props) {
        super(props);
        this.state = {
            facultyDates: [],
            langDates: [],
            typeDates: [],
            show: false,
            editShow: false,
            editId: 0,
            checked: false,
            checkBox: this.checkBox.bind(this)

        }
    }

    checkBox = (checked) => {
        this.setState({
            checked: checked
        })
    }

    openModal = (pos) => {
        if (pos === true) {
            this.setState({
                show: true
            })
        } else if (pos === false) {
            this.setState({
                show: false
            })
        }
    }
    editModal = (pos) => {
        if (pos === true) {
            this.setState({
                editShow: true
            })
        } else if (pos === false) {
            this.setState({
                editShow: false
            })
        }
    }


    queryFaculty = () => {
        const _this = this
        axios.get('http://localhost:8080/api/v1/admin/faculty').then(res => _this.setState({facultyDates: res.data.content}))
    }
    queryLang = () => {
        const _this = this
        axios.get('http://localhost:8080/api/v1/admin/education-language').then(res => _this.setState({langDates: res.data.content}))
    }
    queryType = () => {
        const _this = this
        axios.get('http://localhost:8080/api/v1/admin/education-type').then(res => _this.setState({typeDates: res.data.content}))
    }


    addFaculty = (event) => {


        axios({
            url: 'http://localhost:8080/api/v1/admin/faculty',
            method: 'put',
            data: {
                code: 'code',
                names: {
                    en: event.target[0].value,
                    ru: event.target[1].value,
                    uz: event.target[2].value
                },
                active: true
            }
        }).then(() => {

            this.queryFaculty()
            this.openModal(false)
        })
    }

    editFacultyIds = (id) => {
        this.editModal(true)
        this.setState({
            editId: id
        })
    }
    editFaculty = (event) => {
        const {editId} = this.state;
        axios({
            url: 'http://localhost:8080/api/v1/admin/faculty',
            method: 'post',
            data: {
                id: editId,
                code: 'codes',
                names: {
                    en: event.target[0].value,
                    ru: event.target[1].value,
                    uz: event.target[2].value
                },
                active: true
            }
        }).then(() => {

            this.queryFaculty()
            this.editModal(false)
        })
    }

    componentDidMount() {
        this.queryFaculty();
        this.queryLang();
        this.queryType();
    }


    render() {
        const {facultyDates, langDates, typeDates, show, editShow, checked} = this.state;
        const {t, i18n} = this.props;

        return (
            <div>
                <AdminNavbar t={t} i18n={i18n}/>

                    <div className={'admissions container'}>
                        <div className="row pt-5">
                            <div className=" admin-cols col offset-2 pt-4">
                                <div className={'faculty'}>

                                    <Modal isOpen={show} className={'modal-lg'}>
                                        <header>
                                            <button className={'btn float-lg-right'} style={{fontSize: 30}}
                                                    onClick={() => this.openModal(false)}>&times;</button>
                                            <h3 className={'m-4'}>Fakultet qo`shish</h3>
                                        </header>
                                        <ModalBody>
                                            <form id={'lang'} onSubmit={this.addFaculty}>
                                                <div className="container-fluid">
                                                    <div className="row">
                                                        <div className="col border-bottom pb-4">
                                                            <label>
                                                                Uz
                                                            </label>
                                                            <input type="text" name={'uz'} className={'form-control'}/>
                                                            <label>
                                                                En
                                                            </label>
                                                            <input type="text" name={'en'} className={'form-control'}/>
                                                            <label>
                                                                Ru
                                                            </label>
                                                            <input type="text" name={'ru'} className={'form-control'}/>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col border-right">
                                                            {typeDates.map((item) => {
                                                                return (
                                                                    <div className="row my-3">
                                                                        <div className="col modal-page">
                                                                            <div className="col w-100">
                                                                                <p key={item.id}>{item.names.uz}</p>
                                                                            </div>
                                                                            <div className="col">
                                                                                <BootstrapSwitchButton  checked={true} onstyle={"primary"} offstyle={"info"} />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })}
                                                        </div>
                                                        <div className="col">
                                                            {langDates.map((item) => {
                                                                return (

                                                                    <div className="row my-3">
                                                                        <div className="col modal-page">
                                                                            <div className="col w-100">
                                                                                <p key={item.id}
                                                                                   value={item.id}>{item.names.uz}</p>
                                                                            </div>
                                                                            <div className="col">
                                                                                <BootstrapSwitchButton  checked={true} onstyle={"primary"} offstyle={"info"} />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })}
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </ModalBody>
                                        <ModalFooter>
                                            <div className={'float-right'}>
                                                <button form={'lang'}
                                                        className={' btn btn-success'}>{t('admin.addBtn')}</button>

                                                <button onClick={() => this.openModal(false)}
                                                        className={'btn btn-success'}>{t('admin.closeBtn')}</button>
                                            </div>
                                        </ModalFooter>
                                    </Modal>
                                    <Modal isOpen={editShow} className={'modal-lg'}>
                                        <header>
                                            <button className={'btn float-lg-right'} style={{fontSize: 30}}
                                                    onClick={() => this.editModal(false)}>&times;</button>
                                            <h3 className={'m-3'}>Fakultetni o`zgartirish</h3>
                                        </header>
                                        <ModalBody>
                                            <form id={'lang'} onSubmit={this.editFaculty}>
                                                <div className="container-fluid">
                                                    <div className="row">
                                                        <div className="col border-bottom pb-4">
                                                            <label>
                                                                Uz
                                                            </label>
                                                            <input type="text" name={'uz'} className={'form-control'}/>
                                                            <label>
                                                                En
                                                            </label>
                                                            <input type="text" name={'en'} className={'form-control'}/>
                                                            <label>
                                                                Ru
                                                            </label>
                                                            <input type="text" name={'ru'} className={'form-control'}/>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col border-right">
                                                            {typeDates.map((item) => {
                                                                return (
                                                                    <div className="row my-3">
                                                                        <div className="col modal-page">
                                                                            <div className="col w-100">
                                                                                <p key={item.id}>{item.names.uz}</p>
                                                                            </div>
                                                                            <div className="col">
                                                                                <BootstrapSwitchButton  checked={true} onstyle={"primary"} offstyle={"info"} />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })}
                                                        </div>
                                                        <div className="col">
                                                            {langDates.map((item) => {
                                                                return (
                                                                    <div className="row my-3">
                                                                        <div className="col modal-page">
                                                                            <div className="col w-100">
                                                                                <p key={item.id}
                                                                                   value={item.id}>{item.names.uz}</p>
                                                                            </div>
                                                                            <div className="col">
                                                                                <BootstrapSwitchButton  checked={true} onstyle={"primary"} offstyle={"info"} />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })}
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </ModalBody>
                                        <ModalFooter>
                                            <div className={'float-right'}>
                                                <button form={'lang'}
                                                        className={' btn btn-success'}>{t('admin.editBtn')}</button>

                                                <button onClick={() => this.editModal(false)}
                                                        className={'btn btn-success'}>{t('admin.closeBtn')}</button>
                                            </div>
                                        </ModalFooter>
                                    </Modal>

                                    <div className="cols">
                                        <div className="row">
                                            <div className="col mb-4">
                                                <input type="text" className={'search'} placeholder={'Search...'}/>
                                                <button onClick={() => this.openModal(true)}
                                                        className={'btns btn float-right'}
                                                        style={{width: 100, fontSize: 12}}>
                                                    <RiIcons.RiFolderAddFill className={'mr-2'} style={{fontSize: 15}}/>
                                                    {t('admin.addBtn')}
                                                </button>
                                            </div>
                                        </div>
                                        <table className={'table  text-center table-hover table-bordered'}>
                                            <thead>
                                            <tr>
                                                <th>№</th>
                                                <th>Uz</th>
                                                <th>En</th>
                                                <th>Ru</th>
                                                <th>Ta'lim turlari</th>
                                                <th>Ta'lim tillari</th>
                                                <th> </th>
                                                <th> </th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>
                                                    ACCA
                                                </td>
                                                <td>
                                                    ACCA
                                                </td>
                                                <td>
                                                    ACCA
                                                </td>
                                                <td style={{width: 150, paddingLeft: '5%'}}>
                                                    <tr>
                                                        salom
                                                    </tr>
                                                    <tr>
                                                        salom
                                                    </tr>
                                                    <tr>
                                                        salom
                                                    </tr>
                                                </td>
                                                <td style={{width: 150, paddingLeft: '5%'}}>
                                                    <tr>
                                                        salom
                                                    </tr>
                                                    <tr>
                                                        salom
                                                    </tr>
                                                    <tr>
                                                        salom
                                                    </tr>

                                                </td>

                                                <td style={{width: 30}}>
                                                    <button style={{margin:0}} className={'btns btn'} onClick={() => this.editFacultyIds(1)}>
                                                        <FaIcons.FaEdit/>
                                                    </button>
                                                </td>
                                                <td style={{width: 30}}>
                                                    <BootstrapSwitchButton   checked={true} onstyle={"primary"} offstyle={"info"} />
                                                </td>
                                            </tr>

                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        );
    }
}

export default Faculty;