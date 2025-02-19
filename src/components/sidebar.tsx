"use client";

import { usePathname, useRouter } from "next/navigation";
import { User, Briefcase, Code, Award, Mail } from "lucide-react";

const Sidebar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const menuItems = [
    { name: "About", icon: <User size={24} />, path: "/about" },
    { name: "Experience", icon: <Briefcase size={24} />, path: "/experience" },
    { name: "Projects", icon: <Code size={24} />, path: "/projects" },
    { name: "Skills", icon: <Award size={24} />, path: "/skills" },
    { name: "Contact", icon: <Mail size={24} />, path: "/contact" },
  ];

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <div className="col-start-12 row-start-4">
      <div className="w-24 bg-white dark:bg-[#000000] dark:text-white p-4 rounded-lg border-2 border-[#B7A261] dark:border-[#4B3D10] flex flex-col items-center gap-4">
        {menuItems.map((item) => (
          <button
            key={item.name}
            onClick={() => handleNavigation(item.path)}
            className={`w-16 h-16 flex flex-col items-center justify-center rounded-lg shadow-md ${
              pathname === item.path
                ? "bg-[#E0CE93] text-white dark:bg-[#B7A261] dark:text-black"
                : "bg-[#FEF6DD] text-black dark:bg-[#3B3729] dark:text-[#A89D9D]"
            } hover:bg-[#B7A261] hover:text-black dark:hover:bg-gray-600 dark:hover:text-white`}
          >
            {item.icon}
            <span className="text-xs mt-1">{item.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
