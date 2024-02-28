import { Music } from '../src/musician';
import { JazzMusician } from '../src/jazzMusician';

describe('JazzMusician', () => {

    it('properties testing', () => {
        const musician = new JazzMusician('Miles', 'Davis', 89);
        expect(musician.style).toBe(Music.JAZZ);
    });

    it('toString method testing', () => {
        const musician = new JazzMusician('Miles', 'Davis', 89);
        expect(musician.toString()).toBe('Miles Davis plays JAZZ');
    });

});