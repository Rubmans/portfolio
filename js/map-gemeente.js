let map = L.map('map-gemeente').setView([51.1324, 4.4485], 16);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// plaats een marker (coördinaten 51.1324, 4.4485) met als tekst "Kontich Centrum"
let kontichMarker = L.marker([51.1324, 4.4485]).addTo(map);
kontichMarker.bindPopup("<b>Kontich Centrum</b><br>Marktplein").openPopup();

//bepaal de gemeentegrezen van Kontich
fetch('kontich.geojson')
  .then(response => response.json())
  .then(geojsonData => {
    L.geoJSON(geojsonData, {
      style: {
        color: "#e60005",
        weight: 2,
        fill: false
      }
    }).addTo(map);
  });
