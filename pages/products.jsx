import Head from "next/head";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import React from "react";
import ProductMap from "../mapData/productMap";
import { product } from "../data/data";

const Product = () => {

    const [data, setData] = useState(product)

    const productElements = data.map(item => (

        <ProductMap
            img={item.img}
            name={item.name}
            title={item.title}
            date={item.date}
            like={item.isFavourite}
            key={item.id}
            id = {item.id}
        />
    ))

    return (
        <>
            <Head>
                <title>My Portfolio | Products</title>
                <meta name="keywords" content="ninjas" />
            </Head>
            <div className="product">
                <div className={styles.container}>
                    <h1 className={styles.head}>Products</h1>
                    <div className="product-elements">
                        {productElements}
                    </div>
                </div>
            </div>

        </>
    );
}

export default Product;