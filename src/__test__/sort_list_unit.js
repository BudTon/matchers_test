/* eslint-disable no-undef */

import sortListUnit from "../sort_list_unit";

test.each([
    [[
        { name: 'мечник', health: 10 },
        { name: 'маг', health: 100 },
        { name: 'лучник', health: 80 },
    ], [
        { name: 'маг', health: 100 },
        { name: 'лучник', health: 80 },
        { name: 'мечник', health: 10 }
    ]],
]) ('testing sortListUnit', (listUtit, expected) => {
        const result = sortListUnit(listUtit);
        expect(result).toEqual(expected);
    });
