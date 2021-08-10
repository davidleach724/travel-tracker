// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';
import moment, { duration } from 'moment';

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
import CurrentBooking from './CurrentBooking';

// Event Listeners
let destinationMenu = document.getElementById('destinationList');
let startDate = document.getElementById('startDate')
let endDate = document.getElementById('endDate')
let travelerQty = document.getElementById('quantity')
let bookButton = document.getElementById('bookTrip')

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

bookButton.addEventListener('click', function() {
  bookUserTrip()
});

// Global variables
let allTravelerData, travelerData, allTrips, destinationData, travelerTrips, newTripId, currentTrip;
let userID = 3

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
  newTripId = allTrips.findLatestTrip() + 1
  travelerTrips = allTrips.filterTripsById(userID)
}

const genereateDestinationData = (data) => {
  destinationData = new Destinations(data);
  domUpdates.generateDestinationList(destinationData.getDestinationList())
}

const generateSingleTravelerData = (userID) => {
  travelerData = new Traveler(userID, travelerTrips, destinationData);
  console.log(userID, travelerTrips, destinationData)
  domUpdates.renderUserName(travelerData);
  domUpdates.renderTravelCards(travelerData);
  domUpdates.renderTotalSpentYear(travelerData.totalSpent, travelerData.currentYear)
  console.log(travelerData);
}

function checkUserInputs() {
  let tripDuration = moment(endDate.value).diff(startDate.value, 'days');

  if (destinationMenu.value != 'none' && travelerQty.value && tripDuration>0) {
    currentTrip = new CurrentBooking(travelerData, newTripId, currentDestination, startDate.value, endDate.value, tripDuration, travelerQty.value)
    domUpdates.renderCurrentTripCosts(currentTrip);
    return true
  }
  return false
}

  function bookUserTrip() {
    if (checkUserInputs()) {
      fetch('http://localhost:3001/api/v1/trips', {
        method: 'POST',
        body: JSON.stringify({id: currentTrip.tripID, userID: currentTrip.user.id, destinationID: currentTrip.destination.id, travelers: currentTrip.travelers, date: currentTrip.startDate.replaceAll('-', '/'), duration: currentTrip.duration, status: currentTrip.status, suggestedActivities: []}),
        headers: {'Content-Type': 'application/json'}
      })
      .then(response => checkForError(response))
      .then(setTimeout(function() {gatherData()}, 250))
      .catch(err => console.log(err))
    } else {
      return
    }
  }

  function checkForError(res) {
    if (!res.ok) {
      throw new Error('An Error Occured - this is where the message goes')
    } else {
      return res.json()
    }
  }