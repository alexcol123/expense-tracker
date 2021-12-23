import React from 'react'

const AddTransaction = () => {
  return (
    <>
      <h3>Add new transactions</h3>
      <form>
        <div className='form-control'>
          <label htmlFor='text'>Text</label>
          <input type='text' placeholder='Enter Text' />

          <label htmlFor='amount'>Amount</label>
          <input type='number' placeholder='Enter Amount' />
        </div>
        <button className='btn'> Add Transaction</button>
      </form>
    </>
  )
}

export default AddTransaction
