const exercisesList = document.querySelector('.exercises__List');

export const createExercisesList = (exerciseResults) => {
    exercisesList.innerHTML = ''; 
  
    exerciseResults.forEach((exercise) => {
      console.log(exercise);
  
      const exobject = {
        rating: exercise.rating,
        burnedCalories: exercise.burnedCalories,
        bodyPart: exercise.bodyPart,
        target: exercise.target,
        gif: exercise.gifURL
      };
  
      const listItem = `
        <li class="exercise">
          <span class="exercise__rating">Rating: ${exobject.rating}</span>
          <div class="exercise__box">
            <p class="exercise__calories">Burned calories: ${exobject.burnedCalories}</p>
            <p class="exercise__part">Body part: ${exobject.bodyPart}</p>
            <p class="exercise__target">Target: ${exobject.target}</p>
          </div>
        </li>
      `;
  
      exercisesList.innerHTML += listItem;
    });
}