import React, { Component } from 'react';
import UI from './UI/UI';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

class App extends Component {
  render() {
    return (
      <div>
        <LoginForm />
        <SignUpForm />
      </div>
    );
  }
}

export default App;
