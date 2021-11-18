import React, {Component} from 'react';
import logoWide from '../image/intoImage/logo.png';
import phone from '../image/icons/phone.svg';
import email from '../image/icons/Vector.svg';
import address from '../image/icons/Vector2.svg';
import {DropdownButton, Dropdown} from "react-bootstrap";
import {NavLink,Link} from 'react-router-dom';
import '../css/NavbarStyle.css';
class Navbar extends Component {

    render() {

        const {t,i18n}=this.props;
        function onChange(option) {
            i18n.changeLanguage(option.target.value);

        }
        return (
            <div className={'apps'}>
                <div className="navbar-first">
                    <div className="navbar-menu">
                        <ul className={'nav-item'}>
                            <li className={'nav-bars'}>
                                <Link to={'/appellation'} >
                                    <img className={'logos'} src={logoWide} alt={'#'}/>
                                    <span>YEOJU TECHNICAL INSTITUTE IN TASHKENT</span>
                                </Link>
                            </li>
                            <li className={'nav-texts'}>
                                <img src={email} alt="#"/>
                                <span>{t("appNav.t-1")}<br/><b>info@ytit.uz</b></span>
                            </li>
                            <li className={'nav-texts'}>
                                <img src={phone} alt="#"/>
                                <span>{t("appNav.t-2")}<br/><b>+998 78 129 40 40</b></span>
                            </li>
                            <li className={'nav-texts'}>
                                <img src={address} alt="#"/>
                                <span> {t("appNav.t-3")} <br/><b>Usmon Nosir 156 100121 Toshkent</b>
                                </span>
                            </li>
                            <li className={'nav-texts'} style={{width:100}}>
                                <select onChange={onChange} name={"trans"} id={"trans"} className={'nav-len'}>
                                    <option value={"uz"}>O`z</option>
                                    <option value={"ru"}>Ru</option>
                                    <option value={"en"}>Eng</option>
                                </select>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navbar;