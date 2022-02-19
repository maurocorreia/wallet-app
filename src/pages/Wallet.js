import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      totalDispenses: 0,
    };
  }

  render() {
    const { email } = this.props;
    const { totalDispenses } = this.state;
    return (
      <nav>
        <h2 data-testid="email-field">
          Email:
          {email}
        </h2>
        <h2 data-testid="total-field">{totalDispenses}</h2>
        <h2 data-testid="header-currency-field">BRL</h2>
      </nav>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps)(Wallet);
