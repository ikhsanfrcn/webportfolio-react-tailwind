import Image from "next/image";

const AboutContent = () => {
  return (
    <div className="mx-10 grid col-start-4 row-start-4 col-span-8 border-2 border-[#B7A261] dark:border-[#4B3D10] rounded-2xl p-6 bg-white dark:bg-[#000000] shadow-lg">
      <h2 className="text-2xl text-black dark:text-white font-bold py-5">About</h2>
      <p className="text-black dark:text-gray-300 font-[poppins] text-[18px]">
        I am a <span className="font-bold">passionate tech enthusiast</span>{" "}
        with a deep interest in{" "}
        <span className="font-bold">Web and App Development.</span> I am
        currently improving my skills at the <span className="font-bold">Purwadhika</span> Bootcamp and{" "}
        <span className="font-bold">I am a Software Developer</span> who is focused on building scalable and
        <span className="font-bold"> user-friendly applications</span> using JavaScript frameworks such as
        <span className="font-bold"> React.js and Next.js,</span> along with CSS frameworks like{" "}
        <span className="font-bold">Tailwind CSS.</span> To the backend, I rely on{" "}
        <span className="font-bold">Node.js, Express.js,</span> and databases like{" "}
        <span className="font-bold">PostgreSQL and MongoDB</span> to engineer secure and efficient APIs. My
        experience in running and developing a game server has made my problem
        solving and technical skills sharper.{" "}
        <span className="font-bold">I am enthusiastic about writing clean and maintainable code</span>, and I put in effort to build{" "}
        <span className="font-bold">high-performance applications</span> as well as stay up-to-date on the latest
        technologies and trends that will help me improve my skills.
      </p>
      <h2 className="text-2xl text-black dark:text-white font-bold py-5">What I Do</h2>
      <div className="grid grid-cols-2 gap-10">
        <div className="grid grid-cols-12 border-2 border-[#B7A261] dark:border-[#625839] rounded-2xl bg-red-50 dark:bg-[#60594B] hover:shadow-lg">
          <div className="col-span-3 flex justify-center items-center">
            <Image
              src="/front-end.png"
              alt="Front-End"
              width={100}
              height={100}
              className="object-cover w-full h-full rounded-l-2xl"
            />
          </div>
          <div className="col-span-8 col-start-5 text-[#685D5D] dark:text-gray-300">
            <h1 className="text-black dark:text-white font-bold py-3">
              Web Front-End Development
            </h1>
            <p>
              With a robust proficiency in React, I excel at transforming
              design concepts into dynamic, user-friendly websites.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-12 border-2 border-[#B7A261] dark:border-[#625839] rounded-2xl bg-red-50 dark:bg-[#60594B] hover:shadow-lg">
          <div className="col-span-3 flex justify-center items-center">
            <Image
              src="/back-end.jpeg"
              alt="Back-End"
              width={100}
              height={100}
              className="object-cover w-full h-full rounded-l-2xl"
            />
          </div>
          <div className="col-span-8 col-start-5 text-[#685D5D] dark:text-gray-300">
            <h1 className="text-black dark:text-white font-bold py-3">
              Back-End Development
            </h1>
            <p>
              Skilled in Node.js, Express.js, I build scalable backend
              systems and efficient server-side solutions using databases
              like MongoDB and MySQL for dynamic applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
