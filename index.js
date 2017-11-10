// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(driver, key, value){
  const copy = { ...driver};
  copy[key] = value;
  return copy;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  driver[key] = value;
  return driver;
}

function deleteFromDriverByKey(driver, key){
  const copy = { ...driver};
  return delete copy.key;
}

function destructivelyDeleteFromDriverByKey(driver, key){
  console.log(driver);
  console.log(key);
  delete driver.name;
  console.log(driver);

  return driver;
}
