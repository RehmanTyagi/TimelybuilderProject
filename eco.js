"strict mode"
// first section slider code start
const Slider = document.querySelector(".slider")
// const Slides = Array.from(Slider.children)
const slidesButton = document.querySelectorAll(".navigation-btn")
// when click the slide should change to next
function Runslide() {
  const offset = 1
  const activeSlide = Slider.querySelector("[data-active]")
  let newindex = [...Slider.children].indexOf(activeSlide) + offset
  // console.log(newindex)
  if (newindex < 0) Slider.children.length - 1
  if (newindex >= Slider.children.length) newindex = 0

  Slider.children[newindex].dataset.active = true
  delete activeSlide.dataset.active
}

slidesButton.forEach(sliderbuttons => {
  sliderbuttons.addEventListener("click", Runslide)
})
// first section slider code end

// Hamburger Menu code start
const MenuBtn = document.querySelector(".hamburger-menu")
const MenuArea = document.querySelector(".list")

MenuBtn.addEventListener("click", () => {
  MenuArea.classList.toggle("menu-active")
  if (!MenuArea.classList.contains("menu-active")) {
    MenuBtn.innerHTML = "close"
  } else {
    MenuBtn.innerHTML = "menu"
  }
})
const menuUserBtn = document.createElement("div")
menuUserBtn.innerHTML = ` <div class="menu-btn-area">
<a href="#">Help Center</a>
<button class="user-buttons login">Log in</button>
<button class="user-buttons joinin">Get Started</button>
</div>`
MenuArea.appendChild(menuUserBtn)
// Hamburger Menu code end
