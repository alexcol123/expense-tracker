import { useContext, useEffect } from 'react'
import { GlobalContext } from '../context/GlobalState'

import Transaction from './Transaction'

const TransactionList = () => {
  const { transactions, getTransactions } = useContext(GlobalContext)

  useEffect(() => {
    getTransactions()
  }, [])

  console.log(transactions)

  return (
    <>
      <h3>History</h3>
      <ul id='list' className='list'>
        {transactions.map((transaction) => (
          <Transaction key={transaction._id} transaction={transaction} />
        ))}
      </ul>
    </>
  )
}

export default TransactionList
