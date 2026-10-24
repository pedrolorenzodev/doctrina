import { Newsreader, Source_Serif_4, Work_Sans } from "next/font/google";

const newsreader = Newsreader({
  subsets: ["latin"],
  axes: ["opsz"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  axes: ["opsz"],
  variable: "--font-source-serif",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
});

export const fontVariables = [newsreader.variable, sourceSerif.variable, workSans.variable].join(" ");
