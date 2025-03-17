import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const Ingredients = () => {
  const ingredients = [
    { img: "/images/Ing1.png" },
    { img: "/images/Ing2.png" },
    { img: "/images/Ing3.png" },
    { img: "/images/Ing4.png" },
    { img: "/images/Ing5.png" },
    { img: "/images/Ing6.png" },
    { img: "/images/Ing7.png" },
    { img: "/images/Ing8.png" },
    { img: "/images/Ing9.png" },
  ];

  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <section className="secGap mx-auto max-w-7xl">
      <h2 className="text-balance px-1 pb-4 text-center text-[22px] sm:text-2xl font-black md:text-4xl my-3 md:my-[4] lg:my-5">
        <span className="text-[#B11E54]">A Miracle for your Joints!</span>
        <br />
        <span>Harness the Power of the highest quality </span>
        <span className="md:block">ingredients</span>
      </h2>

      <div ref={ref} className="container mx-auto px-4">
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {ingredients.map(({ img }, index) => {
            return (
              <motion.div
                key={index}
                initial="hidden"
                animate={controls}
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1 },
                }}
                transition={{ duration: 1.8, delay: index * 0.3 }}
                className="z-10 mx-auto rounded-2xl border-white object-cover sm:max-w-[520px] md:max-w-full"
              >
                <img src={img} alt={`Ingredient ${index + 1}`} className="w-full h-full" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Ingredients;
