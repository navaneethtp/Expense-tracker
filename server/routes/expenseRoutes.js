import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import {
  addExpense,
  deleteExpense,
  downloadExpenseExcel,
  getAllExpense,
} from "../controllers/expenseController.js";
import { downloadIncomeExcel } from "../controllers/incomeController.js";

const router = express.Router();

router.post("/add", protect, addExpense);
router.get("/get", protect, getAllExpense);
router.get("/downloadexcel", protect, downloadExpenseExcel);
router.delete("/:id", protect, deleteExpense);

export default router;
