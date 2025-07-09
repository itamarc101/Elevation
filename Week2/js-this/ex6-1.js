const coffeeShop = {
  beans: 40,
  money: 100,
  beanCost: 0.5,

  buyBeans(beansNum) {
    const cost = beansNum * this.beanCost;

    if (this.money < cost) {
      console.log("You need more money to buy beans");
      return;
    }

    this.beans += beansNum;
    this.money -= cost;
  },

  drinkRequirements: {
    latte: { beanRequirement: 10, price: 5 },
    americano: { beanRequirement: 5, price: 3 },
    doubleShot: { beanRequirement: 15, price: 7 },
    frenchPress: { beanRequirement: 12, price: 6 },
  },

  makeDrink(drinkType) {
    // TODO: Finish this method
    const drink = this.drinkRequirements[drinkType];

    if (!drink) {
      console.log(`Sorry, we don't make ${drinkType}`);
      return;
    }

    if (this.beans < drink.beanRequirement) {
      console.log("Sorry, we're all out of beans!");
      return;
    }

    this.beans -= drink.beanRequirement;
  },

  buyDrink(drinkType) {
    const drink = this.drinkRequirements[drinkType];

    if (!drink) {
      console.log(`Sorry, we don't make ${drinkType}`);
      return;
    }

    this.money += drink.price;
    this.makeDrink(drinkType);
  },
};

coffeeShop.makeDrink("latte");
coffeeShop.makeDrink("americano");
coffeeShop.makeDrink("filtered"); //should console "Sorry, we don't make filtered"
coffeeShop.makeDrink("doubleShot");
coffeeShop.makeDrink("frenchPress"); //should console "Sorry, we're all out of beans"
