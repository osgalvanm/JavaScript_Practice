function atExample() {
    const btsMembers = ['rm', 'jin', 'suga', 'j-hope', 'jimin', 'v', 'jungkook'];
    let leader = btsMembers.at(0);
    console.log(leader);
    let mainVocalist = btsMembers.at(-1);
    console.log(mainVocalist);
}

function concatExample() {
    const oneThird = ['heejin', 'hyunjin', 'haseul', 'yeojin', 'vivi'];
    const oddEyeCircle = ['kim lip', 'jinsoul', 'choerry'];
    const yyxy = ['yves', 'chuu', 'gowon', 'olivia hye'];
    const loona = oneThird.concat(oddEyeCircle, yyxy);
    console.log(loona);
}

function copyWithinExample() {
    const array1 = [0, 1, 2, 3, 4];
    const array2 = [0, 1, 2, 3, 4];
    const array3 = [0, 1, 2, 3, 4];
    console.log(array1.copyWithin(1));
    console.log(array2.copyWithin(2, 3));
    console.log(array3.copyWithin(2, 3, 4));
}

function entriesExample() {
    const soloists = ['sunmi', 'iu', 'taeyeon', 'somi', 'uju'];
    const iterator = soloists.entries();
    console.log(iterator.next().value);
    console.log(iterator.next().value);
    console.log(iterator.next().value);
}

function isOddNumber(element) {
    if (element % 2 != 0) {
        return true;
    } else {
        return false;
    }
}

function everyExample() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const numbers2 = [1, 3, 5, 7, 9, 11, 13, 15, 17];
    console.log(numbers.every(element => { return element % 2 != 0 ? true : false }));
    console.log(numbers2.every(element => { return element % 2 != 0 ? true : false }));
}

function fillExample() {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    console.log(array.fill(0));
    console.log(array.fill(1, 3));
    console.log(array.fill(2, 5, 7));
}

function filterExample() {
    const idols = ['seulgi', 'chaeyoung', 'gowon', 'chaeryeong', 'chaewon'];
    const chaes = idols.filter(idol => idol.includes('chae'));
    console.log(chaes);
}


function findExample() {
    const idols = ['haewon', 'hyeju', 'soyeon', 'jimin', 'miyeon', 'gaeul'];
    const found = idols.find(idol => idol.includes('yeon'));
    console.log(found);
}

function findIndexExample() {
    const idols = ['haewon', 'hyeju', 'soyeon', 'jimin', 'miyeon', 'gaeul'];
    const found = idols.findIndex(idol => idol.includes('yeon'));
    console.log(found);
}


function findLastExample() {
    const idols = ['haewon', 'hyeju', 'soyeon', 'jimin', 'miyeon', 'gaeul'];
    const found = idols.findLast(idol => idol.includes('yeon'));
    console.log(found);
}


function foundExample() {
    const idols = ['haewon', 'hyeju', 'soyeon', 'jimin', 'miyeon', 'gaeul'];
    const found = idols.findLastIndex(idol => idol.includes('yeon'));
    console.log(found);
}


function flatExample() {
    const array1 = [1, 2, [3, 4, 5], 6, 7];
    const array2 = [1, 2, [[[3, 4, 5], 6, 7], 8, 9]];
    console.log(array1.flat());
    console.log(array2.flat(2));
}

function flatMapExample() {
    const arr1 = ["BTS paved", "", "the way"];
    console.log(arr1.map((x) => x.split(" ")));
    console.log(arr1.flatMap((x) => x.split(" ")));
}

function forEachExample() {
    const jLine = ['momo', 'sana', 'mina'];
    jLine.forEach(idol => console.log(idol + " jjang"));
}

function fromExample() {
    const arr1 = Array.from("aespa");
    console.log(arr1);
    console.log(Array.from(arr1, letter => letter.toUpperCase()));
}

function includesExample() {
    const maknaes = ['hyein', 'eunchae', 'leeseo', 'kyujin', 'cocona'];
    console.log(maknaes.includes('kyujin'));
    console.log(maknaes.includes('sakura'));
}

function indexOfExample() {
    const groups = ['newjeans', 'ive', 'le sserafim', 'nmixx'];
    console.log(groups.indexOf('newjeans'));
    console.log(groups.indexOf('le sserafim', 3));
    console.log(groups.indexOf('le sserafim', 1));
    console.log(groups.indexOf('shiro'));
}

function isArrayExample() {
    console.log(Array.isArray([1, 2, 3, 4]));
    console.log(Array.isArray('twice'));
    console.log(Array.isArray('[]'));
    console.log(Array.isArray(new Array(5)));
}

function joinExample() {
    const blackpink = ['jisoo', 'jennie', 'lisa', 'rose'];
    console.log(blackpink.join());
    console.log(blackpink.join(''));
    console.log(blackpink.join(' '));
    console.log(blackpink.join('-'));
}

function keysExample() {
    const idols = ['yuna', 'winter', 'shuhua', 'onda'];
    const iterator = idols.keys();
    for (const key of iterator) {
        console.log(key);
    }
}

function lastIndexOfExample() {
    const groups = ['newjeans', 'ive', 'le sserafim', 'nmixx'];
    console.log(groups.lastIndexOf('newjeans'));
    console.log(groups.lastIndexOf('le sserafim', 3));
    console.log(groups.lastIndexOf('nmixx', 2));
    console.log(groups.lastIndexOf('shiro'));
}

function mapExample() {
    const numbers = [2, 3, 4, 5, 6];
    const numbersSquared = numbers.map(number => Math.pow(number, 2));
    console.log(numbersSquared);
}

function ofExample() {
    const array1 = Array.of(1, 'ae', true, NaN, undefined, { key: 'value' });
    console.log(array1);
}

function popExample() {
    const gidle = ['soyeon', 'yuqi', 'miyeon', 'shuhua', 'minnie', 'soojin'];
    console.log(gidle.pop());
    console.log(gidle);
}