import { Gentium_Book_Plus, Newsreader, Noto_Serif_Hebrew, Source_Serif_4, Work_Sans } from "next/font/google";

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

const gentium = Gentium_Book_Plus({
  subsets: ["greek", "latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-gentium",
});

const notoHebrew = Noto_Serif_Hebrew({
  subsets: ["hebrew"],
  weight: ["400"],
  variable: "--font-noto-hebrew",
});

export const fontVariables = [
  newsreader.variable,
  sourceSerif.variable,
  workSans.variable,
  gentium.variable,
  notoHebrew.variable,
].join(" ");
