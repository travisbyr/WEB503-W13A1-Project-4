const balance = document.getElementById('balance');
const money_plus = document.getElementById('money-plus');
const money_minus = document.getElementById('money-minus');
const list = document.getElementById('list');
const form = document.getElementById('form')
const text = document.getElementById('text')
const amount = document.getElementById('amount')

const localStorageTransaction = JSON.parse(localStorage.getItem('transactions'))

let transactions = localStorage.getItem('transactions') !== null ? localStorageTransactions : []

// Add transaction

function addTransaction(e) {
    e.preventDefault()

    if(text.value.trim() === '' || amount.value.trim() === '') {
        alert('Please add text and an amount')
    } else {
        const transaction = {
            id: generateId(),
            text: text.value,
            amount: +amount.value
        }
        transactions.push(transaction)

        addTransactionList(transaction)

        updateValues()
        updateLocalStorage()
    }
}

// Generate Id
function generateId() { // Math.floor rounds the number, Math.random gives a random number.
    return Math.floor(Math.random() * 100000000)
}


// Add transaction to the list

function addTransactionList(transaction) {
    // Get sign
    const sign = transaction.amount < 0 ? '-' : '+'

    const item = document.createElement('li') 

    // Add a class based on the value of amount
    item.classList.add(transaction.amount < 0 ? 'minus' : 'plus')

    item.innerHTML = `
    ${transaction.text} <span>${sign}${Math.abs(transaction.amount)}</span>
    <button class="delete-btn" onclick="removeItem(${transaction.id})">x</button>
    `

    list.appendChild(item)
}

// Update total card
function updateValues() {
    const amount = transactions.map(transaction => transaction.amount)
    
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2)

    const income = amounts.filter(item => item > 0).reduce((acc, itme) => (acc += item), 0).toFixed(2)

    const expense = amounts.filter(item => item < 0).reduce(((acc, item) => (acc += item), 0) * -1).toFIxed(2)

    balance.innerText = `$${total}`
    money_plus.innerText = `$${income}`
    money_minus.innerText = `$${expense}`
}

// Remove item by id
function removeItem(id) {
    transactions = transactions.filter(transaction => transaction.id !== id)

    updateLocalStorage()
}

// Update local storage
function updateLocalStorage() {
    localStorage.setItem('transactions', JSON.stringify(transactions))
}

// init app
function init() {
    list.innerHTML = ''

    transactions.forEach(addTransactionList) 

    updateValues()
}

// Add transaction
form.addEventListener('submit', addTransaction)