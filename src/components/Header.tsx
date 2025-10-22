"use client";

import { motion } from "motion/react";
import WooriLogo from "./WooriLogo";
import WoltButton from "./WoltButton";
import InstagramButton from "./InstagramButton";
import FacebookButton from "./FacebookButton";
import FoodoraButton from "./FoodoraButton";
import UberEatsButton from "./UberEatsButton";

export default function Header() {
  return (
    <>
      <div
        className="w-full overflow-hidden"
        style={{
          maxHeight: "420px",
        }}
      >
        <div
          className="bg-no-repeat bg-cover bg-center w-full h-full overflow-hidden"
          style={{
            backgroundImage: "url('/main-picture-small.jpg')",
          }}
        ></div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/0 z-10"></div>
      <div className="absolute top-0 p-2 z-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative flex flex-col items-center gap-2"
        >
          <WooriLogo />
          <div className="flex gap-2">
            <FoodoraButton />
            <UberEatsButton />
            <WoltButton />
          </div>
          <div className="flex flex-col gap-2">
            <InstagramButton />
            <FacebookButton />
          </div>
        </motion.div>
      </div>
    </>
  );
}
