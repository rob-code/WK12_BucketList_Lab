var DatabaseRouter = function(){
}

DatabaseRouter.prototype = {

    makePostRequest: function(formContent, callback){

      var request = new XMLHttpRequest();
      var formData = new FormData();

      formData.append('country', formContent[0].value)
      formData.append('visitByDate', formContent[5].value)
      formData.append('location', formContent[1].value)
      formData.append('landmarks', formContent[4].value)
      formData.append('lat', formContent[2].value)
      formData.append('lng', formContent[3].value)

    request.open("POST", "http://localhost:3000/api/trips/");
    request.setRequestHeader('Content-Type', 'application/json')
    request.onload = function(){
      if (this.status !== 200) return;
      var jsonString = this.responseText;
      var results = JSON.parse(jsonString);
      callback(results);
    };

    request.send(JSON.stringify(formData));
  
  }

}

module.exports = DatabaseRouter;






