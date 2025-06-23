const title = document.getElementById('intro-title');
const text = title.textContent;
title.textContent = ''; // Vide le texte pour refaire avec span

// Crée un span par lettre avec animation delay
[...text].forEach((char, i) => {
  const span = document.createElement('span');
  span.textContent = char;
  span.style.animationDelay = `${i * 0.2}s`;
  title.appendChild(span);
});

// Animation CSS keyframes 'fadeIn' est dans ton CSS (déjà OK)

// Après l’animation, réduction de taille (classe 'shrink' à définir en CSS si besoin)
setTimeout(() => {
  title.classList.add('shrink');
}, text.length * 200 + 500);

// Affiche contenu principal et header après l’animation intro
setTimeout(() => {
  document.getElementById('intro').style.background = 'transparent';
  document.getElementById('main-content').style.display = 'block';
  const header = document.getElementById('site-header');
header.classList.add('show');
}, text.length * 200 + 1500);

// Masque le titre animé quand on scroll vers le bas
window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    title.classList.add('hide-title');
  } else {
    title.classList.remove('hide-title');
  }
});

// Menu burger - ouverture / fermeture
const sidenav = document.getElementById("mySidenav");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");

openBtn.onclick = () => sidenav.classList.add("active");
closeBtn.onclick = () => sidenav.classList.remove("active");

// Effet de frappe (typewriter) sur un élément
function typeEffect(element, speed) {
  const text = element.textContent;
  element.textContent = "";
  let i = 0;
  const timer = setInterval(() => {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
    } else {
      clearInterval(timer);
    }
  }, speed);
}

// Applique typeEffect sur le h1 et le p dans main-content
const speed = 75;
const h1 = document.querySelector('h1');
const p = document.querySelector('main p'); // cible <p> dans <main>

const delay = h1.textContent.length * speed + speed;

typeEffect(h1, speed);

setTimeout(() => {
  p.style.display = "inline-block";
  typeEffect(p, speed);
}, delay);

openBtn.addEventListener('click', function(event) {
  event.preventDefault(); // empêche le saut en haut de page
  openNav();
});

document.body.style.overflow = 'hidden';
document.body.style.overflow = '';
