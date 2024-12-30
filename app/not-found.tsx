import Link from "next/link";
import Layout from "./(home)/layout";

// import { URLS } from "@/utils/routes";
import { Button } from "@/components/ui/button";
import AppLogo from "/public/assets/airbnb-desktop.png";
import Image from "next/image";
// import CustomButton from "@/components/shared/CustomButton";

export default function NotFound() {
  return (
    <Layout>
      <div className="h-[80vh] flex flex-col items-center justify-center gap-5">
        <Image src={AppLogo} alt="App Logo" width={200} height={300} />

        <div className="flex justify-center flex-col items-center space-y-2  ">
          <h2 className="font-bold text-3xl">Hello Explorer!</h2>
          <p>This page does not exist on Airbnb Farm&apos;s Universe</p>
          <Link href="/">
            <Button className="bg-primaryRose hover:bg-primaryRose/85 text-white gap-[16px] text-[16px] group-hover:translate-x-1 py-[16px] font-medium w-[120px] transition-all duration-300 ease-in-out">
              Go Home
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
