"use client";

import * as React from "react";
import dynamic from "next/dynamic";
// import MapFilter from "@/components/shared/MapFilter";
// import { Button } from "@/components/ui/button";


// import CustomToast from "@/components/shared/CustomToast";

const MapFilter = dynamic(() => import("@/components/shared/MapFilter"), {
  suspense: true,
});

export default function Home() {
  // const actionToast = () => {
  //   const promise = () =>
  //     new Promise((resolve) =>
  //       setTimeout(() => resolve({ name: "Sonner" }), 2000)
  //     );

  //   toast.promise(promise, {
  //     loading: "Fetching data...",
  //     success: () => {
  //       return `success toast has been added`;
  //     },
  //     error: "Error",
  //     position: "top-right",
  //     style: {
  //       width: "280px",
  //     },
  //   });
  // };

  // const successToast = () => {
  //   toast.loading("Hello Airbnb", {
  //     description: "This is a success message",
  //     position: "top-right",
  //     duration: 3000,
  //     style: {
  //       width: "280px",
  //       borderRadius: "10px",
  //       border: "2px solid #",
  //     },
  //   });
  // };

  return (
    <div className="container mx-auto px-4 font-sans">
      <React.Suspense fallback={<div>Loading...</div>}>
        <MapFilter />
      </React.Suspense>
      {/* <Button onClick={actionToast}>Show Toast</Button> */}
      {/* <Button onClick={() => CustomToast.error("This is a success message")}>Show Custom Toast</Button> */}
    </div>
  );
}
