import ContactFields from "./ContactFields";
import WhyChoose from "./WhyChoose";

export default function ContactFormSection() {
  return (
    <section
      id="contact"
      className="w-full flex justify-center flex-col items-center py-8 md:py-24"
    >
      <h2 className="font-woxy text-[2.5rem] md:text-5xl lg:text-6xl leading-[3rem] md:leading-[3.75rem] font-normal mb-10 md:mb-20 md:px-4 text-start text-[#0A1337]">
        Get In Touch
      </h2>

      <div className="2xl:w-[1300px] w-[90%] md:px-4 flex gap-10 md:flex-row flex-col">
        <div className="w-full">
          <p className="mb-8 text-[#0A1337]">
            Ready to transform your business with digital solutions? Contact
            InfoCreon today and let&apos;s create something amazing together.
          </p>
          <WhyChoose />
        </div>

        <div className="w-full">
          <ContactFields />
        </div>
      </div>
    </section>
  );
}
