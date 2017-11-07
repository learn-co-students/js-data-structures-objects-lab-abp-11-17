// Write your solution in this file!
var driver = {
  name: 'Sam',
  address: '11 Broadway'
}

function updateDriverWithKeyAndValue(driver,key,value) {
  return Object.assign({}, driver, { [key]: value });
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key]=value;
  return driver;
}

function deleteFromDriverByKey(driver, key) {
  //const newObj = Object.assign({}, driver);
  //return newObj;
}

destructivelyDeleteFromdriverByKey(driver, key) {

}
