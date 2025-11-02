"use client";

export type Props = {
  src: string;
  alt: string;
  onClick?: () => void;
};

export default function Flag({ src, alt, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="p-0 border-none bg-transparent cursor-pointer"
    >
      <img
        src={src}
        alt={alt}
        title={alt}
        className="h-5 w-auto block select-none"
      />
    </button>
  );
}
