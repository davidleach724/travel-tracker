let domUpdates = {
  determineTimeOfDay () {
    let time = new Date();
    let hour = time.getHours();
    this.setCalendarDate(time);
    if(hour < 10) {return 'Good Morning'}
    if(hour < 17) {return 'Good Afternoon'}
    return 'Good Evening'
  },

  setCalendarDate(time) {
    let startDate = document.getElementById('startDate');
    let endDate = document.getElementById('endDate');
    let year = time.getFullYear();
    let month = time.getMonth()+1;
    if (month < 10) {month = '0'+ month}
    let day = time.getDate();
    if (day < 10) {day = '0' + day}
    startDate.value=`${year}-${month}-${day}`
    startDate.min=`${year}-${month}-${day}`
    endDate.value=`${year}-${month}-${day}`
    endDate.min=`${year}-${month}-${day}`
  },

  updateEndDateMin(minDate) {
    let endDate = document.getElementById('endDate');
    endDate.value = minDate;
    endDate.min = minDate;
  },

  renderUserName (travelerData) {
    let userWelcome = document.getElementById('userGreeting');
    let firstName = travelerData.name.split(' ')[0]
    let greeting = this.determineTimeOfDay()
    userWelcome.innerText= `${greeting}, ${firstName}`
  },

  renderTravelCards (travelerData) {
    let pendingSection = document.getElementById('pendingBody');
    let upcomingSection = document.getElementById('upcomingBody');
    let pastSection = document.getElementById('pastBody');

    this.createCardContent(travelerData.pendingTrips, pendingSection);
    this.createCardContent(travelerData.upcomingTrips, upcomingSection);
    this.createCardContent(travelerData.pastTrips, pastSection);
  },

  createCardContent (data, section) {
    section.innerHTML = '';
    data.forEach(trip => {
      section.innerHTML += `
      <div class="card-container" id="cardContainer">
      <div class="top-card">
        <img src=${trip.image} alt=${trip.imageAlt} class="destination-img">
      </div>
      <div class="bottom-card">
        <h3>${trip.destination}</h3>
        <br>
        <h4>From: ${trip.startDate}</h4>
        <h4>To: ${trip.endDate}</h4>
        <h4>Travelers: ${trip.travelers}</h4>
        <br>
        <br>
        <h5>TOTAL COST: ${trip.totalCost}</h5>
      </div>
    </div>`
      })
  },

  generateDestinationList(destinationList) {
    let destinationMenu = document.getElementById('destinationList');
    destinationMenu.innerHTML = `<option value="none" selected disabled hidden>Select an Option</option>`
    destinationList.forEach(place => {
      destinationMenu.innerHTML += `
      <option value="${place}">${place}</option>
      `
    })
  },

  updateDestinationPicture(destination) {
    let selectedDestination = document.getElementById('chosenDestination')
    selectedDestination.src= destination.image
    selectedDestination.alt = destination.alt
  },

  renderCurrentTripCosts(trip) {
    let lodging = document.getElementById('lodgingCost')
    let flight = document.getElementById('flightCost')
    let booking = document.getElementById('bookingCost')
    let total = document.getElementById('totalCost')

    lodging.innerText = `${trip.lodgingCosts}`
    flight.innerText = `${trip.flightCosts}`
    booking.innerText = `${trip.bookingCosts}`
    total.innerText = `${trip.totalCosts}`
  },

  renderTotalSpentYear(amt, year) {
    let totalSpent = document.getElementById('totalSpentYear')

    totalSpent.innerText = `It's been a good year! You've spent $${amt.toFixed(2)} on experiences in ${year}`
  },

  revertChooseDestination() {
    let travelers = document.getElementById('quantity')
    let selectedDestination = document.getElementById('chosenDestination')
    let lodging = document.getElementById('lodgingCost')
    let flight = document.getElementById('flightCost')
    let booking = document.getElementById('bookingCost')
    let total = document.getElementById('totalCost')
    
    selectedDestination.src = './images/choose_destination.png'
    selectedDestination.alt = 'choose your destination sketch'

    lodging.innerText = ''
    flight.innerText = ''
    booking.innerText = ''
    total.innerText = ''

    travelers.value = ''
  },

  showLogonError(prompt) {
    let conflictPrompt = document.getElementById('conflictProblem')

    conflictPrompt.innerText = prompt;
  },

  hideLogonForm() {
    let logOnForm = document.getElementById('logOnForm');
    let nav = document.getElementById('navBar')
    let navWave = document.getElementById('navWave')
    let mainSection = document.getElementById('mainSection')
    let footer = document.getElementById('footer')

    logOnForm.classList.add('hidden')
    nav.classList.remove('hidden')
    navWave.classList.remove('hidden')
    mainSection.classList.remove('hidden')
    footer.classList.remove('hidden')
  }
}

export default domUpdates;