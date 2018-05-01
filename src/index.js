const mapboxgl = require("mapbox-gl");

console.log("Hello");

mapboxgl.accessToken = "pk.eyJ1IjoibGFycG9sbGFjayIsImEiOiJjamdvNWtycXowMDdoMnhwbnFnZTN0c2ZpIn0.zAppLpXWr-Dx9FiaAhJ7tQ";
// const map = new mapboxgl.Map({
//   container: "map",
//   center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
//   zoom: 12, // starting zoom
//   style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
// });

window.out = mapboxgl;
const map = new mapboxgl.Map({
  container: "map"
});
