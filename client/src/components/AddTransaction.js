import { useContext, useState } from 'react'
import { GlobalContext } from '../context/GlobalState'

const AddTransaction = () => {
  const { addTransaction } = useContext(GlobalContext)
  const [text, setText] = useState('')
  const [amount, setAmount] = useState(0)

  const onSubmit = (e) => {
    e.preventDefault()

    const newTransaction = {
      id: Math.floor(Math.random() * 9999999),
      text,
      amount: +amount,
    }
    addTransaction(newTransaction)

    setText('')
    setAmount(0)
  }

  return (
    <>
      <h3>Add new transactions</h3>
      <form onSubmit={onSubmit}>
        <div className='form-control'>
          <label htmlFor='text'>Text</label>
          <input
            type='text'
            placeholder='Enter Text'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <label htmlFor='amount'>Amount</label>
          <input
            type='number'
            placeholder='Enter Amount'
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button className='btn'> Add Transaction</button>
      </form>
    </>
  )
}

export default AddTransaction
