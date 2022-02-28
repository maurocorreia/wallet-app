import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteData, itemEdit } from '../actions';

class Table extends React.Component {
  render() {
    const { expenses, removeExpense, editItem } = this.props;

    return (
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          {expenses.length > 0 && expenses.map((aux) => {
            const nomeCortado = aux.exchangeRates[aux.currency].name.split('/');
            const valorCambio = Number(aux.exchangeRates[aux.currency].ask).toFixed(2);
            const valorConvertido = (
              Number(aux.exchangeRates[aux.currency].ask) * Number(aux.value)).toFixed(2);
            return (
              <tr id={ aux.id } key={ aux.id }>
                <td>{aux.description}</td>
                <td>{aux.tag}</td>
                <td>{aux.method}</td>
                <td>{(Number(aux.value)).toFixed(2)}</td>
                <td>{nomeCortado[0]}</td>
                <td>{valorCambio}</td>
                <td>{valorConvertido}</td>
                <td>Real</td>
                <td>
                  <button
                    type="button"
                    data-testid="edit-btn"
                    onClick={ () => editItem(aux) }
                  >
                    Editar
                  </button>
                  <button
                    type="button"
                    data-testid="delete-btn"
                    onClick={ () => removeExpense(aux) }
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeExpense: PropTypes.func.isRequired,
  editItem: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  removeExpense: (expense) => dispatch(deleteData(expense)),
  editItem: (item) => dispatch(itemEdit(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
