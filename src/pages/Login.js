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
    const { history, dispatch } = this.props;

    dispatch(loginData(email));
    history.push('/carteira');
  }

  render() {
    //  Button Check
    const { email, password } = this.state;
    const emailValidation = email.includes('@') && email.includes('.com');
    const passwordMaxLength = 6;

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

        <button
          disabled={ !(emailValidation && password.length >= passwordMaxLength) }
          type="button"
          onClick={ this.sendWallet }
        >
          Entrar
        </button>

      </section>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect()(Login);
