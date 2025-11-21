import Image from "next/image";

const Footer = () => {
  return (
    <>
      <section className="w-full bg-[#0A1337] flex justify-center pt-20 py-8 md:py-16 md:pb-8">
        <div className="2xl:w-[1300px] w-[90%]  md:px-4">
          <Image
            src="/logos/infoCreon-white.png"
            width={200}
            height={100}
            alt="infocreon footer logo"
          />
          <p className="text-[#bdbdbd] text-[1rem] font-light font-woxy text-left mt-5 md:w-[60%] xl:w-[49%]">
            InfoCreon - Novel Digital Creations. Committed to providing
            innovative and novel digital aid to our clientele through digital
            transformation.
          </p>

          <div className="space-y-2 text-gray-300 mt-5">
            <p className="text-[#bdbdbd] text-[1rem]">
              Akkm Tower, Cusat Metro Station, PKA Nagar,<br /> 
              Alfiya Nagar, South Kalamassery, Kalamassery,<br />
              Kochi, Kerala 682022
            </p>
            <p className="text-[#bdbdbd] text-[1rem]">+91 828 149 6690</p>

            <p className="text-[#bdbdbd] text-[1rem]">www.infocreon.com</p>
            <p className="text-[#bdbdbd] text-[1rem]">info@infocreon.com</p>

          </div>

          <div className="flex gap-4 mt-5">
            <a target="_blank" href="#">
              <div className="flex-shrink-0">
                <Image
                  src="/icons/facebook.svg"
                  alt="facebook"
                  width={24}
                  height={24}
                  className="w-6 h-6 object-contain"
                />
              </div>
            </a>
            <a target="_blank" href="#">
              <div className="flex-shrink-0">
                <Image
                  src="/icons/twitter.svg"
                  alt="twitter"
                  width={24}
                  height={24}
                  className="w-6 h-6 object-contain"
                />
              </div>
            </a>
            <a
              target="_blank"
              href="#"
            >
              <div className="flex-shrink-0">
                <Image
                  src="/icons/linkedin.svg"
                  alt="linkedin"
                  width={24}
                  height={24}
                  className="w-6 h-6 object-contain"
                />
              </div>
            </a>
            <a target="_blank" href="#">
              <div className="flex-shrink-0">
                <Image
                  src="/icons/insta.svg"
                  alt="insta"
                  width={24}
                  height={24}
                  className="w-6 h-6 object-contain"
                />
              </div>
            </a>
          </div>
        </div>
      </section>
      <footer className="w-full bg-[#000] py-4 md:py-4 text-white flex justify-center items-center">
        <div className="2xl:w-[1300px] w-[90%] md:px-4 flex flex-col gap-20">
          <div className="space-y-5 flex flex-col items-center lg:items-start">
            <div className="flex flex-col gap-6 xl:gap-0 xl:flex-row justify-center text-center lg:w-full">
              <h3 className="text-[0.6rem] md:text-[0.8rem] font-light text-[#bdbdbd]">
                © 2025 InfoCreon - Novel Digital Creations. All rights reserved.
              </h3>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
