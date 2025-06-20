import Image from "next/image";

import SocialAuthForm from "@/components/forms/SocialAuthForm";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="w-full h-screen flex items-center justify-center bg-auth bg-cover bg-center">
      <section className="w-full h-full glassmorphism flex-center px-6">
        <div className="max-w-4xl bg-white shadow-xl rounded-md p-6 flex flex-col">
          <div className="flex-start gap-4">
            <Image
              src="/icons/logo.svg"
              width={40}
              height={40}
              alt="Logo"
              className="rounded-full"
            />
            <div>
              <h1 className="h2-bold">Touristo</h1>
              <p className="paragraph-semibold text-gray-500">
                Generate your ideal travel plan
              </p>
            </div>
          </div>

          {children}

          <SocialAuthForm />
        </div>
      </section>
    </main>
  );
};

export default AuthLayout;
