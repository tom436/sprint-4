import React from 'react';
import Home from './pages/Home'
import './styles/global.scss'
import ShopManage from './pages/ShopManage'
import ShopDetails from './pages/ShopDetails'
import ItemsPage from './pages/ItemsPage'
// import ShopsPage from './pages/ShopsPage'
import ItemDetails from './pages/ItemDetails'
import Cart from './pages/Cart'
import Header from './cmps/Header'
import { Footer } from './cmps/Footer'

import { Route, Switch, Link } from 'react-router-dom';
// import { createBrowserHistory } from 'history';
// const history = createBrowserHistory();

function App() {
  return (
    <div className="app">
      <section className="main-container">
        <Header />
        <Switch>
          <Route component={ItemsPage} path="/items" />
          {/* <Route component={ShopsPage} path="/shops" /> */}
          <Route component={ItemDetails} path="/item/:id" />
          <Route component={ShopManage} path="/shop/manage/:id?" />
          <Route component={ShopDetails} path="/shop/:id" />
          {/* <Route component={Login} path="/signup" /> */}
          <Route component={Cart} path="/cart" />
          <Route component={Home} path="/" />
        </Switch>
      </section>
        <Footer />
    </div>
  );
}

export default App;
