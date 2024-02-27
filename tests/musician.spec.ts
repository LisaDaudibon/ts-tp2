import { Music, Musician } from '../src/index';
describe('Musician', () => {

    it('Enum Music testing', () => {
        expect(Music[0]).toBe('JAZZ');
        expect(Music[1]).toBe('ROCK');
    });

    it('should have all properties defined', () => {
        const musician = new Musician('Miles', 'Davis', 89);
        expect(musician.firstName).toBe('Miles');
        expect(musician.lastName).toBe('Davis');
        expect(musician.age).toBe(89);
        expect(musician.style).toBeFalsy();
    });

    it('should implements a toString method', () => {
        const musician = new Musician('Miles', 'Davis', 89);
        expect(musician.toString).toBeDefined()
        expect(musician.toString()).toBe('Miles Davis')
    });
});