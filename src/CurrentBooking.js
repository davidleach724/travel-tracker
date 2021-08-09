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
    this.populateCurrentTripCosts()
  }

  populateCurrentTripCosts() {
    this.lodgingCosts = this.formatToCurrency(this.duration * this.destination.estimatedLodgingCostPerDay)
    this.flightCosts = this.formatToCurrency(this.travelers * this.destination.estimatedFlightCostPerPerson)
    this.bookingCosts = this.formatToCurrency(((this.duration * this.destination.estimatedLodgingCostPerDay) + (this.travelers * this.destination.estimatedFlightCostPerPerson)) *.1)
    this.totalCosts = this.formatToCurrency(((this.duration * this.destination.estimatedLodgingCostPerDay) + (this.travelers * this.destination.estimatedFlightCostPerPerson)) *1.1)
  }

  formatToCurrency(amt) {
    let amount = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(amt)
    return amount
  }
}

export default CurrentBooking