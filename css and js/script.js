const images = [
  '../images/bg1.png',
  '../images/bg2.png',
  '../images/bg3.png',
];

let index = 0;
const header = document.querySelector('.school-header');

function changeBackground() {
  header.style.backgroundImage = `url('${images[index]}')`;
  index = (index + 1) % images.length;
}

changeBackground();
setInterval(changeBackground, 5000);

// ✅ إظهار البطاقات عند التمرير
const cards = document.querySelectorAll('.card, .feature-box');

window.addEventListener('scroll', () => {
  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      card.style.opacity = '1';
    }
  });
});