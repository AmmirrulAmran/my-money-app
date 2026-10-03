import { query } from "../db.js";

export const getExpenses = async (req, res, next) => {
  try {
    const result = await query("SELECT * FROM expenses ORDER BY date DESC");
    res.json(result.rows);
  } catch (err) {
    next(err);
  }
};

export const createExpense = async (req, res, next) => {
  try {
    const { description, amount, category, date } = req.body;

    if (!description || !amount || !category || !date) {
      const err = new Error("All fields are required");
      err.status = 400;
      throw err;
    }

    if (isNaN(amount) || amount <= 0) {
      const err = new Error("Amount must be a positive number");
      err.status = 400;
      throw err;
    }

    const result = await query(
      "INSERT INTO expenses (description, amount, category, date) VALUES ($1, $2, $3, $4) RETURNING *",
      [description, amount, category, date]
    );

    res.status(201).json(result.rows[0]);
  } catch (err) {
    next(err);
  }
};

export const deleteExpense = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!id || isNaN(id)) {
      const err = new Error("Invalid expense ID");
      err.status = 400;
      throw err;
    }

    const result = await query(
      "DELETE FROM expenses WHERE id = $1 RETURNING *",
      [id]
    );

    if (result.rows.length === 0) {
      const err = new Error("Expense not found");
      err.status = 404;
      throw err;
    }

    res.json({ message: "Expense deleted successfully", expense: result.rows[0] });
  } catch (err) {
    next(err);
  }
};
