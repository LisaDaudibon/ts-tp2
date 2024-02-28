import { Album } from '../src/album';
describe('Album', () => {

    it('Album properties testing', () => {
        const al = new Album('Kind Of Blue');
        expect(al.title).toBe('Kind Of Blue');
    });

    it('Album toString method testing', () => {
        const al = new Album('Kind Of Blue');
        expect(al.toString()).toBe('Kind Of Blue');
    });
});
