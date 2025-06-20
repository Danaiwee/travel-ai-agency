import { NextResponse } from "next/server";
import { ZodError } from "zod";

import { RequestError, ValidationError } from "../http-error";
import logger from "../logger";

export type ResponseType = "api" | "server";

const formatResponse = (
  responseType: ResponseType,
  status: number,
  message: string,
  errors?: Record<string, string[]>
) => {
  const responsecontent = {
    success: false,
    errors: {
      message,
      details: errors,
    },
  };

  return responseType === "api"
    ? NextResponse.json(responsecontent, { status })
    : { ...responsecontent, status };
};

const handleError = (error: unknown, responType: ResponseType = "server") => {
  if (error instanceof RequestError) {
    logger.error(
      { err: error },
      `${responType.toUpperCase()} Error: ${error.message}`
    );

    return formatResponse(
      responType,
      error.statusCode,
      error.message,
      error.errors
    );
  }

  if (error instanceof ZodError) {
    const validationError = new ValidationError(
      error.flatten().fieldErrors as Record<string, string[]>
    );

    logger.error(
      { err: error },
      `Validation Error: ${validationError.message}`
    );

    return formatResponse(
      responType,
      validationError.statusCode,
      validationError.message,
      validationError.errors
    );
  }

  if (error instanceof Error) {
    logger.error(error.message);

    return formatResponse(responType, 500, error.message);
  }

  logger.error({ err: error }, "An unexpected error occurred.");
  return formatResponse(responType, 500, "An unexpected error occurred.");
};

export default handleError;
