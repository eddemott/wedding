import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { injectGlobal } from 'styled-components';


injectGlobal`
body {
    background-image: url("${require("./assets/SaveTheDate.png")}");
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center center;
}
`;

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();