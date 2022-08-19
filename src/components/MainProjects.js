import { BiLinkExternal } from "react-icons/bi";

const MainProjects = () => {
  const projects = [
    {
      image: { url: "/pr.png" },
      title: "Lorem ipsum project",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam aliquam, in natus alias quasi illum amet omnis expedita obcaecati hic odit nemo corrupti dolorem sunt. Rem assumenda facilis blanditiis nam.",
      technologies: ["/pr.png", "/ps.png"],
      demo: "",
      github: ""
    }, {
      image: { url: "/ps.png" },
      title: "Lorem Ipsum", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam aliquam, in natus alias quasi illum amet omnis expedita obcaecati hic odit nemo corrupti dolorem sunt. Rem assumenda facilis blanditiis nam.",
      technologies: ["/pr.png", "/ps.png"],
      demo: "",
      github: ""
    },
    {
      image: { url: "/ai.png" },
      title: "Lorem Ipsum", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam aliquam, in natus alias quasi illum amet omnis expedita obcaecati hic odit nemo corrupti dolorem sunt. Rem assumenda facilis blanditiis nam.",
      technologies: ["/pr.png", "/ps.png", "/ai.png"],
      demo: "",
      github: ""
    }, {
      image: { url: "/ps.png" },
      title: "Lorem Ipsum", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam aliquam, in natus alias quasi illum amet omnis expedita obcaecati hic odit nemo corrupti dolorem sunt. Rem assumenda facilis blanditiis nam.",
      technologies: ["/pr.png", "/ps.png"],
      demo: "",
      github: ""
    },
    {
      image: { url: "/ai.png" },
      title: "Lorem Ipsum", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam aliquam, in natus alias quasi illum amet omnis expedita obcaecati hic odit nemo corrupti dolorem sunt. Rem assumenda facilis blanditiis nam.",
      technologies: ["/pr.png", "/ps.png", "/ai.png"],
      demo: "",
      github: ""
    },
  ]
  return (
    <>
      <h1 className="text-center text-4xl mb-10 md:mb-20">Projects</h1>
      {projects.map((project, index) => (
        <div
          key={index}
          className={`item flex gap-[20px] lg:gap-[50px] w-full px-[5vw] md:min-h-[60vh] mb-20 md:my-10 ${index % 2 === 1
            ? "flex-col lg:flex-row"
            : "flex-col lg:flex-row-reverse"
            }`}
        >
          <div data-scroll data-scroll-speed="3" className="lg:flex-1">
            <div className="border-[#888] border-2 rounded-[20px] overflow-hidden">
              <div className="border-black border-[8px]">
                <img
                  className="w-full rounded-[12px]"
                  src={project.image.url}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="item-info lg:flex-1">
            <h1 className="text-2xl font-bold">{project.title}</h1>
            <p className="text-[20px] text-justify my-3">
              {project.description}
            </p>

            <div className="flex gap-[5px]">
              {project.technologies.map((tech) => (
                <img
                  key={tech}
                  className="w-[30px] h-[30px]"
                  src={tech}
                  alt=""
                />
              ))}
            </div>

            <div className="flex mt-[25px] gap-[20px]">
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="h-[45px] px-[15px] text-white rounded transition duration-300 flex items-center gap-[10px] bg-[#1876d2] hover:bg-[#2884e0]"
              >
                <BiLinkExternal size={25} />
                <span> View</span>
              </a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default MainProjects;
