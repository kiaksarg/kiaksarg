"use client";
import { ReactNode, useEffect, useState } from 'react';

export default function ClientOnly({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => void setMounted(true), []);
  return mounted ? <>{children}</> : null;
}
