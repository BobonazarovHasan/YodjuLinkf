import React, {Component} from 'react';
import '../css/admissionStyle/AdminNavbar.css';
import {NavLink,Link} from "react-router-dom";
// import Frame from "../image/intoImage/Frame.svg";
import Application from "../image/adminIcons/carbon_document.svg";
import Statistics from "../image/adminIcons/wpf_statistics.svg";
// import * as Graph  from "react-icons/go";
import Exit from "../image/adminIcons/bx_bx-exit.svg";
import News from "../image/adminIcons/Vector (1).svg";
import Admin from "../image/adminIcons/Group 142.svg";
import Country from "../image/adminIcons/Vectors.svg";
import Region from "../image/adminIcons/akar-icons_location.svg";
import District from "../image/adminIcons/tabler_location.svg";
import Faculty from "../image/adminIcons/gridicons_list-checkmark.svg";
import Type from "../image/adminIcons/cil_education.svg";
import Language from "../image/adminIcons/clarity_language-line.svg";
import {Dropdown} from "react-bootstrap";
import Man from "../image/icons/Vector-Man.svg";

class AdminNavbar extends Component {



    render() {
        const {t, i18n} = this.props;

        function onChange(option) {
            console.log(option.target.value)
            i18n.changeLanguage(option.target.value);

        }
        return (

          <div className={'admin-users'}>
              <div className={'navbar'}>
                  <div className="col">
                      <div className="nav-len bg-white float-left ml-5 ">
                          <a className={'account'} href={'#'}><img src={Man} alt="#"/> 998572532</a>
                          {/*<Dropdown>*/}
                          {/*    <Dropdown.Toggle className={'account'} variant="transparent" id="dropdown-basic">*/}
                          {/*        <a href={'#'}><img src={Man} alt="#"/> 998572532</a>*/}
                          {/*    </Dropdown.Toggle>*/}

                          {/*    <Dropdown.Menu className={'mt-1'}>*/}
                          {/*        <Dropdown.Item href="#">Action</Dropdown.Item>*/}
                          {/*        <Dropdown.Item href="#">Another action</Dropdown.Item>*/}
                          {/*        <Dropdown.Item href="#">Something else</Dropdown.Item>*/}
                          {/*    </Dropdown.Menu>*/}
                          {/*</Dropdown>*/}
                      </div>
                  </div>
                  <div className="col">
                      <div id={'nav-len'} className={'nav-len bg-white float-right'}>

                          <select className={'form-control px-0 pb-2'}  onChange={onChange} name={"trans"} id={"trans"}>
                              <option value="uz">O`z</option>
                              <option value="ru">Ru</option>
                              <option value="en">Eng</option>
                          </select>
                          <Link to={'/'}>
                              {t("adminNav.exit")} <img src={Exit} alt="#"/>
                          </Link>

                      </div>
                  </div>

              </div>
              <nav className={'nav-menu'}>
                  <ul className={'nav-menu-items'}>
                      <li className={'nav-text'}>
                          <NavLink to={'/admission/'} exact activeClassName={'click'}>
                              <img src={Application} alt="#"/>
                              <span>{t("adminNav.li-1")}</span>
                          </NavLink>
                      </li>
                      <li className={'nav-text'}>
                          <NavLink to={'/admission/statistics'} exact activeClassName={'click'} >
                              <img style={{color:'#ffffff'}} src={Statistics} alt="#"/>
                              {/*<Graph.GoGraph style={{fontSize:25}}/>*/}
                              <span>{t("adminNav.li-2")}</span>
                          </NavLink>
                      </li>
                      <li className={'nav-text'}>
                          <NavLink to={'/admission/news/'} exact activeClassName={'click'}>
                              <img src={News} alt="#"/>
                              <span>{t("adminNav.li-3")}</span>
                          </NavLink>
                      </li>

                      <li className={'nav-text'}>
                          <NavLink to={'/admission/admin/'} exact activeClassName={'click'}>
                              <img src={Admin} alt="#"/>
                              <span>{t("adminNav.li-4")}</span>
                          </NavLink>
                      </li>
                      <li className={'nav-text'}>
                          <NavLink to={'/admission/country/'} exact activeClassName={'click'}>
                              <img src={Country} alt="#"/>
                              <span>{t("adminNav.li-5")}</span>
                          </NavLink>
                      </li>
                      <li className={'nav-text'}>
                          <NavLink to={'/admission/region/'} exact activeClassName={'click'}>
                              <img src={Region} alt="#"/>
                              <span>{t("adminNav.li-6")}</span>
                          </NavLink>
                      </li>
                      <li className={'nav-text'}>
                          <NavLink to={'/admission/district/'} exact activeClassName={'click'}>
                              <img src={District} alt="#"/>
                              <span>{t("adminNav.li-7")}</span>
                          </NavLink>
                      </li>
                      <li className={'nav-text'}>
                          <NavLink to={'/admission/faculty/'} exact activeClassName={'click'}>
                              <img src={Faculty} alt="#"/>
                              <span>{t("adminNav.li-8")}</span>
                          </NavLink>
                      </li>
                      <li className={'nav-text'}>
                          <NavLink to={'/admission/type/'} exact activeClassName={'click'}>
                              <img src={Type} alt="#"/>
                              <span>{t("adminNav.li-9")}</span>
                          </NavLink>
                      </li>
                      <li className={'nav-text'}>
                          <NavLink to={'/admission/language/'} exact activeClassName={'click'}>
                              <img src={Language} alt="#"/>
                              <span>{t("adminNav.li-10")}</span>
                          </NavLink>
                      </li>
                  </ul>
              </nav>
          </div>
        );
    }
}

export default AdminNavbar;