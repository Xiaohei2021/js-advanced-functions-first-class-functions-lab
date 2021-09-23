// Code your solution in this file!
const returnFirstTwoDrivers = function(array){
    return array.slice(0,2)
};

const returnLastTwoDrivers =  function(array){
    return array.slice(-2)
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]



const createFareMultiplier = function(int){
    return multiplier => multiplier * int;
};

const fareDoubler = function(createFareMultiplier){
    return createFareMultiplier *2 
};

const fareTripler = function(createFareMultiplier){
    return createFareMultiplier *3 
};

function selectDifferentDrivers(array, returnFirstTwoDrivers)
{
    return returnFirstTwoDrivers(array);

}