const data = {
    fLastName: 'gonzalez',
    sLastName: 'NAJERA',
    name: 'Erique',
    birthDate: {
        year: '1998',
        month: '05',
        day: '11'
    },
    state: 'quintana roo',
    sex: 'no binario'
};

function validateData(info) {
    let infoCopy = structuredClone(info)
    const states = {
        "AGUASCALIENTES": "AS",
        "BAJA CALIFORNIA": "BC",
        "BAJA CALIFORNIA SUR": "BS",
        "CAMPECHE": "CC",
        "CHIAPAS": "CS",
        "CHIHUAHUA": "CH",
        "COAHUILA": "CL",
        "COLIMA": "CM",
        "DISTRITO FEDERAL": "DF",
        "DURANGO": "DG",
        "GUANAJUATO": "GT",
        "GUERRERO": "GR",
        "HIDALGO": "HG",
        "JALISCO": "JC",
        "MEXICO": "MC",
        "MICHOACAN": "MN",
        "MORELOS": "MS",
        "NAYARIT": "NT",
        "NUEVO LEON": "NL",
        "OAXACA": "OC",
        "PUEBLA": "PL",
        "QUERETARO": "QT",
        "QUINTANA ROO": "QR",
        "SAN LUIS POTOSI": "SP",
        "SINALOA": "SL",
        "SONORA": "SR",
        "TABASCO": "TC",
        "TAMAULIPAS": "TS",
        "TLAXCALA": "TL",
        "VERACRUZ": "VZ",
        "YUCATAN": "YN",
        "ZACATECAS": "ZS",
    }
    const sex = {
        "HOMBRE": 'H',
        "MUJER": 'M',
        "NO BINARIO": 'X'
    }
    let currentState = info.state.toUpperCase();
    infoCopy.state = states[currentState];

    let currentSex = info.sex.toUpperCase();
    infoCopy.sex = sex[currentSex];
    infoCopy.fLastName = infoCopy.fLastName.toUpperCase();
    infoCopy.sLastName = infoCopy.sLastName.toUpperCase();
    infoCopy.name = infoCopy.name.toUpperCase();
    infoCopy.sex = infoCopy.sex.toUpperCase();
    return infoCopy;
}

let data2 = validateData(data);

function getCurp(info) {
    const { fLastName, sLastName, name, birthDate, state, sex } = info

    const curpName = (() => {
        const bannedWords = ['BACA', 'BAKA', 'BUEI', 'BUEY', 'CACA', 'CACO', 'CAGA', 'CAGO', 'CAKA', 'CAKO', 'COGE', 'COGI', 'COJA', 'COJE', 'COJI', 'COJO', 'COLA', 'CULO', 'FALO', 'FETO', 'GETA', 'GUEI', 'GUEY', 'JETA', 'JOTO', 'KACA', 'KACO', 'KAGA', 'KAGO', 'KAKA', 'KAKO', 'KOGE', 'KOGI', 'KOJA', 'KOJE', 'KOJI', 'KOJO', 'KOLA', 'KULO', 'LILO', 'LOCA', 'LOCO', 'LOKA', 'LOKO', 'MAME', 'MAMO', 'MEAR', 'MEAS', 'MEON', 'MIAR', 'MION', 'MOCO', 'MOKO', 'MULA', 'MULO', 'NACA', 'NACO', 'PEDA', 'PEDO', 'PENE', 'PIPI', 'PITO', 'POPO', 'PUTA', 'PUTO', 'QULO', 'RATA', 'ROBA', 'ROBE', 'ROBO', 'RUIN', 'SENO', 'TETA', 'VACA', 'VAGA', 'VAGO', 'VAKA', 'VUEI', 'VUEY', 'WUEI', 'WUEY'];
        let firstLetter = fLastName[0] === 'Ñ' ? 'X' : fLastName[0];
        let secondLetter = (() => {
            let aux = fLastName.slice(1);
            return aux[aux.search(/[AEIOU]/g)];
        })() ?? 'X';
        let thirdLetter = sLastName[0] ?? 'X';
        let fourthLetter = name[0] === 'Ñ' ? 'X' : name[0];
        let nameConcat = firstLetter + secondLetter + thirdLetter + fourthLetter;
        if (bannedWords.includes(nameConcat)) {
            nameConcat = nameConcat[0] + 'X' + nameConcat.substring(2);
        }
        return nameConcat;
    })();

    const curpBirthdate = (() => {
        let year = birthDate.year.substring(2);
        let month = birthDate.month;
        let day = birthDate.day;
        return year + month + day;
    })();

    const curpSufix = (() => {
        function firstInternalConsonant(word) {
            let aux = word.slice(1);
            return aux[aux.search(/[BCDFGHJKLMNPQRSTVWXYZ]/g)]
        }
        let firstLetter = firstInternalConsonant(fLastName) ?? 'X';
        let secondLetter = firstInternalConsonant(sLastName) ?? 'X';
        let thirdLetter = firstInternalConsonant(name) ?? 'X';

        let homoclave = (() => {
            let randomNumber = Math.floor(Math.random() * 100)
            if (randomNumber < 10) {
                randomNumber = '0' + randomNumber;
            }
            return randomNumber;
        })();
        return sex[0] + state + firstLetter + secondLetter + thirdLetter + homoclave;
    })();

    return curpName + curpBirthdate + curpSufix;
}

let myCurp = getCurp(data2);
console.log(myCurp);