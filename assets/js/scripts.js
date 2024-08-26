// Handle game submission
  const uploadForm = document.getElementById('upload-form');
  if (uploadForm) {
    uploadForm.addEventListener('submit', function(e) {
      e.preventDefault();

      const title = document.getElementById('title').value;
      const description = document.getElementById('description').value;
      const embedUrl = document.getElementById('embed-url').value;
      const thumbnail = document.getElementById('thumbnail').files[0];
      const category = document.getElementById('category').value;

      const reader = new FileReader();
      reader.onload = function(event) {
        const gameData = {
          title: title,
          description: description,
          embedUrl: embedUrl,
          thumbnail: event.target.result,
          category: category,
          user: ap.getUsername() || 'Anonymous', // AuthPro username or 'Anonymous'
        };

        let games = JSON.parse(localStorage.getItem('games')) || [];
        games.push(gameData);
        localStorage.setItem('games', JSON.stringify(games));

        alert('Game submitted successfully!');
        window.location.href = 'index.html';
      };

      reader.readAsDataURL(thumbnail);
    });
  }

  // Dynamically populate game tiles on homepage
  const gamesSection = document.getElementById('latest-games');
  if (gamesSection) {
    let games = JSON.parse(localStorage.getItem('games')) || [];
    let latestGames = games.slice(-20).reverse();
    latestGames.forEach(game => {
      const gameTile = document.createElement('div');
      gameTile.classList.add('game-tile');
      gameTile.innerHTML = `
        <img src="${game.thumbnail}" alt="${game.title}">
        <h3>${game.title}</h3>
        <p>${game.description}</p>
      `;
      gamesSection.appendChild(gameTile);
    });
  }

  // Populate categories on category page
  const gameGrid = document.getElementById('game-grid');
  if (gameGrid) {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    let games = JSON.parse(localStorage.getItem('games')) || [];
    let categoryGames = games.filter(game => game.category === category);

    categoryGames.forEach(game => {
      const gameTile = document.createElement('div');
      gameTile.classList.add('game-tile');
      gameTile.innerHTML = `
        <img src="${game.thumbnail}" alt="${game.title}">
        <h3>${game.title}</h3>
        <p>${game.description}</p>
      `;
      gameGrid.appendChild(gameTile);
    });
  }
});
