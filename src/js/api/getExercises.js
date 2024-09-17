import axios from 'axios';
import { createExercisesList } from '../layout/createExercises';


export const exerciseLayout = async (card) => {
    console.log(card.name);
    const exerciseResponse = await axios.get(
      `https://energyflow.b.goit.study/api/exercises?&page=1&limit=10`
    );
    const exerciseResults = exerciseResponse.data.results;
    console.log(exerciseResults);
  
    createExercisesList(exerciseResults)
  };
  