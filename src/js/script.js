const mobileMenu = document.getElementById("mobileMenu");
const hamburger = document.getElementById("hamburger");
const bars = hamburger.querySelectorAll("span");

let open = false;

hamburger.addEventListener("click", () => {
  open = !open;
  mobileMenu.classList.toggle("translate-x-full");
  mobileMenu.classList.toggle("translate-x-0");

  if (open) {
    bars[0].classList.add("rotate-45", "translate-y-[8px]");
    bars[1].classList.add("opacity-0");
    bars[2].classList.add("-rotate-45", "-translate-y-[8px]");
  } else {
    bars[0].classList.remove("rotate-45", "translate-y-[8px]");
    bars[1].classList.remove("opacity-0");
    bars[2].classList.remove("-rotate-45", "-translate-y-[8px]");
  }
});
