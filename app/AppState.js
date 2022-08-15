
import { Car } from "./Models/Car.js"
import { House } from "./Models/House.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = []

  /** @type {import('./Models/Car').Car[]} */
  cars = [
    new Car({ make: 'Honda', model: 'CRV3-XL PLUS', year: 2023, price: 100000, img: 'https://static01.nyt.com/images/2020/05/22/business/21wheels3-print/merlin_9261190_cdd1e166-951d-4bd4-b4be-26f41a5dcd96-articleLarge.jpg?quality=75&auto=webp&disable=upscale', description: 'driven only once, car of the future' }),
    new Car({ make: 'Tesla', model: 'Cyber truck', year: 3000, price: 5, img: 'https://ogden_images.s3.amazonaws.com/www.motherearthnews.com/images/1975/09/22153103/al-yandacropped.jpg', description: 'state of the art, nothing like it, this is also technically just a pre-order, you\'ll get it in the year 3056.' })
  ]

  houses = [

    new House({ address: '1111 deadman lane', stories: '3,', sqfeet: '3000', price: 100000, img: 'https://th.bing.com/th/id/OIP.6lEwihFWiDUZytK75ADjaQAAAA?pid=ImgDet&rs=1', description: 'This is a lovely home for children and not at all haunted or part of a current police invetigation. It has 4 different levels including the dung..basement, it even comes with 1000 pet bats.' }),

    new House({ address: 'galaxy far far away', stories: '1', sqfeet: '60', price: 50, img: 'https://static3.srcdn.com/wordpress/wp-content/uploads/2019/03/Millennium-Falcon.jpg', description: 'it flys. if you do not speak wookie negotiations for price will be difficult, no storm troopers may purchase' })
  ]

}
export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
