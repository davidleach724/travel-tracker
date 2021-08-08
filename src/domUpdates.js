let domUpdates = {
  determineTimeOfDay () {
    let time = new Date();
    let hour = time.getHours();
    if(hour < 10) {return 'Good Morning'}
    if(hour < 17) {return 'Good Afternoon'}
    return 'Good Evening'
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
  }
}

export default domUpdates;