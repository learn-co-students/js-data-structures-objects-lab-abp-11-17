// Write your solution in this file!
var driver ={}

function updateDriverWithKeyAndValue(object, key, value){
  var newObject = Object.assign({},object,{[key]:value})
  return newObject
}

function destructivelyUpdateDriverWithKeyAndValue(object, key, value){
  return Object.assign(object,{[key]:value})
}

function deleteFromDriverByKey(object, key){
  var newObject = Object.assign({}, object)
  delete newObject[key]
  return newObject
}

function destructivelyDeleteFromDriverByKey(object, key){
  delete object[key]
  return object
}
