"use client";

import Image from "next/image";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

import { ROUTES } from "@/constants/routes";

import NavLinks from "./NavLinks";
import { Button } from "../ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "../ui/sidebar";

const LeftSidebar = () => {
  const session = useSession();

  const userId = session.data?.user?.id || "";
  const name = session.data?.user?.name || "";
  const email = session.data?.user?.email || "";
  const image = session.data?.user?.image || "/icons/profile-avatar.webp";

  return (
    <Sidebar>
      <SidebarHeader>
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
      </SidebarHeader>
      <SidebarContent>
        <section className="mt-5 p-4">
          <NavLinks />
        </section>
      </SidebarContent>
      <SidebarFooter>
        {userId ? (
          <div className="flex items-center justify-between p-4 gap-2">
            <div className="flex items-center gap-2">
              <Image
                src={image}
                alt="Profile Image"
                width={40}
                height={40}
                className="rounded-full object-cover"
                onClick={() => signOut()}
              />
              <div>
                <p className="text-sm font-semibold text-gray-700">
                  {name.slice(0, 15) + "..."}
                </p>
                <p className="text-sm font-medium text-gray-500 line-clamp-1">
                  {email.slice(0, 15) + "..."}
                </p>
              </div>
            </div>
            <form
              action={async () => {
                await signOut();
              }}
            >
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
          <Link href={ROUTES.SIGN_IN} className="p-2">
            <Button className="min-h-[56px] w-full rounded-lg border px-4 py-3 shadow-none cursor-pointer">
              Sign in
            </Button>
          </Link>
        )}
      </SidebarFooter>
    </Sidebar>
  );
};

export default LeftSidebar;
