import React from "react";

import StatCard from "@/components/cards/StatCard";
import TripCard from "@/components/cards/TripCard";
import Header from "@/components/header/Header";
import { allTrips, dashboardStats } from "@/constants";
import { ROUTES } from "@/constants/routes";

const DashboardPage = () => {
  return (
    <article className="article-container">
      <Header
        title="Welcome Adrian 👋"
        description="Track Activity, trends, and popular destination in real time"
        btnLink={ROUTES.CREATETRIP}
      />

      <section className="container grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
        <StatCard
          headerTitle="Total Users"
          total={dashboardStats.totalUsers}
          currentMonthCount={dashboardStats.usersJoined.currentMonth}
          lastMothCount={dashboardStats.usersJoined.lastMonth}
        />
        <StatCard
          headerTitle="Total Trips"
          total={dashboardStats.totalTrips}
          currentMonthCount={dashboardStats.tripsCreated.currentMonth}
          lastMothCount={dashboardStats.tripsCreated.lastMonth}
        />
        <StatCard
          headerTitle="Active Users Today"
          total={dashboardStats.userRole.total}
          currentMonthCount={dashboardStats.userRole.currentMonth}
          lastMothCount={dashboardStats.userRole.lastMonth}
        />
      </section>

      <section className="container">
        <h3 className="h3-bold text-gray-800">Trips</h3>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4  gap-10">
          {allTrips.map((trip) => (
            <TripCard
              key={trip.id}
              id={trip.id.toString()}
              imageUrls={trip.imageUrls[0]}
              name={trip.name}
              location={trip.itinerary[0].location}
              tags={trip.tags}
              price={trip.estimatedPrice}
            />
          ))}
        </div>
      </section>
    </article>
  );
};

export default DashboardPage;
