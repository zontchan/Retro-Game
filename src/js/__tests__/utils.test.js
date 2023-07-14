import {calcTileType} from "../utils";

test('test corners of play field', () => {
    expect(calcTileType(0,8)).toBe('top-left');
    expect(calcTileType(7,8)).toBe('top-right');
    expect(calcTileType(56,8)).toBe('bottom-left');
    expect(calcTileType(63,8)).toBe('bottom-right');
});

