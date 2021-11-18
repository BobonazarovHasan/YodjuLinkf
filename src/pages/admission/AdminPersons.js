import React, {Component} from 'react';
// import * as BiIcons from "react-icons/bi";
import * as ImIcons from "react-icons/im";
import * as MdIcons from "react-icons/md";
import * as FaIcons from "react-icons/fa";
// import {Link} from "react-router-dom";
// import {TabPanel} from "react-web-tabs";
import '../../css/admissionStyle/AdminPersons.css';
import * as RiIcons from "react-icons/ri";
import axios from "axios";
import {Modal, ModalBody, ModalHeader} from "reactstrap";
import {ModalFooter} from "react-bootstrap";
import {useTranslation} from "react-i18next";
import AdminNavbar from "../../component/AdminNavbar";
import {Scrollbars} from "react-custom-scrollbars";
import InputMask from "react-input-mask";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';

const { SearchBar } = Search;

class AdminPersons extends Component{


    constructor(props) {
        super(props);
        this.state = {
            adminPerDates: [],
            adminRoleDates: [],
            show: false,
            editShow: false,
            editId:0,
        }
    }

    componentDidMount() {
        this.queryAdminPer();
        this.queryAdminPerRole();
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

    queryAdminPer = () => {
        const _this = this;
        axios.get('http://localhost:8080/api/v1/admin/admin-member/').then(res=>_this.setState({adminPerDates: res.data.content}))


    };

    queryAdminPerRole = () => {
        const _this = this;
        axios.get('http://localhost:8080/api/v1/admin/admin-member/roles/').then(res=>_this.setState({adminRoleDates: res.data}))

    };

    addAdminPer = (event) => {
        event.preventDefault()
        axios({
            url: 'http://localhost:8080/api/v1/admin/admin-member/',
            method: 'put',
            data: {
                firstName:event.target[0].value ,
                lastName: event.target[3].value,
                middleName:event.target[1].value,
                phone: event.target[4].value,
                password: event.target[2].value,
                role: {
                    id: event.target[5].value,
                }
            }
        }).then(() => {

            this.queryAdminPer();
            this.openModal(false)
        })
    };

    editAdminPerIds=(id)=>{
        this.editModal(true)
        this.setState({
            editId:id
        })
    }
    editAdminPer = (event) => {
        const {editId}=this.state;
        axios({
            url: 'http://localhost:8080/api/v1/admin/admin-member/',
            method: 'post',
            data: {
                id:editId,
                firstName:event.target[0].value ,
                lastName: event.target[3].value,
                middleName:event.target[1].value,
                phone: event.target[4].value,
                password: event.target[2].value,
                role: {
                    id: event.target[5].value,
                }
            }
        }).then(() => {

            this.queryLang()
            this.editModal(false)
        })
    }

    render() {
        const {adminPerDates, adminRoleDates, editShow, show} = this.state
        const {t, i18n} = this.props;

        return (
            <div>
                <AdminNavbar t={t} i18n={i18n}/>
                    <div className={'admissions container'}>
                        <div className="row pt-5">
                            <div className=" admin-cols col offset-2 pt-4">

                                <div className={'adminPersons'}>


                                    <Modal isOpen={show}>
                                        <header>
                                            <button className={'btn float-lg-right'} style={{fontSize: 30}}
                                                    onClick={() => this.openModal(false)}>&times;</button>
                                            <h3 className={'m-3'}>Admin qo`shish</h3>
                                        </header>
                                        <ModalBody>
                                            <form id={'lang'} onSubmit={this.addAdminPer}>
                                                <div className="container-fluid">
                                                    <div className="row">
                                                        <div className="col">
                                                            <label>
                                                                Ism
                                                            </label>
                                                            <input type="text" name={'firstName'}
                                                                   className={'form-control mb-2'} />
                                                            <label>
                                                                Otasining ismi
                                                            </label>
                                                            <input type="text" name={'middleName'}
                                                                   className={'form-control mb-2'} />
                                                            <label>
                                                                Parol
                                                            </label>
                                                            <input type="password" name={'password'}
                                                                   className={'form-control mb-2'} />
                                                        </div>
                                                        <div className="col">
                                                            <label>
                                                                Familiya
                                                            </label>
                                                            <input type="text" name={'lastName'}
                                                                   className={'form-control mb-2'} />
                                                            <label>
                                                                Telefon raqami
                                                            </label>
                                                            {/*<input type="text" name={'phone'}*/}
                                                            {/*       className={'form-control mb-2'}/>*/}
                                                            <InputMask  id={'phone-1'}
                                                                       className={'form-control mb-2'}
                                                                       mask={'+999(99) 999-99-99'}
                                                                       placeholder={'+998(94) 123-45-67'} />
                                                            <label>
                                                                Vazifasi
                                                            </label>
                                                            <select name="adminRole" className={'form-control'} >
                                                                {adminRoleDates.map((item) => {
                                                                    return (
                                                                        <option className={'form-control'} key={item.id}
                                                                                value={item.id}>
                                                                            {item.name}
                                                                        </option>
                                                                    )
                                                                })}
                                                            </select>

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
                                    <Modal isOpen={editShow}>
                                        <header>
                                            <button className={'btn float-lg-right'} style={{fontSize: 30}}
                                                    onClick={() => this.editModal(false)}>&times;</button>
                                            <h3 className={'m-3'}>Adminni o`zgartirish</h3>
                                        </header>
                                        <ModalBody>
                                            <form id={'lang'} onSubmit={this.editAdminPer}>
                                                <div className="container-fluid">
                                                    <div className="row">
                                                        <div className="col">
                                                            <label>
                                                                Ism
                                                            </label>
                                                            <input type="text" name={'firstName'}
                                                                   className={'form-control mb-2'} />
                                                            <label>
                                                                Otasining ismi
                                                            </label>
                                                            <input type="text" name={'middleName'}
                                                                   className={'form-control mb-2'} />
                                                            <label>
                                                                Parol
                                                            </label>
                                                            <input type="password" name={'password'}
                                                                   className={'form-control mb-2'} />
                                                        </div>
                                                        <div className="col">
                                                            <label>
                                                                Familiya
                                                            </label>
                                                            <input type="text" name={'lastName'}
                                                                   className={'form-control mb-2'} />
                                                            <label>
                                                                Telefon raqami
                                                            </label>
                                                            <InputMask  id={'phone-1'}
                                                                        className={'form-control mb-2'}
                                                                        mask={'+999(99) 999-99-99'}
                                                                        placeholder={'+998(94) 123-45-67'} />
                                                            <label>
                                                                Vazifasi
                                                            </label>
                                                            <select name="adminRole" className={'form-control'} >
                                                                {adminRoleDates.map((item) => {
                                                                    return (
                                                                        <option className={'form-control'} key={item.id}
                                                                                value={item.id}>
                                                                            {item.name}
                                                                        </option>
                                                                    )
                                                                })}
                                                            </select>
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
                                        <ToolkitProvider
                                            bootstrap4
                                            keyField="id"
                                            data={adminPerDates}
                                            // loading={true}
                                            // overlay={overlayFactory({ spinner: true, background: 'rgba(192,192,192,0.3)' })}
                                            columns={[
                                                {
                                                    dataField: "id",
                                                    text: "Id",
                                                    sort: true,
                                                    headerStyle:{
                                                        fontWeight:'bold',
                                                        textAlign:'center',
                                                        width:'0.4%'
                                                    }

                                                },

                                                {
                                                    dataField: "lastName",
                                                    text: "Familiya",
                                                    sort: true,
                                                    headerStyle:{
                                                        fontWeight:'bold',
                                                        textAlign:'center',
                                                        width:'1%'
                                                    }

                                                },
                                                {
                                                    dataField: "firstName",
                                                    text: "Ism",
                                                    sort: true,
                                                    headerStyle:{
                                                        fontWeight:'bold',
                                                        textAlign:'center',
                                                        width:'1%'
                                                    }

                                                },
                                                {
                                                    dataField: "middleName",
                                                    text: "Sharif",
                                                    sort: true,
                                                    headerStyle:{
                                                        fontWeight:'bold',
                                                        textAlign:'center',
                                                        width:'1%'
                                                    }

                                                },
                                                {
                                                    dataField: "role.name",
                                                    text: "Vazifasi",
                                                    sort: true,
                                                    headerStyle:{
                                                        fontWeight:'bold',
                                                        textAlign:'center',
                                                        width:'2%'
                                                    }

                                                },
                                                {
                                                    dataField: "id",
                                                    text: "Amount",
                                                    headerStyle: () => {
                                                        return {
                                                            fontWeight: 'bold',
                                                            textAlign: 'center',
                                                            width: '1.2%'
                                                        }
                                                    },
                                                    formatter: (rowContent, row) => {
                                                        return (
                                                            <div>
                                                                <button  className={'btn my-0'}>
                                                                    <ImIcons.ImKey/>
                                                                </button>
                                                                <button  className={'btn my-0'} onClick={()=>this.editAdminPerIds(rowContent)}>
                                                                    <FaIcons.FaEdit/>
                                                                </button>
                                                                <button  className={'btn my-0'}>
                                                                    <MdIcons.MdDelete/>
                                                                </button>
                                                            </div>
                                                        )
                                                    }
                                                }
                                            ]}
                                            search
                                        >
                                            {
                                                props => (
                                                    <div>
                                                        <div className="row">
                                                            <div className="col mb-2">
                                                                <SearchBar { ...props.searchProps } className={'search'} placeholder={'Search...'} />


                                                                <button onClick={() => this.openModal(true)}
                                                                        className={'btn float-right'}
                                                                        style={{width: 100, fontSize: 12}}>
                                                                    <RiIcons.RiFolderAddFill className={'mr-2'} style={{fontSize: 15}}/>
                                                                    {t('admin.addBtn')}
                                                                </button>
                                                            </div>
                                                        </div>

                                                        <BootstrapTable
                                                            rowStyle={{textAlign:'center'}}
                                                            defaultSorted={[{
                                                                dataField: 'id',
                                                                order: 'asc'
                                                            }]}
                                                            pagination={paginationFactory({
                                                                showTotal: true,
                                                                className:'page',
                                                                sizePerPageList: [
                                                                    {
                                                                        text: '5', value: 5
                                                                    },
                                                                    {
                                                                        text: '10', value: 10
                                                                    },
                                                                    {
                                                                        text: '25', value: 25
                                                                    },
                                                                    {
                                                                        text: '50', value: 50
                                                                    },
                                                                    {
                                                                        text: 'All', value: adminPerDates.length
                                                                    },
                                                                ],
                                                                firstPageText: 'First',
                                                                prePageText: 'Prev',
                                                                nextPageText: 'Next ',
                                                                lastPageText: 'Last',
                                                                nextPageTitle: 'Go to next',
                                                                prePageTitle: 'Go to previous',
                                                                firstPageTitle: 'Go to first',
                                                                lastPageTitle: 'Go to last',
                                                            })}
                                                            { ...props.baseProps }
                                                        />
                                                    </div>
                                                )
                                            }
                                        </ToolkitProvider>

                                        {/*<table className={'table text-center table-hover table-bordered'}>*/}
                                        {/*    <thead>*/}
                                        {/*    <tr>*/}
                                        {/*        <th>№</th>*/}
                                        {/*        <th>F.I.O</th>*/}
                                        {/*        <th>Vazifasi</th>*/}
                                        {/*        <th> </th>*/}
                                        {/*        <th> </th>*/}
                                        {/*        <th> </th>*/}
                                        {/*    </tr>*/}
                                        {/*    </thead>*/}
                                        {/*    <tbody>*/}
                                        {/*    {adminPerDates.map((item, index) => {*/}
                                        {/*        return (*/}
                                        {/*            <tr>*/}
                                        {/*                <td style={{width: 50}}>{index + 1}</td>*/}
                                        {/*                <td>*/}
                                        {/*                    {item.lastName} {item.firstName} {item.middleName}*/}
                                        {/*                </td>*/}
                                        {/*                <td>*/}
                                        {/*                    /!*{adminRoleDates.map((lan)=>{*!/*/}
                                        {/*                    /!*    if (item.role.id===lan.id)*!/*/}
                                        {/*                    /!*    return(*!/*/}
                                        {/*                    /!*        lan.name*!/*/}
                                        {/*                    /!*    )*!/*/}
                                        {/*                    /!*})}*!/*/}
                                        {/*                    {item.role.name}*/}
                                        {/*                </td>*/}
                                        {/*                <td style={{width: 50}}>*/}
                                        {/*                    <button style={{margin:0}} className={'btn'}>*/}
                                        {/*                        <ImIcons.ImKey/>*/}
                                        {/*                    </button>*/}
                                        {/*                </td>*/}
                                        {/*                <td style={{width: 30}}>*/}
                                        {/*                    <button style={{margin:0}} className={'btn'}*/}
                                        {/*                            onClick={() => this.editAdminPerIds(item.id)}>*/}
                                        {/*                        <FaIcons.FaEdit/>*/}
                                        {/*                    </button>*/}
                                        {/*                </td>*/}
                                        {/*                <td style={{width: 30}}>*/}
                                        {/*                    <button style={{margin:0}} className={'btn'}>*/}
                                        {/*                        <MdIcons.MdDelete/>*/}
                                        {/*                    </button>*/}
                                        {/*                </td>*/}
                                        {/*            </tr>*/}
                                        {/*        )*/}
                                        {/*    })}*/}
                                        {/*    </tbody>*/}
                                        {/*</table>*/}
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
            </div>
        );
    }
}

export default AdminPersons;