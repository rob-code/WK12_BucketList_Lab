var TripCreateView = function(tripCreateElement){

this.tripCreateElement = tripCreateElement;

}


TripCreateView.prototype = {

render: function(country){
  console.log("the country selected is : " + country)

  var form = document.createElement('form')

  var countryInput = document.createElement('input')
  countryInput.value = country.name
  countryInput.label = "country"

  var countryLabel = document.createElement('Label')
  countryLabel.innerHTML = "country: " 

  var capitalInput = document.createElement('input')
  capitalInput.value = country.capital

  var capitalLabel = document.createElement('Label')
  capitalLabel.innerHTML = "capital city: " 


  var latInput = document.createElement('input')   
  latInput.value = country.latlng[0]

  var latLabel = document.createElement('Label')
  latLabel.innerHTML = "Latitude: " 

  var lngInput = document.createElement('input')
  lngInput.value = country.latlng[1]

  var lngLabel = document.createElement('Label')
  lngLabel.innerHTML = "Longitude: " 


  var landmarkInput = document.createElement('input')

  var landmarkLabel = document.createElement('Label')
  landmarkLabel.innerHTML = "Landmark: " 


  var visitByDateInput = document.createElement('input')  

  var visitByDateLabel = document.createElement('Label')
  visitByDateLabel.innerHTML = "Visit by Date: " 

  form.appendChild(countryLabel)
  form.appendChild(countryInput)

  form.appendChild(capitalLabel)
  form.appendChild(capitalInput)

  form.appendChild(latLabel)
  form.appendChild(latInput)

  form.appendChild(lngLabel)
  form.appendChild(lngInput)

  form.appendChild(landmarkLabel)
  form.appendChild(landmarkInput)

  form.appendChild(visitByDateLabel)
  form.appendChild(visitByDateInput)
  

  this.tripCreateElement.appendChild(form) 


}






}

module.exports = TripCreateView