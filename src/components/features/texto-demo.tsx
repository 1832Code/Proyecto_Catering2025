"use client";
import { TextGenerateEffect } from "../ui/text-generate-effect";

export function TextGenerateEffectDemo({
  words,
  style,
}: {
  words: string;
  style?: React.CSSProperties;
}) {
  return <TextGenerateEffect words={words} style={style} />;
}
