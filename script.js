var request_url = 'https://api.ocbc.com:8243';
var atm_locator = '/atm_locator/1.0';

var atm_array = [];
var radius_earth = 6370; // km

$('document').ready(function() {
  $.ajax({
    url: request_url + atm_locator,
    method: 'GET',
    headers: { 'authorization': 'Bearer fc99c249eb55b98f9fa909f2e32d8fe8' }
  }).then(function(atm_json) {
    atm_array = atm_json['ATMS'];
  });
  var keys = Object.keys(postal["LOC-TO-DIST"]);
  for (var i = 0; i < keys.length; i++) {
    $('#general-locations').append(
      '<li class="general-location">' + keys[i] + '</li>'
    );
  }
});

function calculate_distance(lat1, lon1, lat2, lon2) {
  // Haversine Formula
  var delta_lat = lat2 - lat1
  var delta_lon = lon2 - lon1
  var a = Math.pow(Math.sin(delta_lat/2), 2) + 
    Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(delta_lon/2), 2)
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a))
  var d = radius_earth * c // where R is the radius of the Earth
  console.log(d);
}

var postal = 
{
  "LOC-TO-DIST": {
    "Serangoon Garden/Hougang/Punggol": "19"
  },
  "DIST-TO-SEC": {
    "19": [53, 54, 55, 82]
  }
}