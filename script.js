const img = document.querySelector("#foto");

const imagens = [
  "./img/apliccoespeca.jpg",
  "./img/aplicacoesreais2.jpg",
  "./img/aplicacoesreais3.jpg",
];
let index = 0;

img.addEventListener("click", () => {
  index = (index + 1) % imagens.length;
  img.src = imagens[index];
});

function initAnimacion() {
  const sections = document.querySelectorAll(".js-scroll");
  const windowMetade = window.innerHeight * 0.8;
  function animaScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top - windowMetade;
      if (sectionTop < 0) {
        section.classList.add("ativo");
      } else {
        section.classList.remove("ativo");
      }
    });
  }
  animaScroll();
  window.addEventListener("scroll", animaScroll);
}
initAnimacion();
