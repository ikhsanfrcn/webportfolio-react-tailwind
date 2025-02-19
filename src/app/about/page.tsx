import AboutContent from "@/components/content/about-content";
import Header from "@/components/header";
import ProfileCard from "@/components/profilecard";
import Sidebar from "@/components/sidebar";

export default function About() {
  return (
    <div className="grid grid-cols-12 grid-rows-7 h-screen flex justify-center items-center bg-[#fef8e6] dark:bg-[#1E1E1E]">
      <Header />
      <ProfileCard />
      <AboutContent />
      <Sidebar />
    </div>
  );
}
