const chai = require('chai');
const expect = chai.expect;

import Traveler from '../src/Traveler'
import Destinations from '../src/Destinations';
import Trips from '../src/Trips';
import tripTestData from '../test/test_data/trips-test-data'
import destinationTestData from './test_data/destination-test-data'


let currentUser = {
  "id": 3,
  "name": "Sibby Dawidowitsch",
  "travelerType": "shopper",
}

describe('Single Traveler', () => {
  let travelerData, destinationData, tripData, userTrips;

  beforeEach(() => {
    destinationData = new Destinations(destinationTestData);
    tripData = new Trips(tripTestData)
    userTrips = tripData.filterTripsById(3)

    travelerData = new Traveler(currentUser, userTrips, destinationData)
  });

  it('should be a function', () => {
    expect(Traveler).to.be.a('function');
  })

  it('should generate a new Traveler', () => {
    expect(travelerData).to.be.an('object');
  })

  it.skip('should ', () => {
    expect(travelerData).to.be.an('object');
  })

  it.skip('should ', () => {
    expect(travelerData).to.be.an('object');
  })

  it.skip('should ', () => {
    expect(travelerData).to.be.an('object');
  })

  it.skip('should ', () => {
    expect(travelerData).to.be.an('object');
  })

  it.skip('should ', () => {
    expect(travelerData).to.be.an('object');
  })

  it.skip('should ', () => {
    expect(travelerData).to.be.an('object');
  })

  

})

