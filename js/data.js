/* exported data */

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};

function logSubmit(event) {
  var newEntry = {
    title: document.querySelector('.title'),
    photoURL: document.querySelector('.photo'),
    notes: document.querySelector('.notes'),
    currentEntry: data.nextEntryId
  };
  data.nextEntryId++;
  data.entries.unshift(newEntry);
}

var form = document.querySelector('.entry');
form.addEventListener('submit', logSubmit);
