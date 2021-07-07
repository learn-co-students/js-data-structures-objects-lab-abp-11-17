// Write your solution in this file!
const driver = {

}

function updateDriverWithKeyAndValue(driver, key, value){
  return Object.assign({}, driver, {[key]:value});

}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  driver[key]=value;
  return driver;
}



function deleteFromDriverByKey(driver, key){
  let newdriver = deleteFromDriverByKey;
  delete newdriver.key;
  return Object.assign({}, newdriver);
}

function destructivelyDeleteFromDriverByKey(driver,key){

  return delete driver[key];
}
