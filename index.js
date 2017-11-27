// Write your solution in this file!
const driver = {
  //name: 'Sam',
  //address: '11 Broadway'

}

function updateDriverWithKeyAndValue(object, key, value){
 const newDriver = Object.assign({}, object)
 newDriver [key] = value;
return newDriver;
}

function destructivelyUpdateDriverWithKeyAndValue(object, key, value){
  object[key]= value;
  return object
}

function deleteFromDriverByKey(){
  newObj = {...driver};
  delete newObj.name;
  return newObj
}

function  destructivelyDeleteFromDriverByKey(object, key) {
  delete driver[key];
  return driver
}
