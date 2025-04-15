import { clsx, type ClassValue } from "clsx";
import { ReceiptRussianRuble } from "lucide-react";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formateDate(_createdAt: any) {
  return new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function parseServerActionResponse<T>(response: T) {
  return JSON.parse(JSON.stringify(response));
}
