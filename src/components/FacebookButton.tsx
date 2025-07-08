"use client";

import { Facebook } from "lucide-react";

export default function FacebookButton() {
  return (
    <div className="bg-black/40 hover:bg-black/70 text-white rounded-4xl px-4 py-2">
      <a
        className="flex gap-2"
        href="https://www.facebook.com/people/Woori/61577166415207"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Facebook style={{ marginLeft: -2 }} />{" "}
        <span style={{ marginLeft: 2 }}>Follow us on Facebook</span>
      </a>
    </div>
  );
}
