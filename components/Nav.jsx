"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "CV",
    path: "/resume",
  },
  {
    name: "Portfolio",
    path: "/work",
  },
];

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-8">
      {links.map((link) => {
        const isActive = link.path === pathname;
        return (
          <Link
            href={link.path}
            key={link.path}
            className={`${
              isActive ? "text-accent border-b-2 border-accent" : ""
            } capitalize font-medium hover:text-accent transition-all`}
            aria-current={isActive ? "page" : undefined}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
