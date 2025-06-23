import { NextResponse } from "next/server";

declare global {
  interface ActionResponse<T = null> {
    success: boolean;
    data?: T;
    errors?: {
      message?: string;
      details?: Record<string, string[]>;
    };
    status?: number;
  }

  type SuccessResponse<T = null> = ActionResponse<T> & { success: true };
  type ErrorResponse = ActionResponse<undefined> & { success: false };

  type APIResponse = NextResponse<SuccessResponse<T> | ErrorResponse>;
  type APIErrorResponse = NextResponse<ErrorResponse>;

  type RouteParams = {
    params: Promise<Record<string, string>>;
    searchParams: Promise<Record<string, string>>;
  };
}
