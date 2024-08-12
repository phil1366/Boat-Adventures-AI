// Menu burger
const burgerMenuBtn = document.querySelector('.burger-menu-button')
const burgerMenuBtnIcon = document.querySelector('.burger-menu-button i')
const burgerMenu = document.querySelector('.burger-menu')

burgerMenuBtn.onclick = function () {
    burgerMenu.classList.toggle('open') 
    const isOpen = burgerMenu.classList.contains('open')
    burgerMenuBtnIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'
}


// Ajout de la gestion de la galerie photos
const galleryLink = document.querySelector('a[data-target="gallery"]');
const photoGallery = document.getElementById('photo-gallery');

galleryLink.addEventListener('click', (e) => {
    e.preventDefault();
    contentArea.querySelectorAll('> div').forEach(div => div.classList.add('hidden'));
    photoGallery.classList.remove('hidden');
});


// Scroll to top button
window.onscroll = function () {
    scrollFunction();
  };
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("scroll-to-top").style.display = "block";
    } else {
      document.getElementById("scroll-to-top").style.display = "none";
    }
  }
  
  document.getElementById("scroll-to-top").addEventListener("click", function () {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  });