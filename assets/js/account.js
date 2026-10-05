import { auth } from "./firebase-config.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const link = document.getElementById("accountLink");

if (link) {
  const iconSrc = link.querySelector("img").getAttribute("src");

  function paint(text) {
    link.textContent = "";
    const img = document.createElement("img");
    img.src = iconSrc;
    img.alt = "";
    const label = document.createElement("span");
    label.textContent = text;
    const chev = document.createElement("span");
    chev.className = "chev";
    chev.innerHTML = "&#9013;";
    link.append(img, label, chev);
  }

  onAuthStateChanged(auth, user => {
    if (user) {
      const name = (user.displayName || user.email || "Account").split(" ")[0];
      paint(name.slice(0, 14));
    } else {
      paint("Account");
    }
  });
}