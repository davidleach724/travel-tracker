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
}

export default Destinations;