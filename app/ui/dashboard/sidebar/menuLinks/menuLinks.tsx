"use client"
import { usePathname } from "next/navigation";
import Link from "next/link";

interface MenuItem {
  path: string;
  icon: JSX.Element; // Assuming the icon is a JSX element
  title: string;
}

const MenuLink = ({ item }: { item: MenuItem }) => {
  const pathname = usePathname();

  return (
    <Link
      href={item.path}
      className={`flex items-center gap-2 px-6 ${
        pathname === item.path && "text-[#34CAA5]"
      }`}
    >
      {item.icon}
    </Link>
  );
};
export default MenuLink