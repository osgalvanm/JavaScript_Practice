const str = 'hyunjin comia tajin en un cojin en beijing';

function strInStr(str, strToFind, start) {
    start = start === undefined ? 0 : start
    let positions = [];
    let index = str.indexOf(strToFind, start);
    while (index != -1) {
        index = str.indexOf(strToFind, start);
        index != -1 ? positions.push(index) : null;
        start = index + strToFind.length;
    }
    return {
        positions: positions,
        times: positions.length
    }
}

function strInStr_RECURSIVE(str, strToFind, start, positions = []) {
    start = start === undefined ? 0 : start
    let index = str.indexOf(strToFind, start);
    start = index + strToFind.length;

    if (index != -1) {
        positions.push(index);
        strInStr_RECURSIVE(str, strToFind, start, positions)
    }
    return {
        positions: positions,
        times: positions.length
    }
}

console.log(strInStr(str, 'jin'));
console.log(strInStr_RECURSIVE(str, 'jin'));