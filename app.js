//Selectors 

const expenseInput = document.querySelector(".expense");
const expenseAmountInput = document.querySelector(".expense-amount");
const addExpenseButton = document.querySelector(".add-expense-button");
const expensesList = document.querySelector(".expenses-list");

//Event Listeners

addExpenseButton.addEventListener("click",addExpense);
expensesList.addEventListener("click",deleteOrCheck);

//Functions

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
        newExpenseAmount.innerText = "R" + expenseAmountInput.value;
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

        expensesList.appendChild(newExpenseItem);
        expenseInput.value = "";
        expenseAmountInput.value = "";

    }
}

function deleteOrCheck(ev){
    const clickedItem = ev.target;

    if(clickedItem.classList[0] == "delete-button"){
        const buttonsParent = clickedItem.parentElement;
        const expenseItem = buttonsParent.parentElement;
        expenseItem.classList.add("fall");

        expenseItem.addEventListener("transitionend",function(){
        expenseItem.remove();
        })
    }

    else if(clickedItem.classList[0] == "check-button"){
        const buttonsParent = clickedItem.parentElement;
        const expenseItem = buttonsParent.parentElement;
        expenseItem.classList.toggle("checked");
    }

}