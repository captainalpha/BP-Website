import { useState, useEffect } from "react";

const useResizeObserver = (): number => {
  const [documentWidth, setDocumentWidth] = useState<number>(0);

  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      if (document) setDocumentWidth(document.documentElement.scrollWidth);
    });

    resizeObserver.observe(document?.documentElement || null);

    return () => resizeObserver.disconnect();
  }, []);

  return documentWidth;
};

export default useResizeObserver;
