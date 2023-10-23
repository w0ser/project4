const openBtn = document.querySelector(".open");
const closeBtn = document.querySelector(".close");
const drawer = document.querySelector(".drawer");
const overflow = document.querySelector(".overflow");

openBtn.addEventListener("click", () => {
  drawer.classList.add("active");
  overflow.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  drawer.classList.remove("active");
  overflow.classList.remove("active");
});

overflow.addEventListener("click", () => {
  overflow.classList.remove("active");
  drawer.classList.remove("active");
});
