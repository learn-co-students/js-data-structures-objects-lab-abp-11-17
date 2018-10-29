// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
	return Object.assign({}, driver, { [key]: value });
};

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
	return Object.assign(driver, { [key]: value });
};

function deleteFromDriverByKey(driver, key){
	const newObj = Object.assign({}, driver)
	return delete newObj[key]
}

function destructivelyDeleteFromDriverByKey(driver, key){
	return delete driver[key]
}

// const obj = { foo: "bar" };
 
// const newObj = Object.assign({}, obj);
 
// newObj;
// // => { foo: "bar" }
 
// delete newObj.foo;
// // => true
 
// newObj;
// // => {}
 
// obj;
// // => { foo: "bar" }