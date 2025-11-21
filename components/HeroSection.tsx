const HeroSection = () => {
  return (
    <section className="relative w-full h-svh flex justify-center items-center pt-[8rem] lg:pt-[10rem] pb-[10rem] xl:pb-[10rem] px-[1rem]">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/videos/bannerv3.mp4"
        autoPlay
        loop
        muted
        playsInline
        disablePictureInPicture
        controlsList="nodownload nofullscreen noremoteplayback"
      ></video>
      {/* <div className="absolute top-0 left-0 w-full h-full bg-[#0A1337] opacity-50"></div> */}
      {/* <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#0A1337] to-[#F8A01B] opacity-50"></div> */}
      {/* <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#F8A01B] to-[#0A1337] opacity-50"></div> */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#0A1337] to-[#F8A01B] opacity-50"></div>

      <div className="xl:w-[1300px] w-[90%] flex items-center justify-center z-10">
        <div
          className="flex items-center flex-col gap-8"
          style={{ opacity: 1 }}
        >
          <h2
            className="text-[2.5rem] lg:text-6xl xl:text-8xl font-roboto font-medium md:font-normal lg:w-[90%] leading-[3rem] lg:leading-[5rem] xl:leading-[8rem] md:text-center text-white"
            style={{ opacity: 1, transform: "none" }}
          >
            Digital Transformation Through Digital Wisdom
          </h2>
          <p
            className="text-[#fff] font-woxy md:text-center font-light text-[1rem] md:text-[1.2rem] lg:leading-[1.9rem] lg:w-[60%] xl:w-[45%]"
            style={{ opacity: 1, transform: "none" }}
          >
            InfoCreon is committed to providing innovative and novel digital aid
            to its clientele, delivering exceptional technology solutions that
            drive business success.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
