import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginData } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  inputHandler = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  sendWallet = () => {
    const { email } = this.state;
    const { history, sendUserData } = this.props;

    sendUserData(email);
    history.push('/carteira');
  }

  render() {
    //  Button Check
    let loginButton;
    const { email, password } = this.state;
    const { sendWallet } = this;
    const emailValidation = email.includes('@') && email.includes('.com');
    const passwordMaxLength = 6;

    if (emailValidation && password.length >= passwordMaxLength) {
      loginButton = (
        <button type="button" onClick={ sendWallet }>
          Entrar
        </button>);
    } else {
      loginButton = (
        <button type="button" onClick={ sendWallet } disabled>
          Entrar
        </button>);
    }

    return (
      <section>

        <label htmlFor="email">
          Email:
          <input
            type="email"
            name="email"
            data-testid="email-input"
            onChange={ this.inputHandler }
          />
        </label>

        <label htmlFor="password">
          Password:
          <input
            type="email"
            name="password"
            data-testid="password-input"
            onChange={ this.inputHandler }
          />
        </label>

        {loginButton}

      </section>
    );
  }
}

Login.propTypes = {
  sendUserData: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  sendUserData: (value) => dispatch(loginData(value)),
});

export default connect(null, mapDispatchToProps)(Login);
