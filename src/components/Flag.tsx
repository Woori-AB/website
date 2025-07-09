"use client";

export type Props = {
  src: string;
  alt: string;
  onClick?: () => void;
};

export default function Flag({ src, alt, onClick }: Props) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      title={alt}
      onClick={onClick}
      className="h-5 w-auto block"
    />
  );
}
