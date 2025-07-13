const Bank = function () {
    let money = 500
  
    const depositCash = function (cash) {
      money += cash
    }
  
    const checkBalance = function () {
      console.log(money)
    }
  
    return {
      deposit: depositCash,
      showBalance: checkBalance
    }
  }
  
  const bank = Bank()
  bank.deposit(200)
  bank.deposit(250)
  bank.showBalance() // 950
  