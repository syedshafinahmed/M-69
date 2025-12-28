import NavLink from '@/components/NavLink';
import Link from 'next/link';
import React from 'react';

const DashboardLayout = ({ children }) => {
  return (
    <div className='grid grid-cols-12 gap-5 min-h-screen p-5'>
      <div className='col-span-2 border-r'>
        <Link href='/' className="text-lg font-semibold">Dev Story</Link>
        <div className='flex flex-col gap-5 mt-5'>
          <NavLink href="/dashboard/my-profile">My Profile</NavLink>
          <NavLink href="/dashboard/add-story">Add Story</NavLink>
          <NavLink href="/dashboard/settings">Settings</NavLink>
        </div>
      </div>
      <div className='col-span-9 p-5'>{children}</div>
    </div>
  );
};

export default DashboardLayout;