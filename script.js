// "strict mode"

// // navbar code start
// const HamburgerMenu = document.querySelector(".list")
// const MenuIcon = document.querySelector(".menu-icon")
// const NavBtn = document.querySelector(".login-area")

// HamburgerMenu.appendChild(NavBtn)
// MenuIcon.addEventListener("click", MenuEngine)

// function MenuEngine() {
//   HamburgerMenu.classList.toggle("active")
//   if (HamburgerMenu.classList.contains("active")) {
//     MenuIcon.innerHTML = "menu"
//   } else {
//     MenuIcon.innerHTML = "close"
//   }
// }
// // navbar code end

// // slider code start
// const sliderContainer = document.querySelector(".slider")
// const slides = document.querySelectorAll(".slides")
// const firstEL = document.querySelector(".slides-one")
// const slider = document.querySelector(".slider")
// const sliderhandle = document.querySelectorAll(".handle")
// sliderhandle.forEach(handles => {
//   handles.addEventListener("click", () => {
//     const sliderIndex = parseInt(
//       getComputedStyle(slider).getPropertyValue("--slider-index")
//     )
//     if (handles.classList.contains("right-handle")) {
//       slider.style.setProperty("--slider-index", sliderIndex + 1)
//     } else if (handles.classList.contains("left-handle") && sliderIndex > 0) {
//       slider.style.setProperty("--slider-index", sliderIndex - 1)
//     }
//   })
// })

// fetch("https://dummyjson.com/products")
//   .then(productList => {
//     if (productList.ok) {
//       console.log("api connection succeed")
//     } else {
//       console.log("connection did not succeed")
//     }
//     return productList.json()
//   })
//   .then(productValue => {
//     let data1 = productValue.products.map(servValue => {
//       return {
//         id: servValue.id,
//         img: servValue.thumbnail,
//       }
//     })

//     data1.forEach(ProductImages => {
//       let GenerateNewDiv = document.createElement("div")
//       slider.appendChild(GenerateNewDiv)
//       GenerateNewDiv.classList.add("slides")
//       let InsertImg = document.createElement("img")
//       GenerateNewDiv.appendChild(InsertImg)
//       console.log(InsertImg)
//       InsertImg.src = ProductImages.img
//     })
//   })

// // slider code end
