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
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
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
          Log In to MyPx
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
              />
            </label>
            <br/>
            <label>Password
              <br />
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
              />
            </label>
            <br/>
            <label className={this.props.inputClass} >Email
            <br />
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                className={this.props.inputClass}
              />
            </label>
            <br />
            <label className={this.props.inputClass} >First Name
            <br />
              <input type="text"
                value={this.state.firstName}
                onChange={this.update('first_name')}
                className={this.props.inputClass}
              />
            </label>
            <br />
            <label className={this.props.inputClass} >Last Name
            <br />
              <input type="text"
                value={this.state.lastName}
                onChange={this.update('last_name')}
                className={this.props.inputClass}
              />
            </label>
            <br />
            <input className="session-submit" type="submit" value={this.props.formType} />
            <br />
            {this.props.message}  {this.props.navLink}
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
