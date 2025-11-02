"use client";

import WooriLogo from "@/components/WooriLogo";
import WoltButton from "@/components/WoltButton";
import InstagramButton from "@/components/InstagramButton";
import FacebookButton from "@/components/FacebookButton";
import FoodoraButton from "@/components/FoodoraButton";
import UberEatsButton from "@/components/UberEatsButton";

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
          className="bg-no-repeat bg-cover w-full h-full overflow-hidden"
          style={{
            backgroundImage: "url('/main-picture-fall-1-small.jpg')",
            backgroundPosition: "50% 65%",
          }}
        ></div>
      </div>
      <div className="absolute inset-0 bg-linear-to-b from-black/40 to-black/0 z-10"></div>
      <div className="absolute top-0 p-2 z-20">
        <div className="relative flex flex-col items-center gap-2">
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
        </div>
      </div>
    </>
  );
}
