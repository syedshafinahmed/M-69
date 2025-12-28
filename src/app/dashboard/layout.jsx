import Link from 'next/link';
import React from 'react';

const DashboardLayout = ({ children }) => {
  return (
    <div className='grid grid-cols-12 gap-5 min-h-screen p-5'>
      <div className='col-span-2 border-r'>
        <h2>Navigation</h2>
        <div className='flex flex-col gap-5 mt-5'>
          <Link href="/dashboard/my-profile">My Profile</Link>
          <Link href="/dashboard/add-story">Add Story</Link>
          <Link href="/dashboard/settings">Settings</Link>
        </div>
      </div>
      <div className='col-span-9 p-5'>{children}</div>
    </div>
  );
};

export default DashboardLayout;