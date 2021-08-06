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
let userID = 44;
let allTravelerData, travelerData, allTrips, destinationData, travelerTrips;

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
  allTravelerData = new AllTravelers(data);
}

const generateSingleTravelerData = (data) => {
  travelerData = new Traveler(data);
}

const generateTripsData = (data) => {
  allTrips = new Trips(data);
  travelerTrips = allTrips.filterTripsById(userID)
  
}

const genereateDestinationData = (data) => {
  destinationData = new Destinations(data);
  console.log(getTripCosts(travelerTrips, destinationData))
  // console.log(destinationData.getDestinationByID(49))
}

const getTripCosts = (trips, destinations) => {
  return trips.reduce((arr, trip) => {
    let currentDest = destinations.getDestinationByID(trip.destinationID)
    console.log('current dest: ', currentDest)
    let tripObj = {
      'destinationID': currentDest.id,
      'tripID': trip.id,
      'destination': currentDest.destination,
      'image': currentDest.image,
      'date': trip.date,
      'duration': trip.duration,
      'travelers': trip.travelers,
      'lodging': (trip.duration * currentDest.estimatedLodgingCostPerDay),
      'flight': (trip.travelers * currentDest.estimatedFlightCostPerPerson),
      'bookingFee': ((trip.duration * currentDest.estimatedLodgingCostPerDay) + (trip.travelers * currentDest.estimatedFlightCostPerPerson)) * .1,
      'totalCost': Math.floor(((trip.duration * currentDest.estimatedLodgingCostPerDay) + (trip.travelers * currentDest.estimatedFlightCostPerPerson))*1.1)
    }
    arr.push(tripObj)
    return arr     
  }, [])
  // console.log(trips, destinations)
}