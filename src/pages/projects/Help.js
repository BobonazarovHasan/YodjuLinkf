import React, {Component} from 'react';
import '../../css/Help.css'
import MenuLinked from "../../component/MenuNavbar";
import {Scrollbars} from "react-custom-scrollbars";
import natija from "../../image/intoImage/69b82645f5d6d45641509a06585f0f62-removebg-preview 1.svg";
class Help extends Component {

    render() {
        const {t,i18n}=this.props;

        return (
            <div>
                <MenuLinked t={t} i18n={i18n}/>
                    <div id={'container'} className={'container'}>
                        <div className="row pt-5">
                            <div className=" menu-cols col offset-1 pt-5">
                                <div className={'row my-5 pb-4'}>
                                    <div className="speed ">
                                        <iframe width="600" height="400" src="https://www.youtube.com/embed/Ghfh0D-cqz8"
                                                title="YouTube video player"
                                                frameBorder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen>
                                        </iframe>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
            </div>
        );
    }
}

export default Help;