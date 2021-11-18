import React, {Component, useState} from 'react';
import logoWide from "../image/intoImage/logo.png";
import {Link, NavLink} from "react-router-dom";
import * as FaIcon from 'react-icons/fa';
import {Icon, InlineIcon} from '@iconify/react';
import bellDot from '@iconify-icons/codicon/bell';
import bellBadgeOutline from '@iconify/icons-mdi/bell-badge-outline';
import bellBadge from '@iconify/icons-mdi/bell-badge';
import MenuEnter from '../image/intoImage/BoshSahifa_icon.svg';
import Visa from '../image/icons/abitur.ruxsatnoma icon.svg';
import MenuPerson from '../image/intoImage/ShaxsiyMalumot_icon.svg';
import Question from '../image/intoImage/SavolJavob_icon.svg';
import Help from '../image/intoImage/yordam_icon.svg';
import Statistics from '../image/intoImage/Statistika_icon.svg';
import Exit from "../image/adminIcons/bx_bx-exit.svg";
import Doc from '../image/icons/Group 113.svg'
import App from '../image/icons/appelatsiya icon.svg'
import '../css/intoCss/MenuNav.css';
import Man from "../image/icons/Vector-Man.svg";
import Popup from "reactjs-popup";
import {Dropdown, Form} from "react-bootstrap";

class MenuNavbar extends Component {


    constructor(props) {
        super(props);
        this.state = {
            showMe: true
        }
    }


    onMouse = (obj, type) => {

        const {showMe} = this.state;

        if (showMe === false) {

            if (type === true) {
                document.getElementById("mySidenav").style.width = "240px";
                document.getElementById("mySidenav").style.transition = '450ms';
                document.getElementById("container").style.transition = '450ms';
                document.getElementById("container").style.marginLeft = "114px";

            } else {
                document.getElementById("mySidenav").style.width = "68px";
                document.getElementById("mySidenav").style.transition = '450ms';
                document.getElementById("container").style.transition = '450ms';
                document.getElementById("container").style.marginLeft = "0px";

            }
            document.getElementById("toggle").style.marginLeft = "65px";
            document.getElementById('sun').style.transform = "rotate(-270deg)";
            document.getElementById('sun').style.transition = '450ms';


            this.setState({
                showMe: true
            })

        } else if (showMe === true) {

            if (type === false) {
                document.getElementById("toggle").style.marginLeft = "245px";
                document.getElementById('sun').style.transform = "rotate(0deg)";
                document.getElementById('sun').style.transition = '500ms';
            }

            document.getElementById("mySidenav").style.width = "240px";
            document.getElementById("container").style.marginLeft = "114px";


            this.setState({
                showMe: false
            })

        }

    }

    render() {
        const {t, i18n} = this.props;

        function onChange(option) {

            i18n.changeLanguage(option.target.value);

        }

        return (
            <div className={'menuNav'}>
                <div className={'navbar'}>
                    <div className="col ">
                        <Link to={'#'} id={'toggle'} className={'navbar-toggle'} onClick={this.onMouse}>
                            <FaIcon.FaBars id={'sun'}/>
                        </Link>
                    </div>
                    <div className="col">
                        <div className={'nav-len bg-white float-right'}>
                            <Dropdown>
                                <Dropdown.Toggle className={'account'} variant="transparent" id="dropdown-basic">
                                    <a href={'#'} className={'active_bell'}>
                                        <Icon icon={bellDot} className={'bell'}/>
                                        <span className={'badge'}>3</span>
                                    </a>
                                </Dropdown.Toggle>
                                <Dropdown.Menu className={'mt-1'}>
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Dropdown>
                                <Dropdown.Toggle style={{color:'#0096dc'}} className={'account'} variant="transparent" id="dropdown-basic">
                                   <img src={Man} alt="#"/> 998572532
                                </Dropdown.Toggle>

                                <Dropdown.Menu className={'mt-1'}>
                                        <Link to={'/'} style={{textDecoration:'none'}}>
                                            {t("adminNav.exit")} <img src={Exit} alt="#"/>
                                        </Link>

                                </Dropdown.Menu>
                            </Dropdown>
                            <select className={'form-control px-0 pb-2'} onChange={onChange} name={"trans"}
                                    id={"trans"}>
                                <option value="uz">O`z</option>
                                <option value="ru">Ru</option>
                                <option value="en">Eng</option>
                            </select>
                        </div>
                    </div>

                </div>
                <nav id={'mySidenav'} onMouseOver={() => this.onMouse(this, true)}
                     onMouseOut={() => this.onMouse(this, false)} className={'nav-menu'}>
                    <ul className={'nav-menu-items'}>
                        <li className={'nav-menu-bars'}>
                            <Link to={'#'}>
                                <img className={'logo'} src={logoWide} alt={'#'}/>
                                <span>YEOJU TECHNICAL INSTITUTE IN TASHKENT</span>
                                <hr/>
                            </Link>
                        </li>
                        <li className={'nav-text'}>
                            <NavLink to={'/abiturient'} exact activeClassName={'click'}>
                                <img src={MenuEnter} alt="#"/>
                                <span>{t("menuNav.li-1")}</span>
                            </NavLink>
                        </li>
                        <li className={'nav-text'}>
                            <NavLink to={'/abiturient/question/'} exact activeClassName={'click'}>
                                <img src={Question} alt="#"/>
                                <span>{t("menuNav.li-6")}</span>
                            </NavLink>
                        </li>
                        <li className={'nav-text'}>
                            <NavLink to={'/abiturient/cards/'} exact activeClassName={'click'}>
                                <img src={Doc} alt="#"/>
                                <span>{t("menuNav.li-3")}</span>
                            </NavLink>
                        </li>
                        <li className={'nav-text'}>
                            <NavLink to={'/abiturient/menuVisa/'} exact activeClassName={'click'}>
                                <img src={Visa} alt="#"/>
                                <span>{t("menuNav.li-2")}</span>
                            </NavLink>
                        </li>

                        <li className={'nav-text'}>
                            <NavLink to={'/abiturient/appellation/'} exact activeClassName={'click'}>
                                <img src={App} alt="#"/>
                                <span>{t("menuNav.li-4")}</span>
                            </NavLink>
                        </li>
                        <li className={'nav-text'}>
                            <NavLink to={'/abiturient/menuPerson/'} exact activeClassName={'click'}>
                                <img src={MenuPerson} alt="#"/>
                                <span>{t("menuNav.li-5")}</span>
                            </NavLink>
                        </li>
                        <li className={'nav-text'}>
                            <NavLink to={'/abiturient/help/'} exact activeClassName={'click'}>
                                <img src={Help} alt="#"/>
                                <span>{t("menuNav.li-7")}</span>
                            </NavLink>
                        </li>
                        <li className={'nav-text'}>
                            <NavLink to={'/abiturient/statistics/'} exact activeClassName={'click'}>
                                <img src={Statistics} alt="#"/>
                                <span>{t("menuNav.li-8")}</span>
                            </NavLink>
                        </li>

                    </ul>
                </nav>

            </div>
        );
    }
}

export default MenuNavbar;