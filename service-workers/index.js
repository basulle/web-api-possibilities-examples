if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then(() => {
        console.log("Success service worker registration");
      })
      .catch((err) => {
        console.log(err);
      });
  });
}

const fetchRandom = () => {
  const element = document.getElementById("fetch-result");
  element.innerHTML = "Fetching...";
  fetch("https://api.publicapis.org/random")
    .then((res) => res.json())
    .then((res) => {
      element.innerHTML = res.entries[0].Description;
    })
    .catch(() => {
      element.innerHTML = "Failed to fetch";
    });
};

window.fetchRandom = fetchRandom;
