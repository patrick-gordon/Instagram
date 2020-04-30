import React from 'react';
import ReactDOM from 'react-dom';

import App from './Client/App';
import normalize from 'normalize.css';
import  { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
<Router>
    <App />
</Router>, 
document.getElementById('root'));
