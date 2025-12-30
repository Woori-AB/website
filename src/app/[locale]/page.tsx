import Home from "@/components/Home";
import messages from "@/locales/messages";

export default function Page() {
  return <Home />;
}

export async function generateStaticParams() {
  return Object.keys(messages).map(key => ({ locale: key }))
}
