const track = document.getElementById("track");
const slides = document.querySelectorAll(".slide");
let current = 0;
const visible = 3;
const total = slides.length;

function update() {
  const slideWidth = slides[0].clientWidth;
  track.style.transform = `translateX(-${current * slideWidth}px)`;
}

document.getElementById("prev").addEventListener("click", () => {
  current = (current - 1 + total) % total;
  update();
});

document.getElementById("next").addEventListener("click", () => {
  current = (current + 1) % total;
  update();
});

window.addEventListener("resize", update);
window.addEventListener("load", update);
