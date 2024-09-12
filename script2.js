// MENU BURGER ******************/
document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger');
    const closeMenu = document.querySelector('.close-menu');
  
    burger.addEventListener('click', () => {
      document.body.classList.toggle('menu-open');
    });
  
    closeMenu.addEventListener('click', () => {
      document.body.classList.remove('menu-open');
    });
  });
//************************************/

/// LOUPE *****************************/
// Ouvrir/fermer la barre de recherche
 document.querySelector('.search-icon').addEventListener('click', () =>{
 document.querySelector('.search-container').classList.toggle('active');
 });

 document.querySelector('.close-search').addEventListener('click', function() {
 document.querySelector('.search-container').classList.remove('active');
 });

const keywordPages = {
    'loire': 'http://127.0.0.1:5501/html/Loire.html', 'Loire': 'http://127.0.0.1:5501/html/Loire.html',
    'seine': 'http://127.0.0.1:5501/html/Seine.html', 'Seine': 'http://127.0.0.1:5501/html/Seine.html',
    'paris': 'http://127.0.0.1:5501/html/Seine.html', 'Paris': 'http://127.0.0.1:5501/html/Seine.html',
    'louvre': 'http://127.0.0.1:5501/html/Seine.html', 'Louvre': 'http://127.0.0.1:5501/html/Seine.html',
    'fleuve': 'http://127.0.0.1:5501/html/accueil.html#fleuves','fleuves': 'http://127.0.0.1:5501/html/accueil.html#fleuves',
    'Fleuve': 'http://127.0.0.1:5501/html/accueil.html#fleuves','Fleuves': 'http://127.0.0.1:5501/html/accueil.html#fleuves',
    'bateaux': 'http://127.0.0.1:5501/html/accueil.html#bateaux','bateau': 'http://127.0.0.1:5501/html/accueil.html#bateaux',
    'Bateaux': 'http://127.0.0.1:5501/html/accueil.html#bateaux','Bateau': 'http://127.0.0.1:5501/html/accueil.html#bateaux',
    'penichette': 'http://127.0.0.1:5501/html/penichette.html', 'Penichette': 'http://127.0.0.1:5501/html/penichette.html',
    'pénichette': 'http://127.0.0.1:5501/html/penichette.html', 'peniche': 'http://127.0.0.1:5501/html/penichette.html',
    'Peniche': 'http://127.0.0.1:5501/html/penichette.html', 
    'Houseboat': 'http://127.0.0.1:5501/html/houseboat.html', 'houseboat': 'http://127.0.0.1:5501/html/houseboat.html',
    'chateau': 'http://127.0.0.1:5501/html/Loire.html', 'chateaux': 'http://127.0.0.1:5501/html/Loire.html',
    'croisiere': 'http://127.0.0.1:5501/html/accueil.html#fleuves', 'canal': 'http://127.0.0.1:5501/html/accueil.html#fleuves',    
};

 document.querySelector('.search-input').addEventListener('keydown', function(event) {
     if (event.key === 'Enter') {
         const keyword = event.target.value.toLowerCase().trim();

         // Vérifier si le mot-clé a une page correspondante
         if (keyword in keywordPages) {
             window.location.href = keywordPages[keyword];
         } else {
             alert('Mot-clé non reconnu. Essayez l\'un des mots-clés valides.');
         }
     }
 });
//************************************/

// Houseboat img-growth
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


//**************************************/
// SCROLL TO TOP *********************/
window.onscroll = function () { //Assigne une fonction à l'événement
    scrollFunction(); //Appelle la fonction scrollFunction à chaque fois que l'user fait défiler la page
  };
  
  //Déclare la fonction scrollFunction qui contrôle l'affichage du bouton de retour en haut de page
  function scrollFunction() {
  // Check si la page a défilée plus de 20 pixels depuis le haut du document
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
  //Affiche le bouton "scroll-to-top" si le défilement dépasse 20 pixels
  document.getElementById("scroll-to-top").style.display = "block";
    } else {
  //Cache le bouton "scroll-to-top" si le défilement est inférieur à 20 pixels
  document.getElementById("scroll-to-top").style.display = "none";
  }
  }
  //Pour détecter le clic sur le bouton "scroll-to-top"
  document.getElementById("scroll-to-top").addEventListener("click", function () {
  //Ramène la position de défilement du corps du document à 0 (pour Safari)
  document.body.scrollTop = 0; // For Safari
  //Ramène la position de défilement de l'élément HTML (document) à 0 (pour Chrome, Firefox, IE et Opera)
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  });
