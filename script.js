function toggleNav() {
  const outerGird = document.querySelector(".outer-grid");
  outerGird.classList.toggle("outer-grid-expanded");

  const nav = document.querySelector("nav");
  nav.classList.toggle("hide-nav");
}
