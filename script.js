//*************HEADER**************** */
const movies = [
  { img: "Banner/alpha.jpg", link: "movie1.html" },
  { img: "Banner/Dhurendhar 2.jpg", link: "movie2.html" },
  { img: "Banner/Dune.jpg", link: "movie2.html" },
  { img: "Banner/Supergirl dc.jpg", link: "movie2.html" },
  { img: "Banner/Supergirl dc.jpg", link: "movie2.html" },
  { img: "Banner/Supergirl dc.jpg", link: "movie2.html" },
  { img: "Banner/Supergirl dc.jpg", link: "movie2.html" },
  { img: "Banner/Supergirl dc.jpg", link: "movie2.html" },
  { img: "Banner/Supergirl dc.jpg", link: "movie2.html" },
];

const section = document.querySelector(".movie-section");

// render slides twice (for smooth loop)
section.innerHTML = [...movies, ...movies].map(movie => `
  <div class="movie-banner">
    <a href="${movie.link}" target="_blank" rel="noopener noreferrer">
      <img src="${movie.img}" alt="movie">
    </a>
  </div>
`).join("");

let scroll = 0;

function autoLoop() {
  scroll += 0.5; // speed

  // half width = original set
  const maxScroll = section.scrollWidth / 2;

  if (scroll >= maxScroll) {
    scroll = 0; // reset smoothly
  }

  section.style.transform = `translateX(-${scroll}px)`;
}

setInterval(autoLoop, 16); // smooth animation (~60fps)

//scrolling

// let scrollAmount = 0;

// function autoScroll() {
//   scrollAmount += 2; // speed

//   // reset when end reached
//   if (scrollAmount >= section.scrollWidth - section.clientWidth) {
//     scrollAmount = 0;
//   }

//   section.scrollLeft = scrollAmount;
// }

// setInterval(autoScroll, 20); // speed control
//*************END**************** */


//*************FOOTER**************** */
function goToPage(page) {
  window.location.href = page;
}
const slider = document.getElementById("slider");

// Clone items for infinite loop
slider.innerHTML += slider.innerHTML;

let speed = 0.5;
let rafId;

// 🚀 Continuous animation loop
function startScroll() {
  function step() {
    slider.scrollLeft += speed;

    // Seamless loop reset
    if (slider.scrollLeft >= slider.scrollWidth / 2) {
      slider.scrollLeft = 0;
    }

    rafId = requestAnimationFrame(step);
  }

  step();
}

// ⏸ Stop safely
function stopScroll() {
  if (rafId) cancelAnimationFrame(rafId);
}

// ▶ Start once
startScroll();

// ⏸ Pause on hover
slider.addEventListener("mouseenter", stopScroll);
slider.addEventListener("mouseleave", startScroll);

// 📱 Mobile touch support
slider.addEventListener("touchstart", stopScroll);
slider.addEventListener("touchend", startScroll);

//*************END**************** */


