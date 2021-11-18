import React, {Component} from 'react';
import '../../css/admissionStyle/Statistics.css';

import sun from '../../image/adminIcons/clarity_sun-solid.svg';
import moon from '../../image/adminIcons/cil_moon.svg';
import book from '../../image/adminIcons/mdi_book-education-outline.svg';
import ReactFC from 'react-fusioncharts';

import FusionMaps from 'fusioncharts/fusioncharts.maps';
import FusionCharts from 'fusioncharts';
import Column2D from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import Uzbekistan from "fusionmaps/maps/fusioncharts.uzbekistan";
import {useTranslation} from "react-i18next";
import AdminNavbar from "../../component/AdminNavbar";
import {Scrollbars} from "react-custom-scrollbars";
import {Tab, TabList, TabPanel, Tabs} from "react-web-tabs";
import * as ImIcons from "react-icons/bi";
import {Link} from "react-router-dom";

ReactFC.fcRoot(FusionCharts, FusionMaps, Uzbekistan, Column2D, FusionTheme);

class Statistics extends Component {

    render() {
        function buttons() {
            const acc = document.getElementsByClassName("static");
            let i;
            for (i = 0; i < acc.length; i++) {
                acc[i].addEventListener("click", function () {
                    this.classList.toggle("active");
                    const panel = this.nextElementSibling;
                    if (panel.style.maxHeight) {
                        panel.style.maxHeight = null;
                    } else {
                        panel.style.maxHeight = panel.scrollHeight + "px";
                    }
                })
            }
        }

        const {t,i18n}=this.props;

        const categories = [{
            "category": [

                {
                    "label": "21.02"
                },
                {
                    "label": "22.02"
                },
                {
                    "label": "23.02"
                },
                {
                    "label": "24.02"
                },
                {
                    "label": "25.02"
                },
                {
                    "label": "26.02"
                },
                {
                    "label": "27.02"
                },
                {
                    "label": "28.02"
                },
                {
                    "label": "01.03"
                },
                {
                    "label": "02.03"
                },
                {
                    "label": "03.03"
                },
                {
                    "label": "04.03"
                }
            ]
        }]
        const dataset = [
            {
                "seriesName": "Qiz bolalar",
                "renderAs": "line",
                "data": [
                    {
                        "value": "25"
                    },
                    {
                        "value": "16"
                    },
                    {
                        "value": "10"
                    },
                    {
                        "value": "11"
                    },
                    {
                        "value": "22"
                    },
                    {
                        "value": "25"
                    },
                    {
                        "value": "8"
                    },
                    {
                        "value": "24"
                    },
                    {
                        "value": "10"
                    },
                    {
                        "value": "11"
                    },
                    {
                        "value": "5"
                    },
                    {
                        "value": "13"
                    }
                ]
            },
            {
            "seriesName": "O`g`il bolalar",
            "renderAs": "line",
            "data": [
                {
                    "value": "16"
                },
                {
                    "value": "20"
                },
                {
                    "value": "18"
                },
                {
                    "value": "19"
                },
                {
                    "value": "15"
                },
                {
                    "value": "21"
                },
                {
                    "value": "16"
                },
                {
                    "value": "20"
                },
                {
                    "value": "17"
                },
                {
                    "value": "25"
                },
                {
                    "value": "19"
                },
                {
                    "value": "23"
                }
            ]
        }
        ]
        const chartConfigs = {
            type: 'mscombi2d',// The chart type
            width: '100%', // Width of the chart
            height: '330', // Height of the chart
            dataFormat: 'json', // Data type
            dataSource: {
                "chart": {
                    "divlineColor": "#999999",
                    "divLineIsDashed": "1",
                    "divLineDashLen": "1",
                    "divLineGapLen": "1",
                    "toolTipColor": "#ffffff",
                    "toolTipBorderThickness": "0",
                    "toolTipBgColor": "#000000",
                    "toolTipBgAlpha": "80",
                    "toolTipBorderRadius": "2",
                    "toolTipPadding": "5",
                    "theme": "fusion"
                },
                "categories": categories,
                "dataset": dataset
            }
        }


        const chartData = [
            {
                "label": "Erkaklar",
                "value": "70",
                "valuePosition": "inside"
            },
            {},
            {
                "label": "Ayollar",
                "value": "30",
                "valuePosition": "inside"
            },
            {}
        ];
        const pie2d = {
            type: "pie2D", // The chart type
            width: "500", // Width of the chart
            height: "418", // Height of the chart

            dataFormat: "json", // Data type
            dataSource: {
                chart: {

                    "caption": "Jins bo`yicha ma'lumot",
                    "bgColor": '#ffffff',
                    "showLegend": "1",
                    "centerLabel": "Revenue from $label: $value",
                    "centerLabelBold": "1",
                    "showTooltip": "0",
                    "decimals": "0",
                    "theme": "fusion"
                },
                data: chartData
            }
        };


        const colorrange = {
            "minvalue": "0",
            "code": "#FFE0B2",
            "gradient": "1",
            "color": [{
                "minvalue": "0.5",
                "maxvalue": "1.0",
                "color": "#FFD74D"
            }, {
                "minvalue": "1.0",
                "maxvalue": "2.0",
                "color": "#FB8C00"
            }, {
                "minvalue": "2.0",
                "maxvalue": "3.0",
                "color": "#efd9ce"
            }],
        };
        const mapCharts = {
            renderAt: 'chart-container',
            type: '/maps/uzbekistan',
            width: '480',
            height: '448',
            dataFormat: 'json',
            dataSource: {
                "chart": {
                    "animation": "0",
                    "showbevel": "0",
                    "usehovercolor": "1",
                    "showlegend": "1",
                    "legendposition": "BOTTOM",
                    "legendborderalpha": "0",
                    "legendallowdrag": "0",
                    "legendshadow": "0",

                    "caption": "Regionlar bo`yicha ma'lumot",
                    "numbersuffix": "%",
                    "includevalueinlabels": "1",
                    "labelsepchar": ": ",
                    "entityFillHoverColor": "#FFF9C4",
                    "theme": "fusion",
                    "hovervalue": "Tessttt"
                },
                "colorrange": colorrange,
                "data": [
                    {
                        "id": "UZ.AN",
                        "value": "0.82",
                    },
                    {
                        "id": "UZ.BU",
                        "value": "2.42",
                    },
                    {
                        "id": "UZ.FA",
                        "value": "1.78",
                    },
                    {
                        "id": "UZ.JI",
                        "value": ".40",
                    },
                    {
                        "id": "UZ.QR",
                        "value": "2.58",
                    },
                    {
                        "id": "UZ.QA",
                        "value": "1.30",
                    },
                    {
                        "id": "UZ.NG",
                        "value": "1.22",
                    },
                    {
                        "id": "UZ.NW",
                        "value": "2.6",
                    },
                    {
                        "id": "UZ.SA",
                        "value": ".32",
                    },
                    {
                        "id": "UZ.SI",
                        "value": "1.02",
                    },
                    {
                        "id": "UZ.SU",
                        "value": ".12",
                    },
                    {
                        "id": "UZ.TA",
                        "value": "2.82",
                    },
                    {
                        "id": "UZ.TK",
                        "value": "1.33",
                    },
                    {
                        "id": "UZ.KH",
                        "value": ".19",
                    },


                ]

            }
        };

        return (

            <div>
                <AdminNavbar t={t} i18n={i18n}/>
                    <div className={'admissions container'}>
                        <div className="row pt-5">
                            <div className=" admin-cols col offset-2">
                                <div className={'statistics '}>
                                    <div className="row">
                                        <div className="col">
                                            <div className={'text-center m-4'}>
                                                Kunlik statistika
                                            </div>
                                            <div className={'line-chart'}>
                                                <ReactFC
                                                    {...chartConfigs}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div>
                                            <ReactFC {...pie2d} />
                                        </div>

                                        <div>
                                            <ReactFC {...mapCharts} />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <button className={"static d-flex mt-2"} onClick={buttons}>
                                            <p className={'mx-auto w-50 my-3'}>Chiroy estetikasi</p>
                                            <p className={'mx-auto my-3'}><b>2053</b></p>
                                        </button>
                                        <div className="panel">
                                            <table className={'table'}>
                                                <tbody>
                                                <tr>
                                                    <td>
                                                        <div className={'boy  my-3  mx-3'}> Bola: <div
                                                            className={'boy my-1'}><b>456</b></div></div>
                                                        <div className={'girl my-3 mx-4'}> Qiz: <div
                                                            className={'girl my-1'}><b>456</b></div></div>
                                                    </td>
                                                    <td>
                                                        <div className={'my-3 mx-3'}><img src={sun} alt={'#'}/></div>
                                                        <div className={'my-3 mx-4'}>1332</div>
                                                    </td>
                                                    <td>
                                                        <div className={'my-3 mx-3'}><img src={moon} alt={'#'}/></div>
                                                        <div className={'my-3 mx-4'}>1332</div>
                                                    </td>
                                                    <td>
                                                        <div className={'my-3 mx-3'}><img src={book} alt={'#'}/></div>
                                                        <div className={'my-3 mx-4'}>1332</div>
                                                    </td>
                                                    <td>
                                                        <div className={' boy my-3 mx-2'}><b>Qabul qilinganlar:</b>
                                                        </div>
                                                        <div className={'my-3 mr-3 ml-2'}> 1332</div>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <button className={"static d-flex mt-2"} onClick={buttons}>
                                            <p className={'mx-auto w-50 my-3'}>Koreys tili biologiyasi</p>
                                            <p className={'mx-auto  my-3'}><b>2053</b></p>
                                        </button>
                                        <div className="panel">
                                            <table className={'table'}>
                                                <tbody>
                                                <tr>
                                                    <td>
                                                        <div className={'boy  my-3  mx-3'}> Bola: <div
                                                            className={'boy my-1'}><b>456</b></div></div>
                                                        <div className={'girl my-3 mx-4'}> Qiz: <div
                                                            className={'girl my-1'}><b>456</b></div></div>
                                                    </td>
                                                    <td>
                                                        <div className={'my-3 mx-3'}><img src={sun} alt={'#'}/></div>
                                                        <div className={'my-3 mx-4'}>1332</div>
                                                    </td>
                                                    <td>
                                                        <div className={'my-3 mx-3'}><img src={moon} alt={'#'}/></div>
                                                        <div className={'my-3 mx-4'}>1332</div>
                                                    </td>
                                                    <td>
                                                        <div className={'my-3 mx-3'}><img src={book} alt={'#'}/></div>
                                                        <div className={'my-3 mx-4'}>1332</div>
                                                    </td>
                                                    <td>
                                                        <div className={' boy my-3 mx-2'}><b>Qabul qilinganlar:</b>
                                                        </div>
                                                        <div className={'my-3 mr-3 ml-2'}> 1332</div>
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
            </div>
        );
    }
}

export default Statistics;