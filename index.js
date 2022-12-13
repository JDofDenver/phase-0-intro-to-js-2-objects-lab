const employee ={
    name: "Marcus",
    streetAddress: "4430 Shoshone",
}

function updateEmployeeWithKeyAndValue(object, key, value){
const newObject = {...employee}
newObject[key]=value;
return newObject;
}
function destructivelyUpdateEmployeeWithKeyAndValue(object,key,value){
object[key] = value;
return object;
}
function deleteFromEmployeeByKey(object,key,value){
    const nowObj = {...object}
    delete nowObj[key];
    return nowObj;
}
function  destructivelyDeleteFromEmployeeByKey(object, key, value){
    delete object[key];
    return object;

}