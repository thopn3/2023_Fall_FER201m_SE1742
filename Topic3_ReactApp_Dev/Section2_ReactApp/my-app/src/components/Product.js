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

function ProductList({data=[]}){
    return (
        <div className="container">
            {
                data.map(({id, name, price, image})=>(
                    <Product id={id} name={name} price={price} image={image}/>
                ))
            }
        </div>
    )
}

export default ProductList
