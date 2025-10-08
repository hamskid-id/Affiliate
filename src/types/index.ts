/* eslint-disable @typescript-eslint/no-explicit-any */

export enum FormFieldType {
  INPUT = "text",
  PASSWORD = "password",
  NUMBER = "number",
  TEXTAREA = "textarea",
  PHONE_INPUT = "phoneInput",
  CHECKBOX = "checkbox",
  DATE_PICKER = "datePicker",
  DATE = "date",
  SELECT = "select",
  SKELETON = "skeleton",
  EMAIL = "email",
}

export interface ApiResponse<T> {
  status: string;
  message: string;
  data: T;
}

export interface PaginatedResponse<T> {
  page_number: number;
  page_size: number;
  total_count: number;
  data: T[];
}

export interface ApiError {
  message: string;
  status: number;
  errors?: Record<string, string[]>;
}

// Pagination parameters
export interface PaginationParams {
  page?: number;
  limit?: number;
  [key: string]: any; // dis
}

// Full API response with pagination
export type ApiPaginatedResponse<T> = ApiResponse<PaginatedResponse<T>>;
