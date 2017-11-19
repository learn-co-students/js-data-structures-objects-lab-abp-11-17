// Write your solution in this file!
const driver = {}

function updateDriverWithKeyAndValue(obj ,key ,value){
  const newdriver = {...driver};
  newdriver[key] = value;
  return newdriver;
}

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value){
  obj[key] = value;
  return driver;
}
