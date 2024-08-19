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
//************************************/

//************************************/
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

//************************************/
// Réservations
document.addEventListener('DOMContentLoaded', (event) => {
  const form = document.getElementById('reservation-form');
  form.addEventListener('submit', function(e) {
      e.preventDefault();
      // Ici, vous pouvez ajouter la logique pour traiter la réservation
      alert('Merci pour votre réservation ! Nous vous contacterons bientôt pour confirmer les détails de votre aventure fluviale.');
  });

  // Validation améliorée
  const startDate = document.getElementById('start-date');
  const endDate = document.getElementById('end-date');
  const passengers = document.getElementById('passengers');

  function validateDates() {
      const start = new Date(startDate.value);
      const end = new Date(endDate.value);
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      if (start < today) {
          startDate.setCustomValidity('La date de début doit être aujourd\'hui ou dans le futur');
      } else if (end <= start) {
          endDate.setCustomValidity('La date de fin doit être postérieure à la date de début');
      } else {
          startDate.setCustomValidity('');
          endDate.setCustomValidity('');
      }
  }

  startDate.addEventListener('change', validateDates);
  endDate.addEventListener('change', validateDates);

  passengers.addEventListener('input', function() {
      const value = parseInt(this.value);
      if (value < 1) {
          this.setCustomValidity('Le nombre de passagers doit être d\'au moins 1');
      } else if (value > 10) {
          this.setCustomValidity('Le nombre maximum de passagers est de 10');
      } else {
          this.setCustomValidity('');
      }
  });

  // Animations supplémentaires
  const formGroups = document.querySelectorAll('.form-group');
  formGroups.forEach(group => {
      const input = group.querySelector('input, select');
      input.addEventListener('focus', () => {
          group.style.transform = 'translateY(-5px)';
          group.style.transition = 'transform 0.3s ease';
      });
      input.addEventListener('blur', () => {
          group.style.transform = 'translateY(0)';
      });
  });
});
//************************************/

//************************************/
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
//************************************/