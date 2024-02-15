const menuIcon = document.querySelector(".menu-icon");
const menuList = document.querySelector("nav");
const chandelierIcon = document.querySelector(".fa-solid");

menuIcon.addEventListener("click", () => {
  if (chandelierIcon.classList[1] === "fa-hanukiah") {
    chandelierIcon.classList.add("fa-skull-crossbones");
    chandelierIcon.classList.remove("fa-hanukiah");
    menuList.style.display = "block";
  } else {
    chandelierIcon.classList.add("fa-hanukiah");
    chandelierIcon.classList.remove("fa-skull-crossbones");
    menuList.style.display = "none";
  }
  console.log("something seomt");
});

const button = document.querySelector(".color");
const header = document.querySelector("header");
button.addEventListener("click", () => {
  const roll = Math.floor(Math.random() * 3);
  if (roll === 0) {
    header.style.backgroundColor = "#15304c";
  }
  if (roll === 1) {
    header.style.backgroundColor = "gold";
  }
  if (roll === 2) {
    header.style.backgroundColor = "red";
  }
});

const background = document.querySelector(".welcome");
const button2 = document.querySelector(".background");

button2.addEventListener("click", () => {
  const roll = Math.floor(Math.random() * 3);
  if (roll === 0) {
    background.style.background = "url(./img/background.webp";
  }
  if (roll === 1) {
    background.style.background =
      "url(./img/harry-potter-hbo-serial-hermiona-ron-bradavice-pozadi.jpg)";
  }
  if (roll === 2) {
    background.style.background =
      "url(./img/harry-potter-hbo-serial-postavy.jpg)";
  }
});
