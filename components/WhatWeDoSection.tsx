"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const whatWeDoItems = [
  {
    title: "AI Strategy & Consulting",
    description:
      "Guiding your business through the AI adoption journey—from ideation to execution.",
    image: "/illustrations/ai-consulting.svg",
  },
  {
    title: "GenAI Applications",
    description:
      "Creating intelligent tools and content generators powered by state-of-the-art AI models.",
    image: "/illustrations/genai.svg",
  },
  {
    title: "Agentic AI Systems",
    description:
      "Designing autonomous agents that can perceive, decide, and act—making processes more efficient and smarter.",
    image: "/illustrations/agentic-ai.svg",
  },
  {
    title: "Data Science Solutions",
    description:
      "Turning raw data into powerful insights with predictive models, data mining, and analytics.",
    image: "/illustrations/data-science.svg",
  },
  {
    title: "Web Development",
    description:
      "Design and develop visually appealing, high-quality websites for your business that are compatible, well-built, and make a strong impression on your customers.",
    image: "/illustrations/web-development.svg",
  },
  {
    title: "Information and Security Consulting",
    description:
      "We help clients create and implement a complete information security strategy, protecting their data and keeping them aware of potential threats.",
    image: "/illustrations/info-security.svg",
  },
  {
    title: "Digital Marketing",
    description:
      "Our digital marketing expertise helps clients reach their goals and improve performance through well-planned online strategies.",
    image: "/illustrations/digital-marketing.svg",
  },
  {
    title: "Artificial Intelligence and Machine Learning",
    description:
      "Our custom AI solutions and skilled ML developers help you make smarter decisions, develop advanced algorithms, and optimize profits by leveraging critical business data.",
    image: "/illustrations/artificial.svg",
  },
];

interface WhatWeDoCardProps {
  readonly title: string;
  readonly description: string;
  readonly image: string;
  readonly delay?: number;
}

function WhatWeDoCard({ title, description, image, delay }: WhatWeDoCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      className="space-y-4 flex flex-col items-start text-left"
    >
      <Image
        src={image}
        alt={title}
        width={120}
        height={120}
        className="w-28 h-28 object-contain"
      />
      <h3 className="text-lg md:text-xl font-semibold text-white font-woxy">
        {title}
      </h3>
      <p className="text-gray-400 text-sm md:text-base font-light font-woxy leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}

export default function WhatWeDo() {
  const headingRef = useRef(null);
  const isHeadingInView = useInView(headingRef, {
    once: true,
    margin: "-100px",
  });

  return (
    <section
      id="services"
      className="relative w-full bg-primary text-white flex justify-center items-center"
    >
      <div className="absolute inset-0 bg-[#0A1337] opacity-70 z-0" />
      <div className="relative z-10 xl:w-[1300px] md:w-[85%] pt-[4rem] md:pt-[8rem] px-[1rem]  pb-[4rem] md:pb-[10rem] space-y-20">
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isHeadingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6 flex flex-col mb-[4rem] md:mb-[5rem] items-start md:items-center text-left md:text-center"
        >
          <h2 className="font-woxy text-[2.5rem] md:text-5xl leading-[3rem] md:leading-[3.75rem] lg:text-6xl font-normal w-full">
            What We Do
          </h2>
          <p className="font-woxy font-light text-[1rem] text-[#bdbdbd] md:text-[1.2rem] w-full md:w-[70%] leading-relaxed">
            InfoCreon offers comprehensive technology solutions tailored to meet
            your unique business needs and drive digital transformation.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[3rem] ] md:gap-14">
          {whatWeDoItems.map((item, index) => (
            <WhatWeDoCard
              key={item.title}
              title={item.title}
              description={item.description}
              image={item.image}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
