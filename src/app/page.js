import Finance from "@/components/Finance";
import Hero from "@/components/Hero";
import Legacy from "@/components/Legacy";
import Philosophy from "@/components/Philosophy";
import Technologys from "@/components/Technologys";
import TrustedBy from "@/components/TrustedBy";

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
      <Technologys />
      <TrustedBy />
      <Legacy />
    </>
  );
}
