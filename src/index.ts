export enum Music {
    JAZZ,
    ROCK
}

export interface IMusician{
    addAlbum (album: Album) : void
}

export interface ElementToString{
    toString(): String;
}

export class Musician implements IMusician, ElementToString{
    public firstName: string;
    public lastName: string;
    public age:number;
    private _style: Music | undefined;
    private _album: Album[] = [];
    constructor(firstName:string, lastName: string, age:number, style?: Music) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age= age;
        this._style=style;
    }

    public get style() {
        return this._style;
    }

    public set style(value) {
        this._style = value;
    }

    public get album() {
        return this._album;
    }

    public set album(value) {
        this._album = value;
    }

    toString(): String {
        if (this.style !== undefined) {
            return `${this.firstName} ${this.lastName} plays ${Music[this.style]}`
        }
        return `${this.firstName} ${this.lastName}`;
    }

    addAlbum(newAlbum: Album): void {
        this.album.push(newAlbum)
    }
}

// function display<Object extends ElementToString>(arg :Array<Object>):void  {
//     Object.map(element => element.toString)
// }

export class JazzMusician extends Musician {
    
    constructor(firstName: string, lastName: string, age:number){
        super(firstName, lastName, age);
        this.style = Music.JAZZ;
    }
}

export class RockStar extends Musician {
    constructor(firstName: string, lastName: string, age:number){
        super(firstName, lastName, age);
        this.style = Music.ROCK;
    }
}

export class Album {
    constructor(public title: string){}

    toString():String {
        return this.title;
    }
}