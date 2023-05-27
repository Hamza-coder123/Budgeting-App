
let monthlyBudget = 0;
let expenses = [];

// Get HTML elements
const budgetInput = document.getElementById('budget-input');
const addBudgetBtn = document.getElementById('add-budget-btn');
const descriptionInput = document.getElementById('description-input');
const amountInput = document.getElementById('amount-input');
const dateInput = document.getElementById('date-input');
const addExpenseBtn = document.getElementById('add-expense-btn');
const expenseTable = document.getElementById('expense-table');
const remainingBudget = document.getElementById('remaining-budget');

// Event listener for adding budget
addBudgetBtn.addEventListener('click', () => {
  monthlyBudget = parseFloat(budgetInput.value);
  budgetInput.value = '';
  updateRemainingBudget();
});

// Event listener for adding expense
addExpenseBtn.addEventListener('click', () => {
  const expense = {
    description: descriptionInput.value,
    amount: parseFloat(amountInput.value),
    date: dateInput.value
  };

  expenses.push(expense);
  descriptionInput.value = '';
  amountInput.value = '';
  dateInput.value = '';
  updateExpenseTable();
  updateRemainingBudget();
});

// Function to update the expense table
function updateExpenseTable() {
  // Clear existing table rows
  expenseTable.innerHTML = `
    <tr>
      <th>Description</th>
      <th>Amount</th>
      <th>Date</th>
    </tr>
  `;

  // Add expense rows to the table
  expenses.forEach(expense => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${expense.description}</td>
      <td>${expense.amount}</td>
      <td>${expense.date}</td>
    `;
    expenseTable.appendChild(row);
  });
}

// Function to update the remaining budget
function updateRemainingBudget() {
  const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  const remaining = monthlyBudget - totalExpenses;
  remainingBudget.textContent = `Remaining Budget: $${remaining}`;
}
