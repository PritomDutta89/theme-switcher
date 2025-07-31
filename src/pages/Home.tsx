/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.in/api/products').then((res) => {
      setProducts(res?.data?.products || []);
    });
  }, []);

  return (
    <div className="pt-20 p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {products.map((product) => (
        <div key={product.id} className="bg-white dark:bg-gray-700 p-4 rounded shadow">
          <h2 className="font-bold">{product.title}</h2>
          <p>{product.description.slice(0, 100)}...</p>
          <button className="mt-2 p-2 bg-blue-500 text-white rounded">Buy</button>
        </div>
      ))}
    </div>
  );
};

export default Home;
