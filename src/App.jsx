
import { useState,useEffect } from 'react'
import ExpenseForm from './assets/Pages/ExpenseForm'
import ExpenseList from './assets/Pages/ExpenseList'
import Summary from './assets/Pages/Summary'

function App() {


  const[expenses,setExpenses] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/api/expenses").then(res => res.json()).then(data => setExpenses(data))
  }, [])

  function handleAddExpense(newExpense)
{
  setExpenses(prev => [...prev,newExpense])
}


function handleDeleteExpense(id){
  setExpenses(prev=> prev.filter(expense => expense.id !== id))
}
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2 text-center">💰 Expense Tracker</h1>
        <p className="text-gray-600 text-center mb-8">Track your spending and stay on budget</p>

        <div className="grid grid-cols-1 gap-8">
          <Summary expenses={expenses} />
          <ExpenseForm addExpense={handleAddExpense} />
          <ExpenseList expenses={expenses} onDelete={handleDeleteExpense} />
        </div>
      </div>
    </div>
  )
}

export default App
