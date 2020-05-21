import { NavLink } from "react-router-dom";
import React from 'react';



export default class Header extends React.Component {

    state = {
        class:''
        
    }
    componentDidMount() {
        window.addEventListener('scroll', this.getWindowHeight);

    }

    getWindowHeight = () =>{
        
        const distanceY = window.pageYOffset 
        const shrinkOn = 250;
        
        if (distanceY >= shrinkOn) {
            this.setState({
                class: "smaller"
              })
        }
        else if(distanceY<100){
            this.setState({
                class: ''
              })
        }
        
      }

    render() {
        return (
            <section className={`main-header ${this.state.class} flex align-center space-between`}>
               <h1>Farm To You</h1>
              <form action="">
                  <input type="text"/>
                  <button>GO</button>
              </form>
            <ul className="main-nav flex">
                <li><NavLink  to="/"exact >Home</NavLink></li>
                <li><NavLink to="/items" exact>items</NavLink></li>
                <li><NavLink to="/cart" exact>Cart</NavLink></li>
                <li><NavLink to="/signup" exact>Login</NavLink></li>


            </ul>
            </section>
        );
    }

}



