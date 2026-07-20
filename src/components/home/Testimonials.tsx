import React from "react";
import { motion } from "framer-motion";
import image from "../../assets/image/image13.png";

const Testimonials: React.FC = () => {
  return (
    <section className="flex flex-col justify-center items-center px-4 mx-auto space-y-4 w-full max-w-8xl md:px-8">
      <motion.img
        src={image}
        alt="Maitsys"
        title="Maitsys"
        width={240}
        height={80}
        className="py-5 w-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: "easeOut" },
        }}
        viewport={{ once: true, amount: 0.3 }}
      />
    </section>
  );
};

export default Testimonials;
