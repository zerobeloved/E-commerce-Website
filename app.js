const warpper = document.querySelector(".sliderwrapper")
const menuItems = document.querySelectorAll(".menuItem")

// warpper.style.transform = "translateX(-200vw)"

menuItems.forEach((item,index) => {
    item.addEventListener("click", ()=> {
        warpper.style.transform= `translateX(-${index*100}vw)`})
    })
