function initMap() {
  var coord = {lat: 41.83, lng: -87.633889};
  var map = new google.maps.Map(document.getElementById('javaScript'), {zoom: 4, center: coord});
  var marker = new google.maps.Marker({ position: coord,map: javaScript});
}