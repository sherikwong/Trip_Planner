const mapboxgl = require('mapbox-gl');
const newMarker = require('./marker');

console.log("Hello");

mapboxgl.accessToken = "pk.eyJ1IjoibGFycG9sbGFjayIsImEiOiJjamdvNWtycXowMDdoMnhwbnFnZTN0c2ZpIn0.zAppLpXWr-Dx9FiaAhJ7tQ";
const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

newMarker(-74.009, 40.705, 'activity')
.addTo(map);

newMarker(-74, 40.73, 'hotel')
.addTo(map);

newMarker(-73.99, 40.702, 'restaurant')
.addTo(map);

// const markerDomEl = document.createElement("div");
// markerDomEl.style.width = "32px";
// markerDomEl.style.height = "39px";
// markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

// const marker = new mapboxgl.Marker(markerDomEl)
//   .setLngLat([-74.009, 40.705])
//   .addTo(map);
