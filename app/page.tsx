import BodySection from "@/components/BodySection";
import FooterSection from "@/components/FooterSection";
import { Navbar } from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Navbar />
      <BodySection />
      <FooterSection />
    </main>
  );
}
