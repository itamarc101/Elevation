const coffeeShop = {
  beans: 40,

  drinkRequirements: {
    latte: 10,
    americano: 5,
    doubleShot: 15,
    frenchPress: 12
  },

  makeDrink: function (drinkType) {
    // TODO: Finish this method
    if (!this.drinkRequirements[drinkType]) {
        console.log("Sorry, we don't make " + drinkType);
        return;
    }
    if (this.beans < this.drinkRequirements[drinkType]) {
        console.log("Sorry, we're all out of beans!");
        return;
    }
    this.beans -= this.drinkRequirements[drinkType];
  }
}

coffeeShop.makeDrink("latte"); 
coffeeShop.makeDrink("americano");
coffeeShop.makeDrink("filtered"); //should console "Sorry, we don't make filtered"
coffeeShop.makeDrink("doubleShot");
coffeeShop.makeDrink("frenchPress"); //should console "Sorry, we're all out of beans"
