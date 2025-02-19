import Image from "next/image";

const ExperienceContent = () => {
    return (
        <div className="mx-10 grid col-start-4 row-start-4 col-span-8 border-2 border-[#B7A261] dark:border-[#4B3D10] rounded-2xl p-6 bg-white dark:bg-[#000000] shadow-lg">
            <h2 className="text-2xl text-black dark:text-white font-bold py-5">Education</h2>
            <div className="grid grid-cols-2 gap-10">
                <div className="border-2 border-[#B7A261] dark:border-[#4B3D10] rounded-2xl hover:shadow-lg text-black dark:text-gray-300 p-5">
                    <p>2025-2025</p>
                    <p className="font-bold">Purwadhika Digital School</p>
                    <p>Full Stack Web Development</p>
                </div>
                <div className="border-2 border-[#B7A261] dark:border-[#4B3D10] rounded-2xl hover:shadow-lg text-black dark:text-gray-300 p-5">
                    <p>2013-2016</p>
                    <p className="font-bold">SMKN 14 Bandung</p>
                    <p>Multimedia</p>
                </div>
            </div>
            <h2 className="text-2xl text-black dark:text-white font-bold py-5">Experience</h2>
            <div className="grid gap-2">
                {/** Experience Items */}
                {[
                    {
                        company: "BVR Group Asia",
                        role: "Web Developer",
                        duration: "August 2022 - December 2023",
                        time: "1 yr 4 mos",
                        image: "/bvr.jpeg",
                    },
                    {
                        company: "Plexus Techdev Studio",
                        role: "Web Developer",
                        duration: "July 2021 - July 2022",
                        time: "1 yr",
                        image: "/plexus.jpeg",
                    },
                    {
                        company: "My Repvblic FiveM Game Server",
                        role: "Game Developer",
                        duration: "February 2019 - July 2020",
                        time: "1 yr 5 mos",
                        image: "/fivem.jpeg",
                    },
                ].map((exp, index) => (
                    <div
                        key={index}
                        className="grid grid-cols-12 border-2 border-[#B7A261] dark:border-[#4B3D10] rounded-2xl hover:shadow-lg text-black dark:text-gray-300 p-5"
                    >
                        <div className="col-span-2">
                            <Image
                                src={exp.image}
                                alt={exp.role}
                                width={90}
                                height={90}
                                className="rounded-md border-2 border-[#B7A261] dark:border-[#4B3D10]"
                            />
                        </div>
                        <div className="col-span-10 content-center text-[18px]">
                            <h1 className="font-bold dark:text-white">Company : {exp.company}</h1>
                            <p className="font-bold">
                                Role : <span className="font-normal">{exp.role}</span>
                            </p>
                            <p className="font-bold">
                                Duration : <span className="font-normal">{exp.duration}</span>{" "}
                                ({exp.time})
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ExperienceContent;
