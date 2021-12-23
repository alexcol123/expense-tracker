import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const IncomeExpense = () => {
  const { transactions } = useContext(GlobalContext)

  const income = transactions
    .map((t) => t.amount)
    .filter((t) => t > 0)
    .reduce((acc, amt) => (acc += amt), 0)
    .toFixed(2)

  const expenses = transactions
    .map((t) => t.amount)
    .filter((t) => t < 0)
    .reduce((acc, amt) => (acc += amt), 0)
    .toFixed(2)



  return (
    <div className='inc-exp-container'>
      <div>
        <h4>Income</h4>
        <p id='money-plus' className='money plus'>
          {income}
        </p>
      </div>
      <div>
        <h4>Expenses</h4>
        <p id='money-minus' className='money minus'>
          {expenses}
        </p>
      </div>
    </div>
  )
}

export default IncomeExpense
