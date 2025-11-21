const ReadyToTransform = () => {
  return (
    <section className="relative h-[400] lg:h-[750] w-full overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/videos/transform.mp4"
        autoPlay
        loop
        muted
        playsInline
        disablePictureInPicture
        controlsList="nodownload nofullscreen noremoteplayback"
      ></video>
      <div className="absolute top-0 left-0 w-full h-full bg-[#0A1337] opacity-50"></div>
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-6">
        <h2 className="font-woxy text-[2.5rem] md:text-5xl lg:text-8xl leading-[3rem] md:leading-[3.75rem] lg:leading-[7.5rem] font-normal text-white ">
          Ready to Transform
          <br className="hidden sm:block" />
          Your Business.
        </h2>
        <p className="text-[#d2d2d2] font-woxy md:text-center font-light text-[1rem] md:text-[1.2rem] lg:leading-[1.9rem] lg:w-[60%] xl:w-[45%] mt-10">
          InfoCreon helps its clients to identify the best options for their
          specific business characteristics.
        </p>
        <button
          className="mt-10 border border-white px-6 py-3 text-white hover:bg-white
  hover:text-black transition-all duration-300 rounded-md text-sm sm:text-base flex items-center gap-2"
          style={{ cursor: "pointer" }}
        >
          Start Your Journey! <span className="ml-2 text-xl">→</span>
        </button>
      </div>
    </section>
  );
};

export default ReadyToTransform;
