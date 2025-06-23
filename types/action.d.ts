interface SignInWithOAuthParams {
  provider: "github" | "google";
  providerAccountId: string;
  user: {
    username: string;
    name: string;
    image: string;
    email: string;
  };
}

interface AuthCredentials {
  username: string;
  name: string;
  email: string;
  password: string;
}

interface PaginatedSearchParams {
  page?: number;
  pageSize?: number;
  query?: string;
  filter?: string;
  sort?: string;
}
