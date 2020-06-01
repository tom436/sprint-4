import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  loadUsers,
  removeUser,
  login,
  logout,
  signup
} from '../store/actions/userActions';

class Test extends Component {
  state = {
    isLoginShown: true,
    isSignupShown: false,
    msg: '',
    loginCred: {
      email: '',
      password: ''
    },
    signupCred: {
      email: '',
      password: '',
      username: ''
    }
  };

  loginHandleChange = (ev) => {
    const { name, value } = ev.target;
    this.setState(prevState => ({
      loginCred: {
        ...prevState.loginCred,
        [name]: value
      }
    }));
  };

  signupHandleChange = (ev) => {
    const { name, value } = ev.target;
    this.setState(prevState => ({
      signupCred: {
        ...prevState.signupCred,
        [name]: value
      }
    }));
  };

  doLogin = async (ev) => {
    ev.preventDefault();
    const { email, password } = this.state.loginCred;
    if (!email || !password) {
      return this.setState({ msg: 'Please enter user/password' });
    }
    const userCreds = { email, password };
    this.props.login(userCreds);
    this.setState({ loginCred: { email: '', password: '' } });
  };

  doSignup = async (ev) => {
    ev.preventDefault();
    const { email, password, username } = this.state.signupCred;
    if (!email || !password || !username) {
      return this.setState({ msg: 'All inputs are required!' });
    }
    const signupCreds = { email, password, username };
    this.props.signup(signupCreds);
    this.setState({ signupCred: { email: '', password: '', username: '' } });
  };

  removeUser = (userId) => {
    this.props.removeUser(userId);
  };

  onToggleLogin = () => {
    const isLogin = this.state.isLoginShown
    const isSignup = this.state.isSignupShown
    this.setState({ isLoginShown: !isLogin, isSignupShown: !isSignup });
  }




  render() {
    let signupSection = (
      <form onSubmit={this.doSignup}>
        <input type="text" name="email" value={this.state.signupCred.email}
          onChange={this.signupHandleChange} placeholder="Email" />
        <br />
        <input name="password" type="password" value={this.state.signupCred.password}
          onChange={this.signupHandleChange} placeholder="Password" />
        <br />
        <input type="text" name="username" value={this.state.signupCred.username}
          onChange={this.signupHandleChange}
          placeholder="Username"
        />
        <br />
        <button>Signup</button>
      </form>
    );
    let loginSection = (

      <form onSubmit={this.doLogin}>
        <input
          type="text" name="email" value={this.state.loginCred.email}
          onChange={this.loginHandleChange} placeholder="Email" />
        <br />
        <input type="password" name="password" value={this.state.loginCred.password}
          onChange={this.loginHandleChange} placeholder="Password" />
        <br />
        <button>Login</button>
      </form>
    );

    const { loggedInUser } = this.props;
    return (
      <section className="grid-container short-page">
        {loggedInUser && (
          <div>
            <h2>Welcome: {loggedInUser.username} </h2>
            <button onClick={this.props.logout}>Logout</button>
          </div>
        )}
        {!loggedInUser&&<h2>{this.state.msg}</h2>}
        {!loggedInUser&&<div className="login-container">
          <div className={(this.state.isLoginShown)?"login shown":"login"} onClick={this.onToggleLogin}>Log in</div>
          <div className={(this.state.isSignupShown)?"signup shown":"signup"} onClick={this.onToggleLogin}>Sign up</div>
          {this.state.isLoginShown && loginSection}
          {this.state.isSignupShown && signupSection}
        </div>}
        {loggedInUser && loggedInUser.isAdmin && <button onClick={this.props.loadUsers}>Get All Users</button>}
        {/* {this.props.isLoading && 'Loading...' } */}
        {this.props.users && <ul>
          {this.props.users.map(user => (
            <li key={user._id}>
              <pre>{JSON.stringify(user, null, 2)}</pre>
              <button onClick={() => { this.removeUser(user._id) }}>
                Remove {user.username}
              </button>
            </li>
          ))}
        </ul>}
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.user.users,
    loggedInUser: state.user.loggedUser
    // isLoading: state.system.isLoading
  };
};
const mapDispatchToProps = {
  login,
  logout,
  signup,
  removeUser,
  loadUsers
};

export default connect(mapStateToProps, mapDispatchToProps)(Test);
