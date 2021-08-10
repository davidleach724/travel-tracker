const chai = require('chai');
const expect = chai.expect;

import Trips from '../src/Trips';
import tripTestData from './test_data/trips-test-data';

describe('Trips', () => {
  let tripData;

  beforeEach(() => {
    tripData = new Trips(tripTestData);
  });

  it('should be a function', () => {
    expect(Trips).to.be.a('function');
  })

  it('should store trips as an array', () => {
    expect(tripData.data).to.be.an('array');
  })

  it('should filter trips by user ID', () => {
    expect(tripData.filterTripsById(3).length).to.equal(7);
  })

  it('should find the latest trip ID number', () => {
    expect(tripData.findLatestTrip()).to.equal(173);
  })

})