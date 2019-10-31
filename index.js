// Write your solution in this file!
var driver = {}
function updateDriverWithKeyAndValue(driver, key, value){
  var obj = {...driver}
  obj[key] = value
  return obj
}
function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  driver[key] = value
  return driver
}
function deleteFromDriverByKey(driver, key){
  var obj = {...driver}
  delete obj[key]
  return obj
}
function destructivelyDeleteFromDriverByKey(driver, key){
  delete driver[key]
  return driver
}
