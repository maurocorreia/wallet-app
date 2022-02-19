import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Table from '../components/Table';

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
      <div>
        <nav>
          <h2 data-testid="email-field">
            Email:
            {email}
          </h2>
          <h2 data-testid="total-field">{totalDispenses}</h2>
          <h2 data-testid="header-currency-field">BRL</h2>
        </nav>

        <form>
          <label htmlFor="value">
            Valor da despesa:
            <input
              type="text"
              name="value"
              data-testid="value-input"
            />
          </label>

          <label htmlFor="description">
            Descrição:
            <input
              type="text"
              name="description"
              data-testid="description-input"
            />
          </label>

          <label htmlFor="currency">
            Moeda:
            <input
              type="text"
              name="currency"
              data-testid="currency-input"
            />
          </label>

          <label htmlFor="method">
            Método de pagamento:
            <input
              type="text"
              name="method"
              data-testid="method-input"
            />
          </label>

          <label htmlFor="tag">
            Valor da despesa:
            <select name="tag" data-testid="tag-input">
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </label>
          <button type="button">Adicionar despesa</button>
        </form>
        <Table />
      </div>
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
