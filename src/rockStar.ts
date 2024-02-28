import { Music, Musician } from "./musician";

export class RockStar extends Musician {
    constructor(firstName: string, lastName: string, age:number){
        super(firstName, lastName, age);
        this.style = Music.ROCK;
    }
}