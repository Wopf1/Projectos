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
});

const button = document.querySelector(".color");
const header = document.querySelector("header");

const backgroundColor = () => {
  const roll = Math.floor(Math.random() * 3);
  switch (roll) {
    case 0:
      header.style.backgroundColor = "#15304c";
      break;
    case 1:
      header.style.backgroundColor = "#FFD700";
      break;
    case 2:
      header.style.backgroundColor = "#B22222 ";
      break;
  }
};
button.addEventListener("click", backgroundColor);

const background = document.querySelector(".welcome");
const button2 = document.querySelector(".background");

const backgroundImage = () => {
  const roll = Math.floor(Math.random() * 3);
  switch (roll) {
    case 0:
      background.style.background = "url(./img/background.webp";
      break;
    case 1:
      background.style.background =
        "url(./img/harry-potter-hbo-serial-hermiona-ron-bradavice-pozadi.jpg)";
      break;
    case 2:
      background.style.background =
        "url(./img/harry-potter-hbo-serial-postavy.jpg)";
      break;
  }
};

button2.addEventListener("click", backgroundImage);
