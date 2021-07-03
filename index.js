// Write your solution in this file!
const driver = {
  name: 'Marvin',
  address: '111 Main St',
  car: 'Honda'
}

function updateDriverWithKeyAndValue(obj, key, value){
  const newObj = {...obj };
  newObj.address = value;
  return newObj
}
function destructivelyUpdateDriverWithKeyAndValue(driver, address, value){
  driver.address = value;
  return driver
}

function deleteFromDriverByKey(obj, key){
  const newObj = {...obj };
  delete newObj.name;
  return newObj
}

function destructivelyDeleteFromDriverByKey(driver, key){
  delete driver.name
  return driver
}
