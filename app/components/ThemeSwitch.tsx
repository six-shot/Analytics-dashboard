"use client";

import { FiSun, FiMoon } from "react-icons/fi";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted)
    return (
      <Image
        src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
        width={25}
        height={25}
        sizes="25x25"
        alt="Loading Light/Dark Toggle"
        priority={false}
        title="Loading Light/Dark Toggle"
      />
    );

  return (
    <div>
      <div className="sm:hidden flex">
        <div className="p-1.5 border-[1px] border-rgba(255,255,255,0.7) rounded-full">
          {resolvedTheme === "dark" ? (
            <FiSun onClick={() => setTheme("light")} />
          ) : (
            <FiMoon onClick={() => setTheme("dark")} />
          )}
        </div>
      </div>
      <div className="sm:flex hidden">
        <div className="flex flex-col bg-white px-1.5 py-2 rounded-[100px] items-center gap-3">
          <button
            className="p-1.5 bg-[#34CAA5] rounded-full"
            onClick={() => setTheme("light")}
          >
            <FiSun className="text-white text-[20px]" />
          </button>
          <button className="p-2" onClick={() => setTheme("dark")}>
            <FiMoon className="text-[#B2ABAB] text-[20px]" />
          </button>
        </div>
      </div>
    </div>
  );
}
