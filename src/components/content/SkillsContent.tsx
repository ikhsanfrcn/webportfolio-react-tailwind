import { FaReact, FaNode, FaFigma, FaWordpress, FaGithub, FaDocker } from "react-icons/fa";
import { BiLogoPostgresql, BiLogoTailwindCss } from "react-icons/bi";
import { SiExpress, SiTypescript, SiMysql, SiCoreldraw, SiXcode, SiAdobephotoshop } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const skills = [
  { icon: SiTypescript, color: "text-blue-500" },
  { icon: BiLogoPostgresql, color: "text-blue-300" },
  { icon: SiExpress, color: "text-black dark:text-white" },
  { icon: FaReact, color: "text-sky-400" },
  { icon: FaNode, color: "text-lime-500" },
  { icon: BiLogoTailwindCss, color: "text-sky-400" },
  { icon: SiMysql },
];

const tools = [
  { icon: FaFigma, color: "text-black dark:text-white" },
  { icon: SiCoreldraw, color: "text-black dark:text-white" },
  { icon: FaWordpress, color: "text-black dark:text-white" },
  { icon: FaGithub, color: "text-black dark:text-white" },
  { icon: FaDocker, color: "text-black dark:text-white" },
  { icon: VscVscode, color: "text-black dark:text-white" },
  { icon: SiXcode, color: "text-black dark:text-white" },
  { icon: SiAdobephotoshop, color: "text-black dark:text-white" },
];

const SkillsContent = () => {
  return (
    <div className="mx-10 grid col-start-4 row-start-4 col-span-8 border-2 border-[#B7A261] dark:border-[#4B3D10] rounded-2xl p-6 bg-white dark:bg-[#000000] shadow-lg">
      {/* Skills */}
      <h2 className="text-2xl text-black dark:text-white font-bold py-5">Skills</h2>
      <div className="grid grid-cols-4 sm:grid-cols-7 gap-5">
        {skills.map(({ icon: Icon, color }, index) => (
          <div key={index} className="flex justify-center items-center p-3 border-2 border-[#B7A261] dark:border-[#4B3D10] shadow-md rounded-lg hover:scale-110">
            <Icon className={`size-14 ${color} fill-current`} />
          </div>
        ))}
      </div>

      {/* Tools & Software */}
      <h2 className="text-2xl text-black dark:text-white font-bold py-5">Tools & Software</h2>
      <div className="grid grid-cols-4 sm:grid-cols-7 gap-5">
        {tools.map(({ icon: Icon, color }, index) => (
          <div key={index} className="flex justify-center items-center p-3 border-2 border-[#B7A261] dark:border-[#4B3D10] shadow-md rounded-lg hover:scale-110">
            <Icon className={`size-14 ${color} fill-current`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsContent;
