const chai = require('chai');
const expect = chai.expect;

import AllTravelers from '../src/AllTravelers'
import travelerTestData from './test_data/travelers-test-data';

describe('All Travelers', () => {
  let allTravelerData;

  beforeEach(() => {
    allTravelerData = new AllTravelers(travelerTestData);
  });

  it('should be a function', () => {
    expect(AllTravelers).to.be.a('function');
  })

  it('should take in data', () => {
    expect(allTravelerData.data).to.be.an('array');
  })

  it('should list each traveler as an element in an array', () => {
    expect(allTravelerData.data.length).to.equal(19);
  })

})

