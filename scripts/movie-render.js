export const renderMoviesToDOM = (movieHTML) => {
    const movieList = document.getElementById('movie-list');
 
    if (movieList) {
        movieList.innerHTML = movieHTML;
    } else {
        console.error('Could not find element with id "movie-list"');
    }
 };
 export const renderFishToDOM = (fishHTML) => {
    const movieList = document.getElementById('fish-list');
 
    if (movieList) {
        movieList.innerHTML = fishHTML;
    } else {
        console.error('Could not find element with id "fish-list"');
    }
 };