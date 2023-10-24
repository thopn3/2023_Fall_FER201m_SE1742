import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Alert } from 'react-bootstrap';


export default function ProductPost(){
    const [categories, setCategories] = useState([]);
    const [pName, setPName] = useState('');
    const [pPrice, setPPrice] = useState(0);
    const [categoryId, setCategoryId] = useState(1);
    const [message, setMessage] = useState('');

    useEffect(()=>{
        axios.get("http://localhost:9999/categories")
            .then(res => setCategories(res.data))
            .catch(err=>console.log(err))
    }, []);

    const handleSubmit = e => {
        e.preventDefault();

        axios.post("http://localhost:9999/products", {
            name: pName,
            price: parseInt(pPrice),
            catId: parseInt(categoryId)
        }).then(res=>{
            if(res.status == 201)
                setMessage("Created success.")
        }).catch(err => console.log(err))
    }

    return (
        <div>
            <h2>Create a new Products</h2>
            <p><Link to={'/products'} className='btn btn-danger'>Back to Products list</Link></p>
            { message.length > 0 && <Alert variant='success'>{message}</Alert>}
            <form onSubmit={e=>handleSubmit(e)}>
                <label>ID</label>
                <input disabled/> <br></br>
                <label>Name</label>
                <input onChange={e=>setPName(e.target.value)}/> <br></br>
                <label>Price</label>
                <input  onChange={e=>setPPrice(e.target.value)}/> <br></br>
                <label>Category</label>
                <select onChange={e=>setCategoryId(e.target.value)}>
                    <option key={0} value={0}>-- Select a category --</option>
                    {
                        categories.map(c=>(
                            <option key={c.id} value={c.id}>{c.name}</option>
                        ))
                    }
                </select> <br></br>
                <input type='submit' value='Create'/>
            </form>
        </div>
    )
}