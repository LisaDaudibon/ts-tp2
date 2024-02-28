import { Album } from "./album";
import { JazzMusician } from "./jazzMusician";
import log from "./log";
import { Musician } from "./musician";
import { RockStar } from "./rockStar";
import { display } from "./utils";


log("Bienvenue dans ma première application TypeScript.")

const musicians : Musician[] = [];

const miles = new JazzMusician('Miles', 'Davis', 89);
const mick = new RockStar('Mick', 'Jagger', 72);

musicians.push(miles, mick)

miles.addAlbum(new Album('Tutu'));
miles.addAlbum(new Album('Kind of Blue'))

display(musicians)
display(miles.album)

musicians.forEach( musician => {
    if(musician instanceof JazzMusician) {
        musician.swing();
    } else if (musician instanceof RockStar) {
        musician.shout();
    }
})