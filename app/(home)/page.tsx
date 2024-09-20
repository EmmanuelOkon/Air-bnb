import { Button } from "@/components/ui/button";
// import Link from "next/link";
// import Image from "next/image";

export default function Home() {
  const hello = process.env.KINDE_ISSUER_URL;

  console.log(hello);
  return (
    <div className="text-3xl font-mono">
      <h1>Welcome to Airbnb Home page</h1>
      <Button>Click me</Button>
      
    </div>
  );
}
