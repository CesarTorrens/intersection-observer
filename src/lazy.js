const isIntersecting = (entry) => {
  return entry.isIntersecting;
};

const loadImage = (entry) => {
  const container = entry.target;
  const image = container.firstChild;
  const url = image.dataset.src;
  image.src = url;

  observer.unobserve(container);
};
export const observer = new IntersectionObserver((entries) => {
  entries.filter(isIntersecting).forEach(loadImage);
});
