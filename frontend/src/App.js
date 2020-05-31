import React from 'react';
import Home from './pages/Home'
import './styles/global.scss'
import ShopManage from './pages/ShopManage'
import ShopDetails from './pages/ShopDetails'
import ItemsPage from './pages/ItemsPage'
import FarmsPage from './pages/FarmsPage'
import Login from './pages/Login'
import Cart from './pages/Cart'
import Header from './cmps/Header'
import { Footer } from './cmps/Footer'

import { Route, Switch, Link } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <section className="main-container">
        <Header />
        <Switch>
          <Route component={ItemsPage} path="/items" />
          <Route component={FarmsPage} path="/farms" />
          <Route component={ShopManage} path="/shop/manage/:id?" />
          <Route component={ShopDetails} path="/shop/:id" />
          <Route component={Login} path="/signup" />
          <Route component={Cart} path="/cart" />
          <Route component={Home} path="/" />
        </Switch>
      </section>
        <Footer />
    </div>
  );
}

export default App;
