import React, {Component} from "react";
import BootstrapTable from "react-bootstrap-table-next";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import overlayFactory from 'react-bootstrap-table2-overlay';
import axios from "axios";
import * as FaIcons from "react-icons/fa";
import BootstrapSwitchButton from "bootstrap-switch-button-react";

const { SearchBar } = Search;

export default class ProductList extends Component {


    constructor(props) {
        super(props);
        this.state = {
            Items: [],

        }

    }

    componentDidMount() {
        this.queryLang();
    }

    queryLang = () => {
      axios({
            url: 'http://localhost:8080/api/v1/admin/region',
            method: 'get',
        }).then((res) =>
            this.setState({Items: res.data.content})
    )
    }


    render() {


        return (
            <div style={{padding: "100px"}}>
                <BootstrapTable
                    bootstrap4
                    keyField="id" data={this.state.Items}
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
                                width:'1%'
                            }

                        },
                        {
                            dataField: "names.uz",
                            text: "Uz",
                            sort: true,
                            headerStyle:{
                                fontWeight:'bold',
                                textAlign:'center',
                                width:'4%'

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
                                width:'4%'
                            }
                        },
                        {
                            dataField: "id",
                            text: "Ru",
                            sort: true,
                            headerStyle:{
                                fontWeight:'bold',
                                textAlign:'center',
                                width:'4%'
                            },
                                formatter: (rowContent, row) => {
                                    return (
                                        <div>
                                                <button  className={'btn my-0 mr-2'} onClick={()=>this.editDistrictIds(rowContent)}>
                                                <FaIcons.FaEdit/>
                                            </button>
                                            <BootstrapSwitchButton  checked={true} onstyle={"primary"} offstyle={"info"} />
                                        </div>
                                    )
                                }

                        }
                    ]}
                    rowStyle={{textAlign:'center'}}
                    defaultSorted={[{
                                    dataField: 'id',
                                    order: 'asc'
                                }]}
                    pagination={paginationFactory({
                                    showTotal: true,
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

                />
            </div>
        );
    }
};
