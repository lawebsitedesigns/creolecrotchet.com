const track = document.getElementById("track");
const slides = document.querySelectorAll(".slide");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let current = 0;
const visible = 3; // number of slides visible at once
const total = slides.length;

function update() {
  const slideWidth = slides[0].clientWidth;
  track.style.transform = `translateX(-${current * slideWidth}px)`;
}

// Previous button
prevBtn.addEventListener("click", () => {
  current--;
  if (current < 0) {
    current = total - visible; // loop to end
  }
  update();
});

// Next button
nextBtn.addEventListener("click", () => {
  current++;
  if (current > total - visible) {
    current = 0; // loop to start
  }
  update();
});

// Adjust on window resize
window.addEventListener("resize", update);
window.addEventListener("load", update);

// Optional: automatic cycling every 5 seconds
setInterval(() => {
  current++;
  if (current > total - visible) {
    current = 0;
  }
  update();
}, 5000);
