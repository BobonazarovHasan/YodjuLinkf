import React, {Component} from 'react';
import * as RiIcons from "react-icons/ri";
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";
import '../../css/admissionStyle/DIstrict.css';
import {Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import Switch from "react-switch";
import axios from "axios";
import AdminNavbar from "../../component/AdminNavbar";

import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import BootstrapSwitchButton from "bootstrap-switch-button-react";

const { SearchBar } = Search;

class District extends Component {

    constructor(props) {
        super(props);
        this.state = {
            districtDates: [],
            regionDates: [],
            show: false,
            editShow: false,
            editId: 0,
            checked: false,
            checkBox: this.checkBox.bind(this),

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
        axios.get('http://localhost:8080/api/v1/admin/region/').then(res => _this.setState({regionDates: res.data.content}))
    }



    queryDistrict = () => {
        const _this = this;
        axios.get('http://localhost:8080/api/v1/admin/city/').then(res => _this.setState({districtDates: res.data.content}))
    }

    addDistrict = (event) => {
        axios({
            url: 'http://localhost:8080/api/v1/admin/city',
            method: 'put',
            data: {
                names: {
                    uz: event.target[1].value,
                    en: event.target[2].value,
                    ru: event.target[3].value

                },
                active: true,
                "region": {
                    id: event.target[0].value,
                }
            }

        }).then(() => {
            this.queryDistrict()
            this.openModal(false)
        })
    }


    editDistrictIds = (id) => {
        this.editModal(true)
        this.setState({
            editId: id
        })
    }


    editDistrict = (event) => {
        const {editId} = this.state;
        axios({
            url: 'http://localhost:8080/api/v1/admin/city',
            method: 'post',
            data: {
                id: editId,
                code: 'codes',
                names: {
                    uz: event.target[1].value,
                    en: event.target[2].value,
                    ru: event.target[3].value

                },
                active: true,
                region: {
                    id:event.target[0].value
                }
            }
        }).then(() => {

            this.queryDistrict()
            this.editModal(false)
        })
    }

    componentDidMount() {
        this.queryDistrict();
        this.queryRegion();
    }



    render() {
        const {districtDates, regionDates, show, editShow, checked} = this.state;
        const {t, i18n} = this.props;
        console.log(this.state.regionDates)

        return (
            <div>
                <AdminNavbar t={t} i18n={i18n}/>

                    <div className={'admissions container'}>
                        <div className="row pt-5">
                            <div className=" admin-cols col offset-2 pt-4">
                                <div className={'district'}>


                                    <Modal isOpen={show}>
                                        <header>
                                            <button className={' btns btn   float-lg-right'} style={{fontSize: 30}}
                                                    onClick={() => this.openModal(false)}>&times;</button>
                                            <h3 className={'m-3'}>Tuman qo`shish</h3>
                                        </header>
                                        <ModalBody>
                                            <form id={'lang'} onSubmit={this.addDistrict}>
                                                <label>
                                                    Viloyat
                                                </label>
                                                <select name="select" className={'form-control mb-3'} id="">
                                                    {regionDates.map((item, index) => {
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
                                                        className={'btns btn btn-success'}>{t('admin.addBtn')}</button>

                                                <button onClick={() => this.openModal(false)}
                                                        className={'btns btn btn-success'}>{t('admin.closeBtn')}</button>
                                            </div>
                                        </ModalFooter>
                                    </Modal>
                                    <Modal isOpen={editShow}>
                                        <header>
                                            <button className={'btns btn float-lg-right'} style={{fontSize: 30}}
                                                    onClick={() => this.editModal(false)}>&times;</button>
                                            <h3 className={'m-3'}>Tumanni o`zgartirish</h3>
                                        </header>
                                        <ModalBody>
                                            <form id={'lang'} onSubmit={this.editDistrict}>
                                                <label>
                                                    Viloyat
                                                </label>
                                                <select name="select" className={'form-control mb-3'}>
                                                    {regionDates.map((item, index) => {
                                                        return (
                                                            <option  className={'form-control'}
                                                                    key={item.id}
                                                                    value={item.id}
                                                            >
                                                                {item.names.uz}
                                                            </option>
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
                                                        className={'btns btn btn-success'}>{t('admin.editBtn')}</button>

                                                <button onClick={() => this.editModal(false)}
                                                        className={'btns btn btn-success'}>{t('admin.closeBtn')}</button>
                                            </div>
                                        </ModalFooter>
                                    </Modal>


                                    <div className="cols">
                                        <ToolkitProvider
                                            bootstrap4
                                            keyField="id"
                                            data={districtDates}
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
                                                    dataField: "region.id",
                                                    text: "Viloyat",
                                                    sort: true,
                                                    headerStyle:{
                                                        fontWeight:'bold',
                                                        textAlign:'center',
                                                        width: '2%'
                                                    },
                                                    // formatter: (rowContent, row) => {
                                                    //     return (
                                                    //         <div>
                                                    //             {regionDates.map((lan)=>{
                                                    //                 if (lan.id===rowContent){
                                                    //                     return(
                                                    //                         <div>
                                                    //                             {lan.names.uz}
                                                    //                         </div>
                                                    //                     )
                                                    //                 }
                                                    //
                                                    //             })}
                                                    //         </div>
                                                    //     )
                                                    // }

                                                },
                                                // {
                                                //     dataField: "region.name",
                                                //     text: "Uz",
                                                //     sort: true,
                                                //     headerStyle:{
                                                //         fontWeight:'bold',
                                                //         textAlign:'center',
                                                //         width:'2%'
                                                //
                                                //     }
                                                // },
                                                {
                                                    dataField: "names.uz",
                                                    text: "Uz",
                                                    sort: true,
                                                    headerStyle:{
                                                        fontWeight:'bold',
                                                        textAlign:'center',
                                                        width:'2%'

                                                    }
                                                },
                                                {
                                                    dataField: "names.en",
                                                    text: "En",
                                                    sort: true,
                                                    headerStyle:{
                                                        fontWeight:'bold',
                                                        textAlign:'center',
                                                        width:'2%'
                                                    }
                                                },
                                                {
                                                    dataField: "names.ru",
                                                    text: "Ru",
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
                                                            width: '1.8%'
                                                        }
                                                    },
                                                    formatter: (rowContent, row) => {
                                                        return (
                                                            <div>
                                                                <button  className={'btns btn my-0 mr-2'} onClick={()=>this.editDistrictIds(rowContent)}>
                                                                    <FaIcons.FaEdit/>
                                                                </button>
                                                                <BootstrapSwitchButton  checked={true} onstyle={"primary"} offstyle={"info"} />
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
                                                                        text: 'All', value: districtDates.length
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

export default District;