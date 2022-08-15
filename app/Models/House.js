import { generateId } from '../Utils/generateId.js'




export class House {
  constructor({ address, stories, sqfeet, price, img, description }) {
    // @ts-ignore
    this.id = generateId()
    this.address = address,
      this.stories = stories,
      this.sqfeet = sqfeet,
      this.price = price,
      this.img = img,
      this.description = description
  }

  get Template() {
    return `
    <div class="col-4 p-3">
      <div class="bg-white elevation-2">
        <img class="img-fluid" src="${this.img}" alt="">
        <div class="p-2">
          <h4 class="text-center">${this.address} | ${this.stories} | ${this.sqfeet}</h4>
          <p>${this.description}</p>
          <p class="text-end text-success m-0">$<b>${this.price}</b></p>
          <button class="btn btn-danger" onclick="app.carsController.deleteCar('${this.id}')">delete me</button> 
        </div>
      </div>
    </div>
    `
  }
}






