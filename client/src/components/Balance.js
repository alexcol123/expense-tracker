import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const Balance = () => {
  const { transactions } = useContext(GlobalContext)

  let balance = transactions
    .map((t) => t.amount)
    .reduce((acc, amt) => (acc += amt), 0)
    .toFixed(2)

  return (
    <>
      <h4>Your Balance</h4>
      <h1 id='balance'> ${balance}</h1>
    </>
  )
}

export default Balance
