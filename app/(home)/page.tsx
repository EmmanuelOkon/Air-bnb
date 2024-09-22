// import Link from "next/link";
// import Image from "next/image";
import * as React from "react";
import dynamic from "next/dynamic";
// import MapFilter from "@/components/shared/MapFilter";
import { Button } from "@/components/ui/button";

const MapFilter = dynamic(() => import("@/components/shared/MapFilter"), {
  suspense: true,
});

export default function Home() {
  return (
    <div className="container mx-auto font-sans">
      <React.Suspense fallback={<div>Loading...</div>}>
        <MapFilter />
      </React.Suspense>
      <Button>Click me</Button>
    </div>
  );
}
