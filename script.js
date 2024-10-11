// const glow = document.querySelector("#glow")

// document.addEventListener("mousemove", (e) => {
//     let x = e.clientX - (glow.offsetWidth / 2);
//     let y = e.clientY - (glow.offsetHeight / 2); 
//     glow.style.left = x + "px";
//     glow.style.top = y + "px";
// });

const card = document.querySelector('.card');

// Create glow element
const glow = document.createElement('div');
glow.className = 'glow';
card.appendChild(glow);

// Show glow on mouse enter
card.addEventListener('mouseenter', () => {
    glow.style.opacity = '1'; // Make glow visible
});

// Hide glow on mouse leave
card.addEventListener('mouseleave', () => {
    glow.style.opacity = '0'; // Hide glow
});

// Move glow with mouse movement
card.addEventListener('mousemove', (e) => {
    const cardRect = card.getBoundingClientRect();

    // Calculate mouse position relative to the card
    const mouseX = e.clientX - cardRect.left;
    const mouseY = e.clientY - cardRect.top;

    // Position the glow based on mouse position
    glow.style.left = `${mouseX}px`;
    glow.style.top = `${mouseY}px`;
});

const cardContainer = document.querySelector('.wrapper');
const cardMove = document.querySelector('.card');

card.addEventListener('mousemove', (event) => {
  const rect = cardContainer.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;
  const angleX = Math.atan2(y - centerY, x - centerX);
  const angleY = Math.atan2(x - centerX, y - centerY);

  cardMove.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`;
});

const portfolio = document.getElementById("portfolio")
portfolio.addEventListener('click', function() {
    window.open('https://github.com/ZAHEER0011', '_blank');
});

const modal = document.querySelector(".modal")
const overlay = document.querySelector(".overlay")

const openModal = () => {
    console.log("Modal is Open");
    modal.classList.add("active");
    overlay.classList.add("overlayactive")
}

const closeModal = () => {
    console.log("Modal is Closed");
    modal.classList.remove("active")
    overlay.classList.remove("overlayactive")
}

const openAbout = document.querySelector("#aboutmodal")
const aboutOverlay = document.querySelector("#aboutOverlay")

const openAboutModal = () => {
    console.log("About Modal is Open");
    openAbout.classList.add("active")
    aboutOverlay.classList.add("overlayactive")
}

const closeAboutModal = () => {
    console.log("About Modal is Closed");
    openAbout.classList.remove("active")
    aboutOverlay.classList.remove("overlayactive")
}