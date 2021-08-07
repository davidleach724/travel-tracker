// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
import './images/plane.png'
import './images/glasses.png'
import './images/planeandclouds.png'
import './images/cloud_left.png'
import './images/travelon_line.png'
import './images/copyright_website.png'

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
let allTravelerData, travelerData, allTrips, destinationData, travelerTrips, randomUserID;
let userID = 43

// Functions
const gatherData = () => {
  Promise.all([getAllTravelers(), getSingleTraveler(userID), getAllTrips(), getAllDestinations()])
    .then(data => {
      // generateRandomUser(data[0])
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
  // let userTripCosts = (getTripCosts(travelerTrips, destinationData))
  // console.log(userTripCosts);
}

const generateSingleTravelerData = (userID) => {
  travelerData = new Traveler(userID, travelerTrips, destinationData);
  console.log(travelerData);
}



// const getTripCosts = (trips, destinations) => {
//   return trips.reduce((arr, trip) => {
//     let currentDest = destinations.getDestinationByID(trip.destinationID)
//     let tripObj = {
//       'destinationID': currentDest.id,
//       'tripID': trip.id,
//       'destination': currentDest.destination,
//       'image': currentDest.image,
//       'date': trip.date,
//       'duration': trip.duration,
//       'travelers': trip.travelers,
//       'lodging': (trip.duration * currentDest.estimatedLodgingCostPerDay),
//       'flight': (trip.travelers * currentDest.estimatedFlightCostPerPerson),
//       'bookingFee': ((trip.duration * currentDest.estimatedLodgingCostPerDay) + (trip.travelers * currentDest.estimatedFlightCostPerPerson)) * .1,
//       'totalCost': Math.floor(((trip.duration * currentDest.estimatedLodgingCostPerDay) + (trip.travelers * currentDest.estimatedFlightCostPerPerson))*1.1)
//     }
//     arr.push(tripObj)
//     return arr     
//   }, [])
// }

// const generateRandomUser = (data) => {
//   randomUserID = Math.floor(Math.random() * data.travelers.length + 1)
// }