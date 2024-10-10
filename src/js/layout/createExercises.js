const exercisesList = document.querySelector('.exercises__List');
const card__button = document.querySelector('.card__button');
const alertBackdrop = document.querySelector(".alert__backdrop")
const alertClose = document.querySelector(".alert__close")
const alertTitle = document.querySelector(".alert__title")


export const createExercisesList = (exerciseResults) => {
  exercisesList.innerHTML = '';
  console.log(exerciseResults.gifURL)

  exerciseResults.forEach(exercise => {
    const exobject = {
      rating: exercise.rating,
      burnedCalories: exercise.burnedCalories,
      bodyPart: exercise.bodyPart,
      target: exercise.target,
      gifURL: exercise.gifUrl,
      callories: exercise.burnedCalories,
      time: exercise.time,
      equipment: exercise.equipment,
      description: exercise.description
    };
    console.log(exobject.gifURL)

    const listItem = document.createElement('li');
    console.log(listItem);
    listItem.classList.add('exercise');

    listItem.innerHTML = `
        <span class="exercise__rating">Rating: ${exobject.rating}</span>
        <div class="exercise__box">
          <p class="exercise__calories">Burned calories: ${exobject.burnedCalories}</p>
          <p class="exercise__part">Body part: ${exobject.bodyPart}</p>
          <p class="exercise__target">Target: ${exobject.target}</p>
        </div>
    `;

    exercisesList.appendChild(listItem);

    const exerciseBackdrop = document.querySelector('.exercises__backdrop');
    const exerciseClose = document.querySelector('.exercises__close');
    const modalGif = document.querySelector('.modal__gif');
    const modalTitle = document.querySelector('.modal__title');
    const modalRaiting = document.querySelector('.modal__raiting');
    const modalTarget = document.querySelector('.dataTarget');
    const modalPart = document.querySelector('.dataPart');
    const modalEquipment = document.querySelector('.dataEquipment');
    const modalPopular = document.querySelector('.dataPopular');
    const modalCallories = document.querySelector('.callories__description');
    const modalDescription = document.querySelector('.modal__description');


    listItem.addEventListener('click', e => {
      exerciseBackdrop.classList.remove('change__invisible');
      modalTitle.textContent = `${exobject.bodyPart}`;
      modalRaiting.textContent = `${exobject.rating}`;
      modalTarget.textContent = `${exobject.target}`;
      modalPart.textContent = `${exobject.bodyPart}`;
      modalEquipment.textContent = `${exobject.equipment}`;
      modalPopular.textContent = `${exobject.rating}`;
      modalCallories.textContent = `${exobject.callories}/${exobject.time}`;
      modalDescription.textContent = `${exobject.description}`
      modalGif.style.backgroundImage = `url(${exobject.gifURL})`;

      const favorite = {
        modalTitle: exobject.bodyPart,
        modalRaiting: exobject.rating,
        modalTarget: exobject.target,
        modalPart: exobject.bodyPart,
        modalEquipment: exobject.equipment,
        modalPopular: exobject.rating,
        modalCallories: exobject.callories,
        modalTime: exobject.time,
        modalDescription: exobject.description,    
        modalGif: exobject.gifURL,
      }


      const addToFavorites = document.querySelector(".add__favorites")

      addToFavorites.addEventListener("click", () => {
        let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
        
        const isExist = favorites.some(item => item.modalTitle === favorite.modalTitle);
        
        if (!isExist) {

          favorites.push(favorite);
          
          localStorage.setItem("favorites", JSON.stringify(favorites));
          exerciseBackdrop.classList.add('change__invisible');
          alertBackdrop.classList.remove("change__invisible")
          alertTitle.textContent = "This exercise has been added to favorites ✅ you can check it on the favorites page."
         
        } else {
          exerciseBackdrop.classList.add('change__invisible');
          alertBackdrop.classList.remove("change__invisible")
          alertTitle.textContent = "This exercise is already in your favorites or an error occurred ❌"
        }
      });
    });

    exerciseClose.addEventListener('click', e => {
      exerciseBackdrop.classList.add('change__invisible');
    });
  });
};

alertClose.addEventListener("click", () => {
  alertBackdrop.classList.add("change__invisible")
})