import axios from 'axios';

const exerciseBackdrop = document.querySelector('.exercises__backdrop');
const exerciseClose = document.querySelector('.exercises__close');

// Fetch exercises from API
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

      // Open modal with exercise details
      listItem.addEventListener('click', () => {
        exerciseBackdrop.classList.remove('change__invisible');
        const modalTitle = document.querySelector('.modal__title');
        const dataTarget = document.querySelector('.dataTarget');
        const dataPart = document.querySelector('.dataPart');
        const dataEquipment = document.querySelector('.dataEquipment');
        const dataPopular = document.querySelector('.dataPopular');
        const dataDescription = document.querySelector('.modal__description');
        const dataGif = document.querySelector(".modal__gif");
        const dataCallories = document.querySelector(".callories__description");
        const dataTime = document.querySelector(".callories__time");
        const favoritesButton = document.querySelector(".add__favorites");

        const _id = exercise._id;
        const gifUrl = exercise.gifUrl;
        const bodyPart = exercise.bodyPart;
        const target = exercise.target;
        const equipment = exercise.equipment;
        const popularity = exercise.popularity;
        const description = exercise.description;
        const callories = exercise.burnedCalories;
        const time = exercise.time;

        modalTitle.textContent = `${bodyPart}`;
        dataTarget.textContent = `${target}`;
        dataPart.textContent = `${bodyPart}`;
        dataEquipment.textContent = `${equipment}`;
        dataPopular.textContent = `${popularity}`;
        dataDescription.textContent = `${description}`;
        dataGif.style.backgroundImage = `url(${gifUrl})`;
        dataCallories.textContent = `${callories}/${time} min`;

        // Add to favorites when the button is clicked
        favoritesButton.addEventListener("click", () => {
          addToFavorites({
            _id,
            gifUrl,
            bodyPart,
            target,
            equipment,
            popularity,
            description,
            callories,
            time,
          });
        });
      });

      // Close modal when the close button is clicked
      exerciseClose.addEventListener('click', () => {
        exerciseBackdrop.classList.add('change__invisible');
      });
    });
  } catch (error) {
    console.error(error);
  }
};

// Add exercise to local storage
const addToFavorites = (exercise) => {
  let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  
  // Check if the exercise is already in favorites
  if (!favorites.find(fav => fav._id === exercise._id)) {
    favorites.push(exercise);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    alert("Exercise added to favorites!");
  } else {
    alert("This exercise is already in favorites.");
  }
};

getExercises();
