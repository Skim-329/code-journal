/* exported data */

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};

JSON.parse(localStorage.getItem('data'));

window.addEventListener('beforeunload', function (event) {
  var dataJSON = JSON.stringify(data);
  localStorage.setItem('data', dataJSON);
});

function logSubmit(event) {
  event.preventDefault();
  var newEntry = {
    title: form.elements.titleinput.value,
    photoURL: form.elements.photoinput.value,
    notes: form.elements.notesinput.value,
    currentEntry: data.nextEntryId
  };
  data.nextEntryId++;
  data.entries.unshift(newEntry);
  document.querySelector('form').reset();

  var imgPreview = document.querySelector('#photo-preview');
  imgPreview.setAttribute('src', 'images/placeholder-image-square.jpg');
}

var form = document.querySelector('.entry');
form.addEventListener('submit', logSubmit);
