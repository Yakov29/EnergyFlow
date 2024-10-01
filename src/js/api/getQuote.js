import axios from "axios";

const quoteTitle = document.querySelector(".quote__title")
const quoteDescription = document.querySelector(".quote__description")
const quoteAuthor = document.querySelector(".quote__author")



export const getQoute = async () => {
    const axiosResponse = await axios.get("https://energyflow.b.goit.study/api/quote")
    const response = axiosResponse.data
    console.log(response)

    quoteDescription.textContent = response.quote
    quoteAuthor.textContent = response.author
}

getQoute()


