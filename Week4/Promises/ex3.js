const inventory = {
  laptop: { price: 999, stock: 5 },
  mouse: { price: 25, stock: 10 },
  keyboard: { price: 75, stock: 0 },
  monitor: { price: 299, stock: 3 }
};

function checkInventory(items) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      for (let item of items) {
        if (!inventory[item] || inventory[item].stock <= 0) {
          return reject(new Error(`${item} is out of stock`));
        }
      }
      resolve(items);
    }, 500);
  });
}

function calculateTotal(items) {
  return new Promise(resolve => {
    setTimeout(() => {
      const subtotal = items.reduce((sum, item) => sum + inventory[item].price, 0);
      const tax = +(subtotal * 0.08).toFixed(2);
      const total = +(subtotal + tax).toFixed(2);
      resolve({ subtotal, tax, total });
    }, 200);
  });
}

function processPayment(amount) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.1) {
        resolve({ transactionId: Date.now(), amount, status: "success" });
      } else {
        reject(new Error("Payment failed. Try again."));
      }
    }, 1500);
  });
}

function updateInventory(items) {
  return new Promise(resolve => {
    setTimeout(() => {
      for (let item of items) {
        inventory[item].stock -= 1;
      }
      resolve({ status: "inventory updated", inventory });
    }, 300);
  });
}

async function checkout(itemNames) {
  try {
    await checkInventory(itemNames);
    const totals = await calculateTotal(itemNames);
    const payment = await processPayment(totals.total);
    const update = await updateInventory(itemNames);
    return {
      success: true,
      totals,
      payment,
      update
    };
  } catch (error) {
    throw error;
  }
}


checkout(['laptop', 'mouse'])
  .then(result => console.log('✅ Order success:', result))
  .catch(error => console.log('❌ Order failed:', error.message));

checkout(['laptop', 'keyboard'])
  .then(result => console.log('✅ Order success:', result))
  .catch(error => console.log('❌ Order failed:', error.message));

checkout(['monitor', 'mouse', 'laptop'])
  .then(result => console.log('✅ Order success:', result))
  .catch(error => console.log('❌ Order failed:', error.message));

