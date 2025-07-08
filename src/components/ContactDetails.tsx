"use client";

import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactDetails() {
  return (
    <div
      id="contact-details"
      className="flex flex-col items-center text-center gap-4"
    >
      <div className="flex flex-col items-center text-center">
        <h1>Besök oss</h1>
        <span>
          <a
            href="https://maps.app.goo.gl/9Ne5EDEXKdsdvig7A"
            className="flex gap-1 hover:underline items-center"
          >
            <MapPin size={"1.2rem"} />
            Stagneliusvägen 47, 112 57, Stockholm
          </a>
        </span>
      </div>
      <div className="flex flex-col items-center text-center">
        <h1>Kontakt</h1>
        <span>
          <a
            href="tel:+4686566675"
            className="flex gap-1 hover:underline items-center"
          >
            <Phone size={"1.2rem"} />
            08-656 66 75
          </a>
        </span>
        <span>
          <a
            href="mailto:kontakt@wooristockholm.se"
            className="flex gap-1 hover:underline items-center"
          >
            <Mail size={"1.2rem"} />
            kontakt@wooristockholm.se
          </a>
        </span>
      </div>
    </div>
  );
}
