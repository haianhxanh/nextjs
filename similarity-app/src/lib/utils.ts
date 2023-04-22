import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// class optimisation, py-2 px-2 => p-2
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
