// #1. Phạm vi khai báo và sử dụng các biến
// var:
// for(var i =1; i<5; i++){
//     console.log("Inside block: " + i)
// }
// console.log("Outside block: " + i)

// let:
// for(let i =1; i<5; i++){
//     console.log("Inside block: " + i)
// }
// console.log("Outside block: " + i)
// => Từ khóa let dùng khai báo biến -> biến đó chỉ có phạm vi trong khối được khai báo -> BLOCK SCOPE

// #2. Hạn chế nhầm lẫn với thuộc tính của window
// var ten = "SE1742"
// console.log("Class name: " + window.ten);

// let ten1 = "SE1742"
// console.log(window.ten1);

// #3. Tránh việc khai báo lại (redeclaretion) các biến (primative, array, object)
// var x = 10
// var x
// console.log(x);

// Dùng let để khai báo: array, object
let numbers = [1,2,3, "Hello", true, 3.5]
numbers.push(20)

// Anonymous object -> Initialize object
let student = {
    id: 1,
    name: "David",
    age: 20
} // Javascript object (not JSON object)
student.name = 'David Beckham'

console.log(numbers);
console.log(student);

