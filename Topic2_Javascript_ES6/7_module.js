import getData, {message, data} from './7_lib.js'

// Dùng đối tượng document của DOM tạo ra 1 element 'h1'
const h1Element = document.createElement('h1')
// Thiet lap thuoc tinh cho h1Element
h1Element.id = 'heading1'
h1Element.className = 'clsHeading1'
h1Element.textContent = message

// Bổ sung h1Element vào body của tren web
document.body.appendChild(h1Element)