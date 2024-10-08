const headerBackdrop = document.querySelector(".header__backdrop")
const headerOpen = document.querySelector(".burger")
const headerClose = document.querySelector(".mobile__close")

headerOpen.addEventListener("click", () => {
    headerBackdrop.classList.remove("change__invisible")
})

headerClose.addEventListener("click", () => {
    headerBackdrop.classList.add("change__invisible")
})