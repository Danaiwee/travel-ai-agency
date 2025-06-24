import Image from "next/image";
import Link from "next/link";

import { auth } from "@/auth";
import { ROUTES } from "@/constants/routes";

import NavLinks from "./NavLinks";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";

const MobileNavigation = async () => {
  const session = await auth();

  const userId = session?.user?.id;
  const name = session?.user?.name;
  const email = session?.user?.email;
  const profileImage = session?.user?.image || "/icons/profile-avatar.webp";

  return (
    <Sheet>
      <SheetTrigger>
        <Image
          src="/icons/menu.svg"
          width={30}
          height={30}
          alt="Menu"
          className="cursor-pointer invert-50"
        />
      </SheetTrigger>
      <SheetContent side="left" className="max-w-[350px]">
        <SheetTitle>
          <SheetClose asChild>
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
          </SheetClose>
        </SheetTitle>
        <div className="h-full p-4 flex flex-col justify-between">
          <div className="flex flex-col mt-5 p-4">
            <NavLinks isMobile />
          </div>

          {userId ? (
            <div className="flex items-center justify-between p-4 gap-2">
              <div className="flex items-center gap-2">
                <Image
                  src={profileImage}
                  alt="Profile Image"
                  width={40}
                  height={40}
                  className="rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold text-gray-700">
                    {name && name.slice(0, 12) + "..."}
                  </p>
                  <p className="text-sm font-medium text-gray-500 line-clamp-1">
                    {email && email.slice(0, 12) + "..."}
                  </p>
                </div>
              </div>
              <form action="Logout">
                <Button type="submit" className="!bg-transparent">
                  <Image
                    src="/icons/logout.svg"
                    width={25}
                    height={25}
                    alt="Log out"
                    className="cursor-pointer"
                  />
                </Button>
              </form>
            </div>
          ) : (
            <SheetClose asChild>
              <Link href={ROUTES.SIGN_IN}>
                <Button className="min-h-[56px] w-full rounded-lg border px-4 py-3 shadow-none cursor-pointer">
                  Sign in
                </Button>
              </Link>
            </SheetClose>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavigation;
