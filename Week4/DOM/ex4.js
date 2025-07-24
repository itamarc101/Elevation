function validateForm(event) {
  event.preventDefault(); // Prevent form from submitting/reloading the page

  const name = document.getElementById("fullName").value.trim();
  const salary = Number(document.getElementById("salary").value);
  const birthday = document.getElementById("birthday").value;
  const phone = document.getElementById("phone")?.value.trim() || ""; // your HTML doesn't have phone input yet
  const errorMsg = document.getElementById("error");

  errorMsg.textContent = ""; // reset
  errorMsg.style.color = "red";
  errorMsg.style.display = "block";

  if (name.length <= 2) {
    errorMsg.textContent = "Name must be longer than 2 characters";
    return;
  }

  if (salary < 10000 || salary > 16000) {
    errorMsg.textContent = "Salary must be between 10,000 and 16,000";
    return;
  }

  if (!birthday) {
    errorMsg.textContent = "Birthday is required";
    return;
  }

  if (!/^\d{10}$/.test(phone)) {
    errorMsg.textContent = "Phone must be 10 digits";
    return;
  }

  // If all valid
  errorMsg.style.display = "none";
  document.getElementById("jobForm").addEventListener("submit", validateForm);

  const welcome = document.createElement("h2");
  welcome.textContent = `Welcome, ${name}!`;
  document.querySelector(".form-container").appendChild(welcome);
}
