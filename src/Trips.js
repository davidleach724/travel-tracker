class Trips {
  constructor(tripsData) {
    this.data = tripsData.trips;

  }

  filterTripsById(id) {
    return this.data.filter(trip => trip.userID === id)
  }
}
export default Trips;