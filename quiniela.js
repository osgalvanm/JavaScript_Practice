function shuffle(array, times) {
    for(let i=1;i<=times;i++){
    let currentIndex = array.length, randomIndex;
        while (currentIndex != 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }
    }
    return array;
}

function pairCountries(countries){
    let countriesPairs = [];
    for(let i=0;i<countries.length;i+=2){
        let pair = {country1: countries[i], country2: countries[i+1]};
        countriesPairs.push(Object.values(pair));
    }
    return countriesPairs;
}

function raffle(person, index){
    let countriesPairs = pairCountries(countries);
    let r = new assignation(person, countriesPairs[index]);
    list[index]=r;
}

class assignation{
    constructor(name, assignedCountries){
        this.name=name;
        this.countries = assignedCountries;
    }
}

let countries = ['Corea', 'Japón', 'España', 'Marruecos', 'Croacia', 'Argentina', 'Polonia',
    'Francia', 'Australia', 'USA', 'Holanda', 'Inglaterra', 'Senegal', 'Portugal', 'Suiza', 'Brasil'];

let people = ['Kevin', 'Jony', 'Edgar', 'Oscar', 'Yona', 'Chan', 'Core', 'Limones'];

let list = [];

shuffle(people, 3);
shuffle(countries, 3);

people.forEach((name,index) => raffle(name, index));
console.log(list);