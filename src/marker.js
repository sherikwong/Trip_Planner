const mapboxgl = require('mapbox-gl');

function newMarker(long, lat, type){
const markerDomEl = document.createElement("div");
markerDomEl.style.width = "32px";
markerDomEl.style.height = "39px";
let link;
if (type === "activity") {
link = 'http://i.imgur.com/WbMOfMl.png'
} else if (type === "hotel") {
link = 'http://i.imgur.com/D9574Cu.png'
}
else if (type === "restaurant") {
link = 'http://i.imgur.com/cqR6pUI.png'
}
markerDomEl.style.backgroundImage = `url(${link})`;

const marker = new mapboxgl.Marker(markerDomEl)
  .setLngLat([long, lat])
  return marker
}

module.exports = newMarker