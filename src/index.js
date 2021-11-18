import React from 'react';
import ReactDOM from 'react-dom';
import './translate/i18n.js';
import i18next from "i18next";
import {I18nextProvider} from 'react-i18next';
import App from "./AppAll";
import Tests from "./pages/admission/testing/Tests";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

const app = (
    <React.StrictMode>

        {/*<Provider store={store}>*/}
        <BrowserRouter>
            <I18nextProvider i18n={i18next}>
                <App/>
            </I18nextProvider>
        </BrowserRouter>
        {/*</Provider>*/}
    </React.StrictMode>
)

ReactDOM.render(
    app,
    document.getElementById('root')
);

