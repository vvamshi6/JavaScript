/**
* FileName:checkEquality.js
* CreatedBy: Vamsee
* Date :27-08-2016
* Purpose : checking equality of two objects
*/
/**
function to checkObjects
*@param {Object} obj1 - Object created will be passed here to
*@param {Object} obj2 - Object created will be passed here
*@return {Boolean} trueorfalse - Based On Checking
*/
function checkObjects(obj1, obj2) {
    if (obj1 === obj2) {
        return true;
    } else {
        return false;
    }
}
/*creating Object literals*/
var obj1 = {
    name: "vamshi"
};
var obj2 = {
    name: "vamshi"
};
/*checking the function*/
console.log(checkObjects(obj1, obj2));
obj2 = obj1;
console.log(checkObjects(obj1, obj2));
