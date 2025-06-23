import Image from "next/image";
import Link from "next/link";

import { ROUTES } from "@/constants/routes";

import { Button } from "../ui/button";

interface HeaderProps {
  title: string;
  description: string;
  buttonText?: string;
  disable?: boolean;
  btnLink?: string;
}

const Header = ({
  title,
  description,
  buttonText = "Create a trip",
  disable = false,
  btnLink = ROUTES.CREATETRIP,
}: HeaderProps) => {
  return (
    <section className="w-full flex flex-col-reverse gap-5 items-center sm:flex-row sm:justify-between ">
      <div className="flex flex-col space-y-3">
        <h1 className="h2-bold text-gray-900">{title}</h1>
        <p className="paragraph-semibold text-gray-500">{description}</p>
      </div>

      <Button
        className="bg-blue-400 hover:bg-blue-500 flex items-center gap-2 w-full sm:max-w-[300px] py-6 px-4 cursor-pointer"
        disabled={disable}
        asChild
      >
        <Link href={btnLink}>
          <Image src="/icons/plus.svg" width={30} height={30} alt="Plus Icon" />
          <p className="paragraph-semibold text-white">{buttonText}</p>
        </Link>
      </Button>
    </section>
  );
};

export default Header;
