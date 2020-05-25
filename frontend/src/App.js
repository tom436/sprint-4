import React from 'react';
import Home from './pages/Home'
import './styles/global.scss'
import ShopDetails from './pages/ShopDetails'
import ItemsPage from './pages/ItemsPage'
import ItemDetails from './pages/ItemDetails'
import Cart from './pages/Cart'
import Header from './cmps/Header'
import {Footer} from './cmps/Footer'
import { Route, Switch, Link } from 'react-router-dom';
// import { createBrowserHistory } from 'history';
// const history = createBrowserHistory();

function App() {
  return (
    <div className="App">
      <Header />
      <section className="main-container">
      <Switch>
        <Route component={ItemsPage} path="/items" />
        <Route component={ItemDetails} path="/item/:id" />
        <Route component={ShopDetails} path="/shop/:id" />
        {/* <Route component={ShopEdit} path="/shop/edit/:id" />
          <Route component={Login} path="/signup" /> */}
        <Route component={Cart} path="/cart" />
        <Route component={Home} path="/" />
      </Switch>
      <Footer/>
          </section>
    </div>
  );
}

export default App;
