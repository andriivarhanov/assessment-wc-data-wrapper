import Image from "next/image";
import WcWrapper from "@/components/WcWrapper";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <WcWrapper />
    </main>
  );
}
