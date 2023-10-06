import ProductList from "./components/Product";

function App() {
  // Call API -> return list of products
  // Fake data:
  const products = [
    {'id': 'P001', 'name': 'Product 1', 'price': 10, 'image': '/assets/images/1.png'},
    {'id': 'P002', 'name': 'Product 2', 'price': 20, 'image': '/assets/images/2.png'},
    {'id': 'P003', 'name': 'Product 3', 'price': 15, 'image': '/assets/images/3.png'}
  ]

  return (
    <div>
      <h1>Welcome to React app</h1>
      {/* <Product name='Product 123' price='100' image='p1.png'/> */}
      <ProductList data={products}/>
    </div>
  );
}

export default App;
