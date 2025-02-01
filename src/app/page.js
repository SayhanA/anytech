import Finance from "@/components/Finance";
import Hero from "@/components/Hero";

export const metadata = {
  title: "Home Page | AnyTech",
  description: "Embrace the future of finance",
};

export default function Home() {
  return (
    <>
      <Hero />
      <Finance />
    </>
  );
}
