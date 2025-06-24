import Trip from "@/database/trip.model";

import action from "../handler/action";
import handleError from "../handler/error";
import { NotFoundError } from "../http-error";
import { PaginatedSearchSchema } from "../validations";

export async function getAllTrips(
  params: PaginatedSearchParams
): Promise<ActionResponse<{ trips: Trip[]; isNext: boolean }>> {
  const validationResult = await action({
    params,
    schema: PaginatedSearchSchema,
    authorize: true,
  });

  if (validationResult instanceof Error) {
    return handleError(validationResult) as ErrorResponse;
  }

  const { page, pageSize } = validationResult.params!;
  const skip = (Number(page) - 1) * Number(pageSize);
  const limit = Number(pageSize);

  try {
    const totalTrips = await Trip.countDocuments();

    const trips = await Trip.find().skip(skip).limit(limit);

    if (!trips) throw new NotFoundError("Trips");

    const isNext = totalTrips > skip + trips.length;

    return {
      success: true,
      data: {
        trips: JSON.parse(JSON.stringify(trips)),
        isNext,
      },
    };
  } catch (error) {
    return handleError(error) as ErrorResponse;
  }
}
