class Trips {
  constructor(tripsData) {
    this.data = tripsData.trips;

  }

  filterTripsById(id) {
    return this.data.filter(trip => trip.userID === id)
  }

  findLatestTrip() {
    return this.data.sort((a, b) => b.id - a.id)[0].id
  }
}
export default Trips;