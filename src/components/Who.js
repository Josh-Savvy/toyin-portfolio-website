const Who = () => {
  return (
    <div
      id="who"
      className="flex gap-[5vw] px-[5vw] lg:px-[15vw] z-[2] lg:min-h-[70vh] items-center justify-center flex-col md:flex-row"
    >
      <img
        data-scroll
        data-scroll-speed="2"
        className="w-[225px] h-[225px] rounded-full"
        src="/avatar.jpg"
        alt=""
      />
      <div>
        <h1 data-scroll data-scroll-speed="0.5" className="title text-[40px]">
          About me
        </h1>

        <p data-scroll className="text-lg text-gray-200" id="story">
          My name is <span className="text-yellow-500 text-md font-semibold"> Oluwatoyin Omoyeni</span>.
          I'm a curious, hardworking and self driven young graduate of Geology
          from Obafemi Awolowo University. I also have a passion for video editing
          as well as motion graphics which is self taught. My dream is to work on
          projects that brings about a change in the world. Currently, looking to put
          my knowledge and skills to use, not just as a Geologist, but also as a video editor.
          In the long run, I want to be able to render services by having an advertising firm where
          information can be disseminated properly through videos, flyers and so much more.
        </p>
        <a href="/ps.png" id="downloadcv" download></a>
        <button onClick={() => { document.getElementById("downloadcv").click() }} className="bg-green-400 px-3 p-1 mt-3 text-black font-semibold rounded">Download Resume</button>
      </div>
    </div>
  );
};

export default Who;
