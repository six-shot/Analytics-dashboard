"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MenuLink = ({ item }) => {
  const pathname = usePathname();

  return (
    <Link
      href={item.path}
      className={`w-full ${
        pathname === item.path ? "" : ""
      }`}
    >
      {item.icon}

    </Link>
  );
};

export default MenuLink;
