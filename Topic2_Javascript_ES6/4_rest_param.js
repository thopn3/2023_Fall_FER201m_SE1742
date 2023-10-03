// Sử dụng tham số rest khi định nghĩa hàm -> Linh hoạt số lượng đối số truyền vào
function sumNumbers(a, b, ...arr){
    console.log(`${a}, ${b}`);
    console.log(arr);
}

sumNumbers(10, 5, "Hello", "World", 3.5) // a = 10, b = 5, arr = ["Hello", "World", 3.5]


function totalNumbers(...numbers){
    let total = 0;
    for (const item of numbers) { // read-only
        if(typeof item === "number")
            total += item
    }
    return total
}

console.log(totalNumbers(10,"true",30,"Hello")); // pack