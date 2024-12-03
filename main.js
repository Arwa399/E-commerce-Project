
window.onscroll = function() {
    var navbar = document.querySelector('.navbar');
    if (window.pageYOffset > 0) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };
  //loading
  window.onload = function() {
    setTimeout(function() {
        document.getElementById('loadingScreen').style.display = 'none';
    }, 2000); 
};


  