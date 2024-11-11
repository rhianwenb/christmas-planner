'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';


export default function Nav() {

  const path = usePathname();

  const menuItems = [
    {
      name: "Home",
      link: "/"
    },
    {
      name: "Dashboard",
      link: "/dashboard"
    },
    {
      name: "Login",
      link: "/login"
    },
  ];

  return (
    <div>
        <div className="flex justify-between p-2">
            <h1 className="font-extrabold text-green-800 text-2xl"> My Christmas Planner</h1>
        
        <div>
          <ul className="flex">
          {menuItems.map((item, index) => { 
            const isActive = item.link === path;
            return <li key={index}>
              <Link className={isActive?"m-2 text-red-800 font-bold":"m-2"}
              href={item.link}>
              {item.name}
              </Link>
            </li> })}
          </ul>
        </div>
        </div>
    </div>
  )
};
