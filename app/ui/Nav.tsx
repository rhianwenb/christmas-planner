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
    <div id="nav">
        <div className="flex justify-between p-3">
            <h1 className="font-extrabold text-emerald-800 text-4xl">Christmas Planner</h1>
        
        <div>
          <ul className="flex">
          {menuItems.map((item, index) => { 
            const isActive = item.link === path;
            return <li key={index}>
              <Link className={isActive?"m-2 text-xl hover:underline text-emerald-800 font-bold":"text-xl m-2 hover:underline"}
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
