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
}
