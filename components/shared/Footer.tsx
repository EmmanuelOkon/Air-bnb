import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="container mx-auto">
      <Button className="bg-primaryRose">Footer come here</Button>
      <Link href="/about">About </Link>{" "}
    </div>
  );
}
