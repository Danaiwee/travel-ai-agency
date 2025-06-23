export const ROUTES = {
  HOME: "/",
  DASHBOARD: "/admin/dashboard",
  USERS: "/admin/users",
  TRIPS: "/admin/trips",
  SIGN_IN: "/sign-in",
  SIGN_UP: "/sign-up",
  CREATETRIP: "/trips/create",
  TRIPDETAILS: (id: string) => `/trips/${id}`,
};
