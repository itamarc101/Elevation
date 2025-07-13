const prompt = require('prompt-sync')({ sigint:true});

let balance = 100;

function showMenu() {
    console.log("\n=== Banking System ===");
    console.log("1) Check Balance");
    console.log("2) Deposit Money");
    console.log("3) Withdraw Money");
    console.log("4) Exit");
}

let running = true;

while (running) {
    showMenu();

    const choice = prompt("Choose option (1-4): ").trim();
    switch (choice) {
        case "1":
            console.log(`Current balance: $${balance}`);
            break;

        case "2":
            const deposit = parseFloat(prompt("Enter amount to deposit: $"));
            if (isNaN(deposit) || deposit <= 0) {
                console.log("Invalid amount. Please enter a positive number.");
            } else {
                balance += deposit;
                console.log(`New balance: $${balance}`);
            }
            break;

        case "3":
            const withdraw = parseFloat(prompt("Enter amount to withdraw: $"));
            if (isNaN(withdraw) || withdraw <= 0) {
                console.log("Invalid amount. Please enter a positive number.");
            } else if (withdraw > balance) {
                console.log("Insufficient funds.");
            } else {
                balance -= withdraw;
                console.log(`New balance: $${balance}`);
            }
            break;

        case "4":
            console.log("Thank you for using the banking system. Goodbye!");
            running = false;
            break;

        default:
            console.log("Invalid option. Please choose between 1 and 4.");
    }
}