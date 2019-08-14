var locations = [[42.356809, -71.055120], [43.0389862, -87.9021612], [40.756697, -73.983275], [45.515107, -122.680129], [40.016051, -105.277726], [37.794041, -122.397362], [41.880520, -87.634720], [38.651600, -90.339870]];
function initialize() {
  var randCoord = Math.floor(Math.random() * locations.length);
  var location = new google.maps.LatLng(locations[randCoord][0], locations[randCoord][1]);
  var streetViewService = new google.maps.StreetViewService();

  streetViewService.getPanoramaByLocation(location, 100, function(streetViewPanoramaData, status) {
    if (status === google.maps.StreetViewStatus.OK) {

      var panoramaOptions = {
        position: location,
        addressControl: false,
        linksControl: false,
        pov: {
          heading: 270,
          zoom: 1,
          pitch: -10
        },
        visible: true
      };

      var panorama = new google.maps.StreetViewPanorama(document.getElementById('streetview'), panoramaOptions);
      
      initializeInset(location);

    } else {
      alert('Error finding location!');
    }
  });
}

$(document).ready(initialize);