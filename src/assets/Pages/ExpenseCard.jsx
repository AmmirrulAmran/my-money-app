function ExpenseCard({ expense, onDelete }) {
  function handleDelete() {
    fetch(`http://localhost:3000/api/expenses/${expense.id}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.ok) onDelete(expense.id)
    })

  }

  const categoryEmoji = {
    Food: '🍔',
    Transport: '🚗',
    Housing: '🏠',
    Leisure: '🎮',
    ETC: '📦'
  }

  return (
    <div className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition duration-200 border-l-4 border-indigo-500">
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">{categoryEmoji[expense.category] || '💰'}</span>
            <h3 className="text-lg font-semibold text-gray-800">{expense.description}</h3>
          </div>
          <p className="text-sm text-gray-600 mb-2">
            <span className="inline-block bg-gray-100 rounded px-2 py-1 mr-2">{expense.category}</span>
            <span className="text-gray-500">{expense.date}</span>
          </p>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold text-indigo-600 mb-2">RM {expense.amount.toFixed(2)}</p>
          <button
            onClick={handleDelete}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded transition duration-200 text-sm"
          >
            🗑️ Delete
          </button>
        </div>
      </div>
    </div>
  )
}

export default ExpenseCard
