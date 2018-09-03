import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = { username: '', password: '' };
  }

  handleInputChange = (e) => {
    console.log(this.state)
    console.log(e.target.name, ":", e.target.value)
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let username = this.state.username
    let password = this.state.password
    if (username.length > 0 && password.length > 0) {
      this.props.onSubmit({username, password})
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={this.handleInputChange}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={this.handleInputChange}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
