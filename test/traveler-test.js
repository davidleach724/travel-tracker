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

  it('should store the current user ID', () => {
    expect(travelerData.id).to.equal(3);
  })

  it('should capture the user name', () => {
    expect(travelerData.name).to.equal("Sibby Dawidowitsch");
  })

  it('should capture the traveler type', () => {
    expect(travelerData.travelerType).to.equal('shopper');
  })

  it('should store any pending trips based on status', () => {
    expect(travelerData.pendingTrips.length).to.equal(0);
  })

  it('should store any upcoming trips based on date', () => {
    expect(travelerData.upcomingTrips.length).to.equal(1);
  })

  it('should store any past trips based on date', () => {
    expect(travelerData.pastTrips.length).to.equal(6);
  })

  it('should capture the current year', () => {
    expect(travelerData.currentYear).to.equal('2021')
  })

  it('should accumulate total cost data for that current year', () => {
    expect(travelerData.totalSpent).to.equal(0)
  })
})

