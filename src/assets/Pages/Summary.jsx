function Summary({ expenses }) {
  const total = expenses.reduce((sum, expense) => sum + expense.amount, 0)
  const count = expenses.length

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-indigo-600">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-gray-600 text-sm font-medium mb-1">Total Spent</p>
          <p className="text-3xl font-bold text-indigo-600">RM {total.toFixed(2)}</p>
        </div>
        <div>
          <p className="text-gray-600 text-sm font-medium mb-1">Transactions</p>
          <p className="text-3xl font-bold text-gray-800">{count}</p>
        </div>
      </div>
    </div>
  )
}

export default Summary
