const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
};

const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(-2)
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (integer) {
  return function (integer) {
    return integer * integer;
  };
};

const fareDoubler = function(createFareMultiplier()) {
  return function fareDoubler(num) {
    return num * 2;
  };
};
