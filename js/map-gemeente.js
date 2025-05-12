let map = L.map('map-gemeente').setView([51.1324, 4.4485], 16);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

//bepaal de gemeentegrezen van Kontich
fetch('js/kontich.geojson')
  .then(response => response.json())
  .then(geojsonData => {
    const geojsonLayer = L.geoJSON(geojsonData, {
        filter: feature => feature.geometry.type !== "Point", // ⛔ sla punten over
        style: {
          color: "#e60005",
          weight: 2,
          fill: false
        }
      }).addTo(map);
      

    // Zoom naar de volledige gemeentegrens
    map.fitBounds(geojsonLayer.getBounds());

    // Voeg marker toe na fitBounds zodat hij het zoomniveau niet bepaalt
    let kontichMarker = L.marker([51.13543, 4.44560]).addTo(map);
    kontichMarker.bindPopup("<b>Kontich</b><br>Gemeenteplein").openPopup();
  });
