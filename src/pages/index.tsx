import Clock from "@/components/ui/Clock/Clock";
import HalfCircle from "@/components/ui/HalfCircle/HalfCircle";

export default function Home() {
  return (
    <main className="h-screen flex flex-col items-center justify-center gap-4">
      <Clock />
      <HalfCircle />
    </main>
  );
}
