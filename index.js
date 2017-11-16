//driver
const driver = {};

//F1
function updateDriverWithKeyAndValue(driver, key, value){
  return Object.assign({}, driver, {[key]:value})
};

//F2
function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  driver[key] = value
  return driver
};

//F3
function deleteFromDriverByKey(driver, key) {
  newObj = Object.assign({}, driver)
  return delete newObj[key];
};

//F4
function destructivelyDeleteFromDriverByKey(driver, key){
  delete driver[key]
  return driver 
};
