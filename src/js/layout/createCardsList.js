import { exerciseLayout } from "../api/getExercises";

export const exercisesList = document.querySelector('.exercises__List');


export const createCardsList = (exercises) => {
    exercisesList.innerHTML = ''; 
  
      exercises.forEach(exercise => {
        const cardObject = {
          imgUrl: exercise.imgUrl,
          name: exercise.name,
        }
  
        const listItem = document.createElement('li');
        listItem.classList.add('exercises__item');
        listItem.style.backgroundImage = `url(${exercise.imgUrl})`;
  
        const boxDiv = document.createElement('div');
        boxDiv.classList.add('exercises__box');
  
        const title = document.createElement('h5');
        title.classList.add('exercises__item__title');
        title.textContent = exercise.name;
  
        boxDiv.appendChild(title);
        listItem.appendChild(boxDiv);
        exercisesList.appendChild(listItem);
  
  
  
        listItem.addEventListener('click', () => {
          exerciseLayout(cardObject)
        });
      
      });
}