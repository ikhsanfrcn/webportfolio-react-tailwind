import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="mx-10 grid col-start-4 row-start-4 col-span-8 border-2 border-[#B7A261] dark:border-[#4B3D10] rounded-2xl p-6 bg-white dark:bg-[#000000] shadow-lg">
      <h2 className="text-2xl text-black dark:text-white font-bold py-5">Contact</h2>
      
      {/* Social Links */}
      <div className="flex gap-5 text-black dark:text-white text-3xl py-3">
        <a href="mailto:your.email@example.com" className="hover:text-[#B7A261]"><FaEnvelope /></a>
        <a href="https://github.com/ikhsanfrcn" target="_blank" className="hover:text-[#B7A261]"><FaGithub /></a>
        <a href="https://linkedin.com/in/ikhsanfrcn" target="_blank" className="hover:text-[#B7A261]"><FaLinkedin /></a>
      </div>
      
      {/* Contact Form */}
      <form className="mt-5 flex flex-col gap-3">
        <input type="text" placeholder="Your Name" className="p-2 border border-[#B7A261] dark:border-[#4B3D10] rounded-lg bg-gray-100 dark:bg-[#000000] dark:text-white" required />
        <input type="email" placeholder="Your Email" className="p-2 border border-[#B7A261] dark:border-[#4B3D10] rounded-lg bg-gray-100 dark:bg-[#000000] dark:text-white" required />
        <textarea placeholder="Your Message" rows={4} className="p-2 border border-[#B7A261] dark:border-[#4B3D10] rounded-lg bg-gray-100 dark:bg-[#000000] dark:text-white" required></textarea>
        <button type="submit" className="p-2 bg-[#B7A261] dark:bg-[#4B3D10] text-black font-bold rounded-lg hover:bg-[#a18d5c] transition">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
