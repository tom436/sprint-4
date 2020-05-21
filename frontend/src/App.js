import React from 'react';
import Home from './pages/Home'
import './styles/global.scss'
import ShopDetails from './pages/ShopDetails'
import { Route, Switch, Link } from 'react-router-dom';


  function App() {
    return (
      <div className="App">
        <Switch>
          {/* <Route component={ItemsPage} path="/items/:q?" />
          <Route component={ItemDetails} path="/item/:id" /> */}
          <Route component={ShopDetails} path="/shop/:id" />
          {/* <Route component={ShopEdit} path="/shop/edit/:id" />
          <Route component={Login} path="/signup" /> */}
          {/* <Route component={Cart} path="/cart" /> */}
          <Route component={Home} path="/" />
<<<<<<< HEAD

=======
>>>>>>> 66fcc45668fe2563a7922d7f2943f40403fc0b9b

        </Switch>

      </div>
    );
  }

  export default App;
