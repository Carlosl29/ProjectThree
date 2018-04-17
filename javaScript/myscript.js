var map;
var marker;
var current;
var iit = {lat: 41.834653, lng: -87.628333};
    
var places=["Chicago","Blacksburg","Huntington","Saigon"];
      
function initMap() {
  current = {lat: 41.887855, lng: -87.630347};
  map = new google.maps.Map(document.getElementById('map'), {
  zoom: 13,
  center: iit
  });

  marker = new google.maps.Marker({
  position: iit,
  map: map
  });
}