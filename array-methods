const btsMembers = ['rm', 'jin', 'suga', 'j-hope', 'jimin', 'v', 'jungkook'];
let leader = btsMembers.at(0);
console.log(leader);

let mainVocalist = btsMembers.at(-1);
console.log(mainVocalist);


const oneThird = ['heejin', 'hyunjin', 'haseul', 'yeojin', 'vivi'];
const oddEyeCircle = ['kim lip', 'jinsoul', 'choerry'];
const yyxy = ['yves', 'chuu', 'gowon', 'olivia hye'];


const loona = oneThird.concat(oddEyeCircle, yyxy);
console.log(loona);





const array1 = [0, 1, 2, 3, 4];
const array2 = [0, 1, 2, 3, 4];
const array3 = [0, 1, 2, 3, 4];

console.log(array1.copyWithin(1));

console.log(array2.copyWithin(2, 3));

console.log(array3.copyWithin(2, 3, 4));



const soloists = ['sunmi', 'iu', 'taeyeon', 'somi', 'uju'];
const iterator = soloists.entries();
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
soloists.concat()


function isOddNumber(element) {
    if (element % 2 != 0) {
        return true;
    } else {
        return false;
    }
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbers2 = [1, 3, 5, 7, 9, 11, 13, 15, 17];
console.log(numbers.every(element => isOddNumber(element)));
console.log(numbers2.every(element => isOddNumber(element)));


const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(array.fill(0));
console.log(array.fill(1, 3));
console.log(array.fill(2, 5, 7));


{
    const idols = ['seulgi', 'chaeyoung', 'gowon', 'chaeryeong', 'chaewon'];
    const chaes = idols.filter(idol => idol.includes('chae'));
    console.log(chaes);
}


{
    const idols = ['haewon', 'hyeju', 'soyeon', 'jimin', 'miyeon', 'gaeul'];

    const found = idols.find(idol => idol.includes('yeon'));
    console.log(found);
}


{
    const idols = ['haewon', 'hyeju', 'soyeon', 'jimin', 'miyeon', 'gaeul'];

    const found = idols.findIndex(idol => idol.includes('yeon'));
    console.log(found);
}


{
    const idols = ['haewon', 'hyeju', 'soyeon', 'jimin', 'miyeon', 'gaeul'];

    const found = idols.findLast(idol => idol.includes('yeon'));
    console.log(found);
}


{
    const idols = ['haewon', 'hyeju', 'soyeon', 'jimin', 'miyeon', 'gaeul'];

    const found = idols.findLastIndex(idol => idol.includes('yeon'));
    console.log(found);
}


{
    const array1 = [1, 2, [3, 4, 5], 6, 7];
    const array2 = [1, 2, [[[3, 4, 5], 6, 7], 8, 9]];

    console.log(array1.flat());

    console.log(array2.flat(2));
}
