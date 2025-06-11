// JavaScript to show the current date and time
function updateDateTime() {
  const now = new Date();
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  };
  const formatted = now.toLocaleDateString("en-US", options);
  document.getElementById('dateTime').textContent = formatted;
}

setInterval(updateDateTime, 1000);
updateDateTime(); // Run once immediately


// JavaScript to show current date and time
function updateDateTime() {
  const now = new Date();
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  };
  const formatted = now.toLocaleDateString("en-US", options);
  document.getElementById('dateTime').textContent = formatted;
}

setInterval(updateDateTime, 1000);
updateDateTime();



function searchArticles() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const articles = document.querySelectorAll(".article");

  articles.forEach(article => {
    const title = article.querySelector("h2").textContent.toLowerCase();
    const content = article.querySelector("p").textContent.toLowerCase();
    if (title.includes(input) || content.includes(input)) {
      article.style.display = "block";
    } else {
      article.style.display = "none";
    }
  });
}


function searchArticles() {
  const query = document.getElementById("searchInput").value;
  fetch(`/search?q=${encodeURIComponent(query)}`)
    .then(response => response.json())
    .then(data => {
      const container = document.getElementById("articlesContainer");
      container.innerHTML = "";

      if (data.length === 0) {
        container.innerHTML = "<p>No articles found.</p>";
        return;
      }

      data.forEach(article => {
        const div = document.createElement("div");
        div.className = "article";
        div.innerHTML = `
          <h2>${article.title}</h2>
          <p>${article.content}</p>
          <a href="#" class="read-more">Read more</a>
        `;
        container.appendChild(div);
      });
    });
}


function searchArticles() {
  const query = document.getElementById("searchInput").value;
  fetch(`/search?q=${encodeURIComponent(query)}`)
    .then(response => response.json())
    .then(data => {
      const container = document.getElementById("articlesContainer");
      container.innerHTML = "";

      if (data.length === 0) {
        container.innerHTML = "<p>No articles found.</p>";
        return;
      }

      data.forEach(article => {
        const div = document.createElement("div");
        div.className = "article";
        div.innerHTML = `
          <img src="${article.image}" alt="${article.title}" />
          <h2>${article.title}</h2>
          <p>${article.content}</p>
          <a href="#" class="read-more">Read more</a>
        `;
        container.appendChild(div);
      });
    });
}


