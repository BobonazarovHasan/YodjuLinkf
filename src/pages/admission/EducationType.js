import React, {Component} from 'react';
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";

import '../../css/admissionStyle/EducationType.css';
import * as RiIcons from "react-icons/ri";
import axios from "axios";
import {Modal, ModalBody, ModalHeader} from "reactstrap";
import {ModalFooter} from "react-bootstrap";
import AdminNavbar from "../../component/AdminNavbar";

import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';

const { SearchBar } = Search;
//
// import sun from "../../image/adminIcons/clarity_sun-solid.svg";
// import moon from "../../image/adminIcons/cil_moon.svg";
// import book from "../../image/adminIcons/mdi_book-education-outline.svg";

// import {BASE_URL} from '../../utils/config';

// export const PATH= BASE_URL+'/admin/education-type';

class EducationType extends Component {

    constructor(props) {
        super(props);
        this.state = {
            typeDates: [],
            show: false,
            editShow: false,
            editId:0,
        }
    }

    componentDidMount() {
        this.queryType();
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

    queryType = () => {
            const _this = this;
            axios.get('http://localhost:8080/api/v1/admin/education-language').then(res => _this.setState({typeDates: res.data.content}))
    };

    addType = (event) => {
        event.preventDefault();
        axios({
            url: 'http://localhost:8080/api/v1/admin/education-type',
            method: 'put',
            data: {
                names: {
                    uz: event.target[0].value,
                    en: event.target[1].value,
                    ru: event.target[2].value
                },
                active: true
            }
        }).then(() => {
            this.openModal(false)
            this.queryType();
        })
    };

    editTypeIds=(id)=>{
        this.editModal(true)
        this.setState({
            editId:id
        })
    }
    editType = (event) => {
        event.preventDefault();
        const {editId}=this.state;
        axios({
            url:  'http://localhost:8080/api/v1/admin/education-type',
            method: 'post',
            data: {
                id:editId,
                names: {
                    uz: event.target[0].value,
                    en: event.target[1].value,
                    ru: event.target[2].value,
                },
                active: true
            }
        }).then(() => {

            this.queryType()
            this.editModal(false)
        })
    }

    removeType=(id)=>{
        axios({
            url: 'http://localhost:8080/api/v1/admin/education-type/',
            method:'delete'
        }).then((res) => {
            const posts = this.state.typeDates.filter(item => item.id !== id);
            this.setState({
               typeDates:posts
           })
        })
    }




    render() {

        const {t,i18n}=this.props;

        const {typeDates,editShow, show} = this.state


        return (
            <div>
                <AdminNavbar t={t} i18n={i18n}/>

                    <div className={'admissions container'}>
                        <div className="row pt-5">
                            <div className=" admin-cols col offset-2 pt-4">
                                <div className={'education'}>

                                    <Modal isOpen={show}>
                                        <header>
                                            <button className={'btn float-lg-right'} style={{fontSize:30}} onClick={()=>this.openModal(false)}>&times;</button>
                                            <h3 className={'m-3'}>Ta`lim turini qo`shish</h3>
                                        </header>
                                        <ModalBody>
                                            <form id={'lang'} onSubmit={this.addType}>
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

                                            </form>
                                        </ModalBody>
                                        <ModalFooter>
                                            <div className={'float-right'}>
                                                <button form={'lang'} className={' btn btn-success'}>{t('admin.addBtn')}</button>

                                                <button onClick={() => this.openModal(false)} className={'btn btn-success'}>{t('admin.closeBtn')}</button>
                                            </div>
                                        </ModalFooter>
                                    </Modal>
                                    <Modal isOpen={editShow}>
                                        <header>
                                            <button className={'btn float-lg-right'} style={{fontSize:30}} onClick={()=>this.editModal(false)}>&times;</button>
                                            <h3 className={'m-3'}>Ta`lim turini o`zgartirish</h3>
                                        </header>
                                        <ModalBody>
                                            <form id={'lang'} onSubmit={this.editType}>
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

                                            </form>
                                        </ModalBody>
                                        <ModalFooter>
                                            <div className={'float-right'}>
                                                <button form={'lang'} className={' btn btn-success'}>{t('admin.editBtn')}</button>

                                                <button onClick={() => this.editModal(false)} className={'btn btn-success'}>{t('admin.closeBtn')}</button>
                                            </div>
                                        </ModalFooter>
                                    </Modal>


                                    <div className="cols">
                                        <ToolkitProvider
                                            bootstrap4
                                            keyField="id"
                                            data={typeDates}
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
                                                                <button  className={'btn my-0'} onClick={()=>this.editTypeIds(rowContent)}>
                                                                    <FaIcons.FaEdit/>
                                                                </button>
                                                                <button  className={'btn my-0'} onClick={()=>this.removeType(rowContent)}>
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
                                                                        text: 'All', value: typeDates.length
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
                                        {/*        <th>Uz</th>*/}
                                        {/*        <th>En</th>*/}
                                        {/*        <th>Ru</th>*/}
                                        {/*        <th>&nbsp;</th>*/}
                                        {/*        <th>&nbsp;</th>*/}
                                        {/*    </tr>*/}
                                        {/*    </thead>*/}
                                        {/*    <tbody>*/}
                                        {/*    {langDates.map((item, index) => {*/}
                                        {/*        return (*/}
                                        {/*            <tr>*/}
                                        {/*                <td style={{width: 50}}>{index+1}</td>*/}
                                        {/*                <td>*/}
                                        {/*                    {item.names.en}*/}
                                        {/*                </td>*/}
                                        {/*                <td>*/}
                                        {/*                    {item.names.ru}*/}
                                        {/*                </td>*/}
                                        {/*                <td>*/}
                                        {/*                    {item.names.uz}*/}

                                        {/*                </td>*/}
                                        {/*                <td style={{width: 30}}>*/}
                                        {/*                    <button style={{margin:0}} className={'btn'} onClick={()=>this.editLangIds(item.id)}>*/}
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

export default EducationType;