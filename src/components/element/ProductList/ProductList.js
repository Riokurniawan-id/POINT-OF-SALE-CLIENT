import React from "react";
import styles from "./index.module.css";
import Image from "next/image";

const ProductList = ({ products }) => {
  return (
    <div className={styles["product-list"]}>
      {products.map((product, index) => {
        return (
          <div key={index} className={styles["product-list__product-card"]}>
            <div className={styles["product-list__product-card__image"]}>
              <Image
                src={product.img_product}
                alt={product.name}
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className={styles["product-list__product-card__image__desc"]}>
              <p>{product.name}</p>
              <button>+</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
