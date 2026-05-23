import { RefObject, useEffect, useState } from "react";

type UsePageReadyOptions = {
  disabled?: boolean;
};

export function usePageReady<T extends HTMLElement>(
  containerRef: RefObject<T | null>,
  options: UsePageReadyOptions = {},
) {
  const [isReady, setIsReady] = useState(Boolean(options.disabled));

  useEffect(() => {
    if (options.disabled) {
      setIsReady(true);
      return;
    }

    const element = containerRef.current;
    if (!element) return;

    let isLoaded = document.readyState === "complete";
    let fontsReady = false;
    let isVisible = false;
    let disposed = false;

    const checkReady = () => {
      if (!disposed && isLoaded && fontsReady && isVisible) {
        setIsReady(true);
      }
    };

    const onLoad = () => {
      isLoaded = true;
      checkReady();
    };

    if (isLoaded) {
      checkReady();
    } else {
      window.addEventListener("load", onLoad, { once: true });
    }

    const fonts = document.fonts;
    if (fonts?.ready) {
      fonts.ready
        .catch(() => undefined)
        .then(() => {
          fontsReady = true;
          checkReady();
        });
    } else {
      fontsReady = true;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        checkReady();
      },
      { threshold: 0.28 },
    );

    observer.observe(element);

    return () => {
      disposed = true;
      observer.disconnect();
      window.removeEventListener("load", onLoad);
    };
  }, [containerRef, options.disabled]);

  return isReady;
}
