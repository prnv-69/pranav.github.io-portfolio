// YEAR
document.getElementById("year").textContent = new Date().getFullYear();

// TYPEWRITER
const roles = [
  "Video Editor",
  "Reel Specialist",
  "Motion Designer",
  "Short-Form Killer"
];

let i = 0, j = 0, del = false;
const type = document.getElementById("typewriter");

function loop() {
  const word = roles[i];
  type.textContent = del
    ? word.substring(0, j--)
    : word.substring(0, j++);

  if (!del && j === word.length + 1) setTimeout(() => del = true, 1200);
  if (del && j === 0) { del = false; i = (i + 1) % roles.length; }

  setTimeout(loop, del ? 60 : 120);
}

// REVEAL
function reveal() {
  document.querySelectorAll(".reveal").forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 80) {
      el.classList.add("active");
    }
  });
}

window.onload = () => {
  loop();
  reveal();
};

window.addEventListener("scroll", reveal);
