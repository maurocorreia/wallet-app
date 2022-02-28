import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Table from '../components/Table';
import Forms from '../components/Forms';

class Wallet extends React.Component {
  render() {
    const { expenses, email } = this.props;

    let totalValue = 0;
    if (expenses.length > 0) {
      expenses.map((aux) => {
        const askValue = Number(aux.exchangeRates[aux.currency].ask) * Number(aux.value);
        totalValue += askValue;
        return totalValue;
      });
    }

    return (
      <div>
        <nav>
          <h2 data-testid="email-field">
            Email:
            {email}
          </h2>
          <h2 data-testid="total-field">
            Valor total:
            {totalValue.toFixed(2)}
          </h2>
          <h2 data-testid="header-currency-field">BRL</h2>
        </nav>

        <Forms />
        <Table />
      </div>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Wallet);
