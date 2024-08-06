// document.querySelector('.hamburger-menu').addEventListener('click', function() {
//   const navUl = document.querySelector('nav ul');
//   if (navUl.style.display === 'flex') {
//     navUl.style.display = 'none';
//   } else {
//     navUl.style.display = 'flex';
//   }
// });




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