import Link from 'next/link';
import React from 'react';

const ErrorPage = () => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center space-y-5'>
      <h1 className='text-5xl font-bold'>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link href="/"><button className='bg-black dark:bg-white text-white dark:text-black px-4 py-2 rounded'>Go Home</button></Link>
    </div>
  );
};

export default ErrorPage;