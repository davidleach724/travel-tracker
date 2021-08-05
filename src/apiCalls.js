export const getAllTravelers = () => {
  return fetch('http://localhost:3001/api/v1/travelers')
    .then(response => response.json())
    .then(data => data)
    .catch(err => console.log(err))
}

export const getSingleTraveler = (id) => {
  return fetch(`http://localhost:3001/api/v1/travelers/${id}`)
    .then(response => response.json())
    .then(data => data)
    .catch(err => console.log(err))
}

export const getAllTrips = () => {
  return fetch('http://localhost:3001/api/v1/trips')
    .then(response => response.json())
    .then(data => data)
    .catch(err => console.log(err))
}

export const getAllDestinations = () => {
  return fetch('http://localhost:3001/api/v1/destinations')
    .then(response => response.json())
    .then(data => data)
    .catch(err => console.log(err))
}