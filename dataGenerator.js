let carMake = ['volvo', 'BMW', 'Mercedes', 'AUDI', 'Reanault', 'VW', 'Honda'];
let carColor = ['red', 'blue', 'silver', 'green', 'yellow', 'black', 'white'];
let carOwnerAgeGroup = ['18-29' ,'30-49' ,'50-69' ,'70-89' ,'89+'];

let finishedDataCarOwnership = [];

const retrivingData = () => {
 const rand1 = Math.floor(Math.random() * carMake.length);
 const rand2 = Math.floor(Math.random() * carColor.length);
 const rand3 = Math.floor(Math.random() * carOwnerAgeGroup.length); 
 let randData = [carMake[rand1], carColor[rand2], carOwnerAgeGroup[rand3]];
 finishedDataCarOwnership.push(randData);
}

const creatingRandomData = () => {
    for (let x = 0; x <= 1000; x ++ ) {
        retrivingData() }
}

creatingRandomData();

console.log(finishedDataCarOwnership);

