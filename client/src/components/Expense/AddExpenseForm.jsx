import React, { useState } from "react";
import EmojiPickerPopup from "../EmojiPickerPopup.jsx";
import Input from "../Inputs/Input";

const AddExpenseForm = ({ onAddExpense }) => {
  const [income, setIncome] = useState({
    category: "",
    amount: "",
    date: "",
    icon: "",
  });

  const handlehange = (key, value) => setIncome({ ...income, [key]: value });
  return (
    <div>
      <EmojiPickerPopup
        icon={income.icon}
        onSelect={(selectedIcon) => handlehange("icon", selectedIcon)}
      />

      <Input
        value={income.category}
        onChange={({ target }) => handlehange("category", target.value)}
        label="Category"
        placeholder="Rent, Groceries, etc"
        type="text"
      />

      <Input
        value={income.amount}
        onChange={({ target }) => handlehange("amount", target.value)}
        label="Amount"
        placeholder=""
        type="number"
      />

      <Input
        value={income.date}
        onChange={({ target }) => handlehange("date", target.value)}
        label="Date"
        placeholder=""
        type="date"
      />

      <div className="flex justify-end mt-6">
        <button
          type="button"
          className="add-btn add-btn-fill"
          onClick={() => onAddExpense(income)}
        >
          Add Expense
        </button>
      </div>
    </div>
  );
};

export default AddExpenseForm;
