/* global data */
/* exported data */
var photo = document.querySelector('.photo');
var imgPreview = document.querySelector('#photo-preview');

photo.addEventListener('input', function (event) {
  imgPreview.setAttribute('src', event.target.value);
});
