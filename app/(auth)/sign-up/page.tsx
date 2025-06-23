"use client";

import AuthForm from "@/components/forms/AuthForm";
import { SignUpWithCredentials } from "@/lib/actions/auth.action";
import { SignUpSchema } from "@/lib/validations";

const SignUpPage = () => {
  return (
    <AuthForm
      formType="SIGN_UP"
      schema={SignUpSchema}
      defaultValues={{ username: "", name: "", email: "", password: "" }}
      onSubmit={SignUpWithCredentials}
    />
  );
};

export default SignUpPage;
