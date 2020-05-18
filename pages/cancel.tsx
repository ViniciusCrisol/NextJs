import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const CancelPage: React.FC = () => {
  const {
    query: { itemName },
  } = useRouter();

  return;
  <>
    <h1>Canceled</h1>

    <Link href='/'>Go back</Link>
  </>;
};

export default CancelPage;
