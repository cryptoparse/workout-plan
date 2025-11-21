if ("serviceWorker" in navigator) {
  navigator.serviceWorker.addEventListener("controllerchange", () => {
    alert("A new version of the app is ready. Refresh to update.");
  });
}