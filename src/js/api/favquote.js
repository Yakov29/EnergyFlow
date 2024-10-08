import axios from "axios";
const favquoteDescription = document.querySelector(".favorites__quote__description")
const favquoteAuthor = document.querySelector(".favorites__quote__author")
console.log(favquoteAuthor)



export const getQoute = async () => {
    const axiosResponse = await axios.get("https://energyflow.b.goit.study/api/quote")
    const response = axiosResponse.data

    favquoteDescription.textContent = response.quote
    favquoteAuthor.textContent = response.author
}

getQoute()
