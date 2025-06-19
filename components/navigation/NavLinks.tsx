"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { SIDEBAR_LINKS } from "@/constants";
import { cn } from "@/lib/utils";

const NavLinks = () => {
  const pathName = usePathname();

  return (
    <>
      {SIDEBAR_LINKS.map((item) => {
        const isActive =
          (pathName.includes(item.route) && item.route.length > 1) ||
          pathName === item.route;

        return (
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
      })}
    </>
  );
};

export default NavLinks;
