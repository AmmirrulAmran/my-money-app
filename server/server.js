import express from "express";
import expenseRoutes from "./routes/expenseRoutes.js";
import errorHandler from "./middleware/errorHandler.js";
import cors from "cors";

const app = express();


const PORT = 3000;
const DATABASE_URL = "postgresql://localhost/expenses";
app.use(cors());

app.use(express.json())


app.use("/api/expenses", expenseRoutes)
app.use(errorHandler)

app.listen(PORT, ()=>{
    console.log("Server is running on port " + PORT +".")
})