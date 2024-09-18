 // JS page accueil

 // MENU BURGER ******************/        
   const hamburger = document.querySelector('.hamburger');
   const menuBurger = document.getElementById('menu-burger');
   const closeMenu = document.querySelector('.close-menu');

   hamburger.addEventListener('click', () => {
       document.body.classList.toggle('menu-open');
   });

   closeMenu.addEventListener('click', () => {
       document.body.classList.remove('menu-open');  // Supprime la classe 'menu-open' pour fermer le menu
   });

// SLIDE PHOTOS *******************/        
   const galleryLink = document.querySelector('a[data-target="gallery"]');
   const photoGallery = document.getElementById('photo-gallery');

   galleryLink.addEventListener('click', (e) => {
       e.preventDefault();  //Empêche le comportement par défaut du lien (ne pas naviguer vers autre page)
       // Sélectionne tous les divs enfants directs de `contentArea` et les cache
       contentArea.querySelectorAll('> div').forEach(div => div.classList.add('hidden'));
       // Affiche `photoGallery` en supprimant la classe `hidden`
       photoGallery.classList.remove('hidden');
   });

// Bateaux img-growth ***********************
    function openFullscreen(imgElement) {
        const fullscreenContainer = document.createElement('div');
        fullscreenContainer.classList.add('fullscreen-image-container');
        
        const fullscreenImg = document.createElement('img');
        fullscreenImg.src = imgElement.src;
        
        const closeBtn = document.createElement('span');
        closeBtn.innerHTML = '&times;';
        closeBtn.classList.add('close-btn');
        closeBtn.onclick = () => fullscreenContainer.remove();
        
        fullscreenContainer.appendChild(fullscreenImg);
        fullscreenContainer.appendChild(closeBtn);
        document.body.appendChild(fullscreenContainer);

        setTimeout(() => {
            fullscreenContainer.classList.add('active');
        }, 10); // Lancer l'animation
    }

// Menu nav-ban fixé en haut lors du scroll
 // Récupère le menu
 const nav = document.getElementById("nav-ban");

 // Récupère la position initiale du menu
 const sticky = nav.offsetTop;

 // Fonction qui est appelée lors du défilement
 function stickyMenu() {
     if (window.pageYOffset >= sticky) {
         nav.classList.add("sticky");
     } else {
         nav.classList.remove("sticky");
     }
 }

 // Ajoute un écouteur d'événement pour détecter le défilement
 window.onscroll = function() {
     stickyMenu();
 };



