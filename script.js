const form = document.getElementById("loginForm");
const msg = document.getElementById("msg");
const togglePass = document.getElementById("togglePass");
const password = document.getElementById("password");
const googleBtn = document.getElementById("googleBtn");
const remember = document.getElementById("remember");

function setMsg(text, ok = true) {
  msg.style.color = ok ? "#22c55e" : "#ef4444";
  msg.textContent = text;
  if (text) setTimeout(() => (msg.textContent = ""), 2500);
}

togglePass.addEventListener("click", () => {
  const isHidden = password.type === "password";
  password.type = isHidden ? "text" : "password";
  togglePass.textContent = isHidden ? "🙈" : "👁️";
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const pass = password.value;

  // Simulação (front-end). Depois dá pra ligar com API.
  if (!email.includes("@")) return setMsg("Email inválido.", false);
  if (pass.length < 6) return setMsg("Senha precisa ter no mínimo 6 caracteres.", false);

  if (remember.checked) {
    localStorage.setItem("savedEmail", email);
  } else {
    localStorage.removeItem("savedEmail");
  }

  setMsg("Login OK ✅ (simulação)");
});

googleBtn.addEventListener("click", () => {
  setMsg("Login com Google (simulação) 🔥");
});

// Carregar email salvo
const saved = localStorage.getItem("savedEmail");
if (saved) {
  document.getElementById("email").value = saved;
  remember.checked = true;
}
