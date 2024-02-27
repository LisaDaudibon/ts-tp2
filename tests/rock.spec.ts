import { Music, RockStar } from '../src/index';
describe('RockStar', () => {

    it('properties testing', () => {
        const musician = new RockStar('Mick', 'Jagger', 72);
        expect(musician.style).toBe(Music.ROCK);
    });

    it('toString method testing', () => {
        const musician = new RockStar('Mick', 'Jagger', 72);
        expect(musician.toString()).toBe('Mick Jagger plays ROCK');
    });

});