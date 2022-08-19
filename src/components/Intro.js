import { BiChevronsDown } from "react-icons/bi";
import Canvas from "./Canvas";
import { m } from "framer-motion";

const Intro = () => {
  return (
    <div className="relative h-screen flex justify-center items-center flex-col gap-5">
      <Canvas />
      <m.p
        data-scroll
        data-scroll-speed="1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 1.4 }}
        className="text-2xl font-semibold text-center z-[1] overflow-hidden"
      >
        {`Hi. I am `} <span className="text-yellow-500">Omoyeni</span>
      </m.p>
      <m.p
        data-scroll
        data-scroll-speed="1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 1.4 }}
        className="md:text-5xl text-4xl font-bold text-center z-[1] overflow-hidden text-yellow-500"
      >
        {`Oluwatoyin.`}
      </m.p>
      <m.p
        data-scroll
        data-scroll-speed="1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 1.4 }}
        className="md:text-xl text-md text-center z-[1] overflow-hidden"
      >
        {`Content Creator | Voice-Over Artist | Motion Graphics Artist | Video Editor.`}
      </m.p>
      <m.p
        data-scroll
        data-scroll-speed="1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 1.4 }}
        className="text-sm text-center z-[1] overflow-hidden italic"
      >
        {`We all have stories to tell and we make into videos`}
      </m.p>
      <m.a
        data-scroll
        data-scroll-speed="2"
        data-scroll-delay="1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 1.4 }}
        className="absolute left-[calc(50%-23px)] bottom-[10vh] cursor-pointer"
        href="#who"
        data-scroll-to
      >
        <BiChevronsDown className="animate-bounce" size={56} />
      </m.a>
    </div>
  );
};

export default Intro;
