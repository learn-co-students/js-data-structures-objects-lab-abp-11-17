// Write your solution in this file!
const driver = {name:'Sam'}

function updateDriverWithKeyAndValue(driver, key, value){
  const newObj = {...driver};
  newObj[key] = value;
  return newObj;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  driver[key] = value;
  return driver
}

function deleteFromDriverByKey(driver, key){
  const newObj = {...driver};
  return delete newObj.key;
}

function destructivelyDeleteFromdriverByKey(driver, key){
  delete driver[key];
  return driver;
}
