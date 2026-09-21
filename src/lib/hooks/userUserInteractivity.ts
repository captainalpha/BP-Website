import { useEffect } from "react";
import { throttle } from "../utils";

interface IOptions {
  throttleTime?: number;
}

export const useUserActivityTracker = (
  callback: (e: any) => void,
  options: IOptions
) => {
  useEffect(() => {
    const activityEvents = [
      "mousemove",
      "keydown",
      "click",
      "touchstart",
      "scroll",
      "wheel",
      "keyup",
      "keypress",
      "touchend",
      "touchmove",
      "focus",
      "blur",
      "input",
    ];

    const throttledCallback = throttle(callback, options?.throttleTime ?? 500);

    activityEvents.forEach((e) => {
      window.addEventListener(e, throttledCallback, { passive: true });
    });

    return () => {
      activityEvents.forEach((e) => {
        window.removeEventListener(e, throttledCallback);
      });
    };
  }, [options?.throttleTime, callback]);
};
