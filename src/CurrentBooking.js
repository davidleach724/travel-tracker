class CurrentBooking {
  constructor(user, tripID, destination, start, end, duration, travelers) {
    this.tripID = tripID;
    this.user = user;
    this.destination = destination;
    this.startDate = start;
    this.endDate = end;
    this.duration = duration;
    this.status = 'pending';
    this.travelers = travelers;
    this.lodgingCosts = 0;
    this.flightCosts = 0;
    this.bookingCosts = 0;
    this.totalCosts = 0;
    this.populateCurrentTripCosts(destination)
  }

  populateCurrentTripCosts(destination) {
    this.lodgingCosts = (this.duration * this.destination.estimatedLodgingCostPerDay)
    this.flightCosts = (this.travelers * this.destination.estimatedFlightCostPerPerson)
    this.bookingCosts = (this.lodgingCosts + this.flightCosts)*1
    this.totalCosts = (this.lodgingCosts + this.flightCosts + this.bookingCosts)
  }

}

export default CurrentBooking