import Image from "next/image";

const projects = [
  {
    title: "Project 1",
    image: "/project1.jpeg",
    description: "A web application built with React and Next.js",
  },
  {
    title: "Project 2",
    image: "/project2.jpeg",
    description: "A mobile app developed using React Native",
  },
];

const ProjectsContent = () => {
  return (
    <div className="mx-10 grid col-start-4 row-start-4 col-span-8 border-2 border-[#B7A261] dark:border-[#4B3D10] rounded-2xl p-6 bg-white dark:bg-[#000000] shadow-lg">
      <h2 className="text-2xl text-black dark:text-white font-bold py-5">Projects</h2>
      <div className="grid grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="grid grid-rows-7 border-2 border-[#B7A261] dark:border-[#4B3D10] rounded-2xl hover:shadow-lg text-black dark:text-gray-300 p-5 bg-white dark:bg-[#403D32]"
          >
            <div className="row-span-6 flex justify-center items-center">
              <Image
                src={project.image}
                alt={project.title}
                width={300}
                height={200}
                className="rounded-lg border border-[#B7A261] dark:border-white object-cover w-full aspect-video"
              />
            </div>
            <div className="text-center">
              <h3 className="text-lg font-bold dark:text-white">{project.title}</h3>
              <p className="text-sm">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsContent;
