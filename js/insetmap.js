function initializeInset(location) {
  var markers = [];
  var guess;

  // Inset map setup
  var mapOptions = {
    center: new google.maps.LatLng(39.81056, -98.55611, true),
    zoom: 3,
    mapTypeControl: false,
    streetViewControl: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  var insetMap = new google.maps.Map(document.getElementById('insetMap'), mapOptions);
  var marker
  for (var i = 0; i < locations.length; i++) {
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(locations[i][0], locations[i][1]),
      map: insetMap
    });

    google.maps.event.addListener(marker, 'click', (function(marker, i) {
      return function() {
        if (location.toString() == marker.getPosition().toString()) {
          alert("Correct!");
          initialize();
        }
        else alert("Nope! Try Again.");
      }
    })(marker, i));

    // markers.push(marker);
    // console.log(marker)
  }

  // for (var i = 0; i < markers.length; i++) {
  //   markers[i].addListener('click', function() {
  //     console.log(location.toString());
  //     console.log(marker.getPosition().toString());

  //     if (location.toString() == marker.getPosition().toString()) {
  //       alert("Correct!");
  //     }
  //     else alert("Nope! Try Again.");
  //   });
  // }

};

// function EvaluateGuess(LatLng guess) {

// }


// $(document).ready(initializeInset);