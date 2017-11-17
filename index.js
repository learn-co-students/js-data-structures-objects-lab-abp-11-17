let driver = {};

function updateDriverWithKeyAndValue(driverObject, key, value){
  return Object.assign({}, driverObject, {[key]:value})
}

function destructivelyUpdateDriverWithKeyAndValue(driverObject, key, value){
  driverObject[key] = value;
  return driverObject
}

function deleteFromDriverByKey(driverObject, key){
  let driverHolder = Object.assign({}, driverObject);
  delete driverHolder[key]
  return driverHolder
}

function destructivelyDeleteFromDriverByKey(driverObject, key){
  delete driverObject[key];
  return driverObject
}
