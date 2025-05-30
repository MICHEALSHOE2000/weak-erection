// main.js

// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#orderModal form");

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent real submission for demo

    const name = document.getElementById("fullName").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const address = document.getElementById("address").value.trim();

    if (!name || !phone || !address) {
      alert("Please fill in all fields before submitting.");
      return;
    }

    // Optional: validate phone format
    const phonePattern = /^[0-9+()\-\s]{7,20}$/;
    if (!phonePattern.test(phone)) {
      alert("Please enter a valid phone number.");
      return;
    }

    // Simulate submission
    alert("Thank you! Your order for INFE-CURE has been received.");
    form.reset();
    const modal = bootstrap.Modal.getInstance(document.getElementById("orderModal"));
    modal.hide();
  });
});
