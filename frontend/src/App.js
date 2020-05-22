import React from 'react';
import Home from './pages/Home'
import './styles/global.scss'
import ShopDetails from './pages/ShopDetails'
import ItemsPage from './pages/ItemsPage'
// import ItemDetails from './pages/ItemDetails'
import Header from './cmps/Header'
import { Route, Switch, Link } from 'react-router-dom';
import { createBrowserHistory } from 'history';
const history = createBrowserHistory();




function App() {
  return (
    <div className="App">
      <Header  history={history}/>
      <Switch>
        <Route component={ItemsPage} path="/items/:q?" />
        {/* <Route component={ItemDetails} path="/item/:id" /> */}
        <Route component={ShopDetails} path="/shop/:id" />
        {/* <Route component={ShopEdit} path="/shop/edit/:id" />
          <Route component={Login} path="/signup" /> */}
        {/* <Route component={Cart} path="/cart" /> */}
        <Route component={Home} path="/" />

      </Switch>

    </div>
  );
}

export default App;
