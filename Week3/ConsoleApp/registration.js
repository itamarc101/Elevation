// Import the module
const readline = require('readline');

// Use the Methods Methods
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const user = {};

rl.question("what is your name?", (name) => {
    user.name = name;

    rl.question("What is your email? ", (email) => {
    user.email = email;

        rl.question("What is your age? ", (age) => {
            user.age = age;

            rl.question("What is your fav color? ", (color) => {
                user.color = color;

                console.log("\nRegistration Summary:");
                console.log(`Name: ${user.name}`);
                console.log(`Email: ${user.email}`);
                console.log(`Age: ${user.age}`);
                console.log(`Favorite Color: ${user.color}`);

                rl.close();
            });
        });
    });
});