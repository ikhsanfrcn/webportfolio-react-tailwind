"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { FaInstagram, FaLinkedin, FaGithub, FaReact, FaNodeJs, FaDiscord } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiExpress, SiTypescript } from "react-icons/si";
import { useEffect, useState } from "react";
import { ReactNode } from "react";

function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`p-6 rounded-2xl shadow-lg bg-white dark:bg-[#000000] dark:text-white w-80 text-center border-2 border-[#B7A261] dark:border-[#4B3D10] ${className}`}
    >
      {children}
    </div>
  );
}

function CardContent({ children }: { children: ReactNode }) {
  return <div className="mt-5 space-y-3">{children}</div>;
}

function Button({ children, className = "", ...props }: { children: ReactNode; className?: string }) {
  return (
    <button
      className={`w-full mt-4 hover:bg-[#B7A261] hover:text-black dark:hover:bg-gray-600 dark:hover:text-white font-semibold py-2 rounded-lg text-[#403D22] bg-[#E0CE93] border-2 border-[#B7A261] dark:border-[#4B3D10] dark:bg-[#C2B293] dark:text-[#3B3729]" ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default function ProfileCard() {
  useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="h-10 w-10" />;

  return (
    <div className="grid col-start-1 row-start-4 pl-10">
      {/* <div className="flex items-center min-h-screen justify-center"> */}
        <Card>
          <div className="flex flex-col items-center">
            <Image
              src="/bg-red.png"
              alt="Profile Picture"
              width={150}
              height={150}
              className="rounded border-2 border-[#B7A261] dark:border-[#4B3D10]"
            />
            <h2 className="text-lg font-semibold mt-3 text-black dark:text-[#CCC0C0]">
              Mochammad Ikhsan Fathurrachman
            </h2>
            <div className="flex justify-center gap-3 py-2 text-2xl text-gray-700 dark:text-gray-300">
              <BiLogoPostgresql className="hover:text-blue-300 ease-in-out cursor-pointer" />
              <SiExpress className="hover:text-black dark:hover:text-gray-400 ease-in-out cursor-pointer" />
              <FaReact className="hover:animate-spin ease-in-out cursor-pointer" />
              <FaNodeJs className="hover:text-green-300 ease-in-out cursor-pointer" />
              <SiTypescript className="hover:text-blue-500 ease-in-out cursor-pointer" />
            </div>
            <hr className="w-48 h-0.5 bg-[#B7A261] dark:bg-[#4B3D10] border-0 rounded-sm my-2"></hr>
            <div className="flex justify-center gap-3 mt-3 text-xl text-gray-700 dark:text-gray-300">
              <a href="http://instagram.com/isanfh" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="hover:text-pink-600 cursor-pointer" />
              </a>
              <a href="http://linked.in/in/ikhsanfrcn" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="hover:text-blue-600 cursor-pointer" />
              </a>
              <a href="http://github.com/ikhsanfrcn" target="_blank" rel="noopener noreferrer">
                <FaGithub className="hover:text-black dark:hover:text-white cursor-pointer" />
              </a>
              <a href="http://discord.com/" target="_blank" rel="noopener noreferrer">
                <FaDiscord className="hover:text-blue-600 cursor-pointer" />
              </a>
            </div>
          </div>

          <CardContent>
            <p className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
              <span>📞</span> +62 816-355-340
            </p>
            <p className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
              <span>📧</span> ikhsanfrcn@gmail.com
            </p>
            <p className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
              <span>📍</span> Bandung, Indonesia
            </p>
            <p className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
              <span>📅</span> 18, Dec. 1998
            </p>
          </CardContent>

          <Button>
            View Resume
          </Button>
        </Card>
      </div>
    // </div>
  );
}
