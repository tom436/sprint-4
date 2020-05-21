import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { HashRouter as Router } from "react-router-dom";

<<<<<<< HEAD
=======
import { Provider } from 'react-redux'
import  Store  from './store/store';


>>>>>>> eb6ea6056a8eb1e1d87700a4bc6db5934162acd7
ReactDOM.render(
  <Provider store={Store}>

  <Router>
    <App />
  </Router>
  </Provider>  ,    

  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
