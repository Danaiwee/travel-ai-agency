import TripCard from "@/components/cards/TripCard";
import Header from "@/components/header/Header";
import PagePagination from "@/components/pagination/PagePagination";
import { allTrips } from "@/constants";

const TripsPage = async () => {
  return (
    <article className="article-container">
      <Header title="Trips" description="View and generate AI travel plans" />

      <section className="conainer grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4  gap-10">
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
      </section>

      <section className='mt-10'>
        <PagePagination />
      </section>
    </article>
  );
};

export default TripsPage;
