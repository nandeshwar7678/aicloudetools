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


//*************FOOTER**************** */
function goToPage(page) {
  window.location.href = page;
}
const slider = document.getElementById("slider");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

const scrollAmount = 200; // kitna move kare

next.onclick = () => {
  slider.scrollLeft += scrollAmount;
};

prev.onclick = () => {
  slider.scrollLeft -= scrollAmount;
};

//*************END**************** */
//*************MenuToggle**************** */


const toggle = document.getElementById("menuToggle");
const menu = document.getElementById("mainMenu");

toggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});

// submenu toggle mobile
document.querySelectorAll(".menu > li").forEach(item => {
  item.addEventListener("click", function () {
    if (window.innerWidth <= 768) {
      this.classList.toggle("active");
    }
  });
});

//*************END**************** */

//=====================
// CONTECT US POPUP CLOSE 
//=========================
// SEND MESSAGE

async function sendMessage(){

    const userType =
    document.getElementById("userType").value;

    const name =
    document.getElementById("name").value;

    const email =
    document.getElementById("email").value;

    const message =
    document.getElementById("message").value;



    const data = {

        userType,
        name,
        email,
        message

    };



    try{

        const response = await fetch(
            "http://aicloudetools/contact",
            {

                method:"POST",

                headers:{
                    "Content-Type":"application/json"
                },

                body:JSON.stringify(data)

            }
        );



        const result = await response.json();



        // SUCCESS MESSAGE

        alert(result.message);



        // CLOSE POPUP

        document.getElementById("contactPopup")
        .style.display = "none";



        // RESET FORM

        document.getElementById("userType").value = "";

        document.getElementById("name").value = "";

        document.getElementById("email").value = "";

        document.getElementById("message").value = "";

    }

    catch(error){

        alert("Something Went Wrong");

    }

}  

//================END==============//








