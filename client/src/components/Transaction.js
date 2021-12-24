import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'


const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext)

  const { amount, _id, text } = transaction
  return (
    <li className={amount > 0 ? 'plus' : 'minus'}>
      {text}
      <span> {amount}</span>
      <button onClick={() => deleteTransaction(_id)} className='delete-btn'>
        x
      </button>
    </li>
  )
}

export default Transaction
