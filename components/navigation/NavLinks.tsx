"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

import { SIDEBAR_LINKS } from "@/constants";
import { cn } from "@/lib/utils";

import { SheetClose } from "../ui/sheet";

interface Props {
  isMobile?: boolean;
}

const NavLinks = ({ isMobile = false }: Props) => {
  const pathName = usePathname();

  return (
    <>
      {SIDEBAR_LINKS.map((item) => {
        const isActive =
          (pathName.includes(item.route) && item.route.length > 1) ||
          pathName === item.route;

        const NavLinksContent = (
          <Link
            href={item.route}
            key={item.title}
            className={cn(
              isActive ? "bg-blue-400 rounded-lg" : "text-gray-300",
              "flex items-center gap-4 p-4 mt-3"
            )}
          >
            <Image
              src={item.imgSrc}
              width={20}
              height={20}
              alt={item.title}
              className={cn(
                isActive ? "invert brightness-0 font-medium" : "text-gray-500",
                "text-sm"
              )}
            />

            <p
              className={cn(
                isActive ? "text-white font-medium" : "text-gray-500",
                "text-sm"
              )}
            >
              {item.title}
            </p>
          </Link>
        );

        return isMobile ? (
          <SheetClose key={item.title} asChild>{NavLinksContent}</SheetClose>
        ) : (
          <React.Fragment key={item.title}>{NavLinksContent}</React.Fragment>
        );
      })}
    </>
  );
};

export default NavLinks;
