
const shadow = document.querySelector('.shadow-mouseover');
const eyeIcon = document.querySelector('.eye-icon');

document.getElementById('main-card-img').addEventListener('mouseover', function() {
    eyeIcon.classList.toggle('eye-icon-visible');
    shadow.classList.toggle('main-card-img-shadow');
});

document.getElementById('main-card-img').addEventListener('mouseleave', function() {
    eyeIcon.classList.toggle('eye-icon-visible');
    shadow.classList.toggle('main-card-img-shadow');
});
    

