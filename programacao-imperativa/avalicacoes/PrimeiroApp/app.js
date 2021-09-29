const peopleList = require("./PeopleList.json");
const cinemaSurvey = require("./CinemaSurvey.json");

console.log("--------------- Exercício parte 1 ---------------");

function granderLesserHeigth(arrPeople) {
    let orderedByHeigth = arrPeople.sort((person1, person2) => person1.height - person2.height);
    return `Maior altura: ${orderedByHeigth[orderedByHeigth.length-1].height}\nMenor altura: ${orderedByHeigth[0].height}`;
}
console.log(granderLesserHeigth(peopleList));

function averageWomenHeigth(arrPeople) {
    const justWomen = arrPeople.filter((person) => person.gender == "F");
    const womanHeights = justWomen
                        .map((person) => person.height)
                        .reduce((acc, current) => acc + current);
    return (womanHeights / justWomen.length).toFixed(2);
}
console.log("Media total da altura das mulheres: " + averageWomenHeigth(peopleList));

function totalMan(arrPeople) {
    let totalMan = arrPeople.filter((person) => person.gender == "M").length;
    return totalMan;
}
console.log("Total de homens: " + totalMan(peopleList));

console.log("--------------- Exercício parte 2 ---------------");
function averageAgeGreatScore(arrPeople) {
    const greatScorePeople = arrPeople.filter((person) => person.score == 3);
    const totalAges = greatScorePeople
                        .map((person) => person.age)
                        .reduce((acc, current) => acc + current);
    return (totalAges / greatScorePeople.length);
}
console.log(`A média de idade das pessoas que responderam ótimo: ${averageAgeGreatScore(cinemaSurvey)}`);

function totalRegularScore(arrPeople) {
    return arrPeople.filter((person) => person.score == 1).length;
}
console.log("Quantidade de pessoas que responderam regular: " + totalRegularScore(cinemaSurvey));

function goodPercentScore(arrPeople) {
    const totalGoodScore = arrPeople.filter((person) => person.score == 2).length;
    return ((totalGoodScore / arrPeople.length) * 100).toFixed(2);
}
console.log("A porcentagem de pessoas que responderam bom é: " + goodPercentScore(cinemaSurvey) + "%");