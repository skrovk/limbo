const fadeEl = document.querySelector(".fade-image");

function updateFade() {
  const vh = innerHeight;
  const docHeight = document.body.scrollHeight - vh;

  let progress = (scrollY - vh) / (docHeight - vh);
  progress = Math.min(Math.max(progress, 0), 1);
  progress = Math.pow(progress, 0.5);

  fadeEl.style.opacity = progress;

  requestAnimationFrame(updateFade);
}

requestAnimationFrame(updateFade);
