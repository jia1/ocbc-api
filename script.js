var request_url = 'https://api.ocbc.com:8243';
var atm_locator = '/atm_locator/1.0';

$('document').ready(function() {
  $.ajax({
    url: request_url + atm_locator,
    method: 'GET',
    headers: { 'authorization': 'Bearer fc99c249eb55b98f9fa909f2e32d8fe8' }
  }).then(function(atm_json) {
    var atm_array = atm_json['ATMS'];
    for (var i = 0; i < atm_array.length; i++) {
      var atm_object = atm_array[i];
      $('body').append('<p>' 
        + atm_object.landmark 
        + '</p>'
      );
    }
  });
});
