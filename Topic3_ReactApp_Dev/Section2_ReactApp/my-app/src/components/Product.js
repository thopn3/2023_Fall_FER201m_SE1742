// Functional component
function Product({id, name, price, image}){
    return (
        <div className='item'>
            <div className='image'>{image}</div>
            <div className='name'>{name}</div>
            <div className='price'>{price}</div>
        </div>
    )
}


