let customerType = "premium";
let purchaseAmount = 150;
let dayOfWeek = 6; // 0 = Sunday, 1 = Monday, Thursday = 4.
// Your conditional code here

if (customerType == "VIP") {
    console.log("You have 20% discount - " + purchaseAmount*0.8 + " After discount");
}

else if (customerType == "premium") {
    if (dayOfWeek == 4 || dayOfWeek == 5 ||dayOfWeek == 6) {
        console.log("15% on weekends - " + purchaseAmount*0.85 + " After discount");
    }
    else {
        console.log("10% on weekdays - " + purchaseAmount*0.9 + " After discount");
    }
}

else if (customerType == "regular") {
    if (purchaseAmount > 100) {
        console.log("10% - " + purchaseAmount*0.9 + " After discount");
    }
    else if (purchaseAmount > 50) {
        console.log("5% - " + purchaseAmount*0.95 + " After discount");
    }
    else {
        console.log("No discount, full price -" + purchaseAmount)
    }
}


