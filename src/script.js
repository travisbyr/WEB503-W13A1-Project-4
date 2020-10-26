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
    }
}

// Generate Id
function generateId() { // Math.floor rounds the number, Math.random gives a random number.
    return Math.floor(Math.random() * 100000000)
}


// Add transaction to the list

function addTransactionList(transaction) {
    // Get sign
    const sign = transaction < 0 ? '-' : '+'

    const item = document.createElement('li') 
}