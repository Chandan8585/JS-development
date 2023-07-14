export const createMovieContainer = (parentElement, movies) => {
    movies.map((movie) => {
      const cardContainer = document.createElement("div");
      cardContainer.classList.add("card-container");
      cardContainer.innerHTML = `
        <div class="card card-vertical d-flex direction-column relative shadow" data-id=${movie["ID"]}>
          <div class="card-image-container">
            <img class="card-image" src=${movie.img_link} alt="movie">
            <div class="cta-btn" data-id='${movie.id}'>
            </div>
          </div>
          <div class="card-details">
            <div class="card-title">
              ${movie.name.length > 18 ? `${movie.name.slice(0, 18)}...` : movie.name}
            </div>
            <p class="genre">
              <strong>Genre: ${movie.genre.length > 17 ? `${movie.genre.slice(0, 17)}...` : movie.genre}</strong>
            </p>
            <div class="imdb-rating">
              <p><span class="material-icons">
                star
              </span>${movie.imdb_rating}</p>
              <p>${movie.duration} mins</p>
            </div>
          </div>
        </div>
      `;
      parentElement.appendChild(cardContainer);
    });
  };
  