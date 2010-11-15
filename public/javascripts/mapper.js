function initialize() {
  //var latlng = new google.maps.LatLng(34.397, 50.644);
  var latlng = new google.maps.LatLng(40,0);
  var myOptions = {
    zoom: 3,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);

  showInfoWindow('india', 13.04,80.17, 0,0,70,30)
  showInfoWindow('moscow', 55.45,37.36, 0,0,0,20)
  showInfoWindow('paris', 48.50,2.2, 0,0,0,100)
  showInfoWindow('uk', 51.36, -0.05, 0,0,30,0)
  showInfoWindow('us', 39.36, -97.05, 0,0,0,0)
  showInfoWindow('south_africa', -25.44, 28.12, 0,0,0,0)
  showInfoWindow('uae', 24.28, 54.22, -40,10,10,-10)
  showInfoWindow('aus', -35.15, 149.08, -40,10,10,-10)
}

function showInfoWindow(id,lat,lon,offsetLat, offsetLon, maxWidth, zInd){
  new google.maps.InfoWindow({
    content: document.getElementById(id),
    position: new google.maps.LatLng(lat,lon),
    pixelOffset: new google.maps.Size(offsetLat,offsetLon),
    maxWidth: maxWidth,
    zIndex: zInd
  }).open(map);
}
