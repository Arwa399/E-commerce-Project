
window.onscroll = function() {
    var navbar = document.querySelector('.navbar');
    if (window.pageYOffset > 0) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  (function(){
    emailjs.init("v_NAOjP0gEvZ8OXBm");
})();

window.onload = function() {
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();
      
       
        if (!this.checkValidity()) {
            event.stopPropagation();  
        }
        this.classList.add('was-validated');
        
        if (this.checkValidity()) {
            emailjs.sendForm('service_cxgskan', 'template_dwy7utc', this)
                .then(() => {
                    console.log('SUCCESS!');
                    alert('Your message has been sent successfully!');
                }, (error) => {
                    console.log('FAILED...', error);
                    alert('There was an error sending your message. Please try again.');
                });
        }
    });
}
// OpenStreetMap
var map = L.map('map').setView([51.505, -0.09], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

navigator.geolocation.watchPosition(success, error);

let marker,circle;
let zoomed = false;

function success(pos){
    const lat = pos.coords.latitude;
    const lng = pos.coords.longitude;
    const accuracy = pos.coords.accuracy;
    
    if(marker){
        map.removeLayer(marker);
        map.removeLayer(circle);
    }
     


     marker = L.marker([lat, lng]).addTo(map);
     circle =  L.circle([lat, lng], {radius: accuracy}).addTo(map);

     if(!zoomed){
       map.fitBounds(circle.getBounds());
       zoomed = true;
     }
}
function error(err){
    if( err.code ===1){
        alert("Please allow geolocation access");
    } else{
        alert("Cannot get current location");
    }
}