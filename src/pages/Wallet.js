import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Table from '../components/Table';
import Forms from '../components/Forms';
import EditForms from '../components/EditForms';

class Wallet extends React.Component {
  render() {
    const { expenses, email, itemOnHold } = this.props;

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

        { itemOnHold === undefined ? <Forms /> : <EditForms />}
        <Table />
      </div>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  itemOnHold: PropTypes.shape({
    value: PropTypes.number,
    description: PropTypes.string,
    currency: PropTypes.string,
    method: PropTypes.string,
    tag: PropTypes.string,
    exchangeRates: PropTypes.objectOf(PropTypes.object),
    id: PropTypes.string,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
  itemOnHold: state.wallet.itemOnHold,
});

export default connect(mapStateToProps)(Wallet);
