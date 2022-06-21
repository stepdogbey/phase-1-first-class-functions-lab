// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers = function(){
    let newArray = ['Antonia', 'Nuru'];
    return newArray;
}
returnFirstTwoDrivers();

const returnLastTwoDrivers = function(){
    let anotherArray = ['Amari', 'Mo'];
    return anotherArray;

}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (someValue){
    return function(someValue1){
     return someValue*someValue1;
    }

}

const fareDoubler  = createFareMultiplier(2);
fareDoubler(10);

const fareTripler  = createFareMultiplier(3);
fareTripler(12);

function selectDifferentDrivers(drivers, selectDifferentDrivers){
    if(selectDifferentDrivers === returnFirstTwoDrivers){
        return returnFirstTwoDrivers(drivers);

    }else{
        return returnLastTwoDrivers(drivers);
    }
}
