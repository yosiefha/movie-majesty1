import { movies } from './movies-data.js';
import { database } from './movies-data.js';

export const generateMoviesHTML = () => {
    let movieHTML = '';
 
    for (const movie of movies) {
        movieHTML += `
            <article class="movie">
                <img src="${movie.poster}" alt="${movie.title} poster" class="movie__poster">
                <div class="movie__details">
                    <h2 class="movie__title">${movie.title}</h2>
                    <p class="movie__description">${movie.description}</p>
                </div>
            </article>
        `;
    }
 
    return movieHTML
 };
 export const generateFishHTML = () => {
    let fishHTML = '';

    for (const fish of database.fish) {
        fishHTML += `
            <article class="fish">
                <img src="${fish.image}" alt="${fish.name}" class="fish__image">
                <div class="fish__details">
                    <h2 class="fish__title">${fish.name}</h2>
                    <p class="fish__species">${fish.species}</p>
                    <p class="fish__location">${fish.location}</p>
                </div>
            </article>
        `;
    }

    return fishHTML;
 };

