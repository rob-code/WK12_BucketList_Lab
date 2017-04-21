var DatabaseRouter = function(){
}

DatabaseRouter.prototype = {

    makePostRequest: function(formContent, callback){

      var request = new XMLHttpRequest();
      var formData = new FormData();

      var newTrip = {
        "country": formContent[0].value,
        "visitByDate": formContent[5].value,
        "places": [
        {"location": formContent[1].value,
          "landmarks": [ formContent[4].value ],
          "lat": formContent[2].value,
          "lng": formContent[3].value}
          ]
        }      

    request.open("POST", "http://localhost:3000/api/trips/", true);
    request.setRequestHeader('Content-Type', 'application/json')
    request.onload = function(){
      if (this.status !== 200) return;
      var jsonString = this.responseText;
      var results = JSON.parse(jsonString);
      callback(results);
    };

    request.send(JSON.stringify(newTrip));

  }

}

module.exports = DatabaseRouter;






