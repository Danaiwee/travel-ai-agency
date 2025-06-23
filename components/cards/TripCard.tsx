import Image from "next/image";
import Link from "next/link";

import { ROUTES } from "@/constants/routes";
import { cn } from "@/lib/utils";

interface TripCardProps {
  id: string;
  imageUrls: string;
  name: string;
  location: string;
  tags: string[];
  price: string;
}

const TripCard = ({
  id,
  imageUrls,
  name,
  location,
  tags,
  price,
}: TripCardProps) => {
  return (
    <Link href={ROUTES.TRIPDETAILS(id)} className="trip-card">
      <div className="relative">
        <Image
          src={imageUrls}
          width={300}
          height={200}
          alt="Trip image"
          quality={100}
          className="trip-card_image"
        />

        <p className="absolute w-fit rounded-lg bg-gray-300 py-1 px-4 text-md font-semibold z-50 top-5 right-5">
          {price}
        </p>
      </div>

      <div className="mt-5 pb-5 px-4">
        <h1 className="h3-bold">{name}</h1>

        <div className="flex-start gap-1 mt-2">
          <Image
            src="/icons/location-mark.svg"
            width={18}
            height={18}
            alt="Location icon"
          />
          <span className="paragraph-medium text-gray-500">{location}</span>
        </div>

        <div className="mt-5 flex-start gap-3 flex-wrap">
          {tags &&
            tags.map((tag, index) => (
              <span
                key={index}
                className={cn(
                  index % 2 === 0
                    ? "bg-red-100 text-red-500"
                    : "bg-green-100 text-green-500",
                  "px-4 py-1 rounded-lg text-sm font-semibold"
                )}
              >
                {tag}
              </span>
            ))}
        </div>
      </div>
    </Link>
  );
};

export default TripCard;
