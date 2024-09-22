// import Link from "next/link";
// import Image from "next/image";
import MapFilter from "@/components/shared/MapFilter";
import { Button } from "@/components/ui/button";

export default function Home() {

  return (
    <div className="container mx-auto font-sans">
      <MapFilter />
      <Button>Click me</Button>
    </div>
  );
}
