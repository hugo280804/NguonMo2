import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://nguonmo2-1.onrender.com/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>🛒 Mini Shop</h1>

      {products.map(p => (
        <div key={p._id} style={{ border: "1px solid #ccc", margin: 10, padding: 10 }}>
          <h3>{p.name}</h3>
          <p>Giá: {p.price} đ</p>
        </div>
      ))}
    </div>
  );
}

export default App;
