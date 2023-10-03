// 'const' keyword (constant) giống từ khóa let -> Phạm vi: Block scope
// Có thể sử dụng để khai báo các biến: Primative, array, object, maps, sets

const PI = 3.14
console.log(PI);

// Dùng let để khai báo: array, object
const numbers = [1,2,3, "Hello", true, 3.5]
numbers.push(20)

// Anonymous object -> Initialize object
const student = Object.freeze(
    {
        id: 1,
        name: "David",
        age: 20
    } // Javascript object (not JSON object)
)

student.name = 'David Beckham'

console.log(numbers);
console.log(student);