const form = document.getElementById('transaction-form');
const titleInput = document.getElementById('title');
const amountInput = document.getElementById('amount');
const typeInput = document.getElementById('type');
const dateInput = document.getElementById('date');
const list = document.getElementById('transaction-list');
const totalIncomeEl = document.getElementById('total-income');
const totalExpenseEl = document.getElementById('total-expense');
const balanceEl = document.getElementById('balance');
const searchInput = document.getElementById('search');


let transactions = [];

form.addEventListener('submit', function (e){
    e.preventDefault();

    const transaction = {
        id: Date.now(),
        title: titleInput.value,
        amount: +parseFloat(amountInput.value),
        type: typeInput.value,
        date: dateInput.value,

    };


    transactions.push(transaction);
    updateLocalStorage();
    renderTransactions(transactions);
    form.reset();
});

function updateLocalStorage(){
    localStorage.setItem('transactions', JSON.stringify(transactions));
}

// Function to load transactions from local storage
window.addEventListener('DOMContentLoaded', ()=> {
    const savedTransactions = JSON.parse(localStorage.getItem('transactions'));
    if (savedTransactions) {
        transactions = savedTransactions;
        renderTransactions(transactions);
    }
});


function renderTransactions(txList = transactions){
    list.innerHTML = '';


    txList.forEach((tx) =>{
        const li = document.createElement('li');

        li.innerHTML = `
            <span>${tx.title} - ${tx.amount} (${tx.type}) </span>
            <span>${tx.date}</span>
            
        `;

        list.appendChild(li);
    });
    updateSummary(txList);
}

function updateSummary(txList = transactions) {
    const income = txList.filter(tx => tx.type === 'income').reduce((acc, tx) => acc + tx.amount, 0);
    const expense = txList.filter(tx => tx.type === 'expense').reduce((acc, tx) => acc + tx.amount, 0);
    const balance = income - expense;

    totalIncomeEl.textContent = `${income}`;
    totalExpenseEl.textContent = `${expense}`;
    balanceEl.textContent = `Balance: ${balance}`;
}


searchInput.addEventListener('input', function(){
    const keyword = this.value.toLowerCase();

    const filteredTransactions = transactions.filter(tx => tx.title.toLowerCase().includes(keyword) || tx.date.includes(keyword) || tx.type.toLowerCase().includes(keyword));

    renderTransactions(filteredTransactions);
});