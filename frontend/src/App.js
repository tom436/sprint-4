import React from 'react';
import { Route, Switch } from "react-router-dom";
import Home from './pages/Home'
import './styles/global.scss'

function App() {
  return (
    <Switch>
      <Route component={Home} path="/" />

    </Switch>
  );
}

export default App;
