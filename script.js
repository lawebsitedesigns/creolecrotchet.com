const track = document.getElementById("track");
const slides = document.querySelectorAll(".slide");
let current = 0;
const visible = 3;
const total = slides.length;

function update() {
  const slideWidth = slides[0].clientWidth;
  track.style.transform = `translateX(-${current * slideWidth}px)`;

  slides.forEach((s, i) => {
    s.classList.remove("active", "inactive");
    if (i >= current && i < current + visible) {
      if (i === current + 1) {
        s.classList.add("active"); // middle one pops
      } else {
        s.classList.add("inactive");
      }
    }
  });
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
