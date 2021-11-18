import React, {Component} from 'react';
import * as RiIcons from "react-icons/ri";
import * as FaIcons from "react-icons/fa";
import '../../css/admissionStyle/Regions.css';
import {Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import Switch from "react-switch";
import axios from "axios";
import AdminNavbar from "../../component/AdminNavbar";
import {Scrollbars} from "react-custom-scrollbars";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import * as MdIcons from "react-icons/md";
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import BootstrapSwitchButton from "bootstrap-switch-button-react";

const { SearchBar } = Search;

class Regions extends Component {

    constructor(props) {
        super(props);
        this.state = {
            regionDates: [],
            countrySelect: [],
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


    queryRegion = () => {
        const _this = this;
        axios.get('http://localhost:8080/api/v1/admin/region').then(res => _this.setState({regionDates: res.data.content}))
    }

    queryCountry = () => {

        const _this = this;
        axios.get('http://localhost:8080/api/v1/admin/country').then(res => _this.setState({countrySelect: res.data.content}))
    }

    addRegion = (event) => {
        event.preventDefault();
        axios({
            url: 'http://localhost:8080/api/v1/admin/region',
            method: 'put',
            data: {
                code: 'code',
                names: {
                    uz: event.target[1].value,
                    en: event.target[2].value,
                    ru: event.target[3].value

                },
                active: true,
                "country": {
                    "id": event.target[0].value,
                }
            }
        }).then(() => {

            this.queryRegion()
            this.openModal(false)
        })
    }

    editRegionIds = (id) => {
        this.editModal(true)
        this.setState({
            editId: id
        })
    }
    editRegion = (event) => {
        const {editId} = this.state;
        event.preventDefault();
        axios({
            url: 'http://localhost:8080/api/v1/admin/region',
            method: 'post',
            data: {
                id: editId,
                code: 'codes',
                names: {
                    uz: event.target[1].value,
                    en: event.target[2].value,
                    ru: event.target[3].value

                },
                "active": true,
                "country": {
                    "id": event.target[0].value,
                }
            }
        }).then(() => {

            this.queryRegion()
            this.editModal(false)
        })
    }

    componentDidMount() {
        this.queryRegion();
        this.queryCountry();
    }


    render() {
        const {t, i18n} = this.props
        const {regionDates, countrySelect, show, editShow, checked} = this.state;
        return (

            <div>
                <AdminNavbar t={t} i18n={i18n}/>
                    <div className={'admissions container'}>
                        <div className="row pt-5">
                            <div className=" admin-cols col offset-2 pt-4">
                                <div className={'regions'}>
                                    <Modal isOpen={show}>
                                        <header>
                                            <button className={'btn float-lg-right'} style={{fontSize: 30}}
                                                    onClick={() => this.openModal(false)}>&times;</button>
                                            <h3 className={'m-3'}>Viloyat qo`shish</h3>
                                        </header>
                                        <ModalBody>
                                            <form id={'lang'} onSubmit={this.addRegion}>
                                                <label>
                                                    Mamlakat
                                                </label>
                                                <select name="select" className={'form-control mb-3'} id="">
                                                    {countrySelect.map((item, index) => {
                                                        return (
                                                            <option className={'form-control'} key={item.id}
                                                                    value={item.id}>{item.names.uz}</option>
                                                        )
                                                    })}
                                                </select>
                                                <label>
                                                    Uz
                                                </label>
                                                <input type="text" name={'uz'} className={'form-control mb-3'}/>
                                                <label>
                                                    En
                                                </label>
                                                <input type="text" name={'en'} className={'form-control mb-3'}/>
                                                <label>
                                                    Ru
                                                </label>
                                                <input type="text" name={'ru'} className={'form-control mb-3'}/>
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
                                            <h3 className={'m-3'}>Viloyatni o`zgartirish</h3>
                                        </header>
                                        <ModalBody>
                                            <form id={'lang'} onSubmit={this.editRegion}>
                                                <label>
                                                    Mamlakat
                                                </label>
                                                <select name="select" className={'form-control mb-3'} id="">
                                                    {countrySelect.map((item, index) => {
                                                        return (
                                                            <option className={'form-control'} key={item.id}
                                                                    value={item.id}>{item.names.uz}</option>
                                                        )
                                                    })}
                                                </select>
                                                <label>
                                                    Uz
                                                </label>
                                                <input type="text" name={'uz'} className={'form-control mb-3'}/>
                                                <label>
                                                    En
                                                </label>
                                                <input type="text" name={'en'} className={'form-control mb-3'}/>
                                                <label>
                                                    Ru
                                                </label>
                                                <input type="text" name={'ru'} className={'form-control mb-3'}/>
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
                                            keyField="id" data={regionDates}
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
                                                        width: '0.6%'

                                                    }

                                                },
                                                {
                                                    dataField: "names.uz",
                                                    text: "Uz",
                                                    sort: true,
                                                    headerStyle:{
                                                        fontWeight:'bold',
                                                        textAlign:'center',
                                                        width:'3%'


                                                    }
                                                },
                                                {
                                                    dataField: "names.en",
                                                    text: "En",
                                                    sort: true,
                                                    headerStyle:{
                                                        fontWeight:'bold',
                                                        textAlign:'center',
                                                        width:'4%'
                                                    }
                                                },
                                                {
                                                    dataField: "names.ru",
                                                    text: "Ru",
                                                    sort: true,
                                                    headerStyle:{
                                                        fontWeight:'bold',
                                                        textAlign:'center',
                                                        width:'3%'
                                                    }
                                                },
                                                {
                                                    dataField: "id",
                                                    text: "Amount",
                                                    headerStyle: () => {
                                                        return {
                                                            fontWeight: 'bold',
                                                            textAlign: 'center',
                                                            width: '1.8%'
                                                        }
                                                    },
                                                    formatter: (rowContent, row) => {
                                                        return (
                                                            <div>
                                                                <button  className={'btns btn my-0 mr-2'} onClick={()=>this.editRegionIds(rowContent)}>
                                                                    <FaIcons.FaEdit/>
                                                                </button>
                                                                <BootstrapSwitchButton  checked={row.active} onstyle={"primary"} offstyle={"info"} />
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
                                                                        className={'btns btn float-right'}
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
                                                                        text: 'All', value: regionDates.length
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

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        );
    }
}

export default Regions;