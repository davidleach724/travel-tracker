class Destinations {
  constructor(destinationData) {
    this.data = destinationData.destinations;
  }

  getDestinationList() {
    return this.data.reduce((arr, spot) => {
      arr.push(spot.destination);
      return arr
    }, []).sort()
  }

  getDestinationByID(id) {
    return this.data.find(spot => spot.id === id)
  }
}

export default Destinations;