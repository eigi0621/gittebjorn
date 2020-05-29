let toTop = document.createElement("button");
toTop.id = "toTop";
toTop.textContent = "TOP";
document.querySelector("body").appendChild(toTop);
toTop.addEventListener("click", () => {
  gsap.to(window, {
    duration: 1,
    scrollTo: 0,
    ease: "power3.inOut"
  })
})


window.addEventListener("resize", fullWidth);
window.addEventListener("DOMContentLoaded", fullWidth);

function fullWidth() {
  document.querySelectorAll(".full_width").forEach((img) => {
    img.style.width = "100vw";
    img.style.position = "relative";
    if (window.innerWidth > 600) {
      img.style.left = `-50px`;
    } else {
      img.style.left = `-20px`;
    }
  })
}
