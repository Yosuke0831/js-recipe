const displayItems = document.getElementById("display-items")
const buyButtonTea = document.getElementById("buy-button-tea")
const addButton100 = document.getElementById("add-button-100")
const displaySaifu1000 = document.getElementById("display-saifu")
const displayJihankiMoney = document.getElementById("display-jihanki-money")

let saifu = 1000
let jihankiMoney = 0
buyButtonTea.onclick = function() {
  if (jihankiMoney >= 100) {
    jihankiMoney -= 100
    displayItems.textContent += "🍵"
    displayJihankiMoney.textContent = jihankiMoney
  }
}
addButton100.onclick = function() {
  if (saifu >= 100) {
    saifu -= 100
    jihankiMoney += 100
    displaySaifu1000.textContent = saifu
    displayJihankiMoney.textContent = jihankiMoney
  }
}
