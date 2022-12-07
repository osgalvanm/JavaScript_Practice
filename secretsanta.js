function shuffle(array, times) {
    let newArray = array.map(element=>(element))
    for (let i = 1; i <= times; i++) {
        let currentIndex = newArray.length, randomIndex;
        while (currentIndex != 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [newArray[currentIndex], newArray[randomIndex]] = [newArray[randomIndex], newArray[currentIndex]];
        }
    }
    return newArray;
}
let friends = [
    {
        name: 'Kevin',
        cel: "+5218134531069",
        giftTo: ""
    },
    {
        name: 'Jony',
        cel: "+5218129425550",
        giftTo: ""
    },
    {
        name: 'Edgar',
        cel: "+5218186003792",
        giftTo: ""
    },
    {
        name: 'Oscar',
        cel: "+5218127554557",
        giftTo: ""
    },
    {
        name: 'Yona',
        cel: "+5218114664197",
        giftTo: ""
    },
    {
        name: 'Chan',
        cel: "+5218117002889",
        giftTo: ""
    },
    {
        name: 'Core',
        cel: "+5218281028562",
        giftTo: ""
    },
    {
        name: 'Limones',
        cel: "+5218119870203",
        giftTo: ""
    },
    {
        name: 'Eli',
        cel: "+5218113961211",
        giftTo: ""
    },
    {
        name: 'Antonio',
        cel: "+5218118020155",
        giftTo: ""
    },
    {
        name: 'Ian',
        cel: "+5218133810718",
        giftTo: ""
    },
];
let friends2=shuffle(friends,1);
for(let i=0;i<friends.length;i++){
    if(friends[i]!=friends2[0]){
        friends[i].giftTo=friends2[0].name;
        friends2.shift();
    }
    friends2=shuffle(friends2,1);
}
console.log(friends);