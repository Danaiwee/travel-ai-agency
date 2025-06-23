import User from "@/database/user.model";

import action from "../handler/action";
import handleError from "../handler/error";
import { NotFoundError } from "../http-error";
import { PaginatedSearchSchema } from "../validations";

export async function getUsers(
  params: PaginatedSearchParams
): Promise<ActionResponse<{ users: User[]; isNext: boolean }>> {
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
    const totalUsers = await User.countDocuments();

    const users = await User.find().skip(skip).limit(limit);

    if (!users) throw new NotFoundError("Users");

    const isNext = totalUsers > skip + users.length;

    return {
      success: true,
      data: {
        users: JSON.parse(JSON.stringify(users)),
        isNext,
      },
    };
  } catch (error) {
    return handleError(error) as ErrorResponse;
  }
}
