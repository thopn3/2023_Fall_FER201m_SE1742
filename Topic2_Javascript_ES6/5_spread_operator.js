// Mục đích: Sử dụng toán tử spread để unpack các phần tử của 1 mảng -> Rải các phần tử đó 
// vào 1 vị trí nào đó trong mảng khác

// Ex1:
const a = [1,2,3]
const b = [4,5,6, ...a] // unpack a -> spread to b
const c = [...a, ...b]
console.log(b);
console.log(c); // [1,2,3,4,5,6,1,2,3]

// Ex1:
const users_origin = [
    {'id':1, 'name': 'Pham Tien Dung', 'age': 20},
    {'id':2, 'name': 'Tran Hong Van', 'age': 20},
    {'id':3, 'name': 'Hoang Tien Minh', 'age': 19},
    {'count': 3}
]

const users_current = [...users_origin, {'id':4, 'name':'Tran Hong Quang', 'age':18}]

console.log(users_current);

// Ex3: Rest param vs Spread operator
function getAllStudents(...data){
    console.log('List of students:');
    for (const u of data) {
        console.log(`${u.id}, ${u.fName}, ${u.lName}, ${(u.gender?'Male':'Female')}`);
    }
}

const students = [
    {'id': 1, 'fName': 'Tho', 'lName': 'Pham Ngoc', 'gender': true},
    {'id': 2, 'fName': 'Trang', 'lName': 'Nguyen Thu', 'gender': false},
    {'id': 3, 'fName': 'Huyen', 'lName': 'Hoang Thi', 'gender': false}
]

getAllStudents(...students)


