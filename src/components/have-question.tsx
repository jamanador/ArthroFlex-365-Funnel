import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { BsCart3 } from "react-icons/bs";
import { Link } from "react-scroll";

function HaveAquestion() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="secGap relative mx-auto w-full bg-cover bg-center bg-no-repeat bg-[url('/images/callbg.png')] text-white overflow-hidden">
      <div className="container relative mx-auto px-4 py-8 sm:py-10 lg:py-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center justify-items-center gap-12 md:grid-cols-2 md:justify-items-start">
            {/* Image section */}
            <div className="order-1 md:order-2 relative mx-auto w-[70%] md:w-full md:max-w-md lg:max-w-lg">
              <div className="relative aspect-square">
                <img
                  src="/images/call.jpg"
                  className="h-full w-full rounded-full object-cover"
                  alt="Image"
                />
                {/* Circle at the top-right corner */}
                <div className="absolute right-[8%] top-4 z-10 h-16 w-16 rounded-full bg-brand-maroon md:right-[16%]" />
              </div>
            </div>

            {/* Text section */}
            <div className="order-2 md:order-1">
              <div ref={ref}>
                <motion.div
                  className="space-y-6 text-left"
                  initial={{ x: '-100%', opacity: 0 }}
                  animate={isInView ? { x: 0, opacity: 1 } : {}}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                >
                  <div className="space-y-2">
                    <h1 className="text-xl font-bold leading-tight lg:text-2xl">
                      Have Questions? We're Here to Help!
                    </h1>
                    <p className="text-xl lg:text-2xl">
                      Call us at{" "}
                      <a href="tel:(844)-640-0728" className="text-green-500">
                        (844) -640-0728
                      </a>{" "}
                      for answers.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <p className="max-w-[400px] text-[15px] leading-8 md:text-[20px]">
                      Act quickly—these are selling fast! 🔥 43 sold in the past hour.
                    </p>
                    <p className="max-w-[400px] text-[15px] leading-8 md:text-[20px]">
                      Stock is limited due to high demand, so availability cannot be
                      guaranteed.
                    </p>
                  </div>
                  <Link
                    to="packages"
                    smooth={true}
                    duration={500}
                    offset={-50}
                    className="cursor-pointer relative z-10 flex h-12 w-[16rem] transform items-center rounded-lg border border-none border-brand-maroon bg-brand-maroon px-3 text-sm font-semibold text-white transition-all duration-100 ease-in-out hover:scale-100 active:scale-[98%]"
                  >
                    Claim It Before It's Gone!
                    <img
                      className="absolute right-[1.6em] z-10"
                      src="/icons/icon-add-to-cart-button.svg"
                      alt=""
                    />
                    <span className="rounded-r-inherit absolute right-[-14px] top--1 flex h-[calc(100%+.0px)] lg:h-[calc(100%+.1px)] w-[4em] transform items-center justify-center rounded-md border-[1.5px] border-dashed border-yellow-500 bg-[#ffffe2] px-4 text-lg font-semibold text-neutral-dark transition-all duration-100 ease-in-out hover:scale-100 active:scale-[94%]">
                      <BsCart3 className="h-5 w-5 ms-4 text-maroon font-bold" />
                    </span>
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HaveAquestion;
