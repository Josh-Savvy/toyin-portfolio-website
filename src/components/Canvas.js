const Canvas = () => {

  return (
    <div className="absolute  inset-0 max-w-screen max-h-screen">
      <div className="absolute inset-0 max-w-screen max-h-screen"
        style={{ opacity: "10%", backgroundImage: "url(https://us-rd.gr-cdn.com/1200x675,sc/https://us-wd.gr-cdn.com/blog/sites/5/2021/08/0959/graphic-design-portfolio.jpg)" }}
      >
      </div>
      <a href="/" className="absolute text-yellow-500 md:left-10 left-8 top-5 capitalize font-bold md:text-6xl text-4xl">t
        {/* <span className="absolute left-6 md:top-0 -top-10 text-green-500 text-6xl">.</span> */}
      </a>
      <span><img src="/avatar.jpg" className="absolute top-4 rounded-full md:w-20 w-14 md:right-14 right-5 bg-white p-0.5" alt="" /></span>
    </div>
  );
};

export default Canvas;
