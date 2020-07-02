var map;
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 29.9792 , lng: 31.1342 },
    zoom: 17
  });
}