function shuffle(array, times) {
    let newArray = Array.from(array);
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
const teams = ['Tigres', 'Toluca', 'America', 'Rayados', 'Atlas', 'Santos', 'Chivas', 'San Luis'];
const people = ['Kevin', 'Jony', 'Oscar', 'Chan', 'Core', 'Yona', 'Edgar', 'Antonio'];

function raffle(teams, people) {
    let list = [];
    const teamsShuffled = shuffle(teams, 3);
    const peopleShuffled = shuffle(people, 3);
    peopleShuffled.forEach((person, index) => {
        let assignation = {
            participante: person,
            equipo: teamsShuffled[index]
        }
        list.push(assignation);
    });
    return list;
}

console.log(raffle(teams, people));