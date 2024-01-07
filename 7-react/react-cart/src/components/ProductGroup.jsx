import React, { useEffect, useState } from "react";
import Container from "./Container";
import Product from "./Product";
import { productApi } from "../api/product";
import ProductLoader from "./ProductLoader";

const ProductGroup = () => {
  const [products, setProduct] = useState([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await productApi.get("/");
      // console.log(res.data);
      setProduct(res.data);
      setReady(true);
    };
    fetchProduct();
  }, []);

  return (
    <section className="product-list mb-10">
      <Container>
        <div
          id="productList"
          className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 "
        >
          {!ready && (
            <>

            <ProductLoader />
            <ProductLoader />
            <ProductLoader />
            <ProductLoader />
            <ProductLoader />
            <ProductLoader />
            
            </>
          )}

          {ready &&
            products.map((product) => (
              <Product key={product.id} product={product} />
            ))}
        </div>
      </Container>
    </section>
  );
};

export default ProductGroup;
