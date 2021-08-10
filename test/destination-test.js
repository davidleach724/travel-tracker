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
    console.log(destinationData.data)
    expect(Destinations).to.be.a('function');
  })


})