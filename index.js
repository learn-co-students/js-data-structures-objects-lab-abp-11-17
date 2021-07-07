// Write your solution in this file!
const driver={
  name: 'Sam',
  address: '11 Broadway'
}


function destructivelyDeleteFromDriverByKey(obj,key){
    delete obj[key];
    return obj;
}
function destructivelyUpdateDriverWithKeyAndValue(object,key,value){
  object[key]=value;
  return object;
}

function deleteFromDriverByKey(obj,key){
  let newthing={...obj}
  delete newthing[key];
  return newthing;
}
function updateDriverWithKeyAndValue(obj,key, value){
  let newthing={...obj};
  newthing[key]=value;
  return newthing;
}
