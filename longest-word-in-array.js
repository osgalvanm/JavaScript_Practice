const words = ['cable', 'distribution', 'proposal', 'script', 'do', 'infrastructure'];

function longestWord(array) {
    let newArr = array  //copies original array
    for (let i = 0; i < newArr.length; i++) { //bubble sort descendent
        for (let j = 0; j < newArr.length - i - 1; j++) {
            if (newArr[j].length < newArr[j + 1].length) {
                let aux = newArr[j];
                newArr[j] = newArr[j + 1];
                newArr[j + 1] = aux;
            }
        }
    }
    return { //returns first element and its length
        word: newArr[0],
        characters: newArr[0].length
    }
}

function longestWordES6(array) {
    let newArr = array.toSorted((a, b) => { return b.length - a.length })
    return {
        word: newArr[0],
        characters: newArr[0].length
    };
}

console.log(longestWord(words));
console.log(longestWordES6(words));