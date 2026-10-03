import ExpenseCard from "./ExpenseCard"

function ExpenseList({ expenses, onDelete }) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Recent Expenses</h2>
      {expenses.length === 0 ? (
        <div className="bg-white rounded-lg shadow p-8 text-center">
          <p className="text-gray-500 text-lg">No expenses yet. Add one to get started! 💭</p>
        </div>
      ) : (
        <div className="space-y-3">
          {expenses.map(expense => (
            <ExpenseCard
              key={expense.id}
              expense={expense}
              onDelete={onDelete}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default ExpenseList
