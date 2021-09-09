/* exported data */

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};

function logSubmit(event) {
  event.preventDefault();
  var newEntry = {
    title: document.querySelector('.title'),
    photoURL: document.querySelector('.photo'),
    notes: document.querySelector('.notes'),
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
