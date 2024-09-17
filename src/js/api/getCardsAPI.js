import axios from "axios";
import { createCardsList } from "../layout/createCardsList"
// const exerciseMuscles = document.querySelector('.muscles');
// const exerciseBP = document.querySelector('.bp');
// const exerciseEquipment = document.querySelector('.equipment');


export const getCardsAPI = async (filter, page, limit) => {
    try {
      const axiosResponse = await axios.get(
        `https://energyflow.b.goit.study/api/filters?filter=${filter}&page=${page}&limit=${limit}`
      );
      const exercises = axiosResponse.data.results;
  
      createCardsList(exercises)
      
    } catch (error) {
      console.error('Error fetching exercises:', error);
    }
  };
