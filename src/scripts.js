// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
import './images/plane.png'
import './images/glasses.png'

// Import Api call functions
import {getAllTravelers} from './apiCalls';
import {getSingleTraveler} from './apiCalls';
import {getAllTrips} from './apiCalls';
import {getAllDestinations} from './apiCalls';

// Import classes
import AllTravelers from './AllTravelers';
import Destinations from './Destinations';
import Traveler from './Traveler';
import Trips from './Trips';

// Global variables
let id = 2;

// Functions
const gatherData = () => {
  Promise.all([getAllTravelers(), getSingleTraveler(1), getAllTrips(), getAllDestinations()])
    .then(data => {
      generateAllTravelerData(data[0]);
      generateSingleTravelerData(data[1]);
      generateTripsData(data[2]);
      genereateDestinationData(data[3]);
    })
}

gatherData()

const generateAllTravelerData = (data) => {
  let allTravelerData = new AllTravelers(data);
}

const generateSingleTravelerData = (data) => {
  let travelerData = new Traveler(data);
}

const generateTripsData = (data) => {
  let allTrips = new Trips(data);
  let travelerTrips = allTrips.filterTripsById(id)
  console.log(travelerTrips);
}

const genereateDestinationData = (data) => {
  let destinationData = new Destinations(data);

}