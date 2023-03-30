/* 
    TODO: MAP in js map((value,index,array), thisvalue)
    ? map create new array
*/

let fruits = ["Apple", "Orange", "Plum"];

console.log(fruits)

let arr = fruits.map((value,ind,array)=>{
    console.log(value,ind,array)
    return value + "fruits"
})

console.log(arr,fruits)