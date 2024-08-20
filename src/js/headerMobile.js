const headerBackdrop = document.querySelector(".backdrop")
const openButton = document.querySelector(".burger")
const closeButton = document.querySelector(".mobile__close")
console.log(closeButton)

openButton.addEventListener("click", () => {
    console.log("click")
    headerBackdrop.classList.remove("change__invisible")
})

closeButton.addEventListener("click", () => {
    headerBackdrop.classList.add("change__invisible")
})