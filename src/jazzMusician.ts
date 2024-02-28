import log from "./log";
import { Musician, Music } from "./musician";


export class JazzMusician extends Musician {
    
    constructor(firstName: string, lastName: string, age:number){
        super(firstName, lastName, age);
        this.style = Music.JAZZ;
    }

    swing() :void {
        log("I'm swinging !")
    }
}