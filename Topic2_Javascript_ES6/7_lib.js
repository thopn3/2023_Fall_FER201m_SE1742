let message = "Javascript ES6"

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

export default function getData(){
    // ....
}

export {
    message,
    data
}