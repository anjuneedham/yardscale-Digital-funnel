"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { captureAttribution } from "@/lib/attribution";
import { track } from "@/lib/analytics";
import { QualificationDialog } from "./QualificationDialog";

type FunnelContextValue = {
  openQualification: (origin: string, seed?: { bottleneck?: string }) => void;
  closeQualification: () => void;
  isOpen: boolean;
};

const FunnelContext = createContext<FunnelContextValue | null>(null);

export function useFunnel(): FunnelContextValue {
  const context = useContext(FunnelContext);
  if (!context) {
    throw new Error("useFunnel must be used inside <FunnelProvider>");
  }
  return context;
}

export function FunnelProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [origin, setOrigin] = useState("unknown");
  const [seedBottleneck, setSeedBottleneck] = useState<string | undefined>();

  // Capture UTM attribution once, on first paint, then clean the URL.
  useEffect(() => {
    captureAttribution();
    track("page_view", { path: window.location.pathname });
  }, []);

  const openQualification = useCallback(
    (nextOrigin: string, seed?: { bottleneck?: string }) => {
      setOrigin(nextOrigin);
      setSeedBottleneck(seed?.bottleneck);
      setIsOpen(true);
      track("qualification_started", { origin: nextOrigin, seed: seed?.bottleneck ?? "" });
    },
    [],
  );

  const closeQualification = useCallback(() => setIsOpen(false), []);

  const value = useMemo(
    () => ({ openQualification, closeQualification, isOpen }),
    [openQualification, closeQualification, isOpen],
  );

  return (
    <FunnelContext.Provider value={value}>
      {children}
      <QualificationDialog
        open={isOpen}
        origin={origin}
        seedBottleneck={seedBottleneck}
        onClose={closeQualification}
      />
    </FunnelContext.Provider>
  );
}
