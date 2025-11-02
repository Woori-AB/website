"use client";

import Image from "next/image";
import { useStyle } from "@/hooks/useStyle";

export type Props = {
  images: string[];
  opaqueDuration: number;
  crossfadeDuration: number;
};

export default function Carousel({
  images,
  opaqueDuration,
  crossfadeDuration,
}: Props) {
  const frameDuration = opaqueDuration;
  const totalDuration = images.length * opaqueDuration;
  const fadeInEnd = crossfadeDuration / 2;
  const visibleEnd = fadeInEnd + frameDuration;
  const fadeOutEnd = visibleEnd + crossfadeDuration / 2;
  const fadeInEndPercent = (fadeInEnd / totalDuration) * 100;
  const visibleEndPercent = (visibleEnd / totalDuration) * 100;
  const fadeOutEndPercent = (fadeOutEnd / totalDuration) * 100;

  const keyframes = `
    @keyframes fade {
      0%   { opacity: 0; }
      ${fadeInEndPercent}%  { opacity: 1; }
      ${visibleEndPercent}% { opacity: 1; }
      ${fadeOutEndPercent}% { opacity: 0; }
      100% { opacity: 0; }
    }
  `;

  useStyle(keyframes);

  return (
    <div className="select-none">
      {images.map((src, index) => (
        <div
          className="absolute w-full h-full opacity-0 ease-in-out fill-both"
          style={{
            animation: `fade ${totalDuration}s infinite`,
            animationDelay: `${index * opaqueDuration}s`,
          }}
          key={index}
        >
          <Image
            src={src}
            alt={`Slide ${index + 1}`}
            fill
            className="object-cover w-full h-full"
            sizes="100vw"
          />
        </div>
      ))}
    </div>
  );
}
