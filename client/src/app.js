var CountryList = require('./models/country_list.js')
var CountrySelectView = require('./views/country_select_view.js')
var TripCreateView = require('./views/trip_create_view.js')

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