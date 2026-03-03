const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzkxODdjMjllYTU5YTIzYzQyMjEyYjJmOWRkZmRjMCIsIm5iZiI6MTc3MjUwOTYyMC4xNjMsInN1YiI6IjY5YTY1OWI0NTQ4MmE0ZWNhMzhkY2ZmNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WLEnW9IpXoPBIdjRzqupweEKm7Uw3V772fMNArJ3bo0'
  }
};

const cardContainer = document.getElementById('cards');

fetch(url, options)
  .then(res => res.json())
  .then(data => {
    if (!data.results) return;
    data.results.forEach(movie => {

      const { backdrop_path, title, release_date, overview } = movie;
      const shortOverview = overview.length > 100 ? overview.slice(0, 50) + '...' : overview;
      const col = document.createElement('div');

      col.className = 'col-md-3 mb-3';

      col.innerHTML = `
        <div class="card py-4 mx-1" style="border: none; background-color: transparent;">
          <img src="https://image.tmdb.org/t/p/w500${backdrop_path}" class="card-img-top my-2 mb-3" alt="${title}">
          <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <strong>Release Date:</strong> <span>${release_date}</span>
            <p class="card-text mt-2">${shortOverview}</p>
            <a href="#" class="btn btn-outline-info my-4">Book Now!</a>
          </div>
        </div>`;

      cardContainer.appendChild(col);

    });

  })

  .catch(err => console.error(err));

