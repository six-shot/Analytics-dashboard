"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
interface MenuItem {
  path: string;
  icon: React.ReactNode;
 
}

// Use the defined interface in your component
const MenuLink: React.FC<{ item: MenuItem }> = ({ item }) => {
  const pathname = usePathname();

  return (
    <Link href={item.path} className={`w-full ${pathname === item.path ? "active" : ""}`}>
      {item.icon}
      {/* Add {item.title} or any other properties you want to render */}
    </Link>
  );
};

export default MenuLink;
