import Image from 'next/image';
import Link from 'next/link';
import pocketBase from 'pocketbase';
import React from 'react';
import styles from '../notes/Note.module.css';

export const dynamic = 'auto',
  dynamicParams = true,
  revalidate = 0,
  fetchCache = 'auto',
  runtime = 'nodejs',
  preferredRegion = 'auto';

async function getProducts() {
  const db = new pocketBase('http://127.0.0.1:8090');
  const data = await db.records.getList('products');

  return data?.items as any[];
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <>
      <h2>Products</h2>
      <div className={styles.grid}>
        {products?.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
      </div>
    </>
  );
}

function Product({ product }: any) {
  const { id, name, naeringsinnhold, ingredienser, created, photo, photoUrl } =
    product || {};
  console.log(photo);
  return (
    <Link href={`/product/${id}`}>
      <div className={styles.note}>
        <Image
          src={`http://localhost:8090/api/files/gmlwdvsbumgn9no/${id}/${photo}`}
          alt={name}
          width={182}
          height={182}
        />
        <h2>{name}</h2>
        <h4>Ingredienser:</h4>
        <h5>{ingredienser}</h5>
        <h4>Naeringsinnhold:</h4>
        <h6>{naeringsinnhold}</h6>
        <p>{created}</p>
      </div>
    </Link>
  );
}
