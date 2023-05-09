function shuffle(array, times) {
    for (let i = 1; i <= times; i++) {
        let currentIndex = array.length, randomIndex;
        while (currentIndex != 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }
    }
    return array;
}
let teams = ['Tigres', 'Toluca', 'America', 'Rayados', 'Atlas', 'Santos', 'Chivas', 'San Luis'];
let people = ['Kevin', 'Jony', 'Oscar', 'Chan', 'Core', 'Yona', 'Edgar', 'Antonio'];
shuffle(people, 3);
shuffle(teams, 3);
let list = [];

function raffle(person, index) {
    let assignation = {
        participante: person,
        equipo: teams[index]
    }
    list.push(assignation);
}

people.forEach((person, index) => raffle(person, index));
console.log(list[0].participante);