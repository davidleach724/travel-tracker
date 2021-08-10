const chai = require('chai');
const expect = chai.expect;

import Destinations from '../src/Destinations'
import destinationTestData from './test_data/destination-test-data'

describe('Destinations', () => {
  let destinationData;

  beforeEach(() => {
    destinationData = new Destinations(destinationTestData);
  });

  it('should be a function', () => {
    expect(Destinations).to.be.a('function');
  })

  it('should take in data', () => {
    expect(destinationData.data).to.be.an('array');
  })

  it('should generate a list of destinations', () => {
    expect(destinationData.getDestinationList().length).to.equal(50);
  })

  it('should recall a destination by ID', () => {
    expect(destinationData.getDestinationByID(3)).to.deep.equal({
      "id": 3,
      "destination": "Sydney, Austrailia",
      "estimatedLodgingCostPerDay": 130,
      "estimatedFlightCostPerPerson": 950,
      "image": "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
      "alt": "opera house and city buildings on the water with boats"
    })
  })


  it('should recall a destination by Name', () => {
    expect(destinationData.getDestinationByName("Tokyo, Japan")).to.deep.equal({
      "id": 8,
      "destination": "Tokyo, Japan",
      "estimatedLodgingCostPerDay": 125,
      "estimatedFlightCostPerPerson": 1000,
      "image": "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1971&q=80",
      "alt": "city with people walking in crosswalk and brightly lit shops at night"
    });
  })


})