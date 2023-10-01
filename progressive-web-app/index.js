if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/service-worker.js").then(() => {
    console.log("Service Worker Registered");
  });
}

const colors = ["red", "green", "yellow", "blue", "orange", "purple"];

const DOMItems = document.getElementsByTagName("body");

setInterval(() => {
  DOMItems[0].style = `background-color: ${
    colors[Math.floor(Math.random() * colors.length)]
  }`;
}, 100);
