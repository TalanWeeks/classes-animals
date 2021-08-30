import { Alligator } from "../models/Alligator.js";
import { Bear } from "../models/Bear.js";


export class AlligatorVSBear{
  bearVsAlligator(){
    let newGator = new Alligator("tim")
    let newBear = new Bear("tom")
    let randomNum = Math.floor(Math.random()*10)
    if(randomNum<=5){
      newGator.legs --
    } else {
      newBear.legs --
    }
    console.log(newGator)
    console.log(newBear)
  }

}