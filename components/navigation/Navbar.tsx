import Image from "next/image";
import Link from "next/link";

import { ROUTES } from "@/constants/routes";

import MobileNavigation from "./MobileNavigation";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const Navbar = () => {
  return (
    <nav className="md:hidden shadow-gray-100 py-2 px-4 flex items-center justify-between gap-2">
      <Link href={ROUTES.HOME} className="flex items-center gap-2 p-4">
        <Image
          src="/icons/logo.svg"
          alt="Logo"
          width={30}
          height={30}
          className="rounded-full object-contain"
        />

        <h1 className="text-2xl font-bold">Tourvisto</h1>
      </Link>
      <div className="flex items-center gap-4">
        <Avatar>
          <AvatarImage src="/images/michael.webp" />
          <AvatarFallback>Profile</AvatarFallback>
        </Avatar>

        <MobileNavigation />
      </div>
    </nav>
  );
};

export default Navbar;
