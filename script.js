const thumbnails = document.querySelectorAll('.thumb');
const mainImage = document.getElementById('main-image');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let currentIndex = 0;

const fadeImage = document.createElement('img');
fadeImage.className = 'hidden';
fadeImage.style.position = 'absolute';
fadeImage.style.top = '0';
fadeImage.style.left = '0';
fadeImage.style.width = '100%';
fadeImage.style.height = '100%';
fadeImage.style.objectFit = 'cover';
fadeImage.style.borderRadius = '8px';
fadeImage.style.transition = 'opacity 0.5s ease-in-out';
mainImage.parentElement.appendChild(fadeImage);

function updateImage(index) {
  if (index === currentIndex) return;

  fadeImage.src = mainImage.src;
  fadeImage.classList.remove('hidden');
  mainImage.style.opacity = 0;

  setTimeout(() => {
    mainImage.src = thumbnails[index].src;
    mainImage.style.opacity = 1;
    fadeImage.classList.add('hidden');
  }, 300);

  thumbnails.forEach(thumb => thumb.classList.remove('active'));
  thumbnails[index].classList.add('active');
  currentIndex = index;
}


thumbnails.forEach((thumb, index) => {
  thumb.addEventListener('click', () => updateImage(index));
});


prevBtn.addEventListener('click', () => {
  const newIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
  updateImage(newIndex);
});


nextBtn.addEventListener('click', () => {
  const newIndex = (currentIndex + 1) % thumbnails.length;
  updateImage(newIndex);
});
