// SEINE img-growth ***********************
document.addEventListener('DOMContentLoaded', function() { //Attends que le DOM soit entièrement chargé avant d'exécuter le code
    const navLinks = document.querySelectorAll('nav a');
        
    navLinks.forEach(link => {  //Parcourt chaque lien de navigation
        link.addEventListener('click', function(e) {
        e.preventDefault();
    //Récupère l'ID de la section cible depuis l'attribut href du lien, sans le '#'
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId); //Sélectionne l'élément cible par son ID
    //Récupère la hauteur de la barre de navigation pour ajuster le défilement
    const navHeight = document.querySelector('nav').offsetHeight;       
    //Calcule la position de l'élément cible par rapport au haut de la page, en tenant compte de la hauteur de la navigation
    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;            
    //Fait défiler la page vers la position calculée avec un effet de défilement fluide
        window.scrollTo({ 
        top: targetPosition,
        behavior: 'smooth'
        });
        });
    });
    
    const galleryImages = document.querySelectorAll('.image-gallery img');
        
    galleryImages.forEach(img => {  //Parcourt chaque image de la galerie
    //Add un écouteur d'événement pour gérer le clic sur chaque image
    img.addEventListener('click', function() {
    //Récupère le texte alternatif (alt) de l'image cliquée
    const altText = this.alt;
        alert(`Image: ${altText}\nCliquez pour voir en plein écran (fonctionnalité à venir)`);
        });
    });
    
    //Sélectionne le CTA sur la page
    const ctaButton = document.querySelector('.cta-button');
    //Empêche le comportement par défaut du bouton (ne pas soumettre de formulaire, par exemple)
        e.preventDefault();
        ctaButton.addEventListener('click', function(e) {
        e.preventDefault();
        alert('Merci de votre intérêt ! Notre système de réservation sera bientôt disponible. En attendant, n\'hésitez pas à nous contacter pour toute demande de renseignements.');
        });
    });
    
    /* Attente du chargement du DOM : Le code s'exécute une fois que le DOM est entièrement chargé.
    Gestion des liens de navigation : Lorsque les liens de la navigation sont cliqués, le comportement par défaut est annulé, 
    et un défilement fluide vers la section cible est déclenché.
    Interaction avec les images de la galerie : Un clic sur une image de la galerie affiche une alerte avec son texte alternatif 
    et un message indiquant une future fonctionnalité.
    Interaction avec le bouton CTA : Le clic sur le bouton CTA empêche l'action par défaut et affiche un message informant que
    le système de réservation est en développement. */    
//************************************/   
    

// RESERVATIONS ***********************/
//Exécute le code une fois que le DOM est entièrement chargé
document.addEventListener('DOMContentLoaded', (event) => {

    //Sélectionne le formulaire de réservation par son ID
    const form = document.getElementById('reservation-form');
    
    //Ajoute un écouteur d'événement pour gérer la soumission du formulaire
        form.addEventListener('submit', function(e) {
    //Empêche le comportement par défaut de la soumission du formulaire (empêche le rechargement de la page)
        e.preventDefault();
    //Affiche un message d'alerte pour confirmer la réception de la réservation
        alert('Merci pour votre réservation ! Nous vous contacterons bientôt pour confirmer les détails de votre aventure fluviale.');
    //Ici, vous pouvez ajouter le code pour envoyer les données du formulaire au serveur ou autre traitement
    });
    
    // Sélectionne les champs de date de début, date de fin et nombre de passagers par leur ID
    const startDate = document.getElementById('start-date');
    const endDate = document.getElementById('end-date');
    const passengers = document.getElementById('passengers');
    
    //Fonction pour valider les dates de début et de fin
    function validateDates() {
    //Convertit les valeurs des champs de date en objets Date
    const start = new Date(startDate.value);
    const end = new Date(endDate.value);
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Réinitialise les heures pour comparer uniquement les dates
    
    //Vérifie si la date de début est dans le passé
        if (start < today) {
    //Définit un message de validation personnalisé si la date de début est dans le passé
        startDate.setCustomValidity('La date de début doit être aujourd\'hui ou dans le futur');
        } 
    //Vérifie si la date de fin est antérieure ou égale à la date de début
        else if (end <= start) {
    //Définit un message de validation personnalisé si la date de fin n'est pas après la date de début
        endDate.setCustomValidity('La date de fin doit être postérieure à la date de début');
        } 
    //Si les dates sont valides, réinitialise les messages de validation personnalisés
        else {
            startDate.setCustomValidity('');
            endDate.setCustomValidity('');
            }
        }
    
    //Ajoute des écouteurs d'événement pour valider les dates lorsqu'elles changent
        startDate.addEventListener('change', validateDates);
        endDate.addEventListener('change', validateDates);
    //Ajoute un écouteur d'événement pour valider le nombre de passagers lors de la saisie
        passengers.addEventListener('input', function() {
    //Convertit la valeur du champ en nombre entier
    const value = parseInt(this.value);
    //Vérifie si le nombre de passagers est inférieur à 1
        if (value < 1) {
    //Définit un message de validation personnalisé si le nombre est trop petit
        this.setCustomValidity('Le nombre de passagers doit être d\'au moins 1');
        } 
    //Vérifie si le nombre de passagers est supérieur à 10
        else if (value > 10) {
    //Définit un message de validation personnalisé si le nombre est trop grand
        this.setCustomValidity('Le nombre maximum de passagers est de 10');
        } 
    //Si le nombre est valide, réinitialise le message de validation personnalisé
        else {
            this.setCustomValidity('');
            }
        });
    });
    /* Gestion de la soumission du formulaire : Empêche le rechargement de la page et affiche un message de confirmation lorsque 
    le formulaire est soumis.
    Validation des dates : Vérifie que la date de début est dans le futur et que la date de fin est postérieure à la date de début.
    Validation du nombre de passagers : Vérifie que le nombre de passagers est compris entre 1 et 10. */
/************************************/


//ANIMATIONS SUP ********************/
//Sélectionne tous les éléments avec la classe "form-group"
const formGroups = document.querySelectorAll('.form-group');

//Parcourt chaque élément "form-group"
formGroups.forEach(group => {
//Sélectionne l'élément <input> ou <select> à l'intérieur de chaque "form-group"
const input = group.querySelector('input, select');
    
//Ajoute un écouteur d'événement "focus" pour détecter quand l'utilisateur clique dans l'input ou le select
input.addEventListener('focus', () => {
//Applique une transformation pour déplacer légèrement le "form-group" vers le haut lorsque l'input reçoit le focus
group.style.transform = 'translateY(-5px)';
//Ajoute une transition fluide pour que le déplacement soit animé sur 0.3 secondes
group.style.transition = 'transform 0.3s ease';
});
    
//Ajoute un écouteur d'événement "blur" pour détecter quand l'utilisateur quitte l'input ou le select
input.addEventListener('blur', () => {
//Réinitialise la transformation pour ramener le "form-group" à sa position initiale quand l'input perd le focus
group.style.transform = 'translateY(0)';
});
});
/* Effet de mise en valeur lors du focus : Lorsque l'utilisateur clique sur un champ de saisie (input ou select), 
le groupe de formulaire associé (form-group) se déplace légèrement vers le haut pour attirer l'attention.
Retour à la position initiale lors de la perte de focus : Quand l'utilisateur quitte le champ de saisie, 
le groupe de formulaire revient à sa position d'origine avec une animation fluide. */

//************************************/




