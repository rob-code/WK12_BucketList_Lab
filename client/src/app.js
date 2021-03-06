var CountryList = require('./models/country_list.js')
var DatabaseRouter = require('./controllers/database_router.js')
var CountrySelectView = require('./views/country_select_view.js')
var TripCreateView = require('./views/trip_create_view.js')

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