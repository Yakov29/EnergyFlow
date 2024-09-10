import axios from 'axios';

const exerciseBackdrop = document.querySelector('.exercises__backdrop');
const exerciseClose = document.querySelector('.exercises__close');
const exercisesList = document.querySelector('.exercises__List');
const exerciseMuscles = document.querySelector('.muscles');
const exerciseBP = document.querySelector('.bp');
const exerciseEquipment = document.querySelector('.equipment');

exerciseMuscles.style.backgroundColor = '#7E847F';
exerciseBP.style.backgroundColor = 'white';
exerciseEquipment.style.backgroundColor = 'white';
exerciseMuscles.style.color = '#fff';
exerciseBP.style.color = 'black';
exerciseEquipment.style.color = 'black';

//  Значение при нажатии меняется
let filter = 'Muscles';
let page = 1;
let limit = 10;

const getExercises = async () => {
  try {
    const axiosResponse = await axios.get(
      `https://energyflow.b.goit.study/api/filters?filter=${filter}&${page}=1&${limit}=12`
    );
    const exercises = axiosResponse.data.results;
    console.log(exercises);
    exercisesList.innerHTML = '';

    exercises.forEach(exercise => {
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
    });
  } catch (error) {
    throw new Error();
  }
};

getExercises();

exerciseMuscles.addEventListener('click', () => {
  exerciseMuscles.style.backgroundColor = '#7E847F';
  exerciseBP.style.backgroundColor = 'white';
  exerciseEquipment.style.backgroundColor = 'white';
  exerciseMuscles.style.color = '#fff';
  exerciseBP.style.color = 'black';
  exerciseEquipment.style.color = 'black';
  filter = 'Muscles';
  getExercises();
});
exerciseBP.addEventListener('click', () => {
  exerciseMuscles.style.backgroundColor = 'white';
  exerciseBP.style.backgroundColor = '#7E847F';
  exerciseEquipment.style.backgroundColor = 'white';
  exerciseMuscles.style.color = 'black';
  exerciseBP.style.color = '#fff';
  exerciseEquipment.style.color = 'black';
  filter = 'Body%20parts';
  getExercises();
});
exerciseEquipment.addEventListener('click', () => {
  exerciseMuscles.style.backgroundColor = 'white';
  exerciseBP.style.backgroundColor = 'white';
  exerciseEquipment.style.backgroundColor = '#7E847F';
  exerciseMuscles.style.color = 'black';
  exerciseBP.style.color = 'black';
  exerciseEquipment.style.color = '#fff';
  filter = 'Equipment';
  getExercises();
});

// const getExercises = async () => {
//   try {
//     const axiosResponse = await axios.get(
//       'https://energyflow.b.goit.study/api/exercises'
//     );

//     const exercises = axiosResponse.data.results;

//     const exercisesList = document.querySelector('.exercises__List');
//     exercisesList.innerHTML = '';

//     exercises.forEach(exercise => {
//       const listItem = document.createElement('li');
//       listItem.classList.add('exercises__item');
//       listItem.style.backgroundImage = `url(${exercise.gifUrl})`;

//       const boxDiv = document.createElement('div');
//       boxDiv.classList.add('exercises__box');

//       const title = document.createElement('h5');
//       title.classList.add('exercises__item__title');
//       title.textContent = exercise.name;

//       boxDiv.appendChild(title);
//       listItem.appendChild(boxDiv);
//       exercisesList.appendChild(listItem);

//       listItem.addEventListener('click', () => {
//         exerciseBackdrop.classList.remove('change__invisible');
//         const modalTitle = document.querySelector('.modal__title');
//         const dataTarget = document.querySelector('.dataTarget');
//         const dataPart = document.querySelector('.dataPart');
//         const dataEquipment = document.querySelector('.dataEquipment');
//         const dataPopular = document.querySelector('.dataPopular');
//         const dataDescription = document.querySelector('.modal__description');
//         const dataGif = document.querySelector(".modal__gif");
//         const dataCallories = document.querySelector(".callories__description");
//         const dataTime = document.querySelector(".callories__time");
//         const favoritesButton = document.querySelector(".add__favorites");

//         const _id = exercise._id;
//         const gifUrl = exercise.gifUrl;
//         const bodyPart = exercise.bodyPart;
//         const target = exercise.target;
//         const equipment = exercise.equipment;
//         const popularity = exercise.popularity;
//         const description = exercise.description;
//         const callories = exercise.burnedCalories;
//         const time = exercise.time;
//         const name = exercise.name

//         modalTitle.textContent = `${name}`;
//         dataTarget.textContent = `${target}`;
//         dataPart.textContent = `${bodyPart}`;
//         dataEquipment.textContent = `${equipment}`;
//         dataPopular.textContent = `${popularity}`;
//         dataDescription.textContent = `${description}`;
//         dataGif.style.backgroundImage = `url(${gifUrl})`;
//         dataCallories.textContent = `${callories}/${time} min`;

//         favoritesButton.addEventListener("click", () => {
//           addToFavorites({
//             name,
//             _id,
//             gifUrl,
//             bodyPart,
//             target,
//             equipment,
//             popularity,
//             description,
//             callories,
//             time,
//           });
//         });
//       });

//       exerciseClose.addEventListener('click', () => {
//         exerciseBackdrop.classList.add('change__invisible');
//       });
//     });
//   } catch (error) {
//     console.error(error);
//   }
// };

// const addToFavorites = (exercise) => {
//   let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

//   if (!favorites.find(fav => fav._id === exercise._id)) {
//     favorites.push(exercise);
//     localStorage.setItem('favorites', JSON.stringify(favorites));
//     alert("Exercise added to favorites!");
//   } else {
//     alert("This exercise is already in favorites.");
//   }
// };

// getExercises();
