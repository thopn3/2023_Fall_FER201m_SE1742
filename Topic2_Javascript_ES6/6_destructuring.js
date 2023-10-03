// Object destructuring
const user = {
    'fName' : 'Hoang',
    'lName' : 'Nguyen Ngoc',
    'age' : 20,
    'password' : '12345'
}

// PP1: Sử dụng tên của các thuộc tính để làm thuộc tính cho đối tượng mới
// const {fName, lName} = user
// console.log(fName + ' ' + lName);

// PP2: Đổi tên các thuộc tính thành tên mới
const {fName:f, lName: l} = user
console.log(f + ' ' + l);

// Ngoài ra: Có thể bổ sung các thuộc tính mới cho đối tượng cần định nghĩa
const {fName, lName, age, married=true} = user
const newUser = {fName, lName, age, married}
console.log(newUser);


// Array destructuring
const data = [
    {
        'students': [
            {'id':1, 'name': 'Nam', 'age':20, 'class_id': 1, 'course_code':1},
            {'id':2, 'name': 'Duc', 'age':19, 'class_id': 1, 'course_code':2},
            {'id':3, 'name': 'Binh', 'age':21, 'class_id': 2, 'course_code':1}
        ]
    },
    {
        'classes': [
            {'id':1, 'name': 'SE1742'},
            {'id':2, 'name': 'SE1743'},
            {'id':3, 'name': 'SE1744'}
        ]
    },
    {
        'courses': [
            {'id':1, 'name': 'FER201', 'credit': 3},
            {'id':2, 'name': 'SDN301', 'credit': 3}
        ]
    }
]

const [stuList, clsList, couList] = data
console.log(stuList);
console.log(clsList);
console.log(couList);

console.log("List of Students:");
// Phân rã đối tượng để làm việc
const {students} = stuList
for (const s of students) {
    console.log(`${s.id}, ${s.name}, ${s.age}, ${s.class_id}, ${s.course_code}`);
}

console.log("List of Classes:");

console.log("List of Courses:");