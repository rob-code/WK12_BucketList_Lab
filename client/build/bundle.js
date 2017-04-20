/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

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








/***/ },
/* 1 */
/***/ function(module, exports) {

var CountryList = function(url){
  this.url = url
  this.countries = []
}

CountryList.prototype = {
  getData: function(callback){
    var request = new XMLHttpRequest();  
      request.open("GET", this.url);
    
      request.onload = function(){    
        if (request.status === 200){
            var jsonString = request.responseText; 
            this.countries = JSON.parse(jsonString);
            console.log(this.countries)
            callback(this.countries);
          }
        }.bind(this); 
        
        request.send();   
  }
}

module.exports = CountryList

/***/ },
/* 2 */
/***/ function(module, exports) {

var CountrySelectView = function(selectMenu){
  this.selectMenu = selectMenu

}

CountrySelectView.prototype = {
  render: function(countries){
    countries.forEach(function(country, index){
      var option = document.createElement('option')
      option.text = country.name
      option.value = index
      this.selectMenu.appendChild(option)
    }.bind(this))
  }
}



module.exports = CountrySelectView

/***/ },
/* 3 */
/***/ function(module, exports) {

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

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

var CountryList = __webpack_require__(1)
var DatabaseRouter = __webpack_require__(0)
var CountrySelectView = __webpack_require__(2)
var TripCreateView = __webpack_require__(3)

app = function(){

  var countryList = new CountryList('https://restcountries.eu/rest/v2/all')

  var countrySelect = document.querySelector('#countries-select')

  var tripCreate = document.querySelector('#trip-create-view')
  var tripCreateButton = document.querySelector('#trip-create-button')


  var countrySelectView = new CountrySelectView(countrySelect)

  var tripCreateView = new TripCreateView(tripCreate, tripCreateButton)


  var databaseRouter = new DatabaseRouter();

  countryList.getData(function(countries){
    countrySelectView.render(countries)

    countrySelectView.selectMenu.addEventListener('change', function(){
      tripCreateView.render(countries[countrySelectView.selectMenu.value])
    })

    tripCreateView.tripCreateButton.addEventListener('click', function(){
      var formContent = document.querySelector('Form');
      
      databaseRouter.makePostRequest(formContent.elements, function(results){
          console.log(results);
      })

    }.bind(this))



  }.bind(this))
}





window.onload = app

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map