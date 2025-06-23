"use client";

import AuthForm from "@/components/forms/AuthForm";
import { SignInWithCredentials } from "@/lib/actions/auth.action";
import { SignInSchema } from "@/lib/validations";

const SignInPage = () => {
  return (
    <AuthForm
      formType="SIGN_IN"
      schema={SignInSchema}
      defaultValues={{ email: "", password: "" }}
      onSubmit={SignInWithCredentials}
    />
  );
};

export default SignInPage;
