import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function throttle<TArgs extends any[]>(
  callback: (...args: TArgs) => void,
  delay: number
): (...args: TArgs) => void {
  let lastArgs: TArgs | null = null;
  let isThrottled = false;

  const throttledFunction = (...args: TArgs) => {
    if (isThrottled) {
      lastArgs = args;
      return;
    }

    callback(...args);
    isThrottled = true;

    setTimeout(() => {
      isThrottled = false;
      if (lastArgs) {
        callback(...lastArgs);
        lastArgs = null; // Clear last arguments
      }
    }, delay);
  };

  return throttledFunction;
}

export const cleanObjValues = (data: Record<string, any>) => {
  return Object.fromEntries(
    Object.entries(data).filter(
      (arr) => arr[1] !== null && arr[1] !== undefined && arr[1] !== ""
    )
  );
};
