// import { Icons } from "@/public/icons";
import Image from "next/image";
import Link from "next/link";
import DesktopLogo from "@/public/assets/airbnb-desktop.png";
import MobileLogo from "@/public/assets/airbnb-96.png";
import { UserNav } from "./UserNav";

export default function Navbar() {
  return (
    <nav className="w-full border-b">
      <div className="flex items-center justify-between container mx-auto px-5 lg:px-10 py-5">
        <Link href="/">
          {/* <Icons.LogoMobile className="w-12" /> */}
          <Image
            // src="/assets/airbnb-desktop.png"
            src={DesktopLogo}
            alt="Desktop Logo"
            className="w-32 hidden lg:block"
          />

          <Image
            src={MobileLogo}
            alt="Mobile Logo"
            className="block lg:hidden w-12"
          />
        </Link>

        <div className="rounded-full border px-5 py-2">
          <h1>Hello search</h1>
        </div>
        {/* <SearchModalCompnent /> */}

        <UserNav />
      </div>
    </nav>
  );
}
