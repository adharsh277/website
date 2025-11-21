"use client";

import { useInView, motion } from "framer-motion";
import React, { useRef } from "react";

export default function QuoteHeroSection() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    return (
        <section
            ref={sectionRef}
            className="relative w-full min-h-[60vh] flex flex-col justify-center items-center text-[#0A1337] bg-[#fff] px-4"
        >
            {/* <div className="absolute inset-0 bg-[#0A1337] opacity-70 z-0" /> */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10 text-center xl:w-[1300px] md:w-[85%] px-[1rem] py-[4rem] space-y-6"
            >
                <h1 className="font-woxy text-[2.5rem] md:text-5xl lg:text-6xl font-normal leading-[3rem] md:leading-[3.75rem] lg:leading-[4.8rem] w-full transition-all duration-500 text-[#0A1337]">
                    InfoCreon helps its clients to identify the best options for their specific business characteristics
                </h1>

                <p className="font-woxy text-base md:text-lg text-[#0A1337] max-w-3xl mx-auto font-light leading-relaxed transition-all duration-500">
                    The professionalism followed by our experts using experiences from different areas of technological functions help our clients build a strategy and governance for digital transformation.
                </p>
            </motion.div>
        </section>
    );
}
