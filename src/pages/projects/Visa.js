import React, {Component} from 'react';
import bet from '../../image/bet.png';
import '../../css/VisaStyle.css'
class Visa extends Component {

    render() {
        const {t}=this.props;

        return (
            <div className="visa-row row my-5 ">
                <div className="col-md-7">
                    <span>{t("visa.span")}</span>
                    <form action="">
                        <div className={'my-4'}>
                            <input style={{width:400}} type="text" data-inputmask-regex={"9[0-13-57-9][0-9]{7}"} placeholder={t("enter.in-1")} className={'form-control'} name={'phone'} required/>
                        </div>
                        <div className={'visa-button my-4'}>
                            <button className={' btn'} name={'button'}>
                                {t("enter.btn-1")}
                            </button>
                        </div>
                    </form>
                    <div className={'pr-5'}>
                        <p>{t("enter.p")}</p>
                    </div>
                </div>
                <div className="col-md-5">
                    <img className={'ml-5'} style={{width:391,height:291}} src={bet} alt={"#"}/>
                </div>
            </div>
        );
    }
}

export default Visa;