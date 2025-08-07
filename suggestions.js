function openDialog() {
  document.getElementById('modalOverlay').style.display = 'flex';
}

function closeDialog() {
  document.getElementById('modalOverlay').style.display = 'none';
}

document.getElementById("suggestionForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const responseMsg = document.getElementById("responseMsg");

  if (name && email && message) {
    responseMsg.textContent = "✅ Thanks for your suggestion!";
    this.reset();
    setTimeout(() => {
      closeDialog();
      responseMsg.textContent = "";
    }, 2000);
  } else {
    responseMsg.textContent = "❌ Please fill all fields.";
    responseMsg.style.color = "red";
  }
});
