/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";
import { ClipLoader } from "react-spinners";

const Home = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      setLoading(true);
      const resp = await axios.get(`https://fakestoreapi.in/api/products`);
      setProducts(resp?.data?.products ?? []);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen pt-[10rem]">
        <ClipLoader color="green" />
      </div>
    );
  }

  return (
    <>
      {products?.length > 0 ? (
        <div className=" p-3 md:p-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center h-screen pt-[10rem]">
          No Data Found...
        </div>
      )}
    </>
  );
};

export default Home;
