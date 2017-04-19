var CountryList = require('./models/country_list.js')
var CountrySelectView = require('./views/country_select_view.js')

app = function(){
  console.log('running!')
  var countryList = new CountryList('https://restcountries.eu/rest/v2/all')

  var countrySelect = document.querySelector('#countries-select')

  var countrySelectView = new CountrySelectView(countrySelect)

  countryList.getData(function(countries){
    countrySelectView.render(countries)
  })
}





window.onload = app