import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer.js'

const initialState = {
  transactions: [
    { id: 1, text: 'Gas', amount: -50 },
    { id: 2, text: 'Salary', amount: 1200 },
    { id: 3, text: 'Doordash Pay', amount: 225 },
    { id: 4, text: 'Rent', amount: -700 },
  ],
}

//Create context
export const GlobalContext = createContext(initialState)

//  Provider compnent
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  // Actions
  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id,
    })
  }

  function addTransaction(transaction) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction,
    })
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
