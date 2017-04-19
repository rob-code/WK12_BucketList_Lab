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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

var CountryList = __webpack_require__(1)
var CountrySelectView = __webpack_require__(2)
var TripCreateView = __webpack_require__(3)

app = function(){
  console.log('running!')
  var countryList = new CountryList('https://restcountries.eu/rest/v2/all')

  var countrySelect = document.querySelector('#countries-select')

  var tripCreate = document.querySelector('#trip-create-view')


  var countrySelectView = new CountrySelectView(countrySelect)

  var tripCreateView = new TripCreateView(tripCreate)



  countryList.getData(function(countries){
    countrySelectView.render(countries)

    countrySelectView.selectMenu.addEventListener('change', function(){
      tripCreateView.render(countries[countrySelectView.selectMenu.value])

    })




  }.bind(this))
}





window.onload = app

/***/ },
/* 1 */
/***/ function(module, exports) {

var CountryList = function(url){
  this.url = url
  this.countries = []
  console.log('created')
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

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map