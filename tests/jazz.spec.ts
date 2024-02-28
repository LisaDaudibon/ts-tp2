import { Music } from '../src/musician';
import { JazzMusician } from '../src/jazzMusician';

describe('JazzMusician', () => {

    let spy: jest.SpyInstance;

    beforeEach(() => {
        spy = jest.spyOn(console, 'log');
        spy.mockClear();
    });

    it('properties testing', () => {
        const musician = new JazzMusician('Miles', 'Davis', 89);
        expect(musician.style).toBe(Music.JAZZ);
    });

    it('toString method testing', () => {
        const musician = new JazzMusician('Miles', 'Davis', 89);
        expect(musician.toString()).toBe('Miles Davis plays JAZZ');
    });

    it("should return 'I'm swinging'", () => {
        const musician = new JazzMusician('Miles', 'Davis', 89);
        
        musician.swing();

        expect(spy).toBeCalledTimes(1)
    })
});