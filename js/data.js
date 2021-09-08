/* exported data */

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};

function logSubmit(event) {
  event.preventDefault();
}

var form = document.querySelector('.notes');
form.addEventListener('submit', logSubmit);
