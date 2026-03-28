"use client";

import { Mail } from "lucide-react";

export default function Jobb() {
  return (
    <>
      <div className="relative flex justify-center min-h-84 lg:aspect-3/1 w-full">
        <main className="container">
          <section
            id="job-ad"
            className="flex flex-col items-start py-12 px-4 max-w-xl mx-auto gap-4"
          >
            <h1>Jobba med oss på Woori</h1>
            <ul>
              <li>
                <strong>Anställningsform:</strong> Tidsbegränsad anställning
              </li>
              <li>
                <strong>Varaktighet:</strong> 3 månader eller längre
              </li>
              <li>
                <strong>Omfattning:</strong> Deltid (50%)
              </li>
              <li>
                <strong>Lön:</strong> Timlön
              </li>
            </ul>
            <p>
              Vi på Woori är en liten och familjär koreansk restaurang belägen i
              Fredhäll. Nu söker vi en engagerad och serviceinriktad medarbetare
              som vill arbeta deltid hos oss som köksbiträde.
            </p>
            <h2>Om tjänsten</h2>
            <p>
              Som köksbiträde hos oss kommer du att ha en varierad roll där du
              bidrar till både kök och service. Arbetsuppgifterna innefattar
              bland annat:
            </p>
            <ul>
              <li>• Ta emot gäster och ta beställningar</li>
              <li>• Förbereda råvaror och bistå i matlagning</li>
              <li>• Servera mat och dryck</li>
              <li>• Hjälpa till med disk och städning</li>
            </ul>
            <p>
              Arbetstiderna är eftermiddag/kväll, främst mellan kl. 17:00-21:00.
            </p>
            <h3>Kvalifikationer</h3>
            <ul>
              <li>• Gymnasial utbildning inom restaurang/kök</li>
              <li>• Goda kunskaper i svenska och engelska</li>
            </ul>
            <h3>Meriterande</h3>
            <ul>
              <li>• Erfarenhet inom det asiatiska köket</li>
            </ul>
            <h2>Ansökan</h2>
            <p>
              Skicka din ansökan via e-post till:
              <span>
                <a
                  href="mailto:kontakt@wooristockholm.se"
                  className="flex gap-1 hover:underline items-center"
                >
                  <Mail size={"1.2rem"} />
                  kontakt@wooristockholm.se
                </a>
              </span>
            </p>
          </section>
        </main>
      </div>
    </>
  );
}
