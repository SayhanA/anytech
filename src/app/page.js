import Finance from "@/components/Finance";
import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";

export const metadata = {
  title: "Home Page | AnyTech",
  description: "Embrace the future of finance",
};

export default function Home() {
  return (
    <>
      <Hero />
      <Finance />
      <Philosophy />
    </>
  );
}
