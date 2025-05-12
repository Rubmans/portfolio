let map = L.map('map-gemeente').setView([51.1324, 4.4485], 16);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// bepaal de rechthoek rondom een gebied in Kontich (voorbeeldcoördinaten)
let bounds = [[51.1330, 4.4470], [51.1315, 4.4500]];

// kleur de rechthoek in met de rode AP-kleur (#e60005)
L.rectangle(bounds, { color: "#e60005", weight: 1 }).addTo(map);

// plaats een marker (coördinaten 51.1324, 4.4485) met als tekst "Kontich Centrum"
let kontichMarker = L.marker([51.1324, 4.4485]).addTo(map);
kontichMarker.bindPopup("<b>Kontich Centrum</b><br>Marktplein").openPopup();
