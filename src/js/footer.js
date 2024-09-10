const openButton = document.querySelector(".subscribe__button")
const backdrop = document.querySelector(".footer__backdrop")
const closeButton = document.querySelector(".footer__close")

openButton.addEventListener("click", (e) => {
    e.preventDefault()
    backdrop.classList.remove("change__invisible")
})

closeButton.addEventListener("click", (e) => {
    e.preventDefault()
    backdrop.classList.add("change__invisible")
})