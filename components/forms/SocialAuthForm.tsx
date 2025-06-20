"use client";

import Image from "next/image";

import { Button } from "../ui/button";

const SocialAuthForm = () => {
  const buttonClass =
    "bg-light-800 body-medium text-light-800 min-h-12 flex-1 rounded-2 px-4 py-3.5 cursor-pointer hover:bg-light-700";

  const handleSignIn = async () => {};

  return (
    <div className="mt-3 flex flex-wrap gap-2.5">
      <Button className={buttonClass} onClick={handleSignIn}>
        <Image
          src="/icons/google-icon.svg"
          width={20}
          height={20}
          alt="Google icon"
        />
        <span className="body-medium text-gray-900">Sign in with Google</span>
      </Button>
      <Button className={buttonClass} onClick={handleSignIn}>
        <Image
          src="/icons/github.svg"
          width={20}
          height={20}
          alt="GitHub icon"
          className="invert-100"
        />
        <span className="body-medium text-gray-900">Sign in with GitHub</span>
      </Button>
    </div>
  );
};

export default SocialAuthForm;
