// Write your solution in this file!
const driver = {};
function updateDriverWithKeyAndValue(object,key,value){

 return Object.assign({}, driver, { [key]: value })
}
driver.name ='Sam';
updateObjectWithKeyAndValue(driver, 'address:', '11 Broadway');

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  driver[key]= value;
  return driver;
}

destructivelyUpdateObjectWithKeyAndValue(driver, 'address:', '12 Broadway');

function deleteFromDriverByKey(driver,key){
  let newObj = Object.assign({},driver);
  delete newObj[key];
  return newObj;
}
deleteFromDriverByKey(driver,'name');

function destructivelyDeleteFromDriverByKey(driver,key){
 return delete driver[key];
}
destructivelyDeleteFromDriverByKey(driver,'name');
