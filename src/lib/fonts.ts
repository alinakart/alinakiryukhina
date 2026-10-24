import { Great_Vibes, Outfit } from "next/font/google";

export const bodyFont = Outfit({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const signatureFont = Great_Vibes({
  variable: "--font-signature",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
