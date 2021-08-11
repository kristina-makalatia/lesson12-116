let navBarLinks = document.getElementById('navigation');
let toggleButton = document.getElementById('toggleButton');


toggleButton.addEventListener('click', function() {
    navBarLinks.classList.toggle('active');
})