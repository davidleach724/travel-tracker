const chai = require('chai');
const expect = chai.expect;

import Activity from '../src/Activity';
import activityData from '../src/data/activityData';

describe('Activity', () => {
  let activity;

  beforeEach(() => {
    activity = new Activity(activityData, 1);
  });

  it('should be a function', () => {
    expect(Activity).to.be.a('function');
  })

  
})