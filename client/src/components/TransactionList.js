import React from 'react'
import Transaction from './Transaction'

const TransactionList = () => {
  return (
    <>
      <h3>History</h3>
      <ul className="list" id="list">
        <Transaction />
      </ul>
    </>
  )
}

export default TransactionList
