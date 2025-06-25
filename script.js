document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("search");
  const platformFilter = document.getElementById("platform");
  const difficultyFilter = document.getElementById("difficulty");
  const osFilter = document.getElementById("os");
  const writeups = document.querySelectorAll("#writeup-list .card");

  function filterWriteups() {
    const searchText = searchInput.value.toLowerCase();
    const platform = platformFilter.value;
    const difficulty = difficultyFilter.value;
    const os = osFilter.value;

    writeups.forEach((card) => {
      const text = card.innerText.toLowerCase();
      const matchesSearch = text.includes(searchText);
      const matchesPlatform = !platform || card.dataset.platform === platform;
      const matchesDifficulty = !difficulty || card.dataset.difficulty === difficulty;
      const matchesOS = !os || card.dataset.os === os;

      if (matchesSearch && matchesPlatform && matchesDifficulty && matchesOS) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  }

  searchInput.addEventListener("input", filterWriteups);
  platformFilter.addEventListener("change", filterWriteups);
  difficultyFilter.addEventListener("change", filterWriteups);
  osFilter.addEventListener("change", filterWriteups);
});

document.addEventListener("DOMContentLoaded", () => {
  const banner = document.getElementById("banner-text");
  const quote = "The quieter you become, the more you are able to hear...";
  let i = 0;
  let interval;

  function typeBanner() {
    if (i < quote.length) {
      banner.textContent += quote.charAt(i);
      i++;
      setTimeout(typeBanner, 75);
    } else {
      // Restart after 10 seconds
      setTimeout(() => {
        banner.textContent = "";
        i = 0;
        typeBanner();
      }, 5000);
    }
  }

  // Initial call
  typeBanner();
});