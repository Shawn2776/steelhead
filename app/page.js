import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="flex">
      <div className="w-1/2">
        <Hero />
      </div>
      <div className="w-1/2">Form</div>
    </div>
  );
}
