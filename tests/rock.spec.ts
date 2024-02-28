import { Musician, Music } from '../src/musician';
import { RockStar } from '../src/rockStar';

describe('RockStar', () => {

    let spy: jest.SpyInstance;

    beforeEach(() => {
        spy = jest.spyOn(console, 'log');
        spy.mockClear();
    });

    it('properties testing', () => {
        const musician = new RockStar('Mick', 'Jagger', 72);
        expect(musician.style).toBe(Music.ROCK);
    });

    it('toString method testing', () => {
        const musician = new RockStar('Mick', 'Jagger', 72);
        expect(musician.toString()).toBe('Mick Jagger plays ROCK');
    });

    it("should return 'I'm swinging'", () => {
        const musician = new RockStar('Mick', 'Jagger', 72);
        
        musician.shout();

        expect(spy).toBeCalledTimes(1)
    })

});