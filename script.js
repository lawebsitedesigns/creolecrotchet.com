const track = document.getElementById("track");
const slides = document.querySelectorAll(".slide");
let current = 0;
const visible = 3; // show 3 at a time
const total = slides.length;

function update() {
  const slideWidth = slides[0].clientWidth;
  track.style.transform = `translateX(-${current * slideWidth}px)`;
}

document.getElementById("prev").addEventListener("click", () => {
  if (current > 0) current--;
  update();
});

document.getElementById("next").addEventListener("click", () => {
  if (current < total - visible) current++;
  update();
});

window.addEventListener("resize", update);
window.addEventListener("load", update);
