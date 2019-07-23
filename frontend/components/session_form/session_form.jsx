import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: '',
      first_name: '',
      last_name: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoSubmit = this.handleDemoSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(()=>this.props.history.push("/home"))
  }

  handleDemoSubmit(e){
    
    e.preventDefault();
    const user = {username: "demo", password: "password"}
    this.props.processFormDemo(user).then(() => this.props.history.push("/home"))
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <h1>
          {this.props.formHeader}
          </h1>
          <br/>
          
          {this.renderErrors()}
          <div className="login-form">
            <br/>
            <label >Username
              <br/>
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input"
                name="username"
              />
            </label>
            <br/>
            <label>Password
              <br />
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
                name="password"
              />
            </label>
            <br/>
            <label className={this.props.labelHide}>Email
            <br />
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                className={this.props.inputClass}
              />
            </label>
            <br />
            <label className={this.props.labelHide} >First Name
            <br />
              <input type="text"
                value={this.state.firstName}
                onChange={this.update('first_name')}
                className={this.props.inputClass}
              />
            </label>
            <br />
            <label className={this.props.labelHide} >Last Name
            <br />
              <input type="text"
                value={this.state.lastName}
                onChange={this.update('last_name')}
                className={this.props.inputClass}
              />
            </label>
            <br />
            <input className="session-submit" type="submit" value={this.props.formType}  name="session-submit-btn"/>
            <br />
            <button className="button-demo-acct" onClick={this.handleDemoSubmit}>Demo Login</button>
            {this.props.message}  {this.props.navLink} 
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
