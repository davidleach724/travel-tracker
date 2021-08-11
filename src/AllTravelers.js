class AllTravelers {
  constructor(allTravelerData) {
    this.data = allTravelerData.travelers;
  }

  generateUserList() {
    return this.data.reduce((arr, user) => {
      arr.push(user.id)
      return arr
    }, [])
  }
}

export default AllTravelers;