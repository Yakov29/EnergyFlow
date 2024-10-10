const openButton = document.querySelector(".subscribe__button")
const backdrop = document.querySelector(".footer__backdrop")
const closeButton = document.querySelector(".footer__close")
const subscribeInput = document.querySelector(".subscribe__input")
const footerText = document.querySelector(".footer__thank")
console.log(backdrop)

openButton.addEventListener("click", (e) => {
    e.preventDefault()
    backdrop.classList.remove("change__invisible")
    if (subscribeInput.value === "") {
        footerText.textContent = "To get started, fill out the field ❌"
    } else {
        footerText.textContent = "Thanks for subscribing! Everything went well ✅"
    }
})

closeButton.addEventListener("click", (e) => {
    e.preventDefault()
    backdrop.classList.add("change__invisible")
})


