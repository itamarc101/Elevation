const reservations = {
  Bob: { claimed: false },
  Ted: { claimed: true }
};

function checkReservation() {
  const nameInput = document.getElementById("nameInput").value.trim();
  const message = document.getElementById("message");

  if (reservations[nameInput]) {
    if (reservations[nameInput].claimed) {
      message.textContent = "Hmm, someone already claimed this reservation";
    } else {
      message.textContent = `Welcome, ${nameInput}`;
      reservations[nameInput].claimed = true;
    }
  } else {
    message.textContent = "You have no reservation";
  }
}
