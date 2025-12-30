import Home from "@/components/Home";

export default function Page() {
  return <Home />;
}

export async function generateStaticParams() {
  return [{ locale: "sv" }, { locale: "en" }, { locale: "ko" }];
}
