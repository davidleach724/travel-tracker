class Traveler {
  constructor(travelerData, trips, destinations) {
    this.id = travelerData.id
    this.name = travelerData.name
    this.travelerType = travelerData.travelerType
    this.pendingTrips = []
    this.upcomingTrips = []
    this.pastTrips = []
    this.populateUserTrips(trips, destinations)
  }

  populateUserTrips (trips, destinations) {
    trips.forEach(trip => {
      let currentDest = destinations.getDestinationByID(trip.destinationID)
      let tripObj = {
        'destinationID': currentDest.id,
        'tripID': trip.id,
        'destination': currentDest.destination,
        'image': currentDest.image,
        'imageAlt': currentDest.imageAlt,
        'date': trip.date,
        'duration': trip.duration,
        'status': trip.status,
        'travelers': trip.travelers,
        'lodging': (trip.duration * currentDest.estimatedLodgingCostPerDay),
        'flight': (trip.travelers * currentDest.estimatedFlightCostPerPerson),
        'bookingFee': ((trip.duration * currentDest.estimatedLodgingCostPerDay) + (trip.travelers * currentDest.estimatedFlightCostPerPerson)) * .1,
        'totalCost': Math.floor(((trip.duration * currentDest.estimatedLodgingCostPerDay) + (trip.travelers * currentDest.estimatedFlightCostPerPerson))*1.1)
      }  
      this.pastTrips.push(tripObj)
    })
  }
}

export default Traveler;