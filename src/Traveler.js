import moment from 'moment';

class Traveler {
  constructor(travelerData, trips, destinations) {
    this.id = travelerData.id
    this.name = travelerData.name
    this.travelerType = travelerData.travelerType
    this.pendingTrips = []
    this.upcomingTrips = []
    this.pastTrips = []
    this.currentDate = moment().format('LL')
    this.currentYear = moment().format('YYYY')
    this.totalSpent = 0;
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
        'imageAlt': currentDest.alt,
        'startDate': moment(trip.date.replaceAll('/', '-')).format('LL'),
        'endDate': moment(trip.date.replaceAll('/', '-')).add(trip.duration, 'day').format('LL'),
        'duration': trip.duration,
        'status': trip.status,
        'travelers': trip.travelers,
        'lodging': (trip.duration * currentDest.estimatedLodgingCostPerDay),
        'flight': (trip.travelers * currentDest.estimatedFlightCostPerPerson),
        'bookingFee': ((trip.duration * currentDest.estimatedLodgingCostPerDay) + (trip.travelers * currentDest.estimatedFlightCostPerPerson)) * .1,
        'totalCost': new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
          maximumFractionDigits: 2
        }).format(((trip.duration * currentDest.estimatedLodgingCostPerDay) + (trip.travelers * currentDest.estimatedFlightCostPerPerson))*1.1)
      }

      if (tripObj.startDate.includes(this.currentYear)) {
        this.totalSpent += ((tripObj.duration * currentDest.estimatedLodgingCostPerDay) + (tripObj.travelers * currentDest.estimatedFlightCostPerPerson))*1.1
      }

      if (tripObj.status === 'pending') {
        this.pendingTrips.push(tripObj)
      } else if (moment(trip.date.replaceAll('/', '-')).isAfter(moment().format('YYYY-MM-DD'))) {
        this.upcomingTrips.push(tripObj)
      } else {
        this.pastTrips.push(tripObj)
      }
    })
  }

  // determineTotalSpent(trip, currentDest) {
  //   let currentYear = moment().format('YYYY')

  //   if (tripObj.startDate.includes(currentYear)) {
  //     this.totalSpent += ((tripObj.duration * currentDest.estimatedLodgingCostPerDay) + (tripObj.travelers * currentDest.estimatedFlightCostPerPerson))*1.1
  //   }
  // }
}

export default Traveler;