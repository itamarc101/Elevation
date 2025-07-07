const reservations = {
  bob: { claimed: false },
  ted: { claimed: true }
}

const inputName = 'tED'; // 'Bob' or 'Ted'
const name = inputName.toLowerCase();

if (reservations[name]){
    if (reservations[name].claimed) {
        console.log("Hmm, someone already claimed this reservation");
    }
    else {
        console.log("Welcome, " + name);
    }
}
else {
    console.log("You have no reservation");
    reservations[name] = {claimed: true};
    console.log("Welcome, " + name + ". We've added you to the reservation list.");
}
