// import moment from 'moment'; ??????NEEDED???????

let domUpdates = {
  determineTimeOfDay () {
    let time = new Date();
    let hour = time.getHours();
    if(hour < 10) {
      return 'Good Morning'
    }
    if(hour < 17) {
      return 'Good Afternoon'
    }
    return 'Good Evening'
  },

  renderUserName (travelerData) {
    let userWelcome = document.getElementById('userGreeting');
    let firstName = travelerData.name.split(' ')[0]
    let greeting = this.determineTimeOfDay()
    userWelcome.innerText= `${greeting}, ${firstName}`
    console.log(firstName);
  }
}

export default domUpdates;