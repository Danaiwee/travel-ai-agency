import { fetchHandler } from "./handler/fetch";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000/api";

export const api = {
  users: {
    getById: (id: string) => fetchHandler(`${API_BASE_URL}/users/${id}`),
  },

  account: {
    getByProvider: (providerAccountId: string) =>
      fetchHandler(`${API_BASE_URL}/account/provider`, {
        method: "POST",
        body: JSON.stringify({ providerAccountId }),
      }),
  },

  auth: {
    oAuthSignIn: ({
      user,
      provider,
      providerAccountId,
    }: SignInWithOAuthParams) =>
      fetchHandler(`${API_BASE_URL}/auth/sign-in-with-oauth`, {
        method: "POST",
        body: JSON.stringify({ user, provider, providerAccountId }),
      }),
  },
};
