export default function sortListUnit(listUnit) {
    const listUnitSort = listUnit.sort((a, b) => b.health - a.health);
    return listUnitSort
};
