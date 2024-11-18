"use client";

import queryClient from "@/shared/api/query-client";
import { QueryClientProvider } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";

const QueryProvider = ({ children }: { children: ReactNode }) => {
  const [isMocking, setIsMocking] = useState(false);
  const isWorkerStarted = useRef(false);

  useEffect(() => {
    async function enableApiMocking() {
      if (typeof window !== "undefined" && !isWorkerStarted.current) {
        isWorkerStarted.current = true;

        const { startWorker } = await import("@/shared/mocks/browser");
        await startWorker();

        setIsMocking(true);
      }
    }

    enableApiMocking();
  }, []);

  if (!isMocking) {
    return null;
  }

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

export default QueryProvider;
