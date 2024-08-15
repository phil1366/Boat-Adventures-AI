// Menu burger
document.querySelector('.burger').addEventListener('click', function () {
  document.querySelector('nav').classList.add('menu-open');
});

document.querySelector('.close-menu').addEventListener('click', function () {
  document.querySelector('nav').classList.remove('menu-open');
});



// Ajout de la gestion de la galerie photos - Souvenirs -
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

  // seine
  document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            const navHeight = document.querySelector('nav').offsetHeight;
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        });
    });

    const galleryImages = document.querySelectorAll('.image-gallery img');
    
    galleryImages.forEach(img => {
        img.addEventListener('click', function() {
            const altText = this.alt;
            alert(`Image: ${altText}\nCliquez pour voir en plein écran (fonctionnalité à venir)`);
        });
    });

    const ctaButton = document.querySelector('.cta-button');
    
    ctaButton.addEventListener('click', function(e) {
        e.preventDefault();
        alert('Merci de votre intérêt ! Notre système de réservation sera bientôt disponible. En attendant, n\'hésitez pas à nous contacter pour toute demande de renseignements.');
    });
});