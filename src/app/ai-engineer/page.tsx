import { AiEngineer } from "@/components/ai-engineer/AiEngineer";
import { SignalBackground } from "@/components/ai-engineer/SignalBackground";

export default function AiEngineerPage() {
  return (
    <>
      {/*
        Rendered here rather than inside AiEngineer: that component is
        "use client" for its pointer handler, and importing the background
        into it would drag this static SVG into the client bundle for no
        reason. It is fixed-positioned, so being a sibling costs nothing.
      */}
      <SignalBackground />
      <AiEngineer />
    </>
  );
}
