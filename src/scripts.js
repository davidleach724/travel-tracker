// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';
import moment from 'moment';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
import './images/plane.png'
import './images/glasses.png'
import './images/planeandclouds.png'
import './images/cloud_left.png'
import './images/travelon_line.png'
import './images/copyright_website.png'
import './images/choose_destination.png'

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
import domUpdates from './domUpdates'

// Event Listeners
let destinationMenu = document.getElementById('destinationList');
let startDate = document.getElementById('startDate')
let endDate = document.getElementById('endDate')
let travelerQty = document.getElementById('quantity')

let currentDestination;


destinationMenu.onchange = function() {
  let selectDestination = destinationMenu.value;
  currentDestination = destinationData.getDestinationByName(selectDestination)
  domUpdates.updateDestinationPicture(currentDestination);
  checkUserInputs()
}

startDate.onchange = function() {
  domUpdates.updateEndDateMin(startDate.value)
}

endDate.onchange = function() {
  checkUserInputs()
}

travelerQty.onchange = function() {
  checkUserInputs()
}

function checkUserInputs() {
  let tripDuration = moment(endDate.value).diff(startDate.value, 'days');

  if (destinationMenu.value != 'none' && travelerQty.value && tripDuration>0) {
    console.log('yaboi')
    updatePlanCosts(currentDestination, tripDuration, );
  }
}

// travelerQty.onchange = function() {
//   let currentDestination = destinationData.getDestinationByName(destinationMenu.value)
//   domUpdates.updatePlanCosts(currentDestination, travelerQty.value)
// }

// Global variables
let allTravelerData, travelerData, allTrips, destinationData, travelerTrips;
let userID = 38

// Functions
const gatherData = () => {
  Promise.all([getAllTravelers(), getSingleTraveler(userID), getAllTrips(), getAllDestinations()])
    .then(data => {
      generateAllTravelerData(data[0]);
      generateTripsData(data[2]);
      genereateDestinationData(data[3]);
      generateSingleTravelerData(data[1]);
    })
}

gatherData()

const generateAllTravelerData = (data) => {
  allTravelerData = new AllTravelers(data);
}

const generateTripsData = (data) => {
  allTrips = new Trips(data);
  travelerTrips = allTrips.filterTripsById(userID)
}

const genereateDestinationData = (data) => {
  destinationData = new Destinations(data);
  domUpdates.generateDestinationList(destinationData.getDestinationList())
}

const generateSingleTravelerData = (userID) => {
  travelerData = new Traveler(userID, travelerTrips, destinationData);
  
  domUpdates.renderUserName(travelerData);
  domUpdates.renderTravelCards(travelerData);
  console.log(travelerData);
}