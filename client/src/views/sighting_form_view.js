const PubSub = require('../helpers/pub_sub.js')

const SightingFormView = function (form) {
  this.form = form;
};

SightingFormView.prototype.bindEvents = function () {
  this.form.addEventListener('submit', (evt) => {
    this.handleSubmit(evt);
  });
};

SightingFormView.prototype.handleSubmit = function (evt) {
  evt.preventDefault();
  // TODO: Assign data new sightingObject
  const newSighting = this.createSighting(evt.target);
  // Publish to something
  PubSub.publish('SightingFormView:sighting-submitted', newSighting);
}

SightingFormView.prototype.createSighting = function (form) {
  const newSighting = {
    species: form.species.value,
    location: form.location.value,
    date: form.date.value
  }
  return newSighting;
};

// TODO: createSighting

module.exports = SightingFormView;
