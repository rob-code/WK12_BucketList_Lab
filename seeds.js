use bucket_list

db.trips.insert([
  {
    country: "Vietnam",
    visitByDate: "19/05/2017",
    places: [
      {location: "Hanoi",
      landmarks: ["Museum of War Crimes"],
      lat: 21.028511,
      lng: 105.804817},
      {location: "Ho Chi Minh City",
      landmarks: ["Ho Chi Minh's Mausoleum", "Reunification Palace"],
      lat: 10.8231,
      lng: 106.6297}
    ]
  },

  {
    country: "Australia",
    visitByDate: "10/10/2017",
    places: [
      {location: "Sydney",
      landmarks: ["Sydney Opera House"],
      lat: 33.8568,
      lng: 151.2153},
      {location: "Ningaloo",
      landmarks: ["Ningaloo Reef"],
      lat: -23.1422,
      lng: 113.7724}
    ]
  }

  ])

