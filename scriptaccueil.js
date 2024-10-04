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
    // Création dynamique du conteneur plein écran
        const fullscreenContainer = document.createElement('div');
        fullscreenContainer.classList.add('fullscreen-image-container');
    // Création de l'image pleine écran    
        const fullscreenImg = document.createElement('img');
        fullscreenImg.src = imgElement.src;
        
     // Création du bouton de fermeture
        const closeBtn = document.createElement('span');
        closeBtn.innerHTML = '&times;';
        closeBtn.classList.add('close-btn');
        closeBtn.onclick = () => fullscreenContainer.remove();  // Ferme le conteneur 
        
    // Ajout de l'image et du bouton de fermeture au conteneur
        fullscreenContainer.appendChild(fullscreenImg);
        fullscreenContainer.appendChild(closeBtn);
    // Ajout du conteneur au body du document
        document.body.appendChild(fullscreenContainer);

        setTimeout(() => {
            fullscreenContainer.classList.add('active');
        }, 10); // Lancer l'animation
    }


