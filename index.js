// Write your solution in this file!
let driver={}

function updateDriverWithKeyAndValue (obj, key, value){
  return Object.assign({}, obj, {[key]:value});
}

function destructivelyUpdateDriverWithKeyAndValue (obj, key, value){
  return Object.assign(obj, {[key]:value});
}

function deleteFromDriverByKey (obj, key, value) {
  const newobj = {...obj}
  newobj[key] = value
  return newobj
}

function destructivelyDeleteFromDriverByKey (obj, key, value) {
  obj[key] = value
  return obj
}
