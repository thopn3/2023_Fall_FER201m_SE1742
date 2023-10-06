import ProductList from "./components/Product";

function App() {
  // Call API -> return list of products
  // Fake data:
  const products = [
    {'id': 'P001', 'name': 'Product 1', 'price': 10, 'image': '/assets/images/1.png', 'cat_id': 1},
    {'id': 'P002', 'name': 'Product 2', 'price': 20, 'image': '/assets/images/2.png', 'cat_id': 1},
    {'id': 'P003', 'name': 'Product 3', 'price': 15, 'image': '/assets/images/3.png', 'cat_id': 2},
    {'id': 'P004', 'name': 'Product 4', 'price': 20, 'image': '/assets/images/4.png', 'cat_id': 2},
    {'id': 'P005', 'name': 'Product 5', 'price': 15, 'image': '/assets/images/5.png', 'cat_id': 3}
  ]

  // Fake category data: (id, name)


  return (
    <div>
      <h1>Welcome to React app</h1>
      {/* <Product name='Product 123' price='100' image='p1.png'/> */}
      <ProductList data={products} name=''/> 
      {/* Property: {data, name} */}
    </div>
  );
}

export default App;
