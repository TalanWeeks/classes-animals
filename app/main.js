import { Alligator } from "./models/Alligator.js"
import {Bear} from "./models/Bear.js"

import {AlligatorVSBear} from "./controllers/AlligatorVSBear.js"
import {Zoo} from "./controllers/Zoo.js"


var zoo = new Zoo()

console.log(zoo)

console.log(Alligator)

let timTheBear = new Bear("john")

console.log(timTheBear)

console.log(new Alligator("tim"))
console.log(new Alligator("tod"))


let AlligatorVSBearController = new AlligatorVSBear()


window['app'] = {
  controllers:{
    AlligatorVSBearController,
    zoo
}
}