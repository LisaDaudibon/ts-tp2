import log from "./log";

export interface IElementToString{
    toString(): String;
}

export function display<T extends IElementToString>(elements :T[]):void  {
    elements.forEach(element => {
        log(element.toString())
    });
}
