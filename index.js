// Write your solution in this file!
const driver = {};
function updateDriverWithKeyAndValue(obj, key, value) {
  const newDriver = {...obj};
  newDriver[key] = value;
  return newDriver
}
updateDriverWithKeyAndValue(driver, 'name', 'Sam');

function destructivelyUpdateDriverWithKeyAndValue(obj,key,value){
  obj[key]=value;
  return obj;
}
destructivelyUpdateDriverWithKeyAndValue(driver, 'name', 'Sam');
destructivelyUpdateDriverWithKeyAndValue(driver, 'Address', '12 Broadway');


function deleteFromDriverByKey(driver, name) {
const driverClone =  Object.assign({}, driver);
delete driverClone.name;
return driverClone;
}

function destructivelyDeleteFromDriverByKey(driver, key){
  delete driver.name;
  return driver;
}
