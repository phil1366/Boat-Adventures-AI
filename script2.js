// MENU BURGER ******************/
document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger');   
    const closeMenu = document.querySelector('.close-menu');
  
    // sans body Js ne saurait pas sur quel élément DOM appliquer cette classe.
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

 // Option de fermeture avec la touche "Échap"
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
      document.querySelector('.search-container').classList.remove('active');
  }
});

// Sélectionne l'élément search-input et le stocke dans searchInput
const searchInput = document.querySelector('.search-input');

// Quand l'utilisateur clique dans le champ de recherche
searchInput.addEventListener('focus', function() {
    searchInput.placeholder = '';  //  Supprime le texte du placeholder
});

// Quand l'utilisateur quitte le champ de saisie, l'événement blur est déclenché.
// blur détecte quand l'utilisateur clique en dehors du champ.
searchInput.addEventListener('blur', function() {
    // Si le champ est vide, remet le placeholder par défaut 'Mot à rechercher'
    // value : contient le contenu actuel entré par l'user.
    if (searchInput.value.trim() === "") {  // trim: méthode JS nettoie les espaces inutiles en début et fin d'un texte.
        searchInput.placeholder = 'Mot à rechercher'; 
    }  
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

// Gestion de la recherche par mot-clé - détecte les touches pressées dans l'input de recherche
document.querySelector('.search-input').addEventListener('keydown', function(event) {
// Vérifie si la touche pressée est "Enter"
  if (event.key === 'Enter') {
    // Récupère la valeur saisie dans l'input, la met en minuscules et enlève les espaces autour
    const keyword = event.target.value.toLowerCase().trim();
    // Vérifier si le mot-clé a une page correspondante
    if (keyword in keywordPages) {
    // Si mot-clé trouvé, redirige l'user vers l'URL associée
        window.location.href = keywordPages[keyword];
    } else {
        alert('Mot-clé non reconnu. Essayez l\'un des mots-clés valides.');
    }
  }
});
//************************************/

// Penichette-Houseboat img-growth
function openFullscreen(imgElement) {
    // Crée nouvel élément <div> pour servir de conteneur pour l'image en plein écran
    const fullscreenContainer = document.createElement('div');
    // Ajoute une classe CSS au conteneur pour appliquer un style
    fullscreenContainer.classList.add('fullscreen-image-container');
    
    // Crée nouvel élément <img> et lui assigne la source de l'image cliquée
    const fullscreenImg = document.createElement('img');
    fullscreenImg.src = imgElement.src;  // Utilise l'attribut 'src' de l'image d'origine
    
    // Crée un élément <span> pour servir de bouton de fermeture.
    const closeBtn = document.createElement('span');
    closeBtn.innerHTML = '&times;';  // Ajoute symbole "×" (croix) bouton de fermeture
    closeBtn.classList.add('close-btn');  // Ajoute classe CSS pour styliser le bouton
    // Ajoute une fonction (événement clic) qui supprime le conteneur plein écran via bouton de fermeture 
    closeBtn.onclick = () => fullscreenContainer.remove();
    
    // Ajoute image et bouton de fermeture au conteneur plein écran
    /* appendChild prend un élément et l'ajoute comme enfant à un autre élément, <div> ou <body> de la page.
       Cela permet de construire la structure de la page en y ajoutant dynamiquement des éléments. */

    // appenchild : l'image deviendra un "enfant" du <div> créé pour le plein écran.
    fullscreenContainer.appendChild(fullscreenImg);
    // Cela permet à ce bouton de faire partie de l'interface de l'image en plein écran.
    fullscreenContainer.appendChild(closeBtn);
    // Ajoute conteneur plein écran au corps de la page pour afficher l'image en plein écran.
    // 
    document.body.appendChild(fullscreenContainer);

    // Utilise setTimeout pour exécuter une action après un délai de 10 millisecondes
    setTimeout(() => {
    // Ajoute la classe 'active' au conteneur plein écran avec un léger délai (10 ms)
        fullscreenContainer.classList.add('active');
    }, 10); // Lancer l'animation
}

//**************************************/
// SCROLL TO TOP *********************/
window.onscroll = function () { //Assigne une fonction à l'événement
    scrollFunction(); //Appelle la fonction scrollFunction à chaque fois que l'user fait défiler la page
  };
  
  // Déclare la fonction scrollFunction qui contrôle l'affichage du bouton de retour en haut de page
  function scrollFunction() {
  // Check si la page a défilée plus de 20 pixels depuis le haut du document
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
  //Affiche le bouton "scroll-to-top" si le défilement dépasse 20 pixels
  document.getElementById("scroll-to-top").style.display = "block";
    } else {
  // Cache le bouton "scroll-to-top" si le défilement est inférieur à 20 pixels
  document.getElementById("scroll-to-top").style.display = "none";
  }
  }
  // Pour détecter le clic sur le bouton "scroll-to-top"
  document.getElementById("scroll-to-top").addEventListener("click", function () {
  //Ramène la position de défilement du corps du document à 0 (pour Safari)
  document.body.scrollTop = 0; // For Safari
  // Ramène la position de défilement de l'élément HTML (document) à 0 (pour Chrome, Firefox, IE et Opera)
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  });
