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