const favoritesList = document.querySelector(".favorites__list");

const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

function createFavoriteItem(favorite) {
    const listItem = document.createElement('li');
    listItem.classList.add('favorites__item');
    
    const card = document.createElement('div');
    card.classList.add('card__name');

    const gif = document.createElement('img');
    gif.classList.add('card__gif');
    gif.src = favorite.gifUrl;
    gif.alt = favorite.description;
    card.appendChild(gif);

    const title = document.createElement('h5');
    title.classList.add('card__title');
    title.textContent = `${favorite.name}`;
    card.appendChild(title);

    const dataList = document.createElement('ul');
    dataList.classList.add('card__data');
    dataList.style.listStyle = 'none';
    dataList.style.padding = '0';
    dataList.style.margin = '0';
    dataList.style.fontSize = '0.75em';

    const caloriesItem = document.createElement('li');
    caloriesItem.classList.add('data__item');
    caloriesItem.style.marginBottom = '5px';

    const caloriesText = document.createElement('p');
    caloriesText.classList.add('data__text');
    caloriesText.innerHTML = `Burned calories: <span class="data__insert">${favorite.callories} / ${favorite.time} min</span>`;
    caloriesItem.appendChild(caloriesText);
    dataList.appendChild(caloriesItem);

    const bodyPartItem = document.createElement('li');
    bodyPartItem.classList.add('data__item');
    bodyPartItem.style.marginBottom = '5px';

    const bodyPartText = document.createElement('p');
    bodyPartText.classList.add('data__text');
    bodyPartText.innerHTML = `Body part: <span class="data__insert">${favorite.bodyPart}</span>`;
    bodyPartItem.appendChild(bodyPartText);
    dataList.appendChild(bodyPartItem);

    const targetItem = document.createElement('li');
    targetItem.classList.add('data__item');
    targetItem.style.marginBottom = '5px';

    const targetText = document.createElement('p');
    targetText.classList.add('data__text');
    targetText.innerHTML = `Target: <span class="data__insert">${favorite.target}</span>`;
    targetItem.appendChild(targetText);
    dataList.appendChild(targetItem);

    card.appendChild(dataList);

    listItem.appendChild(card);

    favoritesList.appendChild(listItem);
}

const noFavoritesMessage = document.querySelector(".favorites__none");
if (favorites.length === 0) {
    noFavoritesMessage.style.display = 'flex';
} else {
    noFavoritesMessage.style.display = 'none';
    favorites.forEach(createFavoriteItem);
}
