document.getElementById("changeTextBtn").addEventListener("click", function () {
  const text = document.getElementById("bake-text");
  text.textContent = "Every bite is a piece of happiness. 🍪 Keep baking!";
  text.style.color = "#c1440e";
});

document.getElementById("toggleImgBtn").addEventListener("click", function () {
  const img = document.getElementById("bake-img");
  if (img.src.includes("Cookies")) {
    img.src = "https://via.placeholder.com/300x200.png?text=Cheesecake";
  } else {
    img.src = "https://via.placeholder.com/300x200.png?text=Cookies";
  }
});

document.getElementById("secretBtn").addEventListener("dblclick", function () {
  const msg = document.getElementById("secretMsg");
  msg.textContent = "🎉 Surprise! You found the baking bonus tip: Always use room temp butter!";
});

document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  const message = document.getElementById("formMessage");

  if (!name || !email || password.length < 8) {
    message.textContent = "Please fill all fields correctly.";
    message.style.color = "red";
  } else {
    message.textContent = "🎉 Successfully subscribed!";
    message.style.color = "green";
  }
});
