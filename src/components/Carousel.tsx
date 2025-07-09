"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export type Props = {
  images: string[];
  interval: number;
};

export default function Carousel({ images, interval }: Props) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(intervalId);
  }, [images.length, interval]);

  return (
    <AnimatePresence data-testid="Carousel">
      <motion.img
        key={images[index]}
        src={images[index]}
        alt={`Slide ${index}`}
        className="absolute top-0 left-0 w-full h-full object-cover"
        variants={{
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
        }}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 1 }}
      />
    </AnimatePresence>
  );
}
