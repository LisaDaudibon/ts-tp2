import { IElementToString } from "./utils";
import { Album } from "./album";

export enum Music {
    JAZZ,
    ROCK
}

export interface IMusician{
    addAlbum (album: Album) : void
}

export class Musician implements IMusician, IElementToString{
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