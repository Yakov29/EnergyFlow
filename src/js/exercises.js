import axios from 'axios';

const getExercises = async () => {
  try {
    const axiosResponse = await axios.get(
      'https://energyflow.b.goit.study/api/exercises'
    );

    const exercises = axiosResponse.data.results;

    const exercisesList = document.querySelector('.exercises__List');
    exercisesList.innerHTML = '';

    exercises.forEach(exercise => {
      const listItem = document.createElement('li');
      listItem.classList.add('exercises__item');
      listItem.style.backgroundImage = `url(${exercise.gifUrl})`;

      const boxDiv = document.createElement('div');
      boxDiv.classList.add('exercises__box');

      const title = document.createElement('h5');
      title.classList.add('exercises__item__title');
      title.textContent = exercise.bodyPart;

      boxDiv.appendChild(title);
      listItem.appendChild(boxDiv);
      exercisesList.appendChild(listItem);
    });
  } catch (error) {
    console.error(error);
  }
};

getExercises();
