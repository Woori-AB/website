export default function Home() {
  return (
    <div data-testid="Home">
      <section
        id="header"
        className="relative flex justify-center aspect-[3/1] bg-no-repeat bg-contain bg-center"
        style={{
          backgroundImage:
            "url('https://woori-ab.github.io/website/header.png')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/50 z-10"></div>
        <div className="absolute top-0 p-2 z-20">
          <span id="header-title" className="text-[clamp(2rem,10vw,5rem)]">
            WOORI
          </span>
        </div>
      </section>
      <section id="intro" className="flex justify-center p-8">
        <div className="container max-w-screen-md">
          <div className="flex flex-col py-12 gap-8">
            <p className="text-2xl italic font-gloryLight">
              Welcome to Woori - a cozy Italian restaurant lovingly run by two
              couples, this restaurant is a celebration of friendship, family,
              and the joy of sharing good food with the people you love. The
              name &quot;Woori&quot; means &quot;Us&quot; in Korean - and
              that&apos;s exactly what this place is all about.
            </p>
            <p className="text-2xl italic font-gloryLight">
              Here, every dish is made with heart, every guest is family, and
              every meal is a celebration of togetherness. Come for the pasta,
              stay for the warmth.
            </p>
          </div>
        </div>
      </section>
      <section
        id="menu"
        className="relative flex justify-center aspect-[3/1] bg-no-repeat bg-contain bg-center"
        style={{
          backgroundImage: "url('https://woori-ab.github.io/website/menu.png')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/50 z-10"></div>
      </section>
      <section id="menu" className="flex justify-center py-12">
        <div className="container max-w-screen-lg grid lg:grid-cols-2 xs:grid-cols-2 gap-4 items-stretch">
          <div className="flex flex-col items-center text-center">
            <h1>Pizza</h1>
            <div className="flex flex-col items-center text-center">
              <h2>Margherita 149 kr</h2>
              <span>Tomatsås, Fior di latte, Burrata, Parmesan</span>
              <span className="italic">
                (Allergi: Gluten, Laktos, Mjölkprotein)
              </span>
            </div>
            <div className="flex flex-col items-center text-center">
              <h2>Pepperoni 149 kr</h2>
              <span>Tomatsås, Fior di latte, Pepperoni, Parmesan</span>
              <span className="italic">
                (Allergi: Gluten, Laktos, Mjölkprotein)
              </span>
            </div>
            <div className="flex flex-col items-center text-center">
              <h2>Prosciutto 169 kr</h2>
              <span>
                Tomatsås, Fior di latte, Prosciutto crudo, Ruccola, Parmesan
              </span>
              <span className="italic">
                (Allergi: Gluten, Laktos, Mjölkprotein)
              </span>
            </div>
          </div>
          <div className="flex flex-col items-center text-center">
            <h1>Pasta</h1>
            <div className="flex flex-col items-center text-center">
              <h2>Tagliatelle al Tartufo e Funghi 189 kr</h2>
              <span>Tagliatelle, Tryffelkräm, Shiitake, Skogschampinjoner</span>
              <span className="italic">(Allergi: Laktos, Mjölkprotein)</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <h2>Pesto alla Genovese 179 kr</h2>
              <span>
                Spaghetti, Basilika, Cashewnötter, Vitlök, Parmesan, Tomater,
                Burrata
              </span>
              <span className="italic">
                (Allergi: Laktos, Mjölkprotein, nötter)
              </span>
            </div>
            <div className="flex flex-col items-center text-center">
              <h2>Ravioli 169 kr</h2>
              <span>Spenat, Ricotta, Parmesan, Friterad salvia</span>
              <span className="italic">(Allergi: Laktos, Mjölkprotein)</span>
            </div>
          </div>
          <div className="flex flex-col items-center text-center">
            <h1>Sallad</h1>
            <div className="flex flex-col items-center text-center">
              <h2>Tuna Niçoise 175 kr</h2>
              <span>
                Sallad, Tonfisk, Tomater, Kokt ägg, Oliver, Kaprismajonnäs
              </span>
            </div>
          </div>
          <div className="flex flex-col items-center text-center">
            <h1>Barnmeny</h1>
            <div className="flex flex-col items-center text-center">
              <h2>Ravioli 80 kr</h2>
              <span>Spenat, Ricotta, Parmesan</span>
              <span className="italic">(Allergi: Laktos, Mjölkprotein)</span>
            </div>
          </div>
          <div className="flex flex-col items-center text-center">
            <h1>Dryck</h1>
            <div className="flex flex-col items-center text-center">
              <h2>Coca-Cola (33cl) 30 kr</h2>
              <h2>Coca-Cola Zero (33cl) 30 kr</h2>
              <h2>Ramlösa Natuell (33cl) 30 kr</h2>
              <h2>Ramlösa Citrus (33cl) 30 kr</h2>
            </div>
          </div>
        </div>
      </section>
      <section
        id="front"
        className="relative flex justify-center aspect-[3/1] bg-no-repeat bg-contain bg-center"
        style={{
          backgroundImage:
            "url('https://woori-ab.github.io/website/front.png')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/50 z-10"></div>
      </section>
      <section id="location" className="flex justify-center py-12">
        <div className="container max-w-screen-lg grid lg:grid-cols-2 xs:grid-cols-2 gap-4 items-stretch">
          <div className="flex flex-col items-center text-center">
            <h1>Öppettider</h1>
            <span>Måndag: Stängt</span>
            <span>Tisdag: 11:00 - 20:00</span>
            <span>Onsdag: 11:00 - 20:00</span>
            <span>Torsdag: 11:00 - 20:00</span>
            <span>Fredag: 11:00 - 20:00</span>
            <span>Lördag: 11:00 - 20:00</span>
            <span>Söndag: Stängt</span>
          </div>
          <div className="flex flex-col items-center text-center gap-4">
            <div className="flex flex-col items-center text-center">
              <h1>Besök oss</h1>
              <span>Stagneliusvägen 47, 112 57, Stockholm</span>
              <h1>Kontakta oss</h1>
              <span>Telefon: 08-656 66 75</span>
              <span>
                Mail:{" "}
                <a
                  href="mailto:wooristockholm@gmail.com"
                  className="hover:underline"
                >
                  wooristockholm@gmail.com
                </a>
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
