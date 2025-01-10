import { generateMoviesHTML } from './movie-converter.js';
import { renderMoviesToDOM } from './movie-render.js';
import { generateFishHTML } from './movie-converter.js';
import { renderFishToDOM } from './movie-render.js';

const movieHTML = generateMoviesHTML();
const fishHTML = generateFishHTML();

renderMoviesToDOM(movieHTML);
renderFishToDOM(fishHTML);