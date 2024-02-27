import { Album, display, JazzMusician, Musician, RockStar } from '../src/index';
describe('Album', () => {

    let spy: jest.SpyInstance;

    beforeEach(() => {
        spy = jest.spyOn(console, 'log');
        spy.mockClear();
    });

    it('display method testing with musicians', () => {
        const musicians: Musician[] = [new JazzMusician('Miles', 'Davis', 89), new RockStar('Mick', 'Jagger', 72)];

        display(musicians);

        expect(spy).toBeCalledTimes(2);
        expect(spy.mock.calls[0][0]).toBe('Miles Davis plays JAZZ');
        expect(spy.mock.calls[1][0]).toBe('Mick Jagger plays ROCK');
    });

    it('display method testing with albums', () => {
        const albums: Album[] = [new Album('Kind Of Blue'), new Album('Tutu')];

        display(albums);

        expect(spy).toBeCalledTimes(2);
        expect(spy.mock.calls[0][0]).toBe('Kind Of Blue');
        expect(spy.mock.calls[1][0]).toBe('Tutu');
    });

});