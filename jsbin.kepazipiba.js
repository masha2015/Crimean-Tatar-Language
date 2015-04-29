// Displays leaflet map

var map = L.map('map').setView([39.491101, 76.004228], 4);

L.tileLayer('http://tile.stamen.com/toner/{z}/{x}/{y}.png', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.',
  maxZoom: 18
}).addTo(map);

  
// calls Leaflet plugin js

// defines the path

var line = L.polyline([
    [47.431111, 102.659444],
    [47.431111, 102.659444],
    [39.491101, 76.004228],
    [48.8251139, 58.1380177],
    [48.6704194, 44.5067075],
    [45.38736, 34.151377],
    [44.1812779, 28.629339],
    [39.513086, 31.246425],
  
  ]),
  animatedMarker = L.animatedMarker(line.getLatLngs(), {
    
// controls the spped of animation
  distance: 3000,  // meters
  interval: 8, // milliseconds
});

map.addLayer(animatedMarker);