import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getPercentageChange(current: number, last: number): number {
  if (last === 0) {
    return current === 0 ? 0 : 100;
  }
  const change = ((current - last) / Math.abs(last)) * 100;
  return Math.round(Math.abs(change));
}

export function formatNumber(num: number): string {
  return num.toLocaleString();
}
