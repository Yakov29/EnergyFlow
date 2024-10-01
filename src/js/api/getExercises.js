import axios from 'axios';
import { createExercisesList } from '../layout/createExercises';


export const exerciseLayout = async (card) => {
    console.log(card.name);
    const exerciseResponse = await axios.get(
      `https://energyflow.b.goit.study/api/exercises`
    );
    const exerciseResults = exerciseResponse.data.results;
    console.log(exerciseResults.gifURL);

  
    createExercisesList(exerciseResults)
  };
  