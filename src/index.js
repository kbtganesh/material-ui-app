import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Main from './pages/Main';
import Setting from './pages/Setting';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './index.css';

// ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(<Router>
    <App>
        <Route path="/setting" component={Setting} />
        <Route exact path="/" component={Main} />
    </App>
</Router>, document.getElementById('root'));

registerServiceWorker();
