/* 
    TODO: Spread Operation ...
    ? [name] : value, [] using this we update the value
        * when use name : value, it recognize it as new parameter
*/

//! Adding
let fruits = ["apples", "oranges", "mango"]

let arr = ['mango 🥭',...fruits, 'graphes 🍇']
console.log(arr)

console.log([...arr, ...fruits])

//! Destructring level1
let [name, ...remaining] = fruits
console.log(name)
console.log(remaining)

//! Destructring level2
let data = {
    name : 'vishal',
    age : '20'
}
let newBioData = {
    email : 'yadav11adu@gmail.com',
    ...data,
    dream : 'Millionare 💸'
}
console.log(newBioData)

//! Destructring level3
let company = {
    name : 'tata',
    year : '100'
}
let field = 'year'
let newCompany = {
    ...company,
    [field] : '101'
}
console.log(company)
console.log(newCompany)