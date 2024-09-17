import { getCardsAPI } from "./getCardsAPI";

const exerciseMuscles = document.querySelector('.muscles');
const exerciseBP = document.querySelector('.bp');
const exerciseEquipment = document.querySelector('.equipment');



exerciseMuscles.style.backgroundColor = '#7E847F';
exerciseBP.style.backgroundColor = 'white';
exerciseEquipment.style.backgroundColor = 'white';
exerciseMuscles.style.color = '#fff';
exerciseBP.style.color = 'black';
exerciseEquipment.style.color = 'black';


export let filter = 'Muscles';
export let page = 1;
export let limit = 12;

exerciseMuscles.addEventListener('click', () => {
    exerciseMuscles.style.backgroundColor = '#7E847F';
    exerciseBP.style.backgroundColor = 'white';
    exerciseEquipment.style.backgroundColor = 'white';
    exerciseMuscles.style.color = '#fff';
    exerciseBP.style.color = 'black';
    exerciseEquipment.style.color = 'black';
    filter = 'Muscles';
    getCardsAPI(filter, page, limit);
  });
  
  exerciseBP.addEventListener('click', () => {
    exerciseMuscles.style.backgroundColor = 'white';
    exerciseBP.style.backgroundColor = '#7E847F';
    exerciseEquipment.style.backgroundColor = 'white';
    exerciseMuscles.style.color = 'black';
    exerciseBP.style.color = '#fff';
    exerciseEquipment.style.color = 'black';
    filter = 'Body%20parts';
    getCardsAPI(filter, page, limit);
  });
  
  exerciseEquipment.addEventListener('click', () => {
    exerciseMuscles.style.backgroundColor = 'white';
    exerciseBP.style.backgroundColor = 'white';
    exerciseEquipment.style.backgroundColor = '#7E847F';
    exerciseMuscles.style.color = 'black';
    exerciseBP.style.color = 'black';
    exerciseEquipment.style.color = '#fff';
    filter = 'Equipment';
    getCardsAPI(filter, page, limit);
  });
  
getCardsAPI(filter, page, limit)