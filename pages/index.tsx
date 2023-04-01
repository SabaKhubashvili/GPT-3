import Head from "next/head";

import {
  About,
  Feature,
  GetStarted,
  MainBanner,
  Navbar,
  NewsLetter,
  Sponsors,
} from "@/components/sections";
import { Blog } from "@/components/sections/Blog/Blog";
import { Footer } from "@/components/sections/Footer/Footer";
import { HeaderLayout } from "@/components/Layouts";

export default function Home() {
  return (
    <>
     <HeaderLayout>
      GPT-3
    </HeaderLayout>

      <div className="relative">
        <Navbar />
        <div className="absolute inset-0 -left-[30rem] -top-[30rem] sm:w-[1013px] w-5/6  h-[1013px] bg-gradient-01" />
        <MainBanner />
      </div>

      <Sponsors />
      <About />
      <Feature />
      <GetStarted />
      <NewsLetter />
      <Blog/>
      <Footer/>
    </>
  );
}
