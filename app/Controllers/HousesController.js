
function _drawHouses() {
  // GET THE HOUES TEMPLATE
  // @ts-ignore
  document.getElementById('listings').innerHTML = '<p> houses go here </p>'
}



export class HousesController {
  constructor() {
    console.log('cars controller loaded');
    // NOTE register a listener. below is listens to 'cars' on the proxystate, and when triggerd runs '_drawCars'

  }


  viewHouses() {
    _drawHouses()
    // swap out car form with house form
  }
}