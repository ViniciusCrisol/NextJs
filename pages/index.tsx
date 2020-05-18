import React from 'react';
import Stripe from 'stripe';
import Link from 'next/link';
import { GetStaticProps } from 'next';

import stripeConfig from '../config/stripe';

interface Props {
  skus: Stripe.Sku[];
}

export const getStaticProps: GetStaticProps = async () => {
  const stripe = new Stripe(stripeConfig.secretKey, {
    apiVersion: '2020-03-02',
  });

  const skus = await stripe.skus.list();

  return {
    props: {
      skus: skus.data,
    },
  };
};

const HomePage: React.FC<Props> = ({ skus }) => {
  return (
    <>
      <h1>Store</h1>
      {skus.map((sku) => (
        <div key={sku.id}>
          <h1>{sku.attributes.name}</h1>
          {sku.image && <img src={sku.image} alt={sku.attributes.name} />}
          <h2>
            {Number(sku.price / 100).toFixed(2)} {sku.currency.toUpperCase()}
          </h2>

          <Link href={sku.id}>
            <a>Buy</a>
          </Link>
          <hr />
        </div>
      ))}
    </>
  );
};

export default HomePage;
