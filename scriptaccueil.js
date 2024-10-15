 // JS page accueil

 // MENU BURGER ******************/        
   const hamburger = document.querySelector('.hamburger');
   const closeMenu = document.querySelector('.close-menu');

   hamburger.addEventListener('click', () => {
       document.body.classList.toggle('menu-open');
   });

   closeMenu.addEventListener('click', () => {
       document.body.classList.remove('menu-open');  // classe 'menu-open' pour fermer le menu
   });

// SLIDE PHOTOS *******************/      

// ciblage spécifique d'un lien avec data-target
   const galleryLink = document.querySelector('a[data-target="gallery"]'); // attribut personnalisé
   const photoGallery = document.getElementById('photo-gallery');

   galleryLink.addEventListener('click', (e) => {
       // Empêche le comportement par défaut du lien (ne pas naviguer vers autre page)
       e.preventDefault(); 
       // Cache tous les enfants directs de `contentArea` et les cache
       contentArea.querySelectorAll('> div').forEach(div => div.classList.add('hidden'));
       // Affiche `photoGallery` en retirant la classe `hidden`
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
        const closeBtn = document.createElement('span'); // créé un span contenant le symbole
        closeBtn.innerHTML = '&times;'; // X
        closeBtn.classList.add('close-btn'); // ajoute une classe à X pour la styliser
        closeBtn.onclick = () => fullscreenContainer.remove();  // Ferme le conteneur 
        
    // Ajout de l'image et du bouton de fermeture au conteneur
        fullscreenContainer.appendChild(fullscreenImg);
        fullscreenContainer.appendChild(closeBtn);

    // Ajout du conteneur lié au body 
        document.body.appendChild(fullscreenContainer);

        setTimeout(() => {
            fullscreenContainer.classList.add('active'); // active lance l'animation
        }, 10); // Lancer l'animation avec délai de 10ms
    }


