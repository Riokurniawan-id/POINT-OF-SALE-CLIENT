import React, { useEffect, useState } from "react";
import Layout from "@/components/layouts/Layout";
import api from "./api";

export default function Home() {
  const [products, setProducts] = useState([]);

  const fetchProduct = async () => {
    const response = await api.get("/products");
    const data = await response.data.payload;
    setProducts(data);
    console.log(data);
  };

  useEffect(() => {
    fetchProduct();
  }, []);
  return (
    <>
      <Layout>
        <p>Home</p>
        {products.map((product, index) => {
          return <p key={index}>{product.name}</p>;
        })}
      </Layout>
    </>
  );
}
