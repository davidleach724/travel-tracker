const chai = require('chai');
const expect = chai.expect;

import CurrentBooking from '../src/CurrentBooking';
import Trips from '../src/Trips';
import tripTestData from '../test/test_data/trips-test-data'


let currentUser = {
  "id": 3,
  "name": "Sibby Dawidowitsch",
  "travelerType": "shopper",
}

let destination = {
  "id": 26,
  "destination": "London, England",
  "estimatedLodgingCostPerDay": 100,
  "estimatedFlightCostPerPerson": 1000,
  "image": "https://images.unsplash.com/photo-1549471156-52ee71691122?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
  "alt": "city with bridge under night sky"
}

describe('Current Booking', () => {
  let tripData, currentBookingTrip;

  beforeEach(() => {
    tripData = new Trips(tripTestData)

    currentBookingTrip = new CurrentBooking(currentUser, 300, destination, '2021-08-27', '2021-08-29', 2, 4)
  });

  it('should be a function', () => {
    expect(CurrentBooking).to.be.a('function');
  })

  it('should be an object', () => {
    expect(currentBookingTrip).to.be.an('object');
  })

  it('should have a default status as pending', () => {
    expect(currentBookingTrip.status).to.equal('pending');
  })

  it('should calculate lodging costs', () => {
    expect(currentBookingTrip.lodgingCosts).to.equal('$200.00');
  })

  it('should calculate flight costs', () => {
    expect(currentBookingTrip.flightCosts).to.equal('$4,000.00');
  })

  it('should calculate booking costs', () => {
    expect(currentBookingTrip.bookingCosts).to.equal('$420.00');
  })

  it('should sum up total costs', () => {
    expect(currentBookingTrip.totalCosts).to.equal('$4,620.00');
  })
})