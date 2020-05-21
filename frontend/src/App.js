import React from 'react';
import ShopDetails from './pages/ShopDetails'

import { Route, Switch, Link } from 'react-router-dom';


function App() {
  return (
    <div className="App">
gbfdg


<Switch>
  <Route component={ShopDetails} path="/Shop/:id" />
</Switch>

    </div>
  );
}

export default App;
