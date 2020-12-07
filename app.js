//Selectors 
const budgetInput = document.querySelector(".budget-input");
const calculateButton = document.querySelector(".calculate-button");
const budgetText = document.querySelector(".budget-text");
const expensesText = document.querySelector(".expenses-text");
const balanceText = document.querySelector(".balance-text");
const expenseInput = document.querySelector(".expense");
const expenseAmountInput = document.querySelector(".expense-amount");
const addExpenseButton = document.querySelector(".add-expense-button");
const expensesList = document.querySelector(".expenses-list");

//Event Listeners

addExpenseButton.addEventListener("click",addExpense);
expensesList.addEventListener("click",deleteOrCheck);
calculateButton.addEventListener("click",getBudget);

//Variables

var theExpenses = 0;

//Functions

function getBudget(){
    budgetText.innerText = "R" + budgetInput.value;
    expensesText.innerText = "R" + theExpenses;
    balanceText.innerText = "R" + (parseInt(budgetInput.value) - parseInt(theExpenses));

    // budgetInput.value = "";
}


function addExpense(ev){
    
    if(expenseInput.value === "" || expenseAmountInput.value === ""){
        alert("please enter expense and expense amount");
    }

    else{
        const newExpenseItem  = document.createElement("li");
        newExpenseItem.classList.add("new-expense-item");

        const newExpense = document.createElement("h2");
        newExpense.classList.add("new-expense");
        newExpense.innerText = expenseInput.value;
        newExpenseItem.appendChild(newExpense);

        const newExpenseAmount = document.createElement("h2");
        newExpenseAmount.classList.add("expense-amount");
        newExpenseAmount.innerText =  expenseAmountInput.value;
        newExpenseItem.appendChild(newExpenseAmount);

        const buttonsContainer = document.createElement("span");
        buttonsContainer.classList.add("buttons-container");

        const checkButton = document.createElement("button");
        checkButton.classList.add("check-button");
        checkButton.innerHTML = '<i class = "fa fa-check"></i>';
        buttonsContainer.appendChild(checkButton);

        const deleteButton = document.createElement("button");
        deleteButton.classList.add("delete-button");
        deleteButton.innerHTML = '<i class = "fa fa-trash"></i>';
        buttonsContainer.appendChild(deleteButton);

        newExpenseItem.appendChild(buttonsContainer);

        theExpenses = parseInt(theExpenses) + parseInt(expenseAmountInput.value);

        expensesList.appendChild(newExpenseItem);
        expenseInput.value = "";
        expenseAmountInput.value = "";

        getBudget();

    }
}

function deleteOrCheck(ev){
    ev.preventDefault();
    const clickedItem = ev.target;

    if(clickedItem.classList[0] == "delete-button"){
        const buttonsParent = clickedItem.parentElement;
        const expenseItem = buttonsParent.parentElement;
        expenseItem.classList.add("fall");

        theExpenses = theExpenses - (expenseItem.children[1].innerHTML);

        expenseItem.addEventListener("transitionend",function(){
        expenseItem.remove();
        getBudget();
        })
    }

    else if(clickedItem.classList[0] == "check-button"){
        const buttonsParent = clickedItem.parentElement;
        const expenseItem = buttonsParent.parentElement;
        expenseItem.classList.toggle("checked");
    }

}