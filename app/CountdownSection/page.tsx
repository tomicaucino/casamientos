"use client"

import { CountdownSection } from "@/components/Countdown";

export default function CountdownPage() {
  return <CountdownSection targetDate={new Date("2025-09-28T15:50:59")} onCountdownEnd={() => console.log("Countdown finished!")} />;
}