"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaLightbulb } from "react-icons/fa6";
import { IoMdMoon } from "react-icons/io";
import Link from 'next/link';


const Header = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="h-10 w-10" />;

  return (
    <div className="col-start-1 ml-24 col-span-12 pr-[60px] row-start-1 flex justify-between items-center">
      <Link href="/">
      <h1 className="font-geistSilkscreen font-bold text-4xl text-[#9D8640] dark:text-[#7F6F3E]">PORTFOLIO</h1>
      </Link>
      <button
        className="p-2 rounded bg-[#B7A261] dark:bg-[#B7A261] text-black dark:text-white"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "dark" ? <IoMdMoon className="text-black"/> : <FaLightbulb  className="text-white"/>}
      </button>
    </div>
  );
};

export default Header;
