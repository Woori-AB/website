"use client";

import { Instagram } from "lucide-react";

export default function InstagramButton() {
  return (
    <div className="bg-black/40 hover:bg-black/70 text-white rounded-4xl px-4 py-2">
      <a
        className="flex gap-2"
        href="https://www.instagram.com/wooristockholm"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Instagram /> Follow us on Instagram
      </a>
    </div>
  );
}
