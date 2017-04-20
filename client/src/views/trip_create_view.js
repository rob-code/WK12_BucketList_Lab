var TripCreateView = function(tripCreateElement, tripCreateButton){

this.tripCreateElement = tripCreateElement;
this.tripCreateButton = tripCreateButton;
}

TripCreateView.prototype = {

render: function(country){
  console.log("the country selected is : " + country)

  while (this.tripCreateElement.hasChildNodes()){
    this.tripCreateElement.removeChild(this.tripCreateElement.lastChild)
  }

  while (this.tripCreateButton.hasChildNodes()){
    this.tripCreateButton.removeChild(this.tripCreateButton.lastChild)
  }

  var title = document.createElement('div')
  title.innerHTML = "Please choose your landmark and the date you wish to visit."
  title.className = "welcome-title"


  var form = document.createElement('form')
  form.id = "tripForm"
  // form.addEventListener('submit', function(e){
  //   e.preventDefault();
  // })

  var countryInput = document.createElement('input')
  countryInput.id = "country"
  countryInput.value = country.name

  var countryLabel = document.createElement('Label')
  countryLabel.innerHTML = "Country: " 

  var capitalInput = document.createElement('input')
  capitalInput.id = "location"
  capitalInput.value = country.capital

  var capitalLabel = document.createElement('Label')
  capitalLabel.innerHTML = "Capital City: " 

  var latInput = document.createElement('input')   
  latInput.id = "latitude"
  latInput.value = country.latlng[0]

  var latLabel = document.createElement('Label')
  latLabel.innerHTML = "Latitude: " 

  var lngInput = document.createElement('input')
  lngInput.id = "longitude"
  lngInput.value = country.latlng[1]

  var lngLabel = document.createElement('Label')
  lngLabel.innerHTML = "Longitude: " 

  var landmarkInput = document.createElement('input')
  landmarkInput.id = "landmark"

  var landmarkLabel = document.createElement('Label')
  landmarkLabel.innerHTML = "Landmark: " 

  var visitByDateInput = document.createElement('input')
  visitByDateInput.id = "visit date"  

  var visitByDateLabel = document.createElement('Label')
  visitByDateLabel.innerHTML = "Visit byDate: " 

  var createButton = document.createElement('button')
  createButton.innerHTML = "create trip";


  form.appendChild(title)

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
  this.tripCreateButton.appendChild(createButton)
}


}

module.exports = TripCreateView