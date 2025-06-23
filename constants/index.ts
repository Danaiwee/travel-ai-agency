import { formatDate } from "@/lib/utils";

import { ROUTES } from "./routes";

export const SIDEBAR_LINKS = [
  { imgSrc: "/icons/home.svg", title: "Dashboard", route: ROUTES.DASHBOARD },
  { imgSrc: "/icons/itinerary.svg", title: "AI Trips", route: ROUTES.TRIPS },
  { imgSrc: "/icons/users.svg", title: "All Users", route: ROUTES.USERS },
];

export const dashboardStats = {
  totalUsers: 12450,
  usersJoined: { currentMonth: 218, lastMonth: 176 },
  totalTrips: 3210,
  tripsCreated: { currentMonth: 150, lastMonth: 250 },
  userRole: { total: 62, currentMonth: 25, lastMonth: 15 },
};

export const allTrips = [
  {
    id: 1,
    name: "Ancient Ruins",
    imageUrls: ["/images/card-img-3.png"],
    itinerary: [{ location: "Greece" }],
    tags: ["Adventure", "Culture"],
    travelStyle: "Solo",
    estimatedPrice: "$1,000",
  },
  {
    id: 2,
    name: "Gondola Ride",
    imageUrls: ["/images/card-img-4.png"],
    itinerary: [{ location: "Venice" }],
    tags: ["Relaxation", "Culinary"],
    travelStyle: "Family",
    estimatedPrice: "$2,000",
  },
  {
    id: 3,
    name: "Italy's Hidden Retreat",
    imageUrls: ["/images/card-img-5.png"],
    itinerary: [{ location: "Positano" }],
    tags: ["Shopping", "Luxury"],
    travelStyle: "Couple",
    estimatedPrice: "$3,000",
  },
  {
    id: 4,
    name: "Culture Refresh",
    imageUrls: ["/images/card-img-6.png"],
    itinerary: [{ location: "Thailand" }],
    tags: ["Historical", "Culture"],
    travelStyle: "Friends",
    estimatedPrice: "$4,000",
  },
];

export const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    imageUrl: "/images/michael.webp",
    dateJoined: formatDate("2025-01-01"),
    itineraryCreated: 10,
    status: "user",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    imageUrl: "/images/david.webp",
    dateJoined: formatDate("2025-01-02"),
    itineraryCreated: 4,
    status: "user",
  },
  {
    id: 3,
    name: "John Smith",
    email: "john.smith@example.com",
    imageUrl: "/images/james.webp",
    dateJoined: formatDate("2025-01-03"),
    itineraryCreated: 8,
    status: "admin",
  },
];
