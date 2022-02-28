import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateList } from '../actions';

class EditForms extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 0,
      description: '',
      currency: '',
      method: '',
      tag: '',
      id: 0,
      exchangeRates: {},
    };
  }

  componentDidMount() {
    this.setValues();
  }

  setValues = () => {
    const {
      itemOnHold: {
        value,
        description,
        currency,
        method,
        tag,
        exchangeRates,
      } } = this.props;

    this.setState({ value, description, currency, method, tag, exchangeRates });
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  sendUpdate = () => {
    const { listUpdate } = this.props;
    listUpdate(this.state);
  }

  render() {
    const {
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates,
    } = this.state;

    const coins = Object.keys(exchangeRates);
    const coinsFiltered = coins.filter((aux) => aux !== 'USDT');

    return (
      <form>
        <label htmlFor="value">
          Valor da despesa:
          <input
            type="text"
            name="value"
            data-testid="value-input"
            onChange={ this.handleChange }
            value={ value }
          />
        </label>

        <label htmlFor="description">
          Descrição:
          <input
            type="text"
            name="description"
            data-testid="description-input"
            onChange={ this.handleChange }
            value={ description }
          />
        </label>

        <label htmlFor="currency">
          Moeda
          <select
            name="currency"
            id="currency"
            onChange={ this.handleChange }
            data-testid="currency-input"
            value={ currency }
          >
            { coinsFiltered.map((aux) => (
              <option value={ aux } key={ aux }>{ aux }</option>
            ))}
          </select>
        </label>

        <label htmlFor="method">
          Método de pagamento:
          <select
            name="method"
            id="method"
            data-testid="method-input"
            onChange={ this.handleChange }
            value={ method }
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>

        <label htmlFor="tag">
          Categoria:
          <select
            name="tag"
            data-testid="tag-input"
            onChange={ this.handleChange }
            id="tag"
            value={ tag }
          >
            <option> Selecione a Categoria </option>
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>

        <button type="button" onClick={ this.sendUpdate }>Editar despesa</button>
      </form>
    );
  }
}
EditForms.propTypes = {
  itemOnHold: PropTypes.shape({
    value: PropTypes.number,
    description: PropTypes.string,
    currency: PropTypes.string,
    method: PropTypes.string,
    tag: PropTypes.string,
    exchangeRates: PropTypes.objectOf(PropTypes.object),
    id: PropTypes.string,
  }).isRequired,
  listUpdate: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  itemOnHold: state.wallet.itemOnHold,
});

const mapDispatchToProps = (dispatch) => ({
  listUpdate: (item) => dispatch(updateList(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditForms);
